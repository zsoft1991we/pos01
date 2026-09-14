# Warung Bahagia POS V1.0 — Final Release

## Status

**FINAL / READY FOR INITIAL OPERATIONS**

## Production Entry

- Public URL: `https://zsoft1991we.github.io/pos01/`
- Entry point: `index.html`
- Final wrapper: `warung-bahagia-v1.0-final.html`
- Application core: `warung-bahagia-v1.0-void.html`
- Base application build: `warung-bahagia-demo-supabase-final-v23.html`

## Final V1.0 Scope

- POS kasir dan katalog kategori
- Keranjang dan quantity
- Pembayaran Tunai / QRIS / Debit-EDC
- Struk dan cetak
- Pesanan / riwayat transaksi
- Master barang dan stok
- Mutasi stok otomatis saat transaksi dibayar
- Laporan penjualan, analisis stok, trend omzet & laba kotor, insight otomatis
- Pengaturan nama warung dan pajak
- Supabase Auth dengan role Admin dan Kasir
- Void transaksi oleh Admin dengan alasan wajib
- Stok dikembalikan saat Void
- Histori transaksi tetap disimpan dengan status `void`
- Filter kategori POS berfungsi untuk Makanan Dapur, Minuman, Sembako, Snack, dan Semua

## Database Operasional

Sebelum operasional awal, seluruh transaksi testing telah dikosongkan. Master produk, kategori, user, setting, dan stok pembukaan dipertahankan.

Stok pembukaan terakhir yang diverifikasi:

| Produk | Stok |
|---|---:|
| Nasi Goreng Spesial | 10 |
| Es Teh Manis | 50 |
| Beras Premium 5kg | 12 |
| Keripik Singkong | 30 |
| Risoles Frozen | 10 |

## Release Rule

V1.0 dianggap frozen. Perubahan setelah release harus dibuat sebagai versi/build baru dan menjalani regression test sebelum dipromosikan menjadi baseline berikutnya.
