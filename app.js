// App logic: navigation, tile rendering, modal, music.

(function () {
  const views = document.querySelectorAll('.view');
  const sonButtons = document.querySelectorAll('.son-btn');
  const backButtons = document.querySelectorAll('[data-back]');
  const modal = document.getElementById('modal');
  const modalClose = modal.querySelector('[data-close]');
  const modalArt = document.getElementById('modal-art');
  const modalFrom = document.getElementById('modal-from');
  const modalDate = document.getElementById('modal-date');
  const modalTitle = document.getElementById('modal-title');
  const modalText = document.getElementById('modal-text');
  const modalCounter = document.getElementById('modal-counter');
  const modalNav = modal.querySelectorAll('[data-nav]');

  let activeSon = null;
  let activeIndex = 0;

  // ---------- View routing ----------
  function showView(id) {
    views.forEach(v => v.classList.toggle('active', v.id === id));
    document.body.classList.remove('son-scott', 'son-carter');
    if (id === 'scott-view') document.body.classList.add('son-scott');
    if (id === 'carter-view') document.body.classList.add('son-carter');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  sonButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const son = btn.dataset.son;
      activeSon = son;
      showView(son + '-view');
    });
  });

  backButtons.forEach(b => b.addEventListener('click', () => {
    activeSon = null;
    showView('welcome');
  }));

  // ---------- Render tiles for both sons ----------
  function renderTiles(son) {
    const canvas = document.querySelector(`[data-canvas="${son}"]`);
    if (!canvas) return;
    const memories = window.MEMORIES[son];

    // Clear any existing tiles (keep svg + intro)
    canvas.querySelectorAll('.tile').forEach(t => t.remove());

    memories.forEach((m, i) => {
      const tile = document.createElement('button');
      tile.className = 'tile';
      tile.type = 'button';
      tile.style.left = m.x + '%';
      tile.style.top = m.y + '%';
      tile.style.animationDelay = (0.15 + i * 0.07) + 's';
      tile.setAttribute('aria-label', `Memory ${i + 1}: ${m.title}`);
      tile.innerHTML = `
        <div class="tile-art">${window.ILLUS[m.illus] ? window.ILLUS[m.illus]() : window.ILLUS.camera()}</div>
        <div class="tile-label">
          <span class="num">№ ${String(i + 1).padStart(2, '0')}</span>
          <span class="ttl">${m.title}</span>
        </div>
      `;
      tile.addEventListener('click', () => openModal(son, i));
      canvas.appendChild(tile);
    });

    // Draw winding path through points
    const pathEl = canvas.querySelector(`[data-path="${son}"]`);
    if (pathEl && memories.length) {
      const pts = memories.map(m => ({
        x: (m.x / 100) * 1400,
        y: (m.y / 100) * 1700
      }));
      let d = `M ${pts[0].x} ${pts[0].y}`;
      for (let i = 1; i < pts.length; i++) {
        const p0 = pts[i - 1], p1 = pts[i];
        const cx = (p0.x + p1.x) / 2;
        const cy = (p0.y + p1.y) / 2 + 30;
        d += ` Q ${cx} ${cy}, ${p1.x} ${p1.y}`;
      }
      pathEl.setAttribute('d', d);
    }
  }

  renderTiles('scott');
  renderTiles('carter');

  // ---------- Modal ----------
  function openModal(son, idx) {
    activeSon = son;
    activeIndex = idx;
    const memories = window.MEMORIES[son];
    const m = memories[idx];

    modalArt.innerHTML = window.ILLUS[m.illus] ? window.ILLUS[m.illus]() : window.ILLUS.camera();
    const fromName = son === 'scott' ? 'From Scott' : 'From Carter';
    modalFrom.textContent = fromName;
    modalFrom.className = 'from';
    modalDate.textContent = m.date || '';
    modalTitle.textContent = m.title;
    modalText.innerHTML = (m.text || '').replace(/\n/g, '<br>');
    modalCounter.textContent = `${idx + 1} / ${memories.length}`;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') navMemory(-1);
    if (e.key === 'ArrowRight') navMemory(1);
  });

  function navMemory(delta) {
    if (!activeSon) return;
    const memories = window.MEMORIES[activeSon];
    activeIndex = (activeIndex + delta + memories.length) % memories.length;
    openModal(activeSon, activeIndex);
  }

  modalNav.forEach(b => {
    b.addEventListener('click', () => {
      navMemory(b.dataset.nav === 'next' ? 1 : -1);
    });
  });

  // ---------- Music toggle (silent placeholder; user can drop file in) ----------
  const musicBtn = document.getElementById('music');
  const musicLabel = document.getElementById('music-label');
  const audio = document.getElementById('bgm');
  // Soft generated piano-ish loop using Web Audio API as a default ambient bed.
  let audioCtx = null;
  let masterGain = null;
  let playing = false;
  let scheduler = null;

  // Pentatonic notes (C major pentatonic) — feels warm and birthday-ish
  const NOTES = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33];

  function playNote(freq, when, dur = 1.2, vol = 0.08) {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0, when);
    gain.gain.linearRampToValueAtTime(vol, when + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, when + dur);
    osc.connect(gain).connect(masterGain);
    osc.start(when);
    osc.stop(when + dur + 0.1);
  }

  function startMusic() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      masterGain = audioCtx.createGain();
      masterGain.gain.value = 0.5;
      masterGain.connect(audioCtx.destination);
    }
    if (audioCtx.state === 'suspended') audioCtx.resume();
    let t = audioCtx.currentTime + 0.1;
    function tick() {
      const now = audioCtx.currentTime;
      while (t < now + 1.5) {
        // melody note
        const n = NOTES[Math.floor(Math.random() * NOTES.length)];
        playNote(n, t, 1.4 + Math.random() * 0.6, 0.06);
        // occasional bass
        if (Math.random() < 0.4) playNote(NOTES[0] / 2, t, 2.0, 0.04);
        t += 0.6 + Math.random() * 0.4;
      }
      scheduler = setTimeout(tick, 300);
    }
    tick();
    playing = true;
    musicBtn.classList.add('playing');
    musicLabel.textContent = 'Pause music';
  }

  function stopMusic() {
    if (scheduler) clearTimeout(scheduler);
    if (audioCtx) audioCtx.suspend();
    playing = false;
    musicBtn.classList.remove('playing');
    musicLabel.textContent = 'Play music';
  }

  musicBtn.addEventListener('click', () => {
    if (playing) stopMusic(); else startMusic();
  });

  // ---------- Confetti ----------
  const confetti = document.getElementById('confetti');
  if (confetti) {
    const colors = ['#E8A33D', '#D96E5B', '#3B6E7A', '#6B8E6F', '#1A1F2E'];
    for (let i = 0; i < 60; i++) {
      const s = document.createElement('span');
      s.style.left = Math.random() * 100 + '%';
      s.style.background = colors[Math.floor(Math.random() * colors.length)];
      s.style.animationDuration = (4 + Math.random() * 5) + 's';
      s.style.animationDelay = -Math.random() * 8 + 's';
      s.style.transform = `rotate(${Math.random() * 360}deg)`;
      s.style.width = (6 + Math.random() * 6) + 'px';
      s.style.height = (10 + Math.random() * 8) + 'px';
      confetti.appendChild(s);
    }
  }
})();
