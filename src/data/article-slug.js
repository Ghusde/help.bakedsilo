import { CATEGORIES, SUBMENUS } from "./categories.js";

// Sumber tunggal untuk slug artikel.
//
// Masalah yang dipecahkan: skema lama `kategori--label` tidak bisa membedakan
// item berlabel sama di grup berbeda. Contohnya "Profit & Loss" ada di grup
// "Baked Bali Collective" DAN "Adhya Baked Corp" — keduanya menunjuk file yang
// sama, padahal isinya seharusnya berbeda.
//
// Nama grup HANYA disisipkan kalau labelnya memang bentrok di kategori itu.
// Dengan begitu URL yang sudah ada tidak ikut berubah tanpa alasan.

const norm = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

/** key: `${categorySlug}|${groupHeader}|${label}` -> slug unik */
const SLUG_BY_KEY = new Map();

for (const cat of CATEGORIES) {
  const sections = SUBMENUS[cat.slug] || [];

  // Hitung frekuensi tiap base slug di dalam satu kategori.
  const freq = new Map();
  for (const sec of sections) {
    for (const it of sec.items) {
      const base = norm(it.l);
      freq.set(base, (freq.get(base) || 0) + 1);
    }
  }

  const used = new Set();

  sections.forEach((sec, si) => {
    for (const it of sec.items) {
      const base = norm(it.l);
      let slug;

      if (freq.get(base) === 1) {
        slug = `${cat.slug}--${base}`;                       // tidak bentrok
      } else if (sec.header) {
        slug = `${cat.slug}--${norm(sec.header)}--${base}`;  // bedakan via grup
      } else {
        slug = `${cat.slug}--${si + 1}--${base}`;            // grup tanpa nama
      }

      // Jaring pengaman: kalau setelah semua itu masih kembar juga.
      let unique = slug;
      let n = 2;
      while (used.has(unique)) unique = `${slug}-${n++}`;
      used.add(unique);

      SLUG_BY_KEY.set(`${cat.slug}|${sec.header ?? ""}|${it.l}`, unique);
    }
  });
}

/** Slug artikel untuk satu item menu. */
export function articleSlug(categorySlug, label, groupHeader) {
  return (
    SLUG_BY_KEY.get(`${categorySlug}|${groupHeader ?? ""}|${label}`) ??
    `${categorySlug}--${norm(label)}`
  );
}

/** URL lengkap ke halaman artikel. */
export function articleHref(categorySlug, label, groupHeader) {
  return `/artikel/${articleSlug(categorySlug, label, groupHeader)}`;
}
