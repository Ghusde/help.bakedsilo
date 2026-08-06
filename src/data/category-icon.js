import fs from "node:fs";
import path from "node:path";
import { ICONS } from "./categories.js";

// Ikon kategori berbasis file gambar, dengan fallback otomatis ke SVG bawaan.
//
// Cara pakai: taruh file di `public/images/icons/<slug-kategori>.png`.
// Tidak perlu mengedit kode apa pun — pengecekan dilakukan saat build.
// Selama file-nya belum ada, kategori itu tetap memakai ikon SVG lama,
// jadi migrasinya bisa satu per satu.
//
// Urutan prioritas ekstensi: .svg lebih dulu karena tetap bisa diwarnai CSS
// dan tajam di ukuran berapa pun.

const DIR_REL = "public/images/icons";
const EXTS = [".svg", ".png", ".webp"];

// Di-cache supaya tidak berulang kali menyentuh disk saat membangun 10+ halaman.
const cache = new Map();

function findImage(slug) {
  if (cache.has(slug)) return cache.get(slug);

  let found = null;
  for (const ext of EXTS) {
    const abs = path.join(process.cwd(), DIR_REL, slug + ext);
    if (fs.existsSync(abs)) {
      found = `/images/icons/${slug}${ext}`;
      break;
    }
  }

  cache.set(slug, found);
  return found;
}

/**
 * @returns {{ src: string|null, svg: string }}
 *   `src` terisi kalau ada file gambarnya; kalau null, pakai `svg`.
 */
export function categoryIcon(slug, iconKey) {
  return {
    src: findImage(slug),
    svg: ICONS[iconKey] || ICONS.dot,
  };
}
