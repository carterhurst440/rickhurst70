# Handoff: Rick Hurst 70th Birthday Memory Journal

## Overview
A single-page interactive memory journal celebrating Rick Hurst's 70th birthday. Visitors land on a confetti-filled welcome page, choose between his two sons (Scott and Carter), and enter a map-like landscape of clickable illustrated memories. Each illustration opens a modal with the written memory.

## About the Design Files
The files in this bundle are the **actual production code** for this project, not design references. This is a simple static HTML site — there is no framework, no build step, no backend. The four files (`index.html`, `app.js`, `illustrations.js`, `memories.js`) are edited directly and deployed as-is. Pushing to `main` on GitHub auto-deploys to Vercel.

When extending this project, **continue working in vanilla HTML/CSS/JS in the existing files**. Do not introduce React, a bundler, npm dependencies, or a backend. All content is hard-coded in `memories.js`.

## Fidelity
**High-fidelity (hifi)** — final colors, typography, spacing, and interactions are all in place. The most likely follow-up work is content editing (replacing placeholder memory text with real memories), adding/reordering memories, or creating new illustration types.

---

## File Structure

```
index.html             ← page shell + all CSS + view markup (welcome, scott-view, carter-view, modal)
illustrations.js       ← ILLUS object: each key is an illustration name, value is a fn returning SVG string
memories.js            ← MEMORIES.scott / MEMORIES.carter arrays — the content of the journal
app.js                 ← app logic: routing, tile rendering, modal, music, confetti
```

The HTML loads scripts in the order: `illustrations.js` → `memories.js` → `app.js`. Each script attaches its export to `window` (`window.ILLUS`, `window.MEMORIES`).

---

## Views / Screens

### 1. Welcome (`#welcome`)
- **Purpose**: Birthday landing. User picks which son's memory journal to enter.
- **Layout**: Centered column. Tiny eyebrow text → enormous serif "70" (the "0" is italic in `--sun` gold) → "Happy Birthday, *Rick Hurst*" (name in italic coral) → subtitle paragraph → two son-buttons side by side.
- **Confetti**: 60 absolutely-positioned `<span>` elements falling on infinite CSS animation. Colors pulled from accent palette.
- **Buttons**: Pill-shaped white cards with circular initials avatar (S = coral, C = teal), small "Memories from" eyebrow + serif name, arrow that nudges right on hover.

### 2. Scott Journal (`#scott-view`) and Carter Journal (`#carter-view`)
Identical structure, distinguished by accent color (Scott = coral `#D96E5B`, Carter = teal `#3B6E7A`). The active view sets `body.son-scott` or `body.son-carter` so any child can pick up the right accent.

- **Sticky header**: Back button (left), "Memories from *Scott/Carter*" title (center), spacer (right).
- **Map canvas**: 1400×1700 viewBox with:
  - Soft radial-gradient terrain wash (coral-tinted for Scott, teal-tinted for Carter)
  - Four concentric topographic ellipse rings at 5% opacity
  - A meandering quadratic-bezier `<path>` connecting all memory points (drawn in JS in `renderTiles`)
  - 10 absolutely-positioned `.tile` cards placed by % coordinates from `memories.js`
  - Centered intro heading ("A walk through the years *with Dad*")
- **Tile**: 180px wide. `.tile-art` is a square white rounded card containing the SVG illustration. `.tile-label` below it shows "№ 01" in italic serif and the memory title. On hover the tile lifts 6px and the border picks up the son's accent color. Tiles fade-pop-in on view enter, staggered by 70ms.

### 3. Memory Modal (`.modal-backdrop#modal`)
- **Backdrop**: Full-screen `rgba(26,31,46,0.55)` with backdrop-blur.
- **Card**: 560px max width. Top "art band" with the illustration (16:7 aspect, bg gradient matches active son). Body has eyebrow row ("From Scott" + dot + date), serif title, memory text (16px, line-height 1.7, `white-space: pre-wrap`), footer with counter "1 / 10" and Prev/Next nav. Close button is a circle in the top-right.
- **Keyboard**: `Esc` closes, `←` `→` navigate.

---

## Design Tokens

```css
--bg:        #FAF7F2;   /* warm off-white page bg */
--bg-warm:   #F2EDE2;   /* card / band fills */
--ink:       #1A1F2E;   /* primary text */
--ink-soft:  #4A5061;   /* secondary text */
--ink-faint: #8A8F9D;   /* tertiary / labels */
--sun:       #E8A33D;   /* accent — confetti, "0" of 70 */
--sage:      #6B8E6F;   /* secondary accent — map path on welcome */
--coral:     #D96E5B;   /* SCOTT */
--teal:      #3B6E7A;   /* CARTER */
--paper:     #FFFEFB;   /* tile / modal card bg */
--line:      rgba(26,31,46,0.12);
```

**Type:**
- `Instrument Serif` (Google Fonts) — display, titles, "70"
- `Inter` 300/400/500/600/700 — UI + body
- `Caveat` — loaded but currently unused; available if a script accent is wanted later

**Sizes:** Welcome "70" is `clamp(180px, 32vw, 380px)`. Modal title 36px serif. Tile label 13px. Eyebrow text 11–12px with 0.18–0.32em letter-spacing.

