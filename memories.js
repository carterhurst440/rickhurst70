// Memory data. Coordinates are in % of the map canvas (0-100).
// Replace `text` with real memories — placeholders shown clearly.

const PLACEHOLDER = '<span class="placeholder">[ Add the full memory here — what happened, how it felt, the small details that made it stick. ]</span>';

const SCOTT_MEMORIES = [
  { id: 'fathers-day', illus: 'tie', title: "Happy Father's Day", date: 'June 1992', x: 26, y: 14,
    text: `Father's Day, 1992. I was six years old, fresh out of first grade, and I knew what the gift was.\n\nWe were getting you a tie. I had been told, explicitly, not to say a word.\n\nWe were sitting in church when I turned to you and said: "I'll give you a hint. You're wearing one right now."\n\nThe moment it came out I knew I'd spoiled it. I was probably staring right at your tie when I said it. You gave me a smile.` },
  { id: 'boulder-lake', illus: 'mountain', title: 'Boulder Lake', date: 'Summer 2001', x: 72, y: 22,
    text: `The summer I turned fifteen, you drove us up into the Idaho mountains with nothing but packs and time.\n\nBoulder Lake is hard to reach. The trail felt like it went straight uphill the whole way. But when we got there, the water was crystal clear, the kind of clear where you can see everything. We made camp right on the bank.\n\nSomewhere in those evenings, you said it quietly: "Your Grandpa is getting pretty tired." I think I knew he was sick, but that was the moment I understood how serious it was. You said it the way you said most things. Simply, without drama. Looking back, I think you needed to be out there as much as I did. Maybe more.\n\nOn the drive up we'd stopped for a hitchhiker, a young guy who'd been kayaking the river and needed a lift. You didn't even hesitate. It felt like exactly the kind of thing you would do, and I remember noticing it.\n\nGrandpa didn't make it to the end of that summer. But I have that lake. I have those evenings. I have you telling me something hard in the kindest way you knew how.` },
  { id: 'bogus-basin', illus: 'ski', title: 'Skiing', date: 'Winter of 2002', x: 84, y: 32,
    text: `You and Mom gave Carter and me something we didn't fully understand at the time: two winters at Bogus Basin, at least twice a week, every week. Season passes. Gear. All of it.\n\nI know it was a sacrifice. The passes, the equipment. It adds up fast. But you found ways to make it work, used gear and whatever else it took, because you wanted us up on that mountain.\n\nAnd we were. All of us: you, Mom, Carter, me, and whatever friends we could drag along. We'd pack food and eat in the lodge between runs, days and nights on the snow together.\n\nLooking back, I think you knew something. That Carter and I were getting older, that the years at home were running short, and that you wanted to give us something we'd carry with us. You were right. I still carry it.` },
  { id: 'driving', illus: 'police', title: 'Back in the Saddle', date: 'March 2003', x: 14, y: 42,
    text: `You came right down to the high school parking lot. I'd pulled out without seeing the other car. A stupid mistake, and a minor one thankfully. No injuries, barely a scratch on anyone. The police came anyway. I got a ticket.\n\nWhat I remember most is you calmly pulling the front bumper the rest of the way off so we could drive the car home. You weren't angry. Just glad I was okay. I think you knew I'd learned my lesson in the best possible way: scared enough to remember it, with nobody actually hurt.\n\nI was sure I was done driving for months. But that weekend we drove down to Salt Lake for general conference, and you put me behind the wheel for most of it. I remember being terrified just to turn left out of the neighborhood onto Eagle Road. You knew I needed to get back in the saddle before the fear had time to settle in.\n\nThere was the ticket, and the deductible, and the debt I owed you. But I noticed the ways you quietly found to knock a little off what I owed, here and there. I felt grateful then. I feel it now. Grateful to have you on my side.` },
  { id: 'steak', illus: 'steak', title: 'Steak Dinner the Night Before', date: 'Match-night ritual', x: 52, y: 50,
    text: `The night before every match, Dad made the steak. Same plate, same pep talk.\n\n${PLACEHOLDER}` },
  { id: 'bsu', illus: 'football', title: 'Saturdays on the Blue', date: 'BSU football, every fall', x: 80, y: 60,
    text: `Saturdays in the fall meant one thing — Broncos on the blue, Dad on the couch beside me.\n\n${PLACEHOLDER}` },
  { id: 'trivia', illus: 'boardgame', title: 'Trivial Pursuit Champion', date: 'Family game nights', x: 30, y: 68,
    text: `He knew every answer. Every. Single. One.\n\n${PLACEHOLDER}` },
  { id: 'drum', illus: 'drum', title: 'Watching Dad Drum', date: 'Anytime he sat down at the kit', x: 76, y: 74,
    text: `There was a different version of Dad behind the kit. Lighter. All rhythm.\n\n${PLACEHOLDER}` },
  { id: 'flyfish', illus: 'flyfish', title: 'Warm Lake', date: 'Summer 2025', x: 24, y: 82,
    text: `As told by Chandler. \n\nGrandpa took us to a cabin at Warm Lake. It was a small cabin. Two bedrooms and a bathroom and a kitchen, and no TV. That was okay though.\n\nOn the way there we saw deer out the window.\n\nThe best thing we did was fishing. I caught the first fish every single day! We caught a lot of them, and then we ate them. Grandpa taught me how to catch fish. When I caught one I got to hold it and it was moving all around in my hands.\n\nMy favorite meal on the whole trip was pancakes at a restaurant.\n\nAt night we read books in our beds to settle down before sleeping.\n\nIf I could go back, I would want to get a Twinkie from the store.\n\nMy favorite thing about Grandpa is fishing.` },
  { id: 'mission', illus: 'roadtrip', title: 'The Drive to College', date: 'After my mission', x: 68, y: 88,
    text: `Just the two of us, the open road, and a trunk full of dorm-room boxes.\n\n${PLACEHOLDER}` },
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
