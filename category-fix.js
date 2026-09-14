(() => {
  const frame = document.getElementById('appFrame');
  if (!frame) return;
  const patch = () => {
    try {
      const doc = frame.contentDocument;
      if (!doc || doc.__wbCategoryPatchInstalled) return;
      doc.__wbCategoryPatchInstalled = true;
      doc.addEventListener('click', (event) => {
        const btn = event.target.closest('button[data-cat]');
        if (!btn) return;
        const value = btn.getAttribute('data-cat') || '';
        if (value && value !== 'Semua' && !value.startsWith('__WB__ ')) {
          btn.setAttribute('data-cat', '__WB__ ' + value);
        }
      }, true);
    } catch (_) {}
  };
  frame.addEventListener('load', patch);
  patch();
})();
