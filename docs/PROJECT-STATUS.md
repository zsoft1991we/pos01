# Warung Bahagia POS — Project Status

## Baseline Produksi

- Release: **V1.0**
- Current UI build: **v23**
- Repository branch: `main`
- Main application file: `warung-bahagia-demo-supabase-final-v23.html`
- Web entry point: `index.html` → v23
- Deployment: GitHub Pages

## Scope V1.0

V1.0 mencakup alur operasional POS, katalog dan kategori produk, keranjang transaksi, pembayaran Tunai/QRIS/Debit-EDC, struk dan pencetakan, riwayat/pesanan, master barang dan stok, mutasi stok otomatis setelah transaksi dibayar, laporan penjualan, analisis stok, trend omzet & laba kotor, insight otomatis, pengaturan nama warung dan tarif pajak, serta login berbasis Supabase Auth.

## QA V1.0

Pengujian online V1.0 telah dinyatakan **LULUS** pada alur utama:

1. Transaksi Kasir
2. Pesanan / Detail Transaksi
3. Laporan
4. Pengaturan Nama Warung / Pajak
5. Session setelah browser ditutup

## Backend

- Platform: Supabase
- Project: `zsoftwe-pos`
- Frontend authentication: Supabase Auth
- Operational data: Supabase PostgreSQL

## Important Settings

Aplikasi menyimpan nama warung yang dapat dikonfigurasi pada tabel `settings` dengan key `business_name`. Konfigurasi tarif pajak juga disimpan pada `settings`.

## File & Versi

- `warung-bahagia-demo-supabase-final-v23.html` = baseline produksi V1.0 saat ini
- `warung-bahagia-demo-supabase-final-v22.html` = backup build sebelumnya

## Development Rule

Perlakukan V1.0 sebagai baseline stabil. Jangan melakukan refactor besar atau memindahkan source production tanpa alasan yang kuat. Pengembangan berikutnya sebaiknya menggunakan nomor versi/build baru, diuji terlebih dahulu, lalu dipromosikan menjadi baseline setelah QA lulus.
