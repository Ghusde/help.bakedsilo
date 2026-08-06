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
        // Di Windows, menyalin gambar ke public/ SAAT dev server jalan bikin
        // Vite gagal memasang file watcher: "EBUSY: resource busy or locked",
        // dan seluruh halaman berubah jadi layar error.
        //
        // File di public/ disalin apa adanya dan tidak butuh HMR, jadi cukup
        // dikeluarkan dari watcher. Konsekuensinya: setelah menambah/mengganti
        // gambar, refresh browser manual (dev server tidak perlu di-restart).
        ignored: ["**/public/images/**"],
      },
    },
  },
});
