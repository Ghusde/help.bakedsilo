IKON KATEGORI
=============

Taruh file di folder ini dengan nama = slug kategori.
Tidak perlu mengedit kode apa pun; dicek otomatis saat build.

Nama file yang dikenali (pilih salah satu ekstensi):

  dashboard-overview.png
  financial-assets.png
  project-management.png
  operations-management.png
  procurement-management.png
  tspoonbaked.png
  customer-sales.png
  human-resources.png
  documents-communication.png
  system-tools.png

Ekstensi yang didukung, urut prioritas: .svg  ->  .png  ->  .webp
(kalau ada dua-duanya, .svg yang dipakai)

SPESIFIKASI
-----------
- Ukuran render : 17px di kartu home, 22px di header halaman kategori
- Siapkan min.  : 48x48 px  (idealnya 64x64) supaya tajam di layar retina
- Latar         : transparan
- Bentuk        : persegi (1:1). Rasio lain tetap aman, tidak akan gepeng.

CATATAN
-------
- Selama file belum ada, kategori itu tetap memakai ikon SVG lama.
  Jadi bisa diganti satu per satu, tidak harus 10 sekaligus.
- PNG tidak bisa ikut berubah warna saat hover (SVG bisa).
  Kalau punya versi vektornya, pakai .svg saja.
- Ikon di dropdown pencarian TIDAK ikut berubah (jalur terpisah,
  memakai lucide-react).
