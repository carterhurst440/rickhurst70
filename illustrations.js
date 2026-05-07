// Flat geometric SVG illustrations for memory tiles.
// Each function returns an SVG string sized 100x100 viewBox.
// Animations are driven by CSS classes on the wrapping <svg>.

const PALETTE = {
  ink: '#1A1F2E',
  paper: '#FFFEFB',
  cream: '#F2EDE2',
  sun: '#E8A33D',
  sage: '#6B8E6F',
  sageDk: '#4F6E54',
  coral: '#D96E5B',
  teal: '#3B6E7A',
  sky: '#BFD7DD',
  rose: '#F4D2C9',
  brown: '#8C6A4E',
  gold: '#C99A3F',
  white: '#FFFEFB',
};

const ILLUS = {

  // 50-mile Sawtooth hike
  mountain: () => `
    <svg class="anim-mountain" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="14" fill="${PALETTE.cream}"/>
      <circle class="sun" cx="72" cy="32" r="8" fill="${PALETTE.sun}"/>
      <!-- back range -->
      <path d="M0 70 L18 48 L32 60 L50 38 L66 56 L82 42 L100 60 L100 100 L0 100 Z" fill="${PALETTE.sage}" opacity="0.55"/>
      <!-- front range -->
      <path d="M0 80 L14 64 L26 74 L42 56 L58 70 L72 60 L88 76 L100 70 L100 100 L0 100 Z" fill="${PALETTE.sageDk}"/>
      <!-- snow caps -->
      <path d="M42 56 L48 64 L54 60 L50 56 Z" fill="${PALETTE.white}"/>
      <path d="M14 64 L20 70 L18 66 Z" fill="${PALETTE.white}" opacity="0.8"/>
      <!-- bird -->
      <path class="bird" d="M30 30 q3 -3 6 0 q3 -3 6 0" stroke="${PALETTE.ink}" stroke-width="1.2" fill="none" stroke-linecap="round"/>
    </svg>`,

  // Wrestling match
  wrestle: () => `
    <svg class="anim-wrestle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="14" fill="${PALETTE.cream}"/>
      <!-- mat -->
      <ellipse cx="50" cy="78" rx="40" ry="6" fill="${PALETTE.coral}" opacity="0.3"/>
      <circle cx="50" cy="78" r="22" fill="none" stroke="${PALETTE.coral}" stroke-width="1.5" opacity="0.6"/>
      <!-- wrestler L -->
      <g class="figure-l">
        <circle cx="35" cy="50" r="6" fill="${PALETTE.ink}"/>
        <path d="M35 56 Q30 64 32 74 L40 74 Q42 64 38 56 Z" fill="${PALETTE.coral}"/>
        <path d="M30 60 L24 66" stroke="${PALETTE.ink}" stroke-width="2.5" stroke-linecap="round"/>
      </g>
      <!-- wrestler R -->
      <g class="figure-r">
        <circle cx="65" cy="50" r="6" fill="${PALETTE.ink}"/>
        <path d="M65 56 Q70 64 68 74 L60 74 Q58 64 62 56 Z" fill="${PALETTE.teal}"/>
        <path d="M70 60 L76 66" stroke="${PALETTE.ink}" stroke-width="2.5" stroke-linecap="round"/>
      </g>
    </svg>`,

  // BSU football stadium
  football: () => `
    <svg class="anim-football" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="14" fill="${PALETTE.cream}"/>
      <!-- the famous blue field -->
      <ellipse cx="50" cy="74" rx="42" ry="14" fill="${PALETTE.teal}"/>
      <ellipse cx="50" cy="74" rx="32" ry="9" fill="none" stroke="${PALETTE.white}" stroke-width="1" opacity="0.6"/>
      <!-- goalposts -->
      <path d="M16 70 L16 58 M16 62 L26 62 M26 62 L26 56 M22 56 L30 56" stroke="${PALETTE.white}" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <path d="M84 70 L84 58 M84 62 L74 62 M74 62 L74 56 M70 56 L78 56" stroke="${PALETTE.white}" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <!-- ball arcing -->
      <g class="ball">
        <ellipse cx="30" cy="50" rx="6" ry="3.5" fill="${PALETTE.brown}" transform="rotate(-20 30 50)"/>
        <path d="M27 50 L33 50 M28 48 L28 52 M32 48 L32 52" stroke="${PALETTE.white}" stroke-width="0.6"/>
      </g>
      <!-- crowd dots -->
      <g fill="${PALETTE.ink}" opacity="0.4">
        <circle cx="20" cy="22" r="1"/><circle cx="28" cy="20" r="1"/><circle cx="36" cy="22" r="1"/>
        <circle cx="50" cy="18" r="1"/><circle cx="64" cy="22" r="1"/><circle cx="72" cy="20" r="1"/>
        <circle cx="80" cy="22" r="1"/>
      </g>
    </svg>`,

  // Trivial Pursuit / board game
  boardgame: () => `
    <svg class="anim-dice" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="14" fill="${PALETTE.cream}"/>
      <!-- board -->
      <circle cx="50" cy="55" r="32" fill="${PALETTE.paper}" stroke="${PALETTE.ink}" stroke-width="1"/>
      <g stroke="${PALETTE.ink}" stroke-width="1" opacity="0.4">
        <line x1="50" y1="23" x2="50" y2="87"/>
        <line x1="18" y1="55" x2="82" y2="55"/>
        <line x1="27" y1="32" x2="73" y2="78"/>
        <line x1="73" y1="32" x2="27" y2="78"/>
      </g>
      <!-- pie wedges -->
      <circle cx="50" cy="55" r="10" fill="${PALETTE.paper}" stroke="${PALETTE.ink}" stroke-width="1"/>
      <path d="M50 55 L50 45 A10 10 0 0 1 58.66 50 Z" fill="${PALETTE.coral}"/>
      <path d="M50 55 L58.66 50 A10 10 0 0 1 58.66 60 Z" fill="${PALETTE.sun}"/>
      <path d="M50 55 L58.66 60 A10 10 0 0 1 50 65 Z" fill="${PALETTE.sage}"/>
      <path d="M50 55 L50 65 A10 10 0 0 1 41.34 60 Z" fill="${PALETTE.teal}"/>
      <!-- dice -->
      <g class="die" transform="translate(14 14)">
        <rect width="14" height="14" rx="2" fill="${PALETTE.paper}" stroke="${PALETTE.ink}" stroke-width="1"/>
        <circle cx="4" cy="4" r="1" fill="${PALETTE.ink}"/>
        <circle cx="10" cy="10" r="1" fill="${PALETTE.ink}"/>
        <circle cx="7" cy="7" r="1" fill="${PALETTE.ink}"/>
      </g>
      <g class="die die-2" transform="translate(74 76)">
        <rect width="12" height="12" rx="2" fill="${PALETTE.paper}" stroke="${PALETTE.ink}" stroke-width="1"/>
        <circle cx="3" cy="3" r="1" fill="${PALETTE.ink}"/>
        <circle cx="9" cy="3" r="1" fill="${PALETTE.ink}"/>
        <circle cx="3" cy="9" r="1" fill="${PALETTE.ink}"/>
        <circle cx="9" cy="9" r="1" fill="${PALETTE.ink}"/>
      </g>
    </svg>`,

  // Drum kit
  drum: () => `
    <svg class="anim-drum" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="14" fill="${PALETTE.cream}"/>
      <!-- bass drum -->
      <ellipse cx="50" cy="68" rx="26" ry="14" fill="${PALETTE.paper}" stroke="${PALETTE.ink}" stroke-width="1.5"/>
      <ellipse cx="50" cy="68" rx="16" ry="8" fill="none" stroke="${PALETTE.ink}" stroke-width="1" opacity="0.5"/>
      <!-- toms -->
      <ellipse cx="32" cy="48" rx="9" ry="4" fill="${PALETTE.coral}" stroke="${PALETTE.ink}" stroke-width="1"/>
      <ellipse cx="68" cy="48" rx="9" ry="4" fill="${PALETTE.sun}" stroke="${PALETTE.ink}" stroke-width="1"/>
      <!-- cymbal -->
      <ellipse cx="50" cy="32" rx="20" ry="3" fill="${PALETTE.gold}" stroke="${PALETTE.ink}" stroke-width="1"/>
      <line x1="50" y1="32" x2="50" y2="48" stroke="${PALETTE.ink}" stroke-width="1.2"/>
      <!-- sticks -->
      <line class="stick-l" x1="22" y1="22" x2="34" y2="34" stroke="${PALETTE.brown}" stroke-width="2" stroke-linecap="round"/>
      <line class="stick-r" x1="78" y1="22" x2="66" y2="34" stroke="${PALETTE.brown}" stroke-width="2" stroke-linecap="round"/>
    </svg>`,

  // Fishing — generic (lake)
  fishing: () => `
    <svg class="anim-fish" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="14" fill="${PALETTE.cream}"/>
      <!-- water -->
      <rect x="0" y="50" width="100" height="50" fill="${PALETTE.sky}" opacity="0.7"/>
      <!-- ripples -->
      <path d="M10 56 q5 -2 10 0 t10 0 t10 0 t10 0 t10 0 t10 0 t10 0 t10 0" stroke="${PALETTE.white}" stroke-width="1" fill="none" opacity="0.7"/>
      <path d="M5 64 q5 -2 10 0 t10 0 t10 0 t10 0 t10 0 t10 0 t10 0 t10 0" stroke="${PALETTE.white}" stroke-width="1" fill="none" opacity="0.5"/>
      <!-- distant tree silhouette -->
      <path d="M0 50 L0 38 L8 30 L14 38 L20 32 L26 40 L34 34 L42 42 L50 36 L60 44 L70 38 L80 44 L90 38 L100 44 L100 50 Z" fill="${PALETTE.sageDk}" opacity="0.6"/>
      <!-- fish 1 -->
      <g class="fish">
        <ellipse cx="30" cy="74" rx="6" ry="3" fill="${PALETTE.coral}"/>
        <path d="M24 74 L20 71 L20 77 Z" fill="${PALETTE.coral}"/>
        <circle cx="32" cy="73" r="0.7" fill="${PALETTE.ink}"/>
      </g>
      <!-- fish 2 -->
      <g class="fish fish-2">
        <ellipse cx="68" cy="84" rx="5" ry="2.5" fill="${PALETTE.sun}"/>
        <path d="M73 84 L77 81 L77 87 Z" fill="${PALETTE.sun}"/>
        <circle cx="66" cy="83" r="0.6" fill="${PALETTE.ink}"/>
      </g>
      <!-- sun -->
      <circle cx="78" cy="22" r="6" fill="${PALETTE.sun}" opacity="0.9"/>
    </svg>`,

  // Fly fishing rod
  flyfish: () => `
    <svg class="anim-flyrod" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="14" fill="${PALETTE.cream}"/>
      <!-- river -->
      <path d="M0 78 Q30 70 50 80 T100 76 L100 100 L0 100 Z" fill="${PALETTE.sky}" opacity="0.7"/>
      <path d="M0 82 Q30 76 60 84 T100 80" stroke="${PALETTE.white}" stroke-width="0.8" fill="none" opacity="0.7"/>
      <!-- rocks -->
      <ellipse cx="20" cy="82" rx="6" ry="2" fill="${PALETTE.brown}" opacity="0.6"/>
      <ellipse cx="76" cy="84" rx="5" ry="2" fill="${PALETTE.brown}" opacity="0.5"/>
      <!-- angler silhouette -->
      <g>
        <circle cx="34" cy="46" r="5" fill="${PALETTE.ink}"/>
        <path d="M34 51 L30 70 L38 70 L40 51 Z" fill="${PALETTE.sageDk}"/>
        <rect x="36" y="68" width="3" height="10" fill="${PALETTE.ink}"/>
        <rect x="30" y="68" width="3" height="10" fill="${PALETTE.ink}"/>
      </g>
      <!-- fly rod + line -->
      <g class="line">
        <line x1="36" y1="48" x2="86" y2="22" stroke="${PALETTE.ink}" stroke-width="1.2"/>
        <path d="M86 22 Q74 36 70 60" stroke="${PALETTE.ink}" stroke-width="0.6" fill="none" opacity="0.7"/>
        <circle cx="70" cy="60" r="1.2" fill="${PALETTE.coral}"/>
      </g>
    </svg>`,

  // Steak dinner before wrestling matches
  steak: () => `
    <svg class="anim-steak" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="14" fill="${PALETTE.cream}"/>
      <!-- table -->
      <rect x="0" y="78" width="100" height="22" fill="${PALETTE.brown}" opacity="0.3"/>
      <!-- plate -->
      <ellipse cx="50" cy="74" rx="34" ry="8" fill="${PALETTE.paper}" stroke="${PALETTE.ink}" stroke-width="1"/>
      <ellipse cx="50" cy="73" rx="28" ry="6" fill="${PALETTE.cream}"/>
      <!-- steak -->
      <path d="M30 72 Q34 64 44 64 Q58 62 64 68 Q72 74 64 78 Q52 82 38 80 Q28 78 30 72 Z" fill="${PALETTE.coral}" stroke="${PALETTE.ink}" stroke-width="1"/>
      <path d="M40 70 Q48 68 56 70" stroke="${PALETTE.ink}" stroke-width="0.8" fill="none" opacity="0.4"/>
      <path d="M42 74 Q50 72 58 74" stroke="${PALETTE.ink}" stroke-width="0.8" fill="none" opacity="0.4"/>
      <!-- steam -->
      <g stroke="${PALETTE.ink}" stroke-width="1.4" fill="none" stroke-linecap="round" opacity="0.5">
        <path class="steam" d="M40 50 q3 -4 0 -8 q-3 -4 0 -8"/>
        <path class="steam steam-2" d="M50 50 q3 -4 0 -8 q-3 -4 0 -8"/>
        <path class="steam steam-3" d="M60 50 q3 -4 0 -8 q-3 -4 0 -8"/>
      </g>
    </svg>`,

  // Driving / car keys
  car: () => `
    <svg class="anim-car" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="14" fill="${PALETTE.cream}"/>
      <!-- road -->
      <rect x="0" y="74" width="100" height="14" fill="${PALETTE.ink}" opacity="0.85"/>
      <g stroke="${PALETTE.sun}" stroke-width="2" stroke-dasharray="6 6">
        <line x1="0" y1="81" x2="100" y2="81"/>
      </g>
      <!-- hills behind -->
      <path d="M0 74 Q30 56 50 66 T100 62 L100 74 Z" fill="${PALETTE.sage}" opacity="0.6"/>
      <!-- car -->
      <g class="car-body">
        <path d="M22 70 L30 56 L62 56 L72 70 Z" fill="${PALETTE.coral}" stroke="${PALETTE.ink}" stroke-width="1.2"/>
        <rect x="22" y="68" width="56" height="8" rx="2" fill="${PALETTE.coral}" stroke="${PALETTE.ink}" stroke-width="1.2"/>
        <path d="M34 58 L40 66 L52 66 L58 58 Z" fill="${PALETTE.sky}" stroke="${PALETTE.ink}" stroke-width="0.8"/>
        <line x1="46" y1="58" x2="46" y2="66" stroke="${PALETTE.ink}" stroke-width="0.8"/>
      </g>
      <!-- wheels -->
      <g class="wheel" transform="translate(34 76)">
        <circle r="4" fill="${PALETTE.ink}"/>
        <circle r="1.6" fill="${PALETTE.cream}"/>
        <line x1="-4" y1="0" x2="4" y2="0" stroke="${PALETTE.cream}" stroke-width="0.8"/>
      </g>
      <g class="wheel" transform="translate(66 76)">
        <circle r="4" fill="${PALETTE.ink}"/>
        <circle r="1.6" fill="${PALETTE.cream}"/>
        <line x1="-4" y1="0" x2="4" y2="0" stroke="${PALETTE.cream}" stroke-width="0.8"/>
      </g>
    </svg>`,

  // Driving to college / road trip — suitcase + road
  roadtrip: () => `
    <svg class="anim-car" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="14" fill="${PALETTE.cream}"/>
      <!-- distant mountains -->
      <path d="M0 60 L20 38 L34 50 L50 32 L66 48 L82 36 L100 52 L100 70 L0 70 Z" fill="${PALETTE.sageDk}" opacity="0.5"/>
      <!-- vanishing road -->
      <path d="M40 100 L60 100 L56 60 L44 60 Z" fill="${PALETTE.ink}" opacity="0.85"/>
      <line x1="50" y1="100" x2="50" y2="60" stroke="${PALETTE.sun}" stroke-width="1.2" stroke-dasharray="4 4"/>
      <!-- suitcase -->
      <g class="car-body" transform="translate(28 36)">
        <rect width="20" height="14" rx="2" fill="${PALETTE.brown}" stroke="${PALETTE.ink}" stroke-width="1"/>
        <rect x="6" y="-3" width="8" height="3" rx="1" fill="none" stroke="${PALETTE.ink}" stroke-width="1"/>
        <line x1="0" y1="6" x2="20" y2="6" stroke="${PALETTE.ink}" stroke-width="0.6"/>
      </g>
      <!-- sign -->
      <g transform="translate(70 30)">
        <rect width="22" height="10" fill="${PALETTE.coral}" stroke="${PALETTE.ink}" stroke-width="1"/>
        <line x1="2" y1="5" x2="20" y2="5" stroke="${PALETTE.white}" stroke-width="0.8"/>
        <line x1="11" y1="10" x2="11" y2="22" stroke="${PALETTE.ink}" stroke-width="1.2"/>
      </g>
    </svg>`,

  // Church / chapel
  church: () => `
    <svg class="anim-church" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="14" fill="${PALETTE.cream}"/>
      <!-- ground -->
      <rect x="0" y="80" width="100" height="20" fill="${PALETTE.sage}" opacity="0.4"/>
      <!-- chapel body -->
      <rect x="32" y="48" width="36" height="32" fill="${PALETTE.paper}" stroke="${PALETTE.ink}" stroke-width="1.2"/>
      <!-- roof -->
      <path d="M30 48 L50 32 L70 48 Z" fill="${PALETTE.coral}" stroke="${PALETTE.ink}" stroke-width="1.2"/>
      <!-- steeple -->
      <rect x="46" y="20" width="8" height="14" fill="${PALETTE.paper}" stroke="${PALETTE.ink}" stroke-width="1"/>
      <path d="M46 20 L50 12 L54 20 Z" fill="${PALETTE.coral}" stroke="${PALETTE.ink}" stroke-width="1"/>
      <!-- bell -->
      <g class="bell">
        <path d="M48 24 Q48 28 47 30 L53 30 Q52 28 52 24 Z" fill="${PALETTE.gold}" stroke="${PALETTE.ink}" stroke-width="0.6"/>
      </g>
      <!-- door -->
      <rect x="46" y="62" width="8" height="18" rx="4" fill="${PALETTE.brown}" stroke="${PALETTE.ink}" stroke-width="1"/>
      <!-- windows -->
      <rect x="36" y="56" width="6" height="10" rx="3" fill="${PALETTE.sky}" stroke="${PALETTE.ink}" stroke-width="0.8"/>
      <rect x="58" y="56" width="6" height="10" rx="3" fill="${PALETTE.sky}" stroke="${PALETTE.ink}" stroke-width="0.8"/>
      <!-- cross -->
      <line x1="50" y1="6" x2="50" y2="14" stroke="${PALETTE.ink}" stroke-width="0.8"/>
      <line x1="47" y1="10" x2="53" y2="10" stroke="${PALETTE.ink}" stroke-width="0.8"/>
    </svg>`,

  // Fall leaves
  leaves: () => `
    <svg class="anim-leaves" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="14" fill="${PALETTE.cream}"/>
      <!-- tree trunk -->
      <rect x="46" y="52" width="8" height="34" fill="${PALETTE.brown}" rx="2"/>
      <!-- canopy -->
      <circle cx="50" cy="42" r="22" fill="${PALETTE.coral}" opacity="0.8"/>
      <circle cx="38" cy="44" r="14" fill="${PALETTE.sun}" opacity="0.85"/>
      <circle cx="62" cy="40" r="14" fill="${PALETTE.gold}" opacity="0.85"/>
      <!-- ground leaves -->
      <ellipse cx="30" cy="86" rx="3" ry="1.5" fill="${PALETTE.coral}"/>
      <ellipse cx="70" cy="86" rx="3" ry="1.5" fill="${PALETTE.sun}"/>
      <ellipse cx="50" cy="90" rx="3" ry="1.5" fill="${PALETTE.gold}"/>
      <!-- falling -->
      <g class="leaf" transform="translate(28 20)"><path d="M0 0 Q4 -3 6 1 Q4 5 0 4 Z" fill="${PALETTE.coral}"/></g>
      <g class="leaf" transform="translate(60 26)"><path d="M0 0 Q4 -3 6 1 Q4 5 0 4 Z" fill="${PALETTE.sun}"/></g>
      <g class="leaf" transform="translate(78 14)"><path d="M0 0 Q4 -3 6 1 Q4 5 0 4 Z" fill="${PALETTE.gold}"/></g>
    </svg>`,

  // Camera / generic placeholder
  camera: () => `
    <svg class="anim-pin" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="14" fill="${PALETTE.cream}"/>
      <rect x="22" y="38" width="56" height="36" rx="4" fill="${PALETTE.ink}"/>
      <rect x="40" y="32" width="20" height="8" rx="2" fill="${PALETTE.ink}"/>
      <circle cx="50" cy="56" r="12" fill="${PALETTE.cream}" stroke="${PALETTE.sun}" stroke-width="2"/>
      <circle cx="50" cy="56" r="6" fill="${PALETTE.teal}"/>
      <circle cx="68" cy="46" r="2" fill="${PALETTE.coral}"/>
    </svg>`,
};

window.ILLUS = ILLUS;
