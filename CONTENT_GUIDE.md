# CONTENT_GUIDE.md — Aturan Menulis Isi User Guide

File ini pasangan dari CLAUDE.md, tetapi berbeda ranah.

- CLAUDE.md mengatur pembangunan UI dan komponen (Astro, Tailwind, animasi).
- CONTENT_GUIDE.md (file ini) mengatur cara menulis isi teks halaman user
  guide dari screenshot menu BAKED. Dipakai saat tugasnya menulis konten,
  bukan membangun komponen.

---

## 0. Bahasa dan Nada Penulisan

- Bahasa Indonesia formal dan profesional, memakai bahasa baku. Bukan
  bahasa gaul, bukan bahasa santai ala chat.
- Catatan penting: nada ini berbeda dari chatbot BAKEDAI (lihat BAKEDAI.md)
  yang memang dibuat santai untuk percakapan langsung. Laman guide tertulis
  memakai nada lebih formal karena sifatnya dokumentasi resmi perusahaan.
- Nama menu, tombol, dan label UI tetap ditulis dalam Bahasa Inggris persis
  seperti di aplikasi. Contoh: tulis "Generate Report", bukan "Buat Laporan".
- Elemen yang fungsinya tidak jelas dari screenshot harus ditandai dengan
  [PERLU KONFIRMASI]. Jangan mengarang fungsi yang tidak terlihat jelas.

---

## 0.1 ATURAN KERAS: Dilarang Menggunakan Tanda Pisah Panjang (Em Dash "—")

Tanda pisah panjang (—) dilarang digunakan di seluruh konten pada project
ini, dalam bentuk apa pun. Ini aturan keras, bukan preferensi gaya, dan
berlaku untuk setiap kalimat yang ditulis.

Sebagai gantinya, gunakan salah satu dari berikut sesuai konteks kalimat.

- Tanda titik, untuk memisahkan menjadi dua kalimat.
- Tanda koma, untuk memisahkan anak kalimat.
- Kata penghubung seperti "yang", "yaitu", "meliputi", "mencakup", "seperti",
  "sehingga", "karena", "untuk".

Contoh perbaikan:

```
SALAH:
"Silo Your Work adalah laman pengenalan Baked.Silo — menampilkan arah
perusahaan, peta modul, dan jalur onboarding."

BENAR:
"Silo Your Work adalah laman yang menampilkan informasi mengenai arah
perusahaan, peta seluruh modul, dan jalur onboarding."
```

Sebelum menyerahkan draft, periksa ulang setiap kalimat dan pastikan tidak
ada karakter "—" yang tersisa di mana pun dalam teks.

---

## 0.2 Hindari Kesan Tulisan Mesin (Template AI)

Ciri tulisan yang terkesan kaku atau seperti hasil mesin, harus dihindari:

- Frasa pembuka yang berlebihan dan tidak perlu, seperti "Perlu diketahui
  bahwa", "Hal ini menunjukkan bahwa", "Penting untuk dicatat bahwa".
- Struktur kalimat yang monoton, di mana hampir semua kalimat berpola
  "X adalah Y yang Z".
- Pengulangan kata penghubung berat seperti "jadi", "adapun", "hal tersebut"
  secara berlebihan dalam satu paragraf.

Tulisan yang baik untuk dokumentasi ini setara dengan gaya manual produk
profesional yang kredibel, bukan gaya buku pelajaran dan bukan gaya obrolan
santai. Variasikan panjang dan struktur kalimat antar paragraf.

Contoh akhir yang benar untuk pembuka sebuah laman:

```
"Silo Your Work adalah laman yang menampilkan informasi mengenai arah
perusahaan, peta seluruh modul, jalur onboarding, dan kemampuan platform.
Karena bersifat statis, informasi pada laman ini tidak berubah dari waktu
ke waktu."
```

---

## 0.3 Kedalaman Tulisan Menyesuaikan Tipe Halaman

Seberapa detail sebuah laman ditulis TIDAK sama untuk semua tipe. Tentukan
tipe halamannya lebih dulu (lihat bagian 2), baru ikuti aturan di bawah.

### Tipe B (Ringkasan Elemen): wajib ringkas dan komunikatif

