/* Local feature: apply the palette before the stylesheet paints. */
(() => {
  'use strict';
  const root = document.documentElement;
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  const storageKey = 'max-portfolio-theme';
  let saved = null;
  try { saved = localStorage.getItem(storageKey); } catch { /* Storage is optional. */ }
  let explicitChoice = saved === 'dark' || saved === 'light';
  let theme = explicitChoice ? saved : (preference.matches ? 'dark' : 'light');
  const update = (next) => {
    theme = next;
    root.dataset.theme = theme;
    const dark = theme === 'dark';
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = dark ? '#101d19' : '#18453b';
    const button = document.getElementById('theme-toggle');
    if (button) {
      button.hidden = false;
      button.setAttribute('aria-pressed', String(dark));
      document.getElementById('theme-toggle-text').textContent = `Dark mode: ${dark ? 'on' : 'off'}`;
    }
  };
  update(theme);
  document.addEventListener('DOMContentLoaded', () => {
    update(theme);
    document.getElementById('theme-toggle')?.addEventListener('click', () => {
      explicitChoice = true;
      update(theme === 'dark' ? 'light' : 'dark');
      try { localStorage.setItem(storageKey, theme); } catch { /* Keep working for this visit. */ }
    });
  }, { once: true });
  preference.addEventListener('change', (event) => {
    if (!explicitChoice) update(event.matches ? 'dark' : 'light');
  });
  window.addEventListener('storage', (event) => {
    if (event.key !== storageKey) return;
    explicitChoice = event.newValue === 'dark' || event.newValue === 'light';
    update(explicitChoice ? event.newValue : (preference.matches ? 'dark' : 'light'));
  });
})();
