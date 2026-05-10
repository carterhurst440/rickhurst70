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

  // ---------- Music toggle ----------
  // Drop your MP3 at assets/walking-man.mp3 to activate background music.
  // The music button persists across all views (welcome, scott, carter).
  const musicBtn = document.getElementById('music');
  const musicLabel = document.getElementById('music-label');
  const audio = document.getElementById('bgm');
  audio.src = 'assets/walking-man.mp3';
  audio.volume = 0.55;
  let playing = false;

  function startMusic() {
    audio.play().then(() => {
      playing = true;
      musicBtn.classList.add('playing');
      musicLabel.textContent = 'Pause music';
    }).catch((err) => {
      console.warn('Background music failed to play:', err);
      musicLabel.textContent = 'Music unavailable';
      setTimeout(() => { musicLabel.textContent = 'Play music'; }, 2000);
    });
  }

  function stopMusic() {
    audio.pause();
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
    const colors = ['#00F0FF', '#FF2EC4', '#C5FF45', '#B14EFF', '#FF7847', '#FFD93D'];
    for (let i = 0; i < 70; i++) {
      const s = document.createElement('span');
      const c = colors[Math.floor(Math.random() * colors.length)];
      const size = 2 + Math.random() * 4;
      s.style.left = Math.random() * 100 + '%';
      s.style.background = c;
      s.style.boxShadow = `0 0 6px ${c}, 0 0 14px ${c}`;
      s.style.animationDuration = (5 + Math.random() * 6) + 's';
      s.style.animationDelay = -Math.random() * 10 + 's';
      s.style.width = size + 'px';
      s.style.height = size + 'px';
      s.style.opacity = (0.5 + Math.random() * 0.5).toString();
      confetti.appendChild(s);
    }
  }
})();