Laman Tipe B berfungsi sebagai peta isi, bukan dokumentasi lengkap. Tujuannya
supaya pembaca tahu laman itu berisi apa saja dalam sekali baca, lalu
memutuskan sendiri bagian mana yang ingin didalami. Laman yang terlalu padat
justru membuat pembaca malas membacanya sama sekali.

- Satu butir elemen cukup 1 sampai 3 kalimat, kira-kira 25 sampai 50 kata.
- Tulis dari sudut pandang pembaca, bukan mendaftar isi layar. Gunakan pola
  "Anda dapat ..." untuk hal yang memang bisa dilakukan pembaca.
- Sebut nama UI hanya apabila pembaca perlu mengetik atau mengkliknya.
  Perlu disebut, misalnya "Search a feature" dan "Learn more". Tidak perlu
  disebut, misalnya teks lencana di atas judul seperti "Find Your Way Around"
  atau "Our Purpose & Journey", karena sudah terbaca pada screenshot.
- Daftar panjang yang sudah jelas terlihat pada screenshot tidak perlu disalin
  ulang ke dalam teks. Jelaskan polanya saja, biarkan gambar yang memerinci.
- Apabila sebuah bagian sifatnya murni informasi tanpa ada yang perlu
  dikonfigurasi, ajak pembaca membaca lebih lanjut dengan pola "Anda bisa
  membaca lebih lanjut untuk memahami ..." atau "Anda dapat mempelajari
  lebih lanjut mengenai ...". JANGAN menyatakan secara eksplisit bahwa
  "tidak ada yang perlu diatur di sini" atau sejenisnya, karena kalimat
  semacam itu terkesan menggurui dan tidak perlu.

```
SALAH (Tipe B ditulis sedetail Tipe A, pembaca kelelahan):
"Silo Map. Bagian ini diberi label Find Your Way Around, dengan penjelasan
bahwa seluruh fitur dikelompokkan ke dalam kategori yang jelas. Pencarian
dilakukan melalui kolom Search a feature, yang mencontohkan kata kunci
seperti P&L, Org Chart, Tickets, dan CRM. Di bawahnya terdapat penghitung
jumlah modul dan fitur yang tersedia, penanda Baked.Silo Central sebagai
satu jaringan terhubung, serta jalur tiap modul yang diberi kode berurutan,
yaitu L1 Dashboard & Overview, L2 Financial & Assets, dan seterusnya."

BENAR (ringkas dan komunikatif, gambar yang memerinci):
"Silo Map. Peta seluruh fitur Baked.Silo. Anda dapat mencari menu secara
langsung pada kolom Search a feature, atau menelusurinya per modul apabila
belum tahu nama menu yang dicari."
```

```
SALAH (menggurui, menjelaskan cara pembaca harus bersikap):
"Vision & Mission. Menjelaskan arah yang dituju BAKED beserta nilai yang
dipegang dalam mencapainya. Bagian ini cukup Anda baca sekali untuk
memahami tujuan perusahaan, tidak ada yang perlu diatur di sini."

BENAR (mengajak membaca lebih lanjut, tanpa kesan menggurui):
"Vision & Mission. Menjelaskan arah yang dituju BAKED beserta nilai yang
dipegang dalam mencapainya. Anda bisa membaca lebih lanjut untuk memahami
tujuan perusahaan."
```

### Tipe A dan Tipe C: wajib spesifik

Kedua tipe ini dibaca sambil mengerjakan sesuatu, sehingga pembaca perlu
memastikan layarnya sama persis dengan panduan. Generalisasi justru merugikan
di sini.

- Angka, label, judul, dan teks yang terbaca jelas pada screenshot harus
  disebutkan apa adanya.
- Dilarang meringkas menjadi frasa kosong seperti "beberapa angka" atau
  "informasi tambahan" apabila detail aslinya sebenarnya terlihat.

```
SALAH:
"...serta empat angka ringkasan sistem."

BENAR:
"...serta empat angka ringkasan sistem, yaitu jumlah modul terintegrasi,
persentase system uptime, jumlah sinkronisasi data, dan jumlah total
pengguna."
```

---

