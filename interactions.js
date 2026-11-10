/* Third-party feature: Fuse.js provides typo-tolerant project search. */
(() => {
  'use strict';
  const tools = document.getElementById('project-search-tools');
  const input = document.getElementById('project-search');
  const clear = document.getElementById('project-search-clear');
  const status = document.getElementById('project-search-status');
  const empty = document.getElementById('project-search-empty');
  const cards = [...document.querySelectorAll('#projects > article')];
  if (!tools || !input || !clear || !status || !empty || !cards.length || typeof window.Fuse !== 'function') return;
  const records = cards.map((card, index) => ({
    index,
    title: card.querySelector('h3')?.textContent || '',
    content: card.textContent.replace(/\s+/g, ' ').trim()
  }));
  const fuse = new window.Fuse(records, {
    keys: [{ name: 'title', weight: 2 }, { name: 'content', weight: 1 }],
    threshold: 0.3,
    ignoreLocation: true,
    minMatchCharLength: 2
  });
  const filter = () => {
    const query = input.value.trim();
    const exact = query ? records.filter(record => record.content.toLowerCase().includes(query.toLowerCase())) : records;
    const matches = exact.length ? exact : fuse.search(query).map(result => result.item);
    const found = new Set(matches.map(record => record.index));
    cards.forEach((card, index) => { card.hidden = !found.has(index); });
    const count = found.size;
    status.textContent = query
      ? `${count} ${count === 1 ? 'project matches' : 'projects match'} your search.`
      : `Showing all ${cards.length} projects.`;
    empty.hidden = count !== 0;
  };
  const reset = () => { input.value = ''; filter(); input.focus(); };
  tools.hidden = false;
  input.addEventListener('input', filter);
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') { event.preventDefault(); reset(); }
  });
  clear.addEventListener('click', reset);
  filter();
})();
