// Neon line-art illustrations for memory tiles.
// Each function returns a 100x100 viewBox SVG string.
// Stroke-only; the glow is applied via CSS .neon-* classes (drop-shadow filter).
// Animations driven by .anim-<name> classes in the HTML <style> block.

const NEON = {
  cyan:    '#00F0FF',
  magenta: '#FF2EC4',
  lime:    '#C5FF45',
  purple:  '#B14EFF',
  orange:  '#FF7847',
  yellow:  '#FFD93D',
};

const S = (color, w = 2) =>
  `stroke="${color}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" fill="none"`;

const ILLUS = {

  // 50-mile Sawtooth hike
  mountain: () => `
    <svg class="anim-mountain neon-cyan" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle class="sun" cx="74" cy="26" r="8" ${S(NEON.cyan)} />
      <path d="M8 80 L30 44 L46 62 L62 36 L92 80" ${S(NEON.cyan)} />
      <path d="M26 56 L30 50 L36 58" ${S(NEON.cyan)} />
      <path d="M56 48 L62 40 L68 50" ${S(NEON.cyan)} />
      <line x1="8" y1="80" x2="92" y2="80" ${S(NEON.cyan, 1.4)} opacity="0.4" />
    </svg>`,

  // Wrestling match
  wrestle: () => `
    <svg class="anim-wrestle neon-magenta" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="84" rx="34" ry="5" ${S(NEON.magenta, 1.4)} opacity="0.5" />
      <g class="figure-l">
        <circle cx="34" cy="42" r="6" ${S(NEON.magenta)} />
        <path d="M34 48 L34 72" ${S(NEON.magenta)} />
        <path d="M28 60 L18 54" ${S(NEON.magenta)} />
        <path d="M40 60 L50 60" ${S(NEON.magenta)} />
        <path d="M30 72 L24 86" ${S(NEON.magenta)} />
        <path d="M38 72 L42 86" ${S(NEON.magenta)} />
      </g>
      <g class="figure-r">
        <circle cx="66" cy="42" r="6" ${S(NEON.magenta)} />
        <path d="M66 48 L66 72" ${S(NEON.magenta)} />
        <path d="M72 60 L82 54" ${S(NEON.magenta)} />
        <path d="M60 60 L50 60" ${S(NEON.magenta)} />
        <path d="M70 72 L76 86" ${S(NEON.magenta)} />
        <path d="M62 72 L58 86" ${S(NEON.magenta)} />
      </g>
    </svg>`,

  // BSU football stadium
  football: () => `
    <svg class="anim-football neon-orange" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="74" rx="38" ry="10" ${S(NEON.orange)} />
      <ellipse cx="50" cy="74" rx="28" ry="6" ${S(NEON.orange, 1.2)} opacity="0.5" />
      <line x1="20" y1="74" x2="20" y2="60" ${S(NEON.orange, 1.4)} />
      <line x1="14" y1="60" x2="26" y2="60" ${S(NEON.orange, 1.4)} />
      <line x1="80" y1="74" x2="80" y2="60" ${S(NEON.orange, 1.4)} />
      <line x1="74" y1="60" x2="86" y2="60" ${S(NEON.orange, 1.4)} />
      <g class="ball">
        <ellipse cx="28" cy="50" rx="7" ry="4" ${S(NEON.orange)} transform="rotate(-25 28 50)" />
        <line x1="25" y1="50" x2="31" y2="50" ${S(NEON.orange, 1.2)} />
      </g>
    </svg>`,

  // Trivial Pursuit / board game
  boardgame: () => `
    <svg class="anim-dice neon-lime" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="55" r="28" ${S(NEON.lime)} />
      <line x1="50" y1="27" x2="50" y2="83" ${S(NEON.lime, 1.2)} opacity="0.45" />
      <line x1="22" y1="55" x2="78" y2="55" ${S(NEON.lime, 1.2)} opacity="0.45" />
      <line x1="30" y1="35" x2="70" y2="75" ${S(NEON.lime, 1.2)} opacity="0.3" />
      <line x1="70" y1="35" x2="30" y2="75" ${S(NEON.lime, 1.2)} opacity="0.3" />
      <circle cx="50" cy="55" r="9" ${S(NEON.lime)} />
      <g class="die" transform="translate(8 10)">
        <rect width="14" height="14" rx="2" ${S(NEON.lime)} />
        <circle cx="7" cy="7" r="1.4" fill="${NEON.lime}" />
      </g>
      <g class="die die-2" transform="translate(76 76)">
        <rect width="14" height="14" rx="2" ${S(NEON.lime)} />
        <circle cx="4" cy="4" r="1.2" fill="${NEON.lime}" />
        <circle cx="10" cy="10" r="1.2" fill="${NEON.lime}" />
      </g>
    </svg>`,

  // Drum kit
  drum: () => `
    <svg class="anim-drum neon-purple" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="68" rx="26" ry="14" ${S(NEON.purple)} />
      <ellipse cx="50" cy="68" rx="14" ry="7" ${S(NEON.purple, 1.2)} opacity="0.4" />
      <ellipse cx="32" cy="48" rx="9" ry="4" ${S(NEON.purple)} />
      <ellipse cx="68" cy="48" rx="9" ry="4" ${S(NEON.purple)} />
      <ellipse cx="50" cy="32" rx="20" ry="3" ${S(NEON.purple)} />
      <line x1="50" y1="32" x2="50" y2="48" ${S(NEON.purple, 1.4)} />
      <line class="stick-l" x1="20" y1="20" x2="32" y2="34" ${S(NEON.purple)} />
      <line class="stick-r" x1="80" y1="20" x2="68" y2="34" ${S(NEON.purple)} />
    </svg>`,

  // Fishing — generic (lake)
  fishing: () => `
    <svg class="anim-fish neon-cyan" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 56 Q15 50 30 56 T60 56 T100 56" ${S(NEON.cyan, 1.4)} opacity="0.5" />
      <path d="M0 70 Q15 64 30 70 T60 70 T100 70" ${S(NEON.cyan, 1.4)} opacity="0.4" />
      <path d="M0 84 Q15 78 30 84 T60 84 T100 84" ${S(NEON.cyan, 1.4)} opacity="0.3" />
      <g class="fish">
        <ellipse cx="32" cy="40" rx="8" ry="4" ${S(NEON.cyan)} />
        <path d="M24 40 L18 36 L18 44 Z" ${S(NEON.cyan)} />
        <circle cx="35" cy="39" r="1" fill="${NEON.cyan}" />
      </g>
      <g class="fish fish-2">
        <ellipse cx="68" cy="22" rx="6" ry="3" ${S(NEON.cyan)} />
        <path d="M74 22 L80 19 L80 25 Z" ${S(NEON.cyan)} />
      </g>
    </svg>`,

  // Fly fishing rod
  flyfish: () => `
    <svg class="anim-flyrod neon-cyan" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 82 Q30 78 60 82 T100 80" ${S(NEON.cyan, 1.4)} opacity="0.5" />
      <path d="M0 90 Q30 86 60 90 T100 88" ${S(NEON.cyan, 1.4)} opacity="0.35" />
      <circle cx="32" cy="46" r="5" ${S(NEON.cyan)} />
      <line x1="32" y1="51" x2="32" y2="74" ${S(NEON.cyan)} />
      <line x1="28" y1="74" x2="28" y2="82" ${S(NEON.cyan)} />
      <line x1="36" y1="74" x2="36" y2="82" ${S(NEON.cyan)} />
      <g class="line">
        <line x1="32" y1="48" x2="86" y2="18" ${S(NEON.cyan, 1.6)} />
        <path d="M86 18 Q76 36 70 60" ${S(NEON.cyan, 1.2)} opacity="0.65" />
        <circle cx="70" cy="60" r="2" fill="${NEON.cyan}" />
      </g>
    </svg>`,

  // Steak dinner
  steak: () => `
    <svg class="anim-steak neon-orange" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="76" rx="36" ry="8" ${S(NEON.orange)} />
      <ellipse cx="50" cy="76" rx="28" ry="5" ${S(NEON.orange, 1.2)} opacity="0.4" />
      <path d="M30 72 Q34 64 44 64 Q58 62 64 68 Q72 74 64 78 Q52 82 38 80 Q28 78 30 72 Z" ${S(NEON.orange)} />
      <g ${S(NEON.orange, 1.4)} opacity="0.7">
        <path class="steam"        d="M40 50 q3 -4 0 -8 q-3 -4 0 -8" />
        <path class="steam steam-2" d="M50 48 q3 -4 0 -8 q-3 -4 0 -8" />
        <path class="steam steam-3" d="M60 50 q3 -4 0 -8 q-3 -4 0 -8" />
      </g>
    </svg>`,

  // Driving / car
  car: () => `
    <svg class="anim-car neon-yellow" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <line x1="0" y1="86" x2="100" y2="86" ${S(NEON.yellow, 1.6)} stroke-dasharray="6 6" opacity="0.5" />
      <g class="car-body">
        <path d="M22 70 L30 56 L62 56 L72 70" ${S(NEON.yellow)} />
        <rect x="22" y="68" width="50" height="10" rx="2" ${S(NEON.yellow)} />
        <path d="M34 58 L40 66 L52 66 L58 58" ${S(NEON.yellow)} />
        <line x1="46" y1="58" x2="46" y2="66" ${S(NEON.yellow, 1.4)} />
      </g>
      <g class="wheel" transform="translate(34 78)">
        <circle r="5" ${S(NEON.yellow)} />
        <line x1="-5" y1="0" x2="5" y2="0" ${S(NEON.yellow, 1.2)} opacity="0.7" />
      </g>
      <g class="wheel" transform="translate(64 78)">
        <circle r="5" ${S(NEON.yellow)} />
        <line x1="-5" y1="0" x2="5" y2="0" ${S(NEON.yellow, 1.2)} opacity="0.7" />
      </g>
    </svg>`,

  // Drive to college / road trip — vanishing road + suitcase + sign
  roadtrip: () => `
    <svg class="anim-car neon-magenta" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 100 L60 100 L56 50 L44 50 Z" ${S(NEON.magenta)} />
      <line x1="50" y1="100" x2="50" y2="50" ${S(NEON.magenta, 1.4)} stroke-dasharray="4 6" opacity="0.7" />
      <path d="M0 50 L18 38 L34 46 L50 32 L66 44 L82 36 L100 48" ${S(NEON.magenta, 1.2)} opacity="0.45" />
      <g class="car-body" transform="translate(28 16)">
        <rect width="22" height="14" rx="2" ${S(NEON.magenta)} />
        <path d="M7 0 L7 -3 L15 -3 L15 0" ${S(NEON.magenta)} />
        <line x1="0" y1="6" x2="22" y2="6" ${S(NEON.magenta, 1.2)} opacity="0.6" />
      </g>
      <g transform="translate(62 12)">
        <rect width="24" height="10" ${S(NEON.magenta)} />
        <path d="M3 5 L21 5" ${S(NEON.magenta, 1.2)} opacity="0.7" />
        <line x1="12" y1="10" x2="12" y2="22" ${S(NEON.magenta, 1.4)} />
      </g>
    </svg>`,

  // Church / chapel
  church: () => `
    <svg class="anim-church neon-purple" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="32" y="48" width="36" height="34" ${S(NEON.purple)} />
      <path d="M30 48 L50 32 L70 48" ${S(NEON.purple)} />
      <rect x="46" y="22" width="8" height="14" ${S(NEON.purple)} />
      <path d="M46 22 L50 14 L54 22" ${S(NEON.purple)} />
      <g class="bell">
        <path d="M48 26 Q48 30 47 32 L53 32 Q52 30 52 26" ${S(NEON.purple, 1.4)} />
      </g>
      <rect x="46" y="62" width="8" height="20" rx="4" ${S(NEON.purple)} />
      <rect x="36" y="56" width="6" height="10" rx="3" ${S(NEON.purple, 1.4)} />
      <rect x="58" y="56" width="6" height="10" rx="3" ${S(NEON.purple, 1.4)} />
      <line x1="50" y1="6"  x2="50" y2="14" ${S(NEON.purple, 1.4)} />
      <line x1="47" y1="10" x2="53" y2="10" ${S(NEON.purple, 1.4)} />
    </svg>`,

  // Fall leaves
  leaves: () => `
    <svg class="anim-leaves neon-orange" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="86" x2="50" y2="58" ${S(NEON.orange)} />
      <circle cx="50" cy="44" r="20" ${S(NEON.orange)} />
      <circle cx="38" cy="46" r="13" ${S(NEON.orange, 1.4)} opacity="0.6" />
      <circle cx="62" cy="42" r="13" ${S(NEON.orange, 1.4)} opacity="0.6" />
      <g class="leaf" transform="translate(24 18)"><path d="M0 0 Q5 -4 8 1 Q5 6 0 5 Z" ${S(NEON.orange, 1.4)} /></g>
      <g class="leaf" transform="translate(60 24)"><path d="M0 0 Q5 -4 8 1 Q5 6 0 5 Z" ${S(NEON.orange, 1.4)} /></g>
      <g class="leaf" transform="translate(78 12)"><path d="M0 0 Q5 -4 8 1 Q5 6 0 5 Z" ${S(NEON.orange, 1.4)} /></g>
    </svg>`,

  // Camera / generic placeholder
  camera: () => `
    <svg class="anim-pin neon-lime" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="38" width="60" height="38" rx="4" ${S(NEON.lime)} />
      <rect x="40" y="30" width="20" height="8" rx="2" ${S(NEON.lime)} />
      <circle cx="50" cy="57" r="13" ${S(NEON.lime)} />
      <circle cx="50" cy="57" r="6" ${S(NEON.lime, 1.4)} />
      <circle cx="68" cy="46" r="2" fill="${NEON.lime}" />
    </svg>`,
};

window.ILLUS = ILLUS;
