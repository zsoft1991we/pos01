# Warung Bahagia POS — Project Status

## Baseline Produksi

- Release: **V1.0**
- Current enhancement build: **v24-void**
- Repository branch: `main`
- Legacy production source: `warung-bahagia-demo-supabase-final-v23.html`
- Web entry point: `index.html` → `warung-bahagia-v1.0-void.html`
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
- Implementasi backend menggunakan RPC `public.void_pos_transaction(uuid,text)` dengan `SECURITY DEFINER` dan `search_path` yang di-hardening.

## QA V1.0

Alur utama v23 sebelumnya telah lulus pengujian online:

1. Transaksi Kasir
2. Pesanan / Detail Transaksi
3. Laporan
4. Pengaturan Nama Warung / Pajak
5. Session setelah browser ditutup

**Regression test Void Transaksi masih menunggu pengujian pengguna sebelum v24-void ditetapkan sebagai baseline final.**

## Backend

- Platform: Supabase
- Project: `zsoftwe-pos`
- Frontend authentication: Supabase Auth
- Operational data: Supabase PostgreSQL

## Important Settings

Aplikasi menyimpan nama warung yang dapat dikonfigurasi pada tabel `settings` dengan key `business_name`. Konfigurasi tarif pajak juga disimpan pada `settings`.

## File & Versi

- `warung-bahagia-demo-supabase-final-v23.html` = source produksi V1.0 yang sudah lulus QA sebelumnya
- `warung-bahagia-v1.0-void.html` = entry/enhancement build untuk Void Transaksi
- `warung-bahagia-demo-supabase-final-v22.html` = backup build sebelumnya

## Development Rule

Perlakukan V1.0 sebagai baseline stabil. Perubahan berikutnya harus menggunakan nomor versi/build baru, diuji regresi, lalu dipromosikan menjadi baseline setelah QA lulus.
