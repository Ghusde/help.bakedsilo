import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import {
  ArrowUp,
  ChevronLeft,
  ImageIcon,
  Mic,
  MessageCircle,
  MoreHorizontal,
  Paperclip,
  Smile,
  X,
} from "lucide-react";

/* ===================================================================
 * BAKEDAI — widget chat mengambang
 * ===================================================================
 * Satu file, React + TypeScript + Tailwind. Tidak ada dependency baru:
 * react, react-dom, dan lucide-react sudah terpasang di project ini.
 *
 * CATATAN PENTING SOAL TAILWIND DI PROJECT INI
 * `corePlugins.preflight` DIMATIKAN (lihat tailwind.config.mjs), jadi
 * tidak ada reset bawaan sama sekali:
 *   - <button> masih membawa background, border, dan font default browser
 *   - <textarea> masih membawa border, outline, dan resize handle
 *   - utility `border` hanya mengatur LEBAR, bukan style -> garis tak muncul
 * Karena itu ada blok <style> berisi reset seperlunya di bawah, dan garis
 * ditulis lewat inline style (`1px solid ...`) supaya style-nya ikut.
 * =================================================================== */

/* -------------------------------------------------------------------
 * Palet
 * -------------------------------------------------------------------
 * Sengaja dikumpulkan di satu objek, bukan disebar sebagai bg-[#1C1C1E]
 * di seluruh markup: ganti tema cukup di sini, dan nilainya tidak
 * tercecer di 30 tempat. Nilai persis mengikuti spesifikasi.
 * ----------------------------------------------------------------- */
const C = {
  panel: "#1C1C1E",
  header: "#232325",
  agentBubble: "#2E2E31",
  text: "#FFFFFF",
  meta: "#8E8E93",
  accent: "#E2572B",
  divider: "rgba(255,255,255,0.08)",
  composerBorder: "rgba(255,255,255,0.9)",
  sendIdle: "rgba(255,255,255,0.12)",
} as const;

/* -------------------------------------------------------------------
 * Model data
 * ----------------------------------------------------------------- */
export type ChatRole = "user" | "agent";

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
  timestamp: Date;
}

/* ===================================================================
 * TITIK INTEGRASI — satu-satunya fungsi yang perlu diubah nanti
 * ===================================================================
 * Ganti isi fungsi ini dengan fetch ke endpoint milikmu sendiri.
 *
 * JANGAN memanggil api.anthropic.com langsung dari sini: file ini
 * di-build dan dikirim apa adanya ke browser, jadi ANTHROPIC_API_KEY
 * yang ditaruh di sini bisa dibaca siapa pun lewat Inspect Element.
 * Key harus dipegang serverless function milikmu. Contoh kode server
 * lengkapnya ada di BAKEDAI.md (root project).
 *
 * Bentuk akhirnya kira-kira begini:
 *
 *   const res = await fetch("/api/bakedai", {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json" },
 *     body: JSON.stringify({
 *       messages: history.map((m) => ({
 *         role: m.role === "agent" ? "assistant" : "user",
 *         content: m.content,
 *       })),
 *     }),
 *   });
 *   if (!res.ok) throw new Error(`HTTP ${res.status}`);
 *   const data = (await res.json()) as { reply: string };
 *   return data.reply;
 * =================================================================== */
async function sendToAgent(history: ChatMessage[]): Promise<string> {
  // Stub sementara: menunda sebentar supaya indikator mengetik terlihat,
  // lalu menjawab APA ADANYA. Sengaja tidak mengarang jawaban seolah-olah
  // asistennya sudah jalan — user tidak boleh menunggu balasan yang tidak
  // akan pernah datang.
  await new Promise((resolve) => setTimeout(resolve, 900));

  const last = history[history.length - 1]?.content ?? "";
  return (
    `Pertanyaan Anda sudah saya terima${last ? "" : ""}, tapi asisten BAKEDAI belum tersambung ke server ` +
    `sehingga saya belum bisa menjawabnya.\n\n` +
    `Sementara ini silakan pakai pencarian di halaman utama, atau hubungi tim kami di it.support@baked.co.id.`
  );
}

/* -------------------------------------------------------------------
 * Util
 * ----------------------------------------------------------------- */
function relativeTime(then: Date, now: number): string {
  const seconds = Math.floor((now - then.getTime()) / 1000);
  if (seconds < 60) return "Baru saja";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} mnt lalu`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} jam lalu`;
  return `${Math.floor(hours / 24)} hr lalu`;
}

let seq = 0;
const newId = () => `m${Date.now().toString(36)}${(seq++).toString(36)}`;