## 0.4 Verifikasi Sebelum Draft Dianggap Selesai

Berlaku untuk semua tipe halaman. Cocokkan ulang draft dengan screenshot
sebelum diserahkan.

- Setiap kalimat harus memiliki subjek yang jelas. Hindari pola tanpa subjek
  seperti "Pada [tempat] akan menampilkan ...". Gunakan "Bagian [nama elemen]
  menampilkan ..." atau "Anda dapat ...".
- Nama menu, tombol, dan label ditulis persis seperti di aplikasi, termasuk
  huruf besar kecil dan spasinya. Contoh: "Silo Starts here", bukan "Silo
  Starts Here". "New to BAKED ?", bukan "New to BAKED?".
- Angka yang dapat berubah sewaktu-waktu, seperti jumlah pengguna, persentase
  uptime, atau jumlah fitur, dijelaskan maknanya dan bukan dipatok nilainya.
  Nilai yang ditulis hari ini akan basi.
- Jangan mengarang fitur yang tidak terlihat pada gambar. Elemen yang
  fungsinya tidak jelas ditandai [PERLU KONFIRMASI].
- Sebagian teks asli aplikasi mengandung tanda pisah panjang. Teks seperti itu
  tidak boleh dikutip mentah karena melanggar bagian 0.1. Parafrasekan.
- Jangan tambahkan kalimat penutup yang menjelaskan cara pembaca harus
  bersikap terhadap informasi tersebut, seperti "tidak ada yang perlu
  diatur di sini" atau "Anda tidak perlu melakukan apa pun pada bagian
  ini". Cukup sampaikan isinya, atau ajak membaca lebih lanjut bila relevan
  (lihat 0.3).

---

## 1. Struktur Penyimpanan dan Menyisipkan Screenshot (Situs Statis Tanpa Backend)

Karena project ini menggunakan output: "static" (lihat BAKEDAI.md), tidak
ada proses server yang dapat memproses gambar saat halaman dibuka. Ada dua
konsekuensi dari hal ini.

**A. Anotasi (angka bulat atau kotak merah) harus sudah ada pada file
gambar itu sendiri sebelum dimasukkan ke project.** Proses ini dilakukan
secara manual atau melalui bantuan pengolahan gambar terpisah, bukan
ditambahkan oleh Claude Code saat menulis konten. Claude Code hanya menulis
teks yang merujuk pada gambar yang sudah jadi.

**B. Semua screenshot final disimpan pada folder public/guides, bukan
folder src.** Pendekatan ini paling sederhana untuk situs statis tanpa
backend. File pada folder public disalin apa adanya oleh Astro saat proses
build, sehingga tinggal ditulis menggunakan path biasa pada Markdown, tanpa
perlu import maupun komponen tambahan.

```
public/
└── guides/
    ├── dashboard-overview/
    │   └── silo-your-work/
    │       ├── langkah-1.png
    │       ├── langkah-2.png
    │       └── langkah-3.png
    ├── financial-assets/
    │   └── ...
```

Nama folder mengikuti slug kategori dan slug menu, menggunakan huruf kecil
dengan tanda hubung menggantikan spasi. Struktur ini dibuat sama persis
dengan slug halaman pada src/content, sehingga tetap mudah ditelusuri
meskipun jumlahnya mencapai ratusan.

**C. Cara menyisipkan gambar pada konten, menggunakan format Markdown biasa
dengan path absolut.**

```markdown
![Menu Silo Your Work berada pada urutan pertama](/guides/dashboard-overview/silo-your-work/langkah-1.png)
```

Bukan menggunakan komponen Image dari astro:assets, dan bukan menggunakan
import. Alasannya, sintaks tersebut membutuhkan gambar berada pada folder
src, membutuhkan proses build tambahan untuk resize dan konversi WebP yang
tidak diperlukan untuk dokumentasi internal, serta membuat proses penulisan
konten menjadi lebih rumit dari yang seharusnya.

---

## 2. Tiga Tipe Halaman Guide

### Tipe A. Tutorial Langkah demi Langkah (Tipe Default)

Struktur wajib, dengan urutan H2 yang akan otomatis menjadi Daftar Isi pada
sisi kanan halaman.

