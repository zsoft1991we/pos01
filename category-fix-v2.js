(() => {
  const patchedDocs = new WeakSet();
  const patchFrame = (frame) => {
    try { const doc = frame.contentDocument; if (doc) patchDoc(doc); } catch (_) {}
  };
  const patchDoc = (doc) => {
    try {
      if (!doc || patchedDocs.has(doc)) return;
      patchedDocs.add(doc);
      doc.addEventListener('click', (event) => {
        const btn = event.target.closest('button[data-cat]');
        if (!btn) return;
        const value = btn.getAttribute('data-cat') || '';
        if (value && value !== 'Semua' && !value.startsWith('__WB__ ')) {
          btn.setAttribute('data-cat', '__WB__ ' + value);
        }
      }, true);
      doc.querySelectorAll('iframe').forEach(frame => {
        frame.addEventListener('load', () => patchFrame(frame));
        patchFrame(frame);
      });
    } catch (_) {}
  };
  patchDoc(document);
  document.querySelectorAll('iframe').forEach(frame => {
    frame.addEventListener('load', () => patchFrame(frame));
    patchFrame(frame);
  });
})();
