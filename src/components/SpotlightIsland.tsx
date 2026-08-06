'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  AlertCircle,
  Banknote,
  Binoculars,
  Calendar,
  ChevronRight,
  Circle,
  CircleDollarSign,
  Cloud,
  Database,
  FileText,
  Folder,
  Globe,
  GraduationCap,
  Heart,
  Key,
  Landmark,
  LayoutGrid,
  Lightbulb,
  Link as LinkIcon,
  Mail,
  Megaphone,
  MessageSquare,
  Monitor,
  Package,
  Pencil,
  PlusCircle,
  QrCode,
  Scale,
  Search,
  Settings,
  ShoppingCart,
  Telescope,
  Ticket,
  ToggleRight,
  Truck,
  TrendingUp,
  User,
  UserPlus,
  Users
} from 'lucide-react';

import { AppleSpotlight, type SearchResult, type Shortcut } from '@/components/ui/apple-spotlight';

/** Key ikon di src/data/categories.js -> komponen lucide. */
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  megaphone: Megaphone,
  financial: Landmark,
  doc: FileText,
  pencil: Pencil,
  delivery: Truck,
  gear: Settings,
  crm: Users,
  binoculars: Binoculars,
  cloud: Cloud,
  people: Users,
  ticket: Ticket,
  grid: LayoutGrid,
  trend: TrendingUp,
  coin: CircleDollarSign,
  scale: Scale,
  cash: Banknote,
  globe: Globe,
  bulb: Lightbulb,
  chat: MessageSquare,
  plus: PlusCircle,
  box: Package,
  qr: QrCode,
  cart: ShoppingCart,
  mail: Mail,
  folder: Folder,
  user: User,
  calendar: Calendar,
  key: Key,
  toggle: ToggleRight,
  apps: LayoutGrid,
  link: LinkIcon,
  telescope: Telescope,
  heart: Heart,
  cap: GraduationCap,
  userplus: UserPlus,
  drive: Database,
  monitor: Monitor,
  alert: AlertCircle,
  search: Search,
  dot: Circle
};

export interface IndexEntry {
  /** judul */ t: string;
  /** subjudul / lokasi */ s: string;
  /** url */ u: string;
  /** key ikon (fallback lucide) */ i: string;
  /** path PNG ikon kategori; dipakai kalau ada */ img?: string | null;
}

interface Props {
  index: IndexEntry[];
  shortcuts?: { label: string; icon: string; link: string }[];
  /** Tampil menyatu di hero (bukan overlay). */
  inline?: boolean;
}

const INLINE_INPUT_ID = 'spotlight-input';

function renderIcon(key: string, img?: string | null) {
  // PNG kategori dirender sebagai CSS mask supaya warnanya bisa diatur lewat
  // `currentColor` — sama seperti ikon di kartu halaman depan. Kalau file-nya
  // belum ada, jatuh ke ikon lucide.
  if (img) {
    return (
      <span
        aria-hidden="true"
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          backgroundColor: 'currentColor',
          WebkitMask: `url('${img}') center / contain no-repeat`,
          mask: `url('${img}') center / contain no-repeat`
        }}
      />
    );
  }
  const Icon = ICON_MAP[key] || Circle;
  return <Icon />;
}

export default function SpotlightIsland({ index, shortcuts = [], inline = false }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const results: SearchResult[] = useMemo(
    () =>
      index.map((e) => ({
        icon: renderIcon(e.i, e.img),
        label: e.t,
        description: e.s,
        link: e.u
      })),
    [index]
  );

  // Saran default sebelum user mengetik: entri kategori (10 teratas).
  // Jatuh balik ke hasil pertama kalau penanda "Kategori" tidak ditemukan.
  const suggestions: SearchResult[] = useMemo(() => {
    const cats = results.filter((_, n) => index[n]?.s === 'Kategori');
    return (cats.length ? cats : results).slice(0, 8);
  }, [results, index]);

  const shortcutItems: Shortcut[] = useMemo(
    () =>
      shortcuts.map((s) => ({
        label: s.label,
        icon: renderIcon(s.icon),
        link: s.link
      })),
    [shortcuts]
  );

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const onKeyDown = (ev: KeyboardEvent) => {
      if ((ev.metaKey || ev.ctrlKey) && ev.key.toLowerCase() === 'k') {
        ev.preventDefault();
        // Mode inline: barnya memang sudah tampil, jadi ⌘K cukup memberi fokus.
        if (inline) {
          document.getElementById(INLINE_INPUT_ID)?.focus();
        } else {
          setIsOpen((v) => !v);
        }
      } else if (ev.key === 'Escape' && !inline) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [inline]);

  // Kunci scroll body selama overlay terbuka (tidak berlaku di mode inline).
  useEffect(() => {
    if (inline) return;
    document.body.classList.toggle('spot-lock', isOpen);
    return () => document.body.classList.remove('spot-lock');
  }, [isOpen, inline]);

  if (inline) {
    return (
      <AppleSpotlight
        results={results}
        defaultResults={suggestions}
        // Shortcut bulat dimatikan di mode inline: posisinya mengambang ke kanan
        // panel dan bakal keluar dari lebar hero.
        shortcuts={[]}
        inline
        inputId={INLINE_INPUT_ID}
      />
    );
  }

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-[70] bg-[rgba(12,10,8,.42)] backdrop-blur-[8px]"
          onClick={close}
          aria-hidden="true"
        />
      )}
      <AppleSpotlight
        results={results}
        defaultResults={suggestions}
        shortcuts={shortcutItems}
        isOpen={isOpen}
        handleClose={close}
      />
    </>
  );
}
