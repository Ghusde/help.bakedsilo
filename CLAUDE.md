
# CLAUDE.md — BAKEDASTRO Project Guide

Panduan ini WAJIB diikuti Claude Code setiap kali mengerjakan project ini. Tujuannya: output UI selalu modern, cepat, dan sesuai selera pemilik project — bukan tebak-tebakan generik.

## Stack Project
- Framework: Astro
- Styling: (isi sesuai project — Tailwind CSS direkomendasikan kalau belum ada)
- Struktur: `src/components`, `src/layouts`, `src/pages`, `src/content`, `src/data`

## Prinsip Desain (WAJIB)
1. **Modern & minimal** — hindari default browser look. Gunakan spacing yang lega, typography yang jelas (bukan Arial/Times generik).
2. **Kecepatan render adalah prioritas** — pilih pendekatan paling ringan dulu (CSS transitions/animations native atau View Transitions API bawaan Astro) sebelum menambah library berat.
3. **Animasi terasa natural, bukan berlebihan** — gunakan easing yang smooth (`cubic-bezier`, bukan `linear`), durasi 150–400ms untuk micro-interaction, 400–800ms untuk transisi halaman/section.
4. **Konsisten** — semua komponen baru harus mengikuti design token (warna, radius, shadow, font) yang sudah ada di `style.css` / config Tailwind. Jangan bikin skema warna baru sembarangan.
5. **Mobile-first & responsive** — selalu cek breakpoint kecil dulu.
6. **Accessible** — kontras warna cukup, elemen interaktif punya focus state yang jelas.

## Sumber Komponen UI: 21st MCP
- Sebelum membangun komponen UI dari nol, **cek dulu ke 21st MCP** (`search` tool) untuk referensi komponen React/Tailwind yang sudah teruji secara visual.
- Kalau butuh komponen baru yang custom, gunakan `generate` dari 21st MCP, lalu **adaptasi ke sintaks Astro** (`.astro` component atau React island dengan `client:load`/`client:visible` sesuai kebutuhan interaktivitas).
- Jangan pasang komponen client-side React kalau sebenarnya bisa statis — pakai `client:*` directive sehemat mungkin supaya Astro tetap cepat (zero-JS by default).

## Library Animasi yang Diizinkan
Urutan preferensi (dari paling ringan ke paling berat):
1. **CSS native** (`@keyframes`, `transition`) — default untuk hover, micro-interaction sederhana.
2. **Astro View Transitions** (`<ClientRouter />` / `transition:animate`) — untuk transisi antar halaman.
3. **Framer Motion** — kalau butuh animasi kompleks berbasis state di komponen React island.
4. **GSAP** — untuk animasi scroll-based/timeline yang rumit (parallax, scroll-triggered reveal).

Jangan pakai lebih dari satu library animasi berat sekaligus tanpa alasan jelas — ini bikin bundle size bengkak.

## Alur Kerja yang Diharapkan
1. Sebelum ubah/bikin komponen besar, **rencanakan struktur dulu** secara singkat (bukan langsung nulis kode).
2. Kalau ambigu soal styling/animasi yang diminta, **pilih pendekatan paling modern & performant**, lalu jelasin asumsi itu secara singkat — jangan nanya balik untuk hal kecil.
3. Setelah bikin komponen, **jalankan build/dev server** untuk pastikan tidak ada error sebelum melapor selesai.
4. Kalau tersedia MCP Playwright/browser, **screenshot hasilnya** dan cek visual sebelum bilang "done".

## Hal yang HARUS Dihindari
- Jangan pakai Bootstrap/Material UI generik — gak sesuai vibe modern.
- Jangan hardcode warna/spacing acak di luar design token.
- Jangan tambah dependency besar (moment.js, jquery, dll) tanpa alasan kuat.
- Jangan bikin animasi yang bikin Cumulative Layout Shift (CLS) tinggi.

## Referensi Cepat
- Style global: `src/style.css` / `public/style.css`
- Layout utama: `src/layouts/Base.astro`
- Komponen: `src/components/`
