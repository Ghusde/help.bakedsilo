import { defineCollection, z } from "astro:content";

const artikel = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),

    // Ringkasan singkat di bawah judul.
    // `lede` dipertahankan sebagai alias lama supaya artikel yang sudah ada
    // tidak langsung invalid; template memakai `description ?? lede`.
    description: z.string().optional(),
    lede: z.string().optional(),

    // Slug kategori, harus cocok dengan CATEGORIES di src/data/categories.js
    category: z.string(),

    // Judul grup di sidebar (mis. "Tutorial Cara Onboarding").
    // Kalau kosong, artikel dikelompokkan di bawah nama kategorinya.
    group: z.string().optional(),

    // Urutan di sidebar. Yang tanpa order ditaruh paling belakang.
    order: z.number().optional(),

    // Role yang relevan dengan artikel ini (mis. ["Admin", "Manager"]).
    // Belum dirender di template. Didaftarkan di sini supaya nilainya
    // tervalidasi dan tidak dibuang diam-diam oleh Zod.
    role: z.array(z.string()).optional(),

    // Gambar utama artikel, dipakai sebagai thumbnail. Path absolut
    // menuju public/guides (lihat CONTENT_GUIDE.md bagian 3).
    image: z.string().optional(),
  }),
});

export const collections = { artikel };