/* -------------------------------------------------------------------
 * Penyimpanan sesi
 * -------------------------------------------------------------------
 * Situs ini memakai ViewTransitions, jadi island ini DI-MOUNT ULANG tiap
 * kali user pindah halaman. Tanpa ini, percakapan terhapus tiap klik menu.
 * Isinya hilang sendiri saat tab ditutup.
 * ----------------------------------------------------------------- */
const STORE_KEY = "bakedai:v2";

interface Persisted {
  messages: Array<{ id: string; role: ChatRole; content: string; timestamp: string }>;
  open: boolean;
}

function loadSession(): Persisted | null {
  try {
    const raw = sessionStorage.getItem(STORE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Persisted;
    return Array.isArray(parsed?.messages) ? parsed : null;
  } catch {
    return null;
  }
}

function saveSession(messages: ChatMessage[], open: boolean): void {
  try {
    const payload: Persisted = {
      open,
      messages: messages.map((m) => ({ ...m, timestamp: m.timestamp.toISOString() })),
    };
    sessionStorage.setItem(STORE_KEY, JSON.stringify(payload));
  } catch {
    /* mode privat / kuota penuh — abaikan, chat tetap jalan */
  }
}

/* -------------------------------------------------------------------
 * Props
 * ----------------------------------------------------------------- */
export interface BakedAIChatProps {
  agentName?: string;
  agentSubtitle?: string;
  /** Slot logo merek. Kosongkan untuk memakai lambang bawaan. */
  agentAvatar?: ReactNode;
  greeting?: string;
  /** TODO: arahkan ke halaman kebijakan privasi begitu halamannya ada. */
  privacyHref?: string;
}

export default function BakedAIChat({
  agentName = "BAKEDAI",
  agentSubtitle = "Tim kami juga siap membantu",
  agentAvatar,
  greeting = "Halo 👋\n\nAnda sedang berbicara dengan BAKEDAI. Ada yang bisa dibantu seputar modul, laporan, atau alur kerja di BAKED?",
  privacyHref = "#",
}: BakedAIChatProps) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [draft, setDraft] = useState("");
  const [typing, setTyping] = useState(false);
  const [now, setNow] = useState(() => Date.now());

  const logRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  /* --- seed + pulihkan percakapan (sekali saat mount) --- */
  useEffect(() => {
    const saved = loadSession();
    if (saved && saved.messages.length > 0) {
      setMessages(
        saved.messages.map((m) => ({ ...m, timestamp: new Date(m.timestamp) })),
      );
      setOpen(saved.open);
      return;
    }
    setMessages([
      { id: newId(), role: "agent", content: greeting, timestamp: new Date() },
    ]);
  }, [greeting]);

  useEffect(() => {
    if (messages.length > 0) saveSession(messages, open);
  }, [messages, open]);

  /* --- label waktu ikut berjalan selama panel terbuka --- */
  useEffect(() => {
    if (!open) return;
    const id = window.setInterval(() => setNow(Date.now()), 30_000);
    return () => window.clearInterval(id);
  }, [open]);

  /* --- selalu gulir ke pesan terbaru --- */
  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing, open]);

  /* --- textarea tumbuh 1 -> 4 baris --- */
  const resize = useCallback(() => {
    const el = inputRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 90)}px`; // 4 baris x 22.5px
  }, []);
  useEffect(resize, [draft, open, resize]);

  /* --- Esc menutup panel --- */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const canSend = draft.trim().length > 0 && !typing;

  const handleSend = useCallback(async () => {
    const text = draft.trim();
    if (!text || typing) return;

    const outgoing: ChatMessage = {
      id: newId(),
      role: "user",
      content: text,
      timestamp: new Date(),
    };
    const history = [...messages, outgoing];

    setMessages(history);
    setDraft("");
    setTyping(true);
    setNow(Date.now());

    try {
      const reply = await sendToAgent(history);
      setMessages((prev) => [
        ...prev,
        { id: newId(), role: "agent", content: reply, timestamp: new Date() },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: newId(),
          role: "agent",
          content:
            "Maaf, sambungan ke asisten sedang bermasalah.\n\nCoba lagi sebentar lagi, atau hubungi it.support@baked.co.id.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setTyping(false);
      setNow(Date.now());
      inputRef.current?.focus();
    }
  }, [draft, messages, typing]);

  const resetThread = useCallback(() => {
    setMessages([
      { id: newId(), role: "agent", content: greeting, timestamp: new Date() },
    ]);
    setDraft("");
    setTyping(false);
    inputRef.current?.focus();
  }, [greeting]);

  return (
    <div className="bai-root fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3.5">
      {/* Reset untuk preflight yang dimatikan + keyframes. Elemen <style>
          otomatis display:none, jadi tidak mengganggu layout. */}
      <style>{`
