# Warung Bahagia POS — Project Status

## Baseline Produksi

- Release: **V1.0 Final**
- Current production build: **v1.0-final**
- Repository branch: `main`
- Web entry point: `index.html`
- Final wrapper: `warung-bahagia-v1.0-final.html`
- Deployment: GitHub Pages

## V1.0 Scope

V1.0 mencakup alur operasional POS, katalog dan kategori produk, keranjang transaksi, pembayaran Tunai/QRIS/Debit-EDC, struk dan pencetakan, riwayat/pesanan, master barang dan stok, mutasi stok otomatis setelah transaksi dibayar, laporan penjualan, analisis stok, trend omzet & laba kotor, insight otomatis, pengaturan nama warung dan tarif pajak, login berbasis Supabase Auth, serta **Void Transaksi** untuk Admin/Pemilik.

## Void Transaksi

- Hanya role `admin` yang dapat melakukan void.
- Transaksi `paid` diubah menjadi status `void`, bukan dihapus.
- Alasan void wajib diisi.
- Stok setiap item dikembalikan.
- Mutasi stok reversal dicatat dengan `movement_type = 'void'`.
- Transaksi tetap tersimpan untuk histori/audit.
- Backend menggunakan RPC `public.void_pos_transaction(uuid,text)`.

## QA V1.0 Final

Pengujian yang telah dilakukan:

1. Transaksi Kasir — PASS
2. Pesanan / Detail Transaksi — PASS
3. Laporan — PASS
4. Pengaturan Nama Warung / Pajak — PASS
5. Session setelah browser ditutup — PASS
6. Void Transaksi Admin — PASS
7. Filter kategori POS (Semua / Makanan Dapur / Minuman / Sembako / Snack) — PASS

## Database Operasional Awal

Seluruh transaksi testing telah dikosongkan sebelum penggunaan operasional awal. Master kategori, produk, user, pengaturan, dan stok pembukaan dipertahankan.

Stok pembukaan terakhir yang diverifikasi:

| Produk | Stok |
|---|---:|
| Nasi Goreng Spesial | 10 |
| Es Teh Manis | 50 |
| Beras Premium 5kg | 12 |
| Keripik Singkong | 30 |
| Risoles Frozen | 10 |

## Backend

- Platform: Supabase
- Project: `zsoftwe-pos`
- Frontend authentication: Supabase Auth
- Operational data: Supabase PostgreSQL

## Important Settings

Aplikasi menyimpan nama warung pada tabel `settings` dengan key `business_name`. Tarif pajak juga disimpan pada `settings`.

## File & Versi

- `warung-bahagia-v1.0-final.html` = entry point produksi final
- `warung-bahagia-v1.0-void.html` = core wrapper dengan Void Transaksi
- `category-fix-v2.js` = compatibility fix filter kategori
- `warung-bahagia-demo-supabase-final-v23.html` = source core V23 sebelumnya
- `warung-bahagia-demo-supabase-final-v22.html` = backup build sebelumnya

## Development Rule

**V1.0 Final frozen.** Jangan mengubah baseline produksi untuk pengembangan berikutnya. Pengembangan baru harus menggunakan nomor versi/build baru, menjalani regression test, lalu dipromosikan setelah QA lulus.
