/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  corePlugins: {
    // Preflight mematikan margin heading, border default, dll.
    // Project ini punya public/style.css sendiri, jadi reset-nya dimatikan.
    preflight: false,
  },
  theme: {
    extend: {
      // Semua warna menunjuk ke CSS variable di public/style.css, jadi utility
      // Tailwind ikut berganti otomatis saat tema di-toggle — tanpa perlu
      // menulis varian `dark:` di tiap komponen.
      colors: {
        // --- token lama (dipakai komponen search) ---
        // JANGAN ubah nilai `ink` & `stone`: keduanya dipakai di
        // apple-spotlight.tsx, jadi mengubahnya = mengubah tampilan dropdown
        // search yang statusnya beku. Lihat catatan di bawah.
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        paper: "var(--paper)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        rust: "var(--rust)",
        "rust-dark": "var(--rust-dark)",
        "rust-bright": "var(--rust-bright)",
        sand: "var(--sand)",
        "sand-soft": "var(--sand-soft)",
        stone: "var(--stone)",
        line: "var(--line)",

        // --- palet redesign home ---
        cream: "#F5F0E6",
        clay: "#D85A30",
        "clay-light": "#F0997B",
        "clay-dark": "#993C1D",
        charcoal: "#2C2C2A",
        "line-warm": "#E8E2D6",
        "line-dark": "#4A3D34",
        mist: "#B4B2A9",
        "mist-light": "#D3D1C7",
      },
    },
  },
  plugins: [],
};
