# Warung Bahagia POS V1.0 — Final Notes

The V1.0 entry point now uses `warung-bahagia-v1.0-final.html`.

That wrapper loads the tested Void layer and adds a compatibility patch for the category filter so category button values are preserved exactly (e.g. `Makanan Dapur`, `Minuman`, `Sembako`, `Snack`).

The patch is client-side only and does not change product or transaction data.