.bai-root button{background:none;border:0;padding:0;margin:0;font:inherit;color:inherit;cursor:pointer;-webkit-appearance:none;appearance:none}
.bai-root button:disabled{cursor:default}
.bai-root textarea{border:0;outline:0;background:transparent;padding:0;margin:0;font:inherit;resize:none;-webkit-appearance:none;appearance:none}
.bai-root p{margin:0}
.bai-panel{animation:baiIn .26s cubic-bezier(.22,1,.36,1) both}
@keyframes baiIn{from{opacity:0;transform:translateY(14px) scale(.96)}to{opacity:1;transform:none}}
.bai-msg{animation:baiMsg .24s cubic-bezier(.22,1,.36,1) both}
@keyframes baiMsg{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
.bai-dot{animation:baiDot 1.2s ease-in-out infinite}
@keyframes baiDot{0%,60%,100%{opacity:.3;transform:translateY(0)}30%{opacity:1;transform:translateY(-4px)}}
.bai-scroll{scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.18) transparent}
.bai-scroll::-webkit-scrollbar{width:6px}
.bai-scroll::-webkit-scrollbar-thumb{background:rgba(255,255,255,.18);border-radius:999px}
@media (prefers-reduced-motion:reduce){
  .bai-panel,.bai-msg{animation:none}
  .bai-dot{animation:none;opacity:.55}
}
      `}</style>

      {open && (
        <section
          role="dialog"
          aria-modal="false"
          aria-label={`Obrolan dengan ${agentName}`}
          className="bai-panel flex w-[380px] max-w-[calc(100vw-32px)] flex-col overflow-hidden rounded-2xl shadow-2xl"
          style={{
            background: C.panel,
            color: C.text,
            height: "min(660px, calc(100vh - 120px))",
          }}
        >
          {/* ---------------- HEADER ---------------- */}
          <header
            className="flex h-16 flex-none items-center gap-3 px-4"
            style={{ background: C.header, borderBottom: `1px solid ${C.divider}` }}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Kembali"
              className="flex h-8 w-8 flex-none items-center justify-center rounded-lg transition-colors duration-150 hover:bg-white/10"
              style={{ color: C.meta }}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Slot logo merek — isi lewat prop `agentAvatar`. */}
            <span
              className="flex h-9 w-9 flex-none items-center justify-center overflow-hidden rounded-full"
              style={{ background: agentAvatar ? "transparent" : C.accent }}
              aria-hidden="true"
            >
              {agentAvatar ?? <BrandMark />}
            </span>

            <span className="flex min-w-0 flex-1 flex-col leading-tight">
              <strong className="truncate text-[15px] font-semibold" style={{ color: C.text }}>
                {agentName}
              </strong>
              <small className="truncate text-[13px]" style={{ color: C.meta }}>
                {agentSubtitle}
              </small>
            </span>

            <div className="flex flex-none items-center gap-2">
              <button
                type="button"
                onClick={resetThread}
                aria-label="Mulai obrolan baru"
                title="Mulai obrolan baru"
                className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-150 hover:bg-white/10"
                style={{ color: C.meta }}
              >
                <MoreHorizontal size={20} />
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Tutup obrolan"
                className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-150 hover:bg-white/10"
                style={{ color: C.meta }}
              >
                <X size={20} />
              </button>
            </div>
          </header>

          {/* ---------------- PESAN ---------------- */}
          <div ref={logRef} className="bai-scroll flex flex-1 flex-col gap-4 overflow-y-auto p-4" role="log" aria-live="polite">
            {messages.map((m) =>
              m.role === "agent" ? (
                <div key={m.id} className="bai-msg flex flex-col items-start gap-1.5">
                  <Bubble background={C.agentBubble} color={C.text}>
                    {m.content}
                  </Bubble>
                  <span className="pl-1 text-[12px]" style={{ color: C.meta }}>
                    {agentName} • AI Agent • {relativeTime(m.timestamp, now)}
                  </span>
                </div>
              ) : (
                <div key={m.id} className="bai-msg flex justify-end">
                  <Bubble background={C.accent} color={C.text}>
                    {m.content}
                  </Bubble>
                </div>
              ),
            )}

            {typing && (
              <div className="bai-msg flex justify-start">
                <div
                  className="flex items-center gap-1.5 rounded-2xl px-4 py-[18px]"
                  style={{ background: C.agentBubble }}
                  aria-label={`${agentName} sedang mengetik`}
                >
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="bai-dot block h-1.5 w-1.5 rounded-full"
                      style={{ background: C.meta, animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ---------------- COMPOSER ---------------- */}
          <form
            className="flex-none px-4"
            onSubmit={(e) => {
              e.preventDefault();
              void handleSend();
            }}
          >
            <div
              className="rounded-xl p-3"
              style={{ border: `1px solid ${C.composerBorder}` }}
            >
              <textarea
                ref={inputRef}
                rows={1}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => {
                  // Enter kirim, Shift+Enter baris baru. isComposing dicek supaya
                  // Enter yang menutup input IME tidak ikut mengirim.
                  if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
                    e.preventDefault();
                    void handleSend();
                  }
                }}
                placeholder="Ajukan pertanyaan..."
                aria-label={`Pertanyaan untuk ${agentName}`}
                className="block w-full max-h-[90px] overflow-y-auto text-[15px] leading-[1.5] placeholder:text-[#8E8E93]"
                style={{ color: C.text }}
              />

              <div className="mt-3 flex items-center justify-between">
                {/* Empat aksi ini belum punya fungsi — lihat catatan di bawah file. */}
                <div className="flex items-center gap-4">
                  <ComposerIcon label="Lampirkan berkas"><Paperclip size={20} /></ComposerIcon>
                  <ComposerIcon label="Emoji"><Smile size={20} /></ComposerIcon>
                  <ComposerIcon label="Kirim gambar"><ImageIcon size={20} /></ComposerIcon>
                  <ComposerIcon label="Pesan suara"><Mic size={20} /></ComposerIcon>
                </div>

                <button
                  type="submit"
                  disabled={!canSend}
                  aria-label="Kirim pesan"
                  className="flex h-9 w-9 flex-none items-center justify-center rounded-full transition-colors duration-150 disabled:opacity-50"
                  style={{
                    background: canSend ? C.accent : C.sendIdle,
                    color: C.text,
                  }}
                >
                  <ArrowUp size={18} />
                </button>
              </div>
            </div>

            {/* ---------------- FOOTER ---------------- */}
            <p className="py-3 text-center text-[12px]" style={{ color: C.meta }}>
              Dengan chat, Anda menyetujui{" "}
              <a
                href={privacyHref}
                className="underline underline-offset-2"
                style={{ color: C.meta }}
              >
                Kebijakan Privasi
              </a>
            </p>
          </form>
        </section>
      )}

      {/* ---------------- LAUNCHER ---------------- */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? `Tutup obrolan dengan ${agentName}` : `Buka obrolan dengan ${agentName}`}
        className="flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition-transform duration-200 hover:-translate-y-0.5"
        style={{ background: C.accent, color: C.text }}
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}

/* -------------------------------------------------------------------
 * Bagian kecil
 * ----------------------------------------------------------------- */

/** Balon pesan. Paragraf dipisah baris kosong, jaraknya 12px. */
function Bubble({
  background,
  color,
  children,
}: {
  background: string;
  color: string;
  children: string;
}) {
  const paragraphs = children.split(/\n{2,}/);
  return (
    <div
      className="flex max-w-[85%] flex-col gap-3 rounded-2xl px-4 py-3.5 text-[15px] leading-[1.5]"
      style={{ background, color }}
    >
      {paragraphs.map((p, i) => (
        // Isi ditaruh sebagai teks, bukan HTML — balasan model tidak boleh
        // bisa menyuntikkan markup ke halaman.
        <p key={i} className="whitespace-pre-wrap break-words">
          {p}
        </p>
      ))}
    </div>
  );
}

function ComposerIcon({ label, children }: { label: string; children: ReactNode }) {
  return (
    <button
      type="button"
      title={`${label} — belum tersedia`}
      aria-label={`${label} (belum tersedia)`}
      className="flex items-center justify-center transition-colors duration-150 hover:text-white"
      style={{ color: C.meta }}
    >
      {children}
    </button>
  );
}

/** Lambang bawaan, dipakai kalau prop `agentAvatar` tidak diisi. */
function BrandMark() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-5 w-5" aria-hidden="true">
      <circle cx="16" cy="16" r="5" fill="#fff" />
      <circle cx="16" cy="4.8" r="2.7" fill="#fff" />
      <circle cx="27.2" cy="16" r="2.7" fill="#fff" opacity=".8" />
      <circle cx="16" cy="27.2" r="2.7" fill="#fff" opacity=".6" />
      <circle cx="4.8" cy="16" r="2.7" fill="#fff" opacity=".8" />
    </svg>
  );
}
