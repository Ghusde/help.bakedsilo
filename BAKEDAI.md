# BAKEDAI — cara menyambungkan ke Claude API

Widget chat-nya sudah jadi dan berjalan: `src/components/ChatWidget.astro`.
Yang belum ada cuma satu — server kecil yang memegang API key.

---

## Kenapa tidak bisa langsung dari widget?

Dua alasan, dua-duanya keras:

1. **Key akan bocor.** Semua isi `src/components/` di-build jadi file yang
   dikirim apa adanya ke browser. Siapa pun yang buka Inspect Element bisa
   membaca `ANTHROPIC_API_KEY` di sana lalu memakainya atas nama tagihanmu.
   Anthropic juga menolak request browser tanpa header khusus, justru supaya
   pola ini tidak dipakai orang.
2. **Site ini static.** `astro.config.mjs` memakai `output: "static"`, jadi
   hasil build cuma HTML/CSS/JS — tidak ada proses server yang bisa menyimpan
   rahasia.

Jadi alurnya: **browser → endpoint milikmu → Claude → balik lagi**.

```
ChatWidget.astro          endpoint kamu              Anthropic
  (browser)                (server, pegang key)
     |  POST /api/bakedai        |                        |
     |  { messages: [...] }      |                        |
     |-------------------------->|  messages.create()     |
     |                           |----------------------->|
     |                           |<-----------------------|
     |<--------------------------|                        |
     |  { reply: "..." }         |                        |
```

---

## Langkah 1 — pasang SDK

```bash
npm install @anthropic-ai/sdk
```

## Langkah 2 — buat endpoint-nya

Contoh di bawah untuk **Vercel** (`api/bakedai.js` di root project). Bentuknya
mirip untuk Netlify Functions atau Cloudflare Workers — yang penting kontrak
request/response-nya sama.

```js
// api/bakedai.js
import Anthropic from "@anthropic-ai/sdk";

// Key dibaca dari environment variable server, JANGAN ditulis di sini.
const client = new Anthropic(); // otomatis membaca ANTHROPIC_API_KEY

const SYSTEM = `Kamu adalah BAKEDAI, asisten pusat bantuan aplikasi BAKED
(aplikasi manajemen bisnis F&B: dashboard, keuangan, proyek, operasional,
procurement, penjualan, HR, dokumen, dan system tools).

Jawab dalam Bahasa Indonesia yang santai tapi jelas. Nama modul dan menu tetap
ditulis dalam Bahasa Inggris persis seperti di aplikasi (contoh: "Profit & Loss",
"Outlet Dashboard"), jangan diterjemahkan.

Jawab ringkas — 1 sampai 3 paragraf pendek. Kalau kamu tidak tahu jawabannya,
katakan terus terang dan arahkan ke it.support@baked.co.id. Jangan mengarang nama
menu, angka, atau langkah yang tidak kamu ketahui.`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { messages } = req.body ?? {};
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "messages kosong" });
  }

  // Batasi panjang riwayat supaya biaya per request tidak lepas kendali.
  const trimmed = messages.slice(-20).map((m) => ({
    role: m.role === "assistant" ? "assistant" : "user",
    content: String(m.content ?? "").slice(0, 4000),
  }));

  try {
    const response = await client.messages.create({
      model: "claude-opus-5",
      // Sengaja kecil: ini balasan chat pendek, bukan dokumen. Kalau nanti
      // BAKEDAI perlu menjelaskan panjang lebar, naikkan angkanya.
      max_tokens: 2048,
      // effort rendah = balasan cepat & murah, cukup untuk tanya-jawab
      // seputar menu. Naikkan ke "high" kalau butuh penalaran lebih dalam.
      output_config: { effort: "low" },
      system: SYSTEM,
      messages: trimmed,
    });

    // Claude Opus 5 bisa menolak permintaan tertentu — cek stop_reason
    // SEBELUM membaca content, karena content bisa kosong saat itu.
    if (response.stop_reason === "refusal") {
      return res.status(200).json({
        reply:
          "Maaf, pertanyaan itu tidak bisa saya bantu. Coba tanyakan hal lain seputar BAKED ya.",
      });
    }

    const reply = response.content
      .filter((b) => b.type === "text")
      .map((b) => b.text)
      .join("\n\n");

    return res.status(200).json({ reply });
  } catch (err) {
    console.error("BAKEDAI error:", err);
    return res.status(500).json({ error: "Gagal menghubungi asisten" });
  }
}
```

## Langkah 3 — simpan API key sebagai environment variable

Di dashboard hosting-mu (Vercel → Settings → Environment Variables):

```
ANTHROPIC_API_KEY = sk-ant-...
```

Untuk tes lokal, taruh di `.env` **dan pastikan `.env` masuk `.gitignore`.**

## Langkah 4 — hidupkan widget-nya

Buka `src/components/ChatWidget.astro`, cari blok `TITIK INTEGRASI CLAUDE API`
di dalam `<script>`, lalu ubah satu baris:

```js
var ENDPOINT = "";            // sebelum
var ENDPOINT = "/api/bakedai"; // sesudah
```

Selesai. Selama `ENDPOINT` masih kosong, widget tetap aman dipakai — ia
menjawab jujur bahwa asistennya belum tersambung dan mengarahkan user ke
`it.support@baked.co.id`, bukan mengarang jawaban.

---

## Catatan biaya & keamanan

- **Batasi siapa yang bisa memanggil endpoint.** Endpoint ini publik. Tanpa
  rate limit, orang bisa memakainya sebagai proxy Claude gratis. Minimal:
  batasi per IP, atau cek `Origin` header cocok dengan domain-mu.
- **Harga Claude Opus 5:** $5 / 1 juta token input, $25 / 1 juta token output.
  Kalau volume chat-nya tinggi dan pertanyaannya sederhana, `claude-sonnet-5`
  jauh lebih murah ($3 / $15) dan sudah lebih dari cukup untuk tanya-jawab FAQ.
- **Widget mengirim seluruh riwayat percakapan** tiap kali user kirim pesan
  (itu memang cara kerja API-nya — Claude tidak menyimpan state). Pemotongan
  `slice(-20)` di atas menjaga biayanya tidak menumpuk pada obrolan panjang.

## Ide lanjutan (opsional)

Isi search index yang sudah ada (`src/data/search-index.js`) bisa disuntikkan
ke `system` prompt supaya BAKEDAI tahu persis daftar menu dan artikel yang
tersedia, lalu bisa menautkan user langsung ke halaman yang tepat.
