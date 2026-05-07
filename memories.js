// Memory data. Coordinates are in % of the map canvas (0-100).
// Replace `text` with real memories — placeholders shown clearly.

const PLACEHOLDER = '<span class="placeholder">[ Add the full memory here — what happened, how it felt, the small details that made it stick. ]</span>';

const SCOTT_MEMORIES = [
  { id: 'sawtooth', illus: 'mountain', title: 'Fifty Miles in the Sawtooths', date: 'Add a date', x: 22, y: 18,
    text: `That summer Dad walked me fifty miles through the Sawtooths.\n\n${PLACEHOLDER}` },
  { id: 'wrestling', illus: 'wrestle', title: 'Front Row at Every Match', date: 'High school years', x: 62, y: 22,
    text: `He never missed one. From the bleachers, you could always pick out his voice.\n\n${PLACEHOLDER}` },
  { id: 'steak', illus: 'steak', title: 'Steak Dinner the Night Before', date: 'Match-night ritual', x: 84, y: 32,
    text: `The night before every match, Dad made the steak. Same plate, same pep talk.\n\n${PLACEHOLDER}` },
  { id: 'bsu', illus: 'football', title: 'Saturdays on the Blue', date: 'BSU football, every fall', x: 14, y: 38,
    text: `Saturdays in the fall meant one thing — Broncos on the blue, Dad on the couch beside me.\n\n${PLACEHOLDER}` },
  { id: 'trivia', illus: 'boardgame', title: 'Trivial Pursuit Champion', date: 'Family game nights', x: 50, y: 46,
    text: `He knew every answer. Every. Single. One.\n\n${PLACEHOLDER}` },
  { id: 'drum', illus: 'drum', title: 'Watching Dad Drum', date: 'Anytime he sat down at the kit', x: 80, y: 52,
    text: `There was a different version of Dad behind the kit. Lighter. All rhythm.\n\n${PLACEHOLDER}` },
  { id: 'flyfish', illus: 'flyfish', title: 'Learning to Fly Fish', date: 'Idaho & Utah rivers', x: 24, y: 60,
    text: `Stand in the river. Strip the line. He'd whisper corrections so the fish wouldn't hear.\n\n${PLACEHOLDER}` },
  { id: 'driving', illus: 'car', title: 'Teaching Me to Drive', date: 'The empty parking lot phase', x: 56, y: 68,
    text: `Patient when I stalled the car. Patient when I forgot to check my mirrors. Patient.\n\n${PLACEHOLDER}` },
  { id: 'mission', illus: 'roadtrip', title: 'The Drive to College', date: 'After my mission', x: 22, y: 80,
    text: `Just the two of us, the open road, and a trunk full of dorm-room boxes.\n\n${PLACEHOLDER}` },
  { id: 'church', illus: 'church', title: 'Going to Church Together', date: 'Sunday mornings', x: 70, y: 84,
    text: `Sunday mornings — the suit, the tie, the pew, the quiet way he listened.\n\n${PLACEHOLDER}` },
];

// Carter's memories — same scenes by default; user will swap in his own.
const CARTER_MEMORIES = [
  { id: 'c-sawtooth', illus: 'mountain', title: 'A Memory in the Mountains', date: 'Add a date', x: 22, y: 18,
    text: `${PLACEHOLDER}` },
  { id: 'c-wrestling', illus: 'wrestle', title: 'A Wrestling Memory', date: 'Add a date', x: 62, y: 22,
    text: `${PLACEHOLDER}` },
  { id: 'c-steak', illus: 'steak', title: 'A Dinner Memory', date: 'Add a date', x: 84, y: 32,
    text: `${PLACEHOLDER}` },
  { id: 'c-bsu', illus: 'football', title: 'A BSU Game Memory', date: 'Add a date', x: 14, y: 38,
    text: `${PLACEHOLDER}` },
  { id: 'c-trivia', illus: 'boardgame', title: 'A Game Night Memory', date: 'Add a date', x: 50, y: 46,
    text: `${PLACEHOLDER}` },
  { id: 'c-drum', illus: 'drum', title: 'A Drum Memory', date: 'Add a date', x: 80, y: 52,
    text: `${PLACEHOLDER}` },
  { id: 'c-flyfish', illus: 'flyfish', title: 'A Fishing Memory', date: 'Add a date', x: 24, y: 60,
    text: `${PLACEHOLDER}` },
  { id: 'c-driving', illus: 'car', title: 'A Driving Memory', date: 'Add a date', x: 56, y: 68,
    text: `${PLACEHOLDER}` },
  { id: 'c-roadtrip', illus: 'roadtrip', title: 'A Road Trip Memory', date: 'Add a date', x: 22, y: 80,
    text: `${PLACEHOLDER}` },
  { id: 'c-church', illus: 'church', title: 'A Church Memory', date: 'Add a date', x: 70, y: 84,
    text: `${PLACEHOLDER}` },
];

window.MEMORIES = { scott: SCOTT_MEMORIES, carter: CARTER_MEMORIES };
