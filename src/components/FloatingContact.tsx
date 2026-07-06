import { useState } from "react";
import { Mail, Phone, X } from "lucide-react";

const PHONE_TEL = "+84869688153";
const PHONE_LOCAL = "0869688153";
const EMAIL = "nuyenaffluence.md@gmail.com";

/** Zalo brand mark — speech bubble with a "Z" */
export function ZaloIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 2.5C6.75 2.5 2.5 6.3 2.5 11c0 2.74 1.46 5.18 3.76 6.76L5.5 21.5l4.46-2.33c.65.15 1.33.23 2.04.23 5.25 0 9.5-3.8 9.5-8.5S17.25 2.5 12 2.5z"
        fill="currentColor"
      />
      <path
        d="M8.2 9.4h6.2l-4.6 5.2h4.8"
        stroke="#0068FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Telegram paper-plane brand mark */
export function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M21.94 4.6l-3.2 15.07c-.24 1.06-.87 1.32-1.76.82l-4.87-3.6-2.35 2.27c-.26.26-.48.48-.98.48l.35-4.97 9.05-8.18c.39-.35-.09-.55-.61-.2L6.27 13.18l-4.8-1.5c-1.04-.33-1.06-1.04.22-1.54l18.78-7.24c.87-.32 1.63.2 1.47 1.7z" />
    </svg>
  );
}

type ContactOption = {
  label: string;
  href: string;
  external?: boolean;
  Icon: React.ComponentType<{ className?: string }>;
  bg: string;
};

const OPTIONS: ContactOption[] = [
  { label: "Email", href: `mailto:${EMAIL}`, Icon: Mail, bg: "bg-[#2563eb]" },
  {
    label: "Zalo",
    href: `https://zalo.me/${PHONE_LOCAL}`,
    external: true,
    Icon: ZaloIcon,
    bg: "bg-[#0068FF]",
  },
  {
    label: "Telegram",
    href: `https://t.me/+${PHONE_TEL.replace("+", "")}`,
    external: true,
    Icon: TelegramIcon,
    bg: "bg-[#29A9EB]",
  },
  { label: "Gọi điện", href: `tel:${PHONE_TEL}`, Icon: Phone, bg: "bg-[#16a34a]" },
];

export function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3.5 sm:bottom-6 sm:right-6">
      <div
        className={`flex flex-col items-end gap-3.5 overflow-hidden transition-all duration-300 ease-out ${
          open ? "max-h-[24rem] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        {OPTIONS.map((opt, i) => (
          <a
            key={opt.label}
            href={opt.href}
            target={opt.external ? "_blank" : undefined}
            rel={opt.external ? "noopener noreferrer" : undefined}
            onClick={() => setOpen(false)}
            className="group flex items-center gap-3 transition-transform duration-300"
            style={{
              transform: open ? "translateY(0)" : "translateY(10px)",
              transitionDelay: `${open ? i * 60 : 0}ms`,
            }}
          >
            <span className="whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-[13px] font-bold text-ink shadow-lift">
              {opt.label}
            </span>
            <span
              className={`grid h-12 w-12 place-items-center rounded-full ${opt.bg} text-white shadow-lift transition-transform duration-200 group-hover:scale-110 group-active:scale-95`}
            >
              <opt.Icon className="h-6 w-6" />
            </span>
          </a>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Đóng danh sách liên hệ" : "Mở danh sách liên hệ"}
        aria-expanded={open}
        className="relative grid h-16 w-16 place-items-center rounded-full bg-grad-brand text-white shadow-glow transition-transform duration-200 hover:scale-105 active:scale-95"
      >
        {!open && (
          <span className="absolute inset-0 animate-ping rounded-full bg-[#7c3aed]/50" />
        )}
        <span className="relative">
          {open ? <X className="h-7 w-7" /> : <Phone className="h-7 w-7" />}
        </span>
      </button>
    </div>
  );
}
