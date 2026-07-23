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

const artBySlug: Record<string, (p: ArtProps) => JSX.Element> = {
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
