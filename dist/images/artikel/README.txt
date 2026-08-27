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

STATUS: ketiga file itu SUDAH TIDAK DIPAKAI. Artikel "Silo Your Work" kini
memakai tangkapan layar asli dari public/guides/ (lihat di bawah). Tidak ada
lagi artikel yang merujuk ke silo-*.svg, jadi file-nya boleh dihapus kapan saja.


SCREENSHOT ASLI — TARUH DI public/guides/, BUKAN DI SINI
--------------------------------------------------------
Folder ini isinya ilustrasi/aset umum. Tangkapan layar asli per menu ditaruh
terpisah supaya rapi per fitur:

    public/guides/{kategori-slug}/{menu-slug}/langkah-1.png
    public/guides/{kategori-slug}/{menu-slug}/langkah-2.png
    ...

Dipanggil dari markdown tanpa "public":

    ![Teks alt](/guides/dashboard-overview/silo-your-work/langkah-1.png)
    *Caption italic tepat di baris bawahnya, tanpa baris kosong.*

Saran ukuran screenshot: lebar 1440-1600px, format .png untuk tampilan UI
(teks tetap tajam), .jpg untuk foto.