```
# [Judul Halaman]
[Deskripsi singkat mengenai fungsi fitur ini secara umum]

## Sebelum Mulai
- Prasyarat yang harus dipenuhi, termasuk tautan ke tutorial lain bila ada
- Catatan mengenai akses atau izin, bila relevan

## Langkah 1. [Kata kerja aksi]
[Penjelasan mengenai langkah ini. Nama menu dan tombol ditulis tebal dan
tetap dalam Bahasa Inggris.]

![Deskripsi singkat gambar](/guides/{kategori-slug}/{menu-slug}/langkah-1.png)

*[Keterangan singkat pada gambar]*

## Langkah 2. [...]
[pola yang sama, menggunakan langkah-2.png]

## Kalau Hasilnya Tidak Sesuai
- Penjelasan gejala, penyebab, dan solusi untuk kasus umum

## Selanjutnya
- Tautan menuju guide terkait berikutnya
```

### Tipe B. Ringkasan Elemen (Tanpa Urutan Langkah)

```
# [Judul Halaman]
[Ringkasan singkat mengenai laman ini]

## Elemen Utama
1. **[Nama elemen]**. Penjelasan singkat mengenai fungsinya.
2. **[Nama elemen]**. Penjelasan singkat mengenai fungsinya.

![Deskripsi gambar](/guides/{kategori-slug}/{menu-slug}/overview.png)

## Selanjutnya
- Tautan menuju guide terkait
```

### Tipe C. Pengaturan Penting (Red Rectangle)

```
# [Judul Halaman]
[Ringkasan mengenai fungsi laman pengaturan ini]

## Area Penting
1. **[Nama field]**. Penjelasan mengapa field ini penting dan dampaknya
   apabila diatur secara keliru.

![Deskripsi gambar](/guides/{kategori-slug}/{menu-slug}/setting.png)

## Langkah Pengaturan
1. ...

## Selanjutnya
- Tautan menuju guide terkait
```

---

## 3. Frontmatter

```yaml
---
title: "Silo Your Work"
category: "Dashboard & Overview"
group: "Tutorial Cara Onboarding"
order: 2
role: ["Admin", "Manager"]
image: "/guides/dashboard-overview/silo-your-work/langkah-1.png"
---
```

---

## 4. Master Prompt (Digunakan Setiap Membuat Satu Halaman Baru)

```
Kamu adalah technical writer untuk helpdesk internal BAKED (BAKEDASTRO).
Tugas kamu adalah mengubah screenshot menu atau fitur menjadi satu halaman
user guide dalam format Markdown, dengan mengikuti CONTENT_GUIDE.md, bukan
prinsip desain pada CLAUDE.md yang khusus untuk kode UI.

KONTEKS:
- Nama Modul/Fitur : {{NAMA_MODUL}}
- Kategori         : {{KATEGORI}}
- Sub-grup sidebar : {{GROUP}}
- Role relevan     : {{ROLE}}
- Tipe halaman     : {{A_tutorial | B_overview | C_setting}}
- Screenshot berada pada: public/guides/{{kategori-slug}}/{{menu-slug}}/
  (langkah-1.png, langkah-2.png, dan seterusnya, sudah dianotasi, jangan
  diedit)

ATURAN:
1. Bahasa Indonesia formal dan profesional, bukan bahasa santai. Nama menu,
   tombol, dan label tetap dalam Bahasa Inggris sesuai aplikasi.
2. DILARANG KERAS menggunakan tanda pisah panjang (—) dalam bentuk apa pun.
   Gunakan titik, koma, atau kata penghubung sebagai gantinya.
3. Sisipkan gambar menggunakan format Markdown biasa dengan path absolut
   menuju public/guides. Jangan menggunakan komponen Image atau import.
4. Ikuti struktur H2 sesuai Tipe yang dipilih.
5. Sesuaikan kedalaman tulisan dengan tipe halaman (lihat bagian 0.3).
   Tipe B ditulis ringkas dan komunikatif, 1 sampai 3 kalimat per elemen,
   memakai pola "Anda dapat ...", dan tidak menyalin ulang daftar panjang
   yang sudah terbaca pada screenshot. Tipe A dan Tipe C ditulis spesifik
   dengan menyebut angka dan label apa adanya.
6. Setiap kalimat harus memiliki subjek yang jelas (lihat bagian 0.4).
7. Jangan pernah menutup penjelasan elemen dengan kalimat yang menjelaskan
   cara pembaca harus bersikap, seperti "tidak ada yang perlu diatur di
   sini". Kalau bagiannya murni informasi, ajak membaca lebih lanjut
   dengan pola "Anda bisa membaca lebih lanjut untuk memahami ...".
8. Jangan mengarang fitur yang tidak terlihat jelas pada gambar.
9. Elemen yang ambigu ditandai dengan [PERLU KONFIRMASI].

OUTPUT: Markdown sesuai struktur Tipe yang dipilih, siap disimpan pada
src/content.
```

