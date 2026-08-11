import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "static",
  site: "https://help.baked.example",
  integrations: [
    react(),
    // applyBaseStyles:false -> Tailwind tidak menyuntikkan preflight/reset,
    // supaya public/style.css yang sudah ada tidak ikut ter-reset.
    // Utility-nya tetap dimuat lewat src/styles/tailwind.css.
    tailwind({ applyBaseStyles: false }),
  ],
  vite: {
    server: {
      watch: {
        // Di Windows, menyalin gambar ke public/ SAAT dev server jalan bisa
        // bikin Vite gagal memasang file watcher: "EBUSY: resource busy or
        // locked", dan seluruh halaman jadi layar error.
        //
        // Penyebabnya file masih dikunci selama proses copy. awaitWriteFinish
        // membuat chokidar menunggu ukuran file berhenti berubah dulu sebelum
        // memprosesnya, jadi tidak pernah menyentuh file yang masih terkunci.
        //
        // CATATAN: sebelumnya ini diselesaikan dengan `ignored:
        // ["**/public/images/**"]`. Cara itu memang menghilangkan EBUSY, tapi
        // efek sampingnya file BARU di folder itu tidak pernah terdeteksi —
        // gambar baru 404 sampai dev server di-restart.
        awaitWriteFinish: {
          stabilityThreshold: 400,
          pollInterval: 100,
        },
      },
    },
  },
});