**Radii:** tile/card 18–22px. Modal 20px. Pill buttons 999px.

**Shadows:** tile resting `0 14px 28px -18px rgba(26,31,46,0.35)`, hover `0 22px 50px -18px rgba(26,31,46,0.4)`. Modal `0 30px 80px -20px rgba(0,0,0,0.4)`.

---

## Illustrations

All illustrations live in `illustrations.js` as functions in the global `ILLUS` object. Each returns a 100×100 viewBox SVG string. Available keys:

| Key | Memory it represents | Animation |
|---|---|---|
| `mountain` | Sawtooth hike | Pulsing sun, flying bird |
| `wrestle` | Wrestling matches | Two figures swaying |
| `steak` | Steak dinner ritual | Three steam wisps rising |
| `football` | BSU games | Football arcing |
| `boardgame` | Trivial Pursuit | Two dice rolling |
| `drum` | Watching Dad drum | Sticks tapping toms |
| `fishing` | General fishing | Two fish swimming |
| `flyfish` | Fly fishing lessons | Casting line |
| `car` | Teaching to drive | Spinning wheels, bobbing body |
| `roadtrip` | Drive to college | Vanishing road, suitcase |
| `church` | Sundays together | Ringing bell |
| `leaves` | Fall day | Falling leaves (3 colors) |
| `camera` | Generic placeholder | Subtle tick-tock |

To **add a new illustration**: append a new key to `ILLUS`. Use the shared `PALETTE` constants. Add a corresponding CSS animation to the `<style>` block in the HTML if you want motion (existing animation classes like `.anim-leaves`, `.anim-fish` follow the pattern `.anim-<name> .child { animation: ... }`).

---

## Adding / Editing Memories

`memories.js` exports `window.MEMORIES = { scott: [...], carter: [...] }`. Each entry shape:

```js
{
  id: 'unique-string',           // any unique slug
  illus: 'mountain',             // a key from ILLUS
  title: 'Fifty Miles in the Sawtooths',
  date: 'Summer of XXXX',        // free-text — appears in modal eyebrow
  x: 22,                         // % across map (0–100)
  y: 18,                         // % down map (0–100)
  text: `Multiline string.\n\nUse \\n\\n for paragraph breaks.`
}
```

**Placeholder copy** — anywhere you see `<span class="placeholder">[ … ]</span>` in the `text`, that is intentional yellow-highlighted prompt copy meant to be replaced. The `PLACEHOLDER` constant at the top of the file holds the standard prompt.

**Map placement**: pick `x`/`y` % so tiles don't overlap. Tiles are `transform: translate(-50%, -50%)` so the coordinate is the tile center. The map canvas has aspect-ratio 1400/1700 and `padding: 40px`, so keep coordinates in roughly `[8, 92]` to avoid edge clipping. The connecting dashed path is auto-drawn through points in array order — reorder the array to reorder the path.

Carter's memories are currently placeholder copies of Scott's scenes — swap in his own as content arrives.

---

## Interactions & Behavior

- **View routing**: `showView(id)` flips an `.active` class. No URL routing — refresh always lands on welcome.
- **Tile click**: opens modal with that memory.
- **Modal nav**: `←` / `→` keys, or Prev/Next buttons, cycle through memories of the active son (wraps around).
- **Modal close**: `Esc` key, backdrop click, or × button.
- **Music toggle** (bottom-right): generates a soft pentatonic ambient bed via Web Audio API (no audio file shipped). Click to start/stop. The `<audio id="bgm">` element in the HTML is currently unused and is a hook in case you want to swap in a real audio file later — wire it up in `app.js` (`musicBtn` click handler) to replace the Web Audio code.
- **Confetti**: only on the welcome view. 60 spans with randomized color/size/duration/delay.

---

## Animations Reference

All keyframes live in the `<style>` block in `index.html`:

- `confettiFall` — translateY -10vh → 110vh + rotate 720°, linear infinite
- `fadeIn`, `tilePop` — entry transitions
- `modalIn` — modal scale + translate from 16px below
- Per-illustration: `leafFall`, `swim`, `arc`, `stickL`/`stickR`, `rollDie`, `sunPulse`, `birdFly`, `wrestleL`/`wrestleR`, `spin`, `carBob`, `ringBell`, `rise`, `cast`, `tickTock`
- `bar` — music-toggle equalizer bars when playing

---

## Likely Tasks

1. **Replace placeholder memory text** — edit each memory's `text` field in `memories.js`. The `<span class="placeholder">` markers make it obvious which are still empty.
2. **Add Carter's actual memories** — replace `CARTER_MEMORIES` entries (currently mirrors of Scott's scenes).
3. **Add new illustration types** — define new function in `ILLUS`, add CSS animation, reference by key in a memory entry.
4. **Add a real song** — set `audio.src = 'song.mp3'` in `app.js`, replace the Web Audio scheduler with `audio.play()` / `audio.pause()`.
5. **Adjust map layout** — tweak `x`/`y` percentages on memories so tiles space nicely.

## Deploying
Vercel is connected to this GitHub repo and auto-deploys every push to `main`. No build step. To preview locally, just open `index.html` in a browser (or run `python3 -m http.server` in this directory).
