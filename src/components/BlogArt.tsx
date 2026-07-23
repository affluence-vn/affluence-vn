// Per-post illustrations drawn as inline SVG so every blog card/header has
// on-brand artwork without external image assets. White-on-gradient style;
// the parent element supplies the gradient background.

type ArtProps = { className?: string };

function GoldenAgeArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 400 225" preserveAspectRatio="xMidYMid meet" className={className} aria-hidden="true">
      <g fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" opacity="0.95">
        <rect x="70" y="140" width="44" height="45" rx="8" fill="rgba(255,255,255,0.25)" />
        <rect x="130" y="110" width="44" height="75" rx="8" fill="rgba(255,255,255,0.35)" />
        <rect x="190" y="78" width="44" height="107" rx="8" fill="rgba(255,255,255,0.5)" />
      </g>
      <g fill="#fff">
        <text x="92" y="170" textAnchor="middle" fontSize="24" fontWeight="800" fill="#fff" opacity="0.9">A</text>
        <text x="152" y="152" textAnchor="middle" fontSize="24" fontWeight="800" fill="#fff" opacity="0.9">B</text>
        <text x="212" y="122" textAnchor="middle" fontSize="24" fontWeight="800" fill="#fff" opacity="0.9">C</text>
      </g>
      <path
        d="M292 62 l7 16 17 2 -13 12 4 17 -15 -9 -15 9 4 -17 -13 -12 17 -2 z"
        fill="#fff"
        opacity="0.95"
      />
      <circle cx="320" cy="140" r="6" fill="#fff" opacity="0.6" />
      <circle cx="90" cy="70" r="8" fill="#fff" opacity="0.5" />
      <circle cx="130" cy="52" r="4" fill="#fff" opacity="0.7" />
    </svg>
  );
}

function GamesArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 400 225" preserveAspectRatio="xMidYMid meet" className={className} aria-hidden="true">
      {/* dice */}
      <rect x="72" y="80" width="70" height="70" rx="14" fill="rgba(255,255,255,0.9)" transform="rotate(-8 107 115)" />
      <g fill="#7c3aed" transform="rotate(-8 107 115)">
        <circle cx="90" cy="98" r="6" />
        <circle cx="124" cy="98" r="6" />
        <circle cx="107" cy="115" r="6" />
        <circle cx="90" cy="132" r="6" />
        <circle cx="124" cy="132" r="6" />
      </g>
      {/* flashcard */}
      <rect x="170" y="66" width="82" height="100" rx="12" fill="rgba(255,255,255,0.35)" transform="rotate(6 211 116)" />
      <text x="211" y="130" textAnchor="middle" fontSize="44" fontWeight="800" fill="#fff" transform="rotate(6 211 116)">
        B
      </text>
      {/* ball */}
      <circle cx="305" cy="140" r="34" fill="rgba(255,255,255,0.9)" />
      <path d="M271 140 a34 34 0 0 1 68 0" fill="none" stroke="#7c3aed" strokeWidth="5" />
      <path d="M305 106 v68" stroke="#7c3aed" strokeWidth="5" />
      <circle cx="330" cy="70" r="6" fill="#fff" opacity="0.6" />
      <circle cx="70" cy="180" r="5" fill="#fff" opacity="0.5" />
    </svg>
  );
}

function ChecklistArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 400 225" preserveAspectRatio="xMidYMid meet" className={className} aria-hidden="true">
      <rect x="120" y="40" width="160" height="150" rx="16" fill="rgba(255,255,255,0.9)" />
      <g stroke="#7c3aed" strokeWidth="6" strokeLinecap="round" fill="none">
        <path d="M145 78 l8 8 14 -16" />
        <path d="M145 118 l8 8 14 -16" />
        <path d="M145 158 l8 8 14 -16" />
      </g>
      <g stroke="#c4b5fd" strokeWidth="7" strokeLinecap="round">
        <line x1="185" y1="78" x2="255" y2="78" />
        <line x1="185" y1="118" x2="255" y2="118" />
        <line x1="185" y1="158" x2="255" y2="158" />
      </g>
      {/* magnifier */}
      <circle cx="292" cy="160" r="26" fill="none" stroke="#fff" strokeWidth="8" />
      <line x1="312" y1="180" x2="334" y2="202" stroke="#fff" strokeWidth="10" strokeLinecap="round" />
      <circle cx="90" cy="80" r="7" fill="#fff" opacity="0.55" />
      <circle cx="330" cy="60" r="5" fill="#fff" opacity="0.6" />
    </svg>
  );
}

function ScreenArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 400 225" preserveAspectRatio="xMidYMid meet" className={className} aria-hidden="true">
      <rect x="105" y="52" width="190" height="120" rx="16" fill="rgba(255,255,255,0.9)" />
      <path d="M185 90 l40 22 -40 22 z" fill="#7c3aed" />
      <rect x="165" y="180" width="70" height="10" rx="5" fill="rgba(255,255,255,0.7)" />
      {/* speech bubbles */}
      <g fill="rgba(255,255,255,0.45)">
        <path d="M60 90 a20 18 0 1 1 12 32 l-2 12 -10 -10 a20 18 0 0 1 0 -34 z" transform="translate(6 -6)" />
      </g>
      <text x="82" y="108" textAnchor="middle" fontSize="18" fontWeight="800" fill="#fff">?</text>
      <g fill="rgba(255,255,255,0.45)">
        <path d="M318 76 a20 18 0 1 1 12 32 l-2 12 -10 -10 a20 18 0 0 1 0 -34 z" />
      </g>
      <text x="336" y="100" textAnchor="middle" fontSize="16" fontWeight="800" fill="#fff">Hi!</text>
      <circle cx="330" cy="170" r="6" fill="#fff" opacity="0.55" />
    </svg>
  );
}

function RoadmapArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 400 225" preserveAspectRatio="xMidYMid meet" className={className} aria-hidden="true">
      <path
        d="M60 180 C 130 180 120 60 200 60 C 280 60 260 160 340 150"
        fill="none"
        stroke="#fff"
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray="2 14"
        opacity="0.9"
      />
      <g fill="rgba(255,255,255,0.95)">
        <circle cx="60" cy="180" r="12" />
        <circle cx="152" cy="86" r="12" />
        <circle cx="248" cy="110" r="12" />
      </g>
      <g fill="#7c3aed">
        <circle cx="60" cy="180" r="5" />
        <circle cx="152" cy="86" r="5" />
        <circle cx="248" cy="110" r="5" />
      </g>
      {/* flag at the end */}
      <line x1="340" y1="150" x2="340" y2="92" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
      <path d="M340 92 l36 12 -36 12 z" fill="#fff" />
      <circle cx="100" cy="60" r="5" fill="#fff" opacity="0.55" />
      <circle cx="310" cy="60" r="7" fill="#fff" opacity="0.5" />
    </svg>
  );
}

function MegaphoneArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 400 225" preserveAspectRatio="xMidYMid meet" className={className} aria-hidden="true">
      {/* megaphone */}
      <path d="M95 105 l90 -42 v100 l-90 -42 z" fill="rgba(255,255,255,0.9)" />
      <rect x="60" y="100" width="40" height="28" rx="8" fill="rgba(255,255,255,0.9)" />
      <rect x="70" y="128" width="18" height="30" rx="6" fill="rgba(255,255,255,0.6)" />
      {/* sound waves */}
      <g stroke="#fff" strokeWidth="7" strokeLinecap="round" fill="none" opacity="0.9">
        <path d="M210 85 a40 40 0 0 1 0 56" />
        <path d="M240 68 a70 70 0 0 1 0 90" />
        <path d="M270 52 a100 100 0 0 1 0 122" />
      </g>
      {/* people dots reached */}
      <circle cx="330" cy="80" r="9" fill="#fff" opacity="0.85" />
      <circle cx="345" cy="120" r="9" fill="#fff" opacity="0.7" />
      <circle cx="330" cy="160" r="9" fill="#fff" opacity="0.85" />
    </svg>
  );
}

function CoinsArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 400 225" preserveAspectRatio="xMidYMid meet" className={className} aria-hidden="true">
      {/* coin stacks */}
      <g fill="rgba(255,255,255,0.85)">
        <rect x="80" y="150" width="56" height="14" rx="7" />
        <rect x="80" y="132" width="56" height="14" rx="7" />
        <rect x="160" y="150" width="56" height="14" rx="7" />
        <rect x="160" y="132" width="56" height="14" rx="7" />
        <rect x="160" y="114" width="56" height="14" rx="7" />
        <rect x="160" y="96" width="56" height="14" rx="7" />
      </g>
      {/* coin */}
      <circle cx="290" cy="90" r="38" fill="rgba(255,255,255,0.95)" />
      <text x="290" y="103" textAnchor="middle" fontSize="38" fontWeight="800" fill="#7c3aed">₫</text>
      {/* calculator hint */}
      <g stroke="#fff" strokeWidth="5" strokeLinecap="round" opacity="0.8">
        <line x1="80" y1="70" x2="130" y2="70" />
        <line x1="105" y1="45" x2="105" y2="95" />
      </g>
      <circle cx="340" cy="170" r="6" fill="#fff" opacity="0.6" />
    </svg>
  );
}

function NetworkArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 400 225" preserveAspectRatio="xMidYMid meet" className={className} aria-hidden="true">
      {/* connections */}
      <g stroke="#fff" strokeWidth="4" opacity="0.7">
        <line x1="200" y1="112" x2="105" y2="60" />
        <line x1="200" y1="112" x2="105" y2="165" />
        <line x1="200" y1="112" x2="295" y2="60" />
        <line x1="200" y1="112" x2="295" y2="165" />
        <line x1="200" y1="112" x2="330" y2="112" />
        <line x1="200" y1="112" x2="70 " y2="112" />
      </g>
      {/* center hub */}
      <circle cx="200" cy="112" r="30" fill="rgba(255,255,255,0.95)" />
      <path d="M188 112 l8 8 16 -16" stroke="#7c3aed" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* nodes */}
      <g fill="rgba(255,255,255,0.85)">
        <circle cx="105" cy="60" r="16" />
        <circle cx="105" cy="165" r="16" />
        <circle cx="295" cy="60" r="16" />
        <circle cx="295" cy="165" r="16" />
        <circle cx="330" cy="112" r="12" />
        <circle cx="70" cy="112" r="12" />
      </g>
    </svg>
  );
}

function TargetArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 400 225" preserveAspectRatio="xMidYMid meet" className={className} aria-hidden="true">
      {/* target */}
      <circle cx="170" cy="112" r="62" fill="none" stroke="#fff" strokeWidth="8" opacity="0.9" />
      <circle cx="170" cy="112" r="38" fill="none" stroke="#fff" strokeWidth="8" opacity="0.7" />
      <circle cx="170" cy="112" r="14" fill="rgba(255,255,255,0.95)" />
      {/* arrow */}
      <g stroke="#fff" strokeWidth="7" strokeLinecap="round">
        <line x1="170" y1="112" x2="265" y2="40" />
      </g>
      <path d="M265 40 l-24 4 M265 40 l-4 24" stroke="#fff" strokeWidth="7" strokeLinecap="round" fill="none" />
      {/* leaking coins */}
      <circle cx="300" cy="140" r="10" fill="#fff" opacity="0.75" />
      <circle cx="320" cy="170" r="8" fill="#fff" opacity="0.55" />
      <circle cx="285" cy="180" r="6" fill="#fff" opacity="0.45" />
    </svg>
  );
}

function ChartArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 400 225" preserveAspectRatio="xMidYMid meet" className={className} aria-hidden="true">
      {/* axes */}
      <g stroke="#fff" strokeWidth="6" strokeLinecap="round" opacity="0.85">
        <line x1="80" y1="45" x2="80" y2="175" />
        <line x1="80" y1="175" x2="330" y2="175" />
      </g>
      {/* bars */}
      <g fill="rgba(255,255,255,0.5)">
        <rect x="105" y="130" width="34" height="45" rx="6" />
        <rect x="155" y="105" width="34" height="70" rx="6" />
        <rect x="205" y="120" width="34" height="55" rx="6" />
        <rect x="255" y="80" width="34" height="95" rx="6" />
      </g>
      {/* trend line */}
      <path d="M110 120 L170 92 L220 105 L285 60" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="285" cy="60" r="10" fill="#fff" />
    </svg>
  );
}

const artBySlug: Record<string, (p: ArtProps) => JSX.Element> = {
  "cach-tuyen-sinh-cho-trung-tam-tieng-anh": MegaphoneArt,
  "chi-phi-marketing-giao-duc": CoinsArt,
  "affiliate-marketing-cho-truong-hoc": NetworkArt,
  "quang-cao-facebook-khong-ra-hoc-vien": TargetArt,
  "5-con-so-do-luong-tuyen-sinh": ChartArt,
  "do-tuoi-vang-hoc-tieng-anh": GoldenAgeArt,
  "hoc-tieng-anh-qua-tro-choi": GamesArt,
  "chon-trung-tam-tieng-anh-cho-con": ChecklistArt,
  "tre-xem-youtube-tieng-anh": ScreenArt,
  "lo-trinh-hoc-tieng-anh-cho-tre-4-12-tuoi": RoadmapArt,
};

export function BlogArt({ slug, className }: { slug: string; className?: string }) {
  const Art = artBySlug[slug] ?? GoldenAgeArt;
  return <Art className={className} />;
}
