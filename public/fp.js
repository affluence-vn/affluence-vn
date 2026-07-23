/* Affluence device signal — anti-fraud, no PII.
 * Included by landing pages as: <script src="https://affluence.vn/fp.js" defer></script>
 *
 * On any lead submission to the shared Apps Script webhook it appends:
 *   device_fp  — SHA-256 hash of stable browser signals (not reversible, no PII)
 *   device_id  — random UUID persisted in localStorage (per browser profile)
 *   page_ms    — milliseconds from page load to submit (instant submits = red flag)
 * and mirrors the same values to GA4 as a `lead_submit` event when gtag exists.
 *
 * Fraud review: many leads sharing one device_fp/device_id, or page_ms
 * consistently under ~15s, indicate manual form-stuffing.
 */
(function () {
  var T0 = Date.now();
  var state = { fp: "", did: "" };

  try {
    var did = localStorage.getItem("aff_did");
    if (!did) {
      did =
        (window.crypto && crypto.randomUUID && crypto.randomUUID()) ||
        Date.now().toString(36) + "-" + String(Math.random()).slice(2, 12);
      localStorage.setItem("aff_did", did);
    }
    state.did = did;
  } catch (e) {}

  function canvasSig() {
    try {
      var c = document.createElement("canvas");
      c.width = 240;
      c.height = 60;
      var x = c.getContext("2d");
      x.textBaseline = "top";
      x.font = "16px Arial";
      x.fillStyle = "#f60";
      x.fillRect(120, 5, 60, 30);
      x.fillStyle = "#069";
      x.fillText("Affluence fp 🙂", 4, 20);
      x.strokeStyle = "rgba(120,40,200,0.6)";
      x.beginPath();
      x.arc(60, 30, 22, 0, Math.PI * 1.5);
      x.stroke();
      return c.toDataURL();
    } catch (e) {
      return "nc";
    }
  }

  function buildFp() {
    var s = [
      navigator.userAgent,
      (navigator.languages || []).join(","),
      navigator.platform || "",
      screen.width + "x" + screen.height + "x" + (window.devicePixelRatio || 1) + "x" + screen.colorDepth,
      (Intl.DateTimeFormat().resolvedOptions() || {}).timeZone || "",
      navigator.hardwareConcurrency || 0,
      navigator.deviceMemory || 0,
      navigator.maxTouchPoints || 0,
      canvasSig(),
    ].join("|");
    if (window.crypto && crypto.subtle && crypto.subtle.digest) {
      return crypto.subtle.digest("SHA-256", new TextEncoder().encode(s)).then(function (buf) {
        return Array.prototype.map
          .call(new Uint8Array(buf), function (b) {
            return ("0" + b.toString(16)).slice(-2);
          })
          .join("")
          .slice(0, 32);
      });
    }
    var h = 2166136261; // FNV-1a fallback for very old browsers
    for (var i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = (h * 16777619) >>> 0;
    }
    return Promise.resolve("f" + h.toString(16));
  }

  buildFp()
    .then(function (fp) {
      state.fp = fp;
    })
    .catch(function () {});

  var WEBHOOK = "script.google.com/macros";
  var origFetch = window.fetch;
  window.fetch = function (input, init) {
    try {
      var url = typeof input === "string" ? input : (input && input.url) || "";
      var body = init && init.body;
      if (
        url.indexOf(WEBHOOK) > -1 &&
        body &&
        (body instanceof URLSearchParams || body instanceof FormData)
      ) {
        body.append("device_fp", state.fp || "pending");
        body.append("device_id", state.did || "");
        body.append("page_ms", String(Date.now() - T0));
        if (typeof window.gtag === "function") {
          window.gtag("event", "lead_submit", {
            device_fp: state.fp || "pending",
            device_id: state.did || "",
            page_ms: Date.now() - T0,
          });
        }
      }
    } catch (e) {}
    return origFetch.apply(this, arguments);
  };
})();
