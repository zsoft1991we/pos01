# Warung Bahagia POS V1.0

Aplikasi Point of Sale (POS) berbasis web untuk operasional Warung Bahagia.

## Status

**V1.0 — FINAL / READY FOR INITIAL OPERATIONS**

Build produksi final menggunakan entry point `index.html` yang memuat `warung-bahagia-v1.0-final.html`.

## Fitur Utama

- POS kasir dengan katalog produk dan filter kategori
- Keranjang transaksi dengan kontrol quantity
- Pembayaran Tunai, QRIS, dan Debit/EDC
- Struk transaksi dan pencetakan
- Riwayat/Pesanan transaksi dan detail transaksi
- Master Barang dan pengelolaan stok
- Mutasi stok otomatis setelah transaksi dibayar
- Laporan penjualan dan analisis stok
- Trend Omzet & Laba Kotor menggunakan area chart
- Insight otomatis untuk performa penjualan, produk terlaris, dan kondisi stok
- Pengaturan nama warung dan tarif pajak
- Login berbasis Supabase Auth dengan role Admin/Kasir dan session browser
- Void Transaksi oleh Admin/Pemilik dengan alasan wajib
- Stok otomatis dikembalikan ketika transaksi di-void
- Transaksi void tetap tersimpan sebagai histori/audit

## QA Final

V1.0 final telah melewati pengujian online untuk alur utama, Void Transaksi, dan filter kategori POS. Catatan pengujian tersedia di `docs/QA-V1.0.md`.

## Teknologi

- HTML, CSS, JavaScript
- Supabase
- Supabase Auth
- Supabase PostgreSQL

## File Produksi

- `index.html` = entry point publik
- `warung-bahagia-v1.0-final.html` = wrapper produksi final
- `warung-bahagia-v1.0-void.html` = core wrapper dengan Void Transaksi
- `category-fix-v2.js` = compatibility fix filter kategori
- `warung-bahagia-demo-supabase-final-v23.html` = source core V23 sebelumnya

## Deployment

Public URL:

`https://zsoft1991we.github.io/pos01/`

## Backend

Aplikasi terhubung ke project Supabase `zsoftwe-pos`.

## Release Rule

V1.0 Final adalah baseline produksi yang frozen. Pengembangan selanjutnya harus menggunakan versi/build baru dan menjalani regression test sebelum dipromosikan menjadi baseline berikutnya.

## Catatan Keamanan

Repository ini berisi kode frontend. Jangan pernah memasukkan Supabase `service_role` key, password database, atau secret lainnya ke dalam source code frontend.
