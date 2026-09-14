# Warung Bahagia POS V1.0

Aplikasi Point of Sale (POS) berbasis web untuk operasional Warung Bahagia.

## Status

**V1.0 — Baseline Final**

Versi ini merupakan baseline yang telah diselesaikan sebelum pengembangan lanjutan.

## Fitur Utama

- POS kasir dengan katalog produk dan kategori
- Keranjang transaksi dengan kontrol quantity
- Pembayaran Tunai, QRIS, dan Debit/EDC
- Struk transaksi dan pencetakan
- Riwayat/Pesanan transaksi
- Master Barang dan pengelolaan stok
- Mutasi stok otomatis setelah transaksi dibayar
- Laporan penjualan dan analisis stok
- Trend Omzet & Laba Kotor menggunakan area chart
- Insight otomatis untuk performa penjualan, produk terlaris, dan kondisi stok
- Pengaturan nama warung dan tarif pajak
- Login berbasis Supabase Auth dengan session browser

## Teknologi

- HTML, CSS, JavaScript
- Supabase
- Supabase Auth
- Supabase PostgreSQL

## File Utama

`warung-bahagia-demo-supabase-final-v23.html`

## Backend

Aplikasi terhubung ke project Supabase `zsoftwe-pos`.

## Catatan Keamanan

Repository ini berisi kode frontend. Jangan pernah memasukkan Supabase `service_role` key, password database, atau secret lainnya ke dalam source code frontend.
