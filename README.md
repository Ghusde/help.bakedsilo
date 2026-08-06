# BAKED Help Center — Astro starter

Konversi dari struktur HTML statis kamu (`index.html`, `category.html`, `article.html`, `script.js`, `header.js`) ke Astro. Fungsinya sama, tapi kontennya sekarang jadi data-driven dan static-generated.

## Cara jalanin

```bash
npm install
npm run dev
```

Buka `http://localhost:4321`.

## Struktur

```
src/
  data/categories.js      ← persis CATEGORIES + SUBMENUS + ICONS dari script.js kamu
  layouts/Base.astro      ← pengganti header.js + footer manual
  content/artikel/*.md    ← isi artikel (pengganti isi article.html yang di-hardcode)
  content/config.ts       ← schema/validasi frontmatter artikel
  pages/index.astro       ← pengganti index.html
  pages/kategori/[slug].astro   ← pengganti category.html (auto-generate utk 10 kategori)
  pages/artikel/[...slug].astro ← pengganti article.html (auto-generate dari semua .md)
public/
  style.css                ← GANTI dengan style.css asli kamu
  images/                   ← taruh semua gambar di sini (BAKED.png, screenshot artikel, dst)
```

## Cara nambah artikel baru

1. Bikin file baru di `src/content/artikel/nama-artikel.md`
2. Isi frontmatter:
   ```yaml
   ---
   title: Judul Artikel
   lede: Deskripsi singkat (opsional)
   category: slug-kategori   # harus salah satu dari slug di src/data/categories.js
   ---
   ```
3. Tulis isi pakai `## Judul Section` — otomatis muncul di sidebar "Daftar Isi"
4. Save. Halaman baru otomatis ke-generate saat build, tanpa perlu edit routing manual.

## ⚠️ Yang perlu kamu putuskan

Di `article.html` asli kamu, sidebar-nya pakai struktur "Bakesilo Guide → Tutorial Cara Onboarding" yang beda dari 10 kategori di `script.js` (Dashboard & Overview, Financial & Assets, dst). Starter ini aku samakan ke struktur `script.js` karena itu yang lebih lengkap datanya. Kalau ternyata "Bakesilo Guide" itu produk/kategori terpisah, tinggal tambahkan sebagai entry baru di `CATEGORIES`.

## Belum termasuk di starter ini

- `style.css` asli (belum di-upload) — tinggal tempel ke `public/style.css`
- Fitur search box (masih placeholder, belum functional)
- Gambar-gambar artikel — taruh di `public/images/`
