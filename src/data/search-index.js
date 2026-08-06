import { CATEGORIES, SUBMENUS } from "./categories.js";
import { articleSlug } from "./article-slug.js";
import { categoryIcon } from "./category-icon.js";

/**
 * Index pencarian Spotlight: kategori + seluruh sub-menu.
 * Bentuknya sengaja pendek (t/s/u/i) karena ikut terkirim ke client.
 *
 * @param availableSlugs Set slug artikel yang file .md-nya benar-benar ada.
 *   Item yang artikelnya belum ada TETAP masuk index (biar tetap bisa
 *   ditemukan), tapi diarahkan ke halaman kategorinya — supaya hasil
 *   pencarian tidak pernah berujung 404. Kalau argumen ini tidak diisi,
 *   semua item dianggap sudah ada (perilaku lama).
 */
export function buildSearchIndex(availableSlugs = null) {
  return CATEGORIES.flatMap((cat) => {
    // `img` = ikon PNG milik kategori. Semua hasil dari kategori ini memakai
    // ikon yang sama, jadi hasil pencarian langsung terbaca mengelompok
    // dan konsisten dengan kartu di halaman depan.
    const img = categoryIcon(cat.slug, cat.icon).src;

    return [
      { t: cat.label, s: "Kategori", u: `/kategori/${cat.slug}`, i: cat.icon, img },
      ...(SUBMENUS[cat.slug] || []).flatMap((sec) =>
        sec.items.map((item) => {
          const slug = articleSlug(cat.slug, item.l, sec.header);
          const ready = !availableSlugs || availableSlugs.has(slug);
          return {
            t: item.l,
            s: sec.header ? `${cat.label} › ${sec.header}` : cat.label,
            u: ready ? `/artikel/${slug}` : `/kategori/${cat.slug}`,
            i: item.i,
            img,
          };
        })
      ),
    ];
  });
}

export const SEARCH_INDEX = buildSearchIndex();

/** Shortcut bulat yang muncul saat hover — 4 kategori teratas. */
export const SEARCH_SHORTCUTS = CATEGORIES.slice(0, 4).map((c) => ({
  label: c.label,
  icon: c.icon,
  link: `/kategori/${c.slug}`,
}));