---

## 5. Contoh Terisi. Tipe A (Tutorial)

```markdown
---
title: "Silo Your Work"
category: "Dashboard & Overview"
group: "Tutorial Cara Onboarding"
order: 2
role: ["Admin", "Manager"]
---

# Silo Your Work

Silo Your Work adalah laman yang menampilkan informasi mengenai arah
perusahaan, peta seluruh modul, jalur onboarding, dan kemampuan platform.
Karena bersifat statis, informasi pada laman ini tidak berubah dari waktu
ke waktu.

## Sebelum Mulai
- Pastikan sudah menyelesaikan [Cara Melakukan Registrasi](/cara-melakukan-registrasi).
- Apabila menu ini masih meminta akses pada Langkah 2, hubungi admin
  workspace Anda.

## Langkah 1. Buka Menu Silo Your Work
Dari sidebar kiri, masuk ke bagian **Dashboard & Overview**, kemudian klik
**Silo Your Work** yang berada pada urutan paling atas.

![Menu Silo Your Work berada pada urutan pertama](/guides/dashboard-overview/silo-your-work/langkah-1.png)

*Menu Silo Your Work berada pada urutan pertama dalam grup Dashboard & Overview.*

## Langkah 2. Pilih Unit yang Ingin Ditampilkan
[PERLU KONFIRMASI. Belum tersedia screenshot untuk langkah ini.]

## Selanjutnya
- Lanjutkan ke [Executive Overview](/executive-overview)
```

---

## 6. Checklist Sebelum Publish

Bahasa
- [ ] Tidak ada tanda pisah panjang pada seluruh isi konten (lihat 0.1)
- [ ] Nada bahasa formal dan profesional, bukan bahasa santai
- [ ] Setiap kalimat memiliki subjek yang jelas
- [ ] Nama menu dan tombol tetap Bahasa Inggris, sama persis dengan aplikasi,
      termasuk huruf besar kecil dan spasinya
- [ ] Tidak ada kalimat penutup yang menggurui ("tidak ada yang perlu
      diatur di sini" dan sejenisnya)

Kedalaman (lihat 0.3)
- [ ] Tipe halaman dipilih sesuai konten (A, B, atau C)
- [ ] Tipe B: tiap elemen 1 sampai 3 kalimat, memakai pola "Anda dapat ..."
      atau "Anda bisa membaca lebih lanjut untuk ...", dan tidak menyalin
      ulang daftar panjang yang sudah terbaca pada screenshot
- [ ] Tipe A dan C: setiap label, angka, dan teks pada screenshot sudah
      disebutkan apa adanya, tidak ada yang terlewat

Akurasi (lihat 0.4)
- [ ] Tidak ada fitur yang dikarang atau ditebak
- [ ] Angka yang dapat berubah dijelaskan maknanya, bukan dipatok nilainya
- [ ] Elemen yang fungsinya tidak jelas sudah ditandai [PERLU KONFIRMASI]

Teknis
- [ ] Screenshot sudah dianotasi sebelum dimasukkan ke public/guides
- [ ] Path gambar pada Markdown sudah benar dan sudah dicoba dibuka di browser
- [ ] Nomor pada teks sesuai dengan nomor pada screenshot
- [ ] Struktur H2 singkat dan jelas untuk keperluan Daftar Isi
- [ ] Frontmatter sesuai dengan schema src/content
