GAMBAR ARTIKEL
==============

Folder ini isinya gambar yang dipakai di dalam file markdown artikel
(src/content/artikel/*.md).

Cara memakainya di markdown:

    ![Teks alt yang menjelaskan gambar](/images/artikel/nama-file.png)
    *Keterangan gambar di bawahnya (opsional, ditulis miring).*

Perhatikan:
- Path dimulai dari /images/... (TANPA "public"), karena isi folder public/
  disajikan langsung dari akar situs.
- Baris keterangan harus TEPAT di bawah baris gambar tanpa baris kosong,
  supaya keduanya jadi satu paragraf dan tampil sebagai caption.
- Selalu isi teks alt-nya. Itu yang dibaca screen reader dan yang muncul
  kalau gambarnya gagal dimuat.


PENTING — file silo-*.svg itu ILUSTRASI SKEMATIK, BUKAN TANGKAPAN LAYAR ASLI
---------------------------------------------------------------------------
Tiga file di bawah ini digambar manual sebagai wireframe supaya artikelnya
bisa langsung terlihat utuh:

    silo-01-buka-menu.svg
    silo-02-pilih-unit.svg
    silo-03-dashboard-tersaring.svg

Bentuknya sengaja dibuat seperti kerangka (bukan meniru tampilan asli), jadi
tidak ada angka atau data yang bisa disalahartikan sebagai data betulan.

Sebelum artikel ini dibaca user beneran, GANTI dengan tangkapan layar asli
dari aplikasi. Caranya cukup timpa file-nya dengan nama yang sama (boleh
ganti ke .png), lalu sesuaikan ekstensi di file markdown-nya. Tidak ada kode
yang perlu disentuh.

Saran ukuran screenshot: lebar 1440-1600px, format .png untuk tampilan UI
(teks tetap tajam), .jpg untuk foto.
