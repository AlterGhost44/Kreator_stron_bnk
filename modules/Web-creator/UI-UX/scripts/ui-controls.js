// Minimal UI controls for the builder: sidebar toggles, device switcher, search filter

const leftToggle = document.getElementById('left-toggle');
const rightToggle = document.getElementById('right-toggle');
const leftPanel = document.getElementById('left-panel');
const rightPanel = document.getElementById('right-panel');
const mainEl = document.getElementById('main');

// Device switcher
document.querySelectorAll('.device-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.device-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const device = btn.dataset.device || 'desktop';
    document.body.classList.remove('device-desktop','device-tablet','device-mobile');
    document.body.classList.add(`device-${device}`);
  });
});

// Sidebar toggles
if (leftToggle) leftToggle.addEventListener('click', () => {
  leftPanel.classList.toggle('collapsed');
  leftPanel.style.display = leftPanel.classList.contains('collapsed') ? 'none' : '';
});
if (rightToggle) rightToggle.addEventListener('click', () => {
  rightPanel.classList.toggle('collapsed');
  rightPanel.style.display = rightPanel.classList.contains('collapsed') ? 'none' : '';
});

// Props collapse
const propsCollapse = document.getElementById('props-collapse');
if (propsCollapse) propsCollapse.addEventListener('click', () => {
  const inner = rightPanel.querySelector('.panel-inner');
  inner.style.display = inner.style.display === 'none' ? '' : 'none';
});

// Search filter
const search = document.getElementById('component-search');
if (search) {
  search.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase();
    document.querySelectorAll('.component-item').forEach(item => {
      const txt = item.textContent.toLowerCase();
      item.style.display = txt.includes(q) ? '' : 'none';
    });
  });
}

// Simple dragstart visual feedback
document.querySelectorAll('.component-item').forEach(item => {
  item.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', item.dataset.type || 'div');
    e.dataTransfer.effectAllowed = 'copy';
  });
});

// Allow drop into iframe wrapper to insert basic elements (works same-origin)
const iframe = document.getElementById('iframe');
const iframeWrapper = document.querySelector('.iframe-wrapper');
if (iframeWrapper && iframe) {
  iframeWrapper.addEventListener('dragover', (e) => { e.preventDefault(); });
  iframeWrapper.addEventListener('drop', async (e) => {
    e.preventDefault();
    const type = e.dataTransfer.getData('text/plain') || 'div';
    try {
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      const el = doc.createElement(type === 'button' ? 'button' : type);
      el.textContent = type === 'h1' ? 'Nagłówek' : (type === 'p' ? 'Nowy tekst' : (type === 'button' ? 'Przycisk' : 'Sekcja'));
      el.style.padding = '8px';
      doc.body.appendChild(el);
    } catch (err) {
      console.warn('Nie można dodać elementu do iframe (cross-origin?):', err);
    }
  });
}

// Accessibility: keyboard shortcuts for toggles
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 'b') { // toggle left
    leftToggle.click();
  }
  if (e.ctrlKey && e.key === 'p') { // toggle right
    rightToggle.click();
  }
});

export {};
