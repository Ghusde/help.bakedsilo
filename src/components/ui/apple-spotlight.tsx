'use client';

import { cn } from '@/lib/utils';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight, Search } from 'lucide-react';
import React, { useEffect, useMemo, useRef, useState } from 'react';

// CATATAN PENTING soal styling:
// Tailwind di project ini jalan dengan preflight DIMATIKAN (lihat tailwind.config.mjs),
// supaya public/style.css yang sudah ada tidak ter-reset. Konsekuensinya beberapa hal
// yang biasanya diurus preflight harus ditulis eksplisit di sini:
//   - `border` hanya mengatur border-width, jadi perlu `border-solid` agar terlihat.
//   - <input> masih bawa style default browser, jadi perlu border-none/p-0/font-inherit.

export interface Shortcut {
  label: string;
  icon: React.ReactNode;
  link: string;
}

export interface SearchResult {
  icon: React.ReactNode;
  label: string;
  description: string;
  link: string;
}

const SVGFilter = () => {
  return (
    <svg width="0" height="0" className="absolute">
      <filter id="blob">
        <feGaussianBlur stdDeviation="10" in="SourceGraphic" />
        <feColorMatrix
          values="
      1 0 0 0 0
      0 1 0 0 0
      0 0 1 0 0
      0 0 0 18 -9
    "
          result="blob"
        />
        <feBlend in="SourceGraphic" in2="blob" />
      </filter>
    </svg>
  );
};

interface ShortcutButtonProps {
  icon: React.ReactNode;
  link: string;
}

const ShortcutButton = ({ icon, link }: ShortcutButtonProps) => {
  return (
    <a href={link}>
      <div className="rounded-full cursor-pointer hover:shadow-lg opacity-30 hover:opacity-100 transition-[opacity,shadow] duration-200">
        <div className="size-16 aspect-square flex items-center justify-center">{icon}</div>
      </div>
    </a>
  );
};

interface SpotlightPlaceholderProps {
  text: string;
  className?: string;
}

const SpotlightPlaceholder = ({ text, className }: SpotlightPlaceholderProps) => {
  return (
    <motion.div
      layout
      className={cn(
        'absolute inset-x-0 text-stone flex items-center pointer-events-none z-10 rounded-md px-1 overflow-hidden',
        className
      )}
    >
      <AnimatePresence mode="popLayout">
        <motion.p
          layoutId={`placeholder-${text}`}
          key={`placeholder-${text}`}
          initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -10, filter: 'blur(5px)' }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="m-0 whitespace-nowrap"
        >
          {text}
        </motion.p>
      </AnimatePresence>
    </motion.div>
  );
};

interface SpotlightInputProps {
  placeholder: string;
  hidePlaceholder: boolean;
  value: string;
  onChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholderClassName?: string;
  autoFocus?: boolean;
  inputId?: string;
  onFocus?: () => void;
}

const SpotlightInput = ({
  placeholder,
  hidePlaceholder,
  value,
  onChange,
  onKeyDown,
  placeholderClassName,
  autoFocus = true,
  inputId,
  onFocus
}: SpotlightInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Mode inline TIDAK boleh auto-focus: komponennya tampil sejak halaman
    // dibuka, jadi fokus otomatis bakal merebut fokus & menggeser scroll.
    if (autoFocus) inputRef.current?.focus();
  }, [autoFocus]);

  return (
    // Klik di mana pun pada pill (termasuk ikon & padding) memberi fokus ke input,
    // bukan cuma tepat di atas teksnya.
    <div
      className="flex items-center w-full justify-start gap-3 px-6 h-14 cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      <motion.div layoutId="search-icon" className="flex text-stone">
        <Search />
      </motion.div>
      {/* text-lg, bukan text-2xl: pada lebar pill ini 24px bikin placeholder
          kepanjangan dan terpotong. min-w-0 + overflow-hidden menjaga teks
          panjang tetap terpotong rapi, bukan meluber keluar pill. */}
      <div className="flex-1 relative text-base min-w-0 overflow-hidden">
        {!hidePlaceholder && (
          <SpotlightPlaceholder text={placeholder} className={placeholderClassName} />
        )}

        <motion.input
          ref={inputRef}
          id={inputId}
          layout="position"
          type="text"
          value={value}
          autoComplete="off"
          spellCheck={false}
          aria-label="Cari"
          onFocus={onFocus}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={onKeyDown}
          className="w-full bg-transparent outline-none border-none p-0 m-0 font-[inherit] text-[inherit] text-ink"
        />
      </div>
    </div>
  );
};

interface SearchResultCardProps extends SearchResult {
  isLast: boolean;
  isActive: boolean;
}

const SearchResultCard = ({
  icon,
  label,
  description,
  link,
  isLast,
  isActive
}: SearchResultCardProps) => {
  return (
    <a href={link} className="overflow-hidden w-full group/card block">
      <div
        className={cn(
          'flex items-center text-ink justify-start gap-3 py-2 px-2 rounded-xl w-full',
          isActive && 'bg-surface shadow-md',
          isLast && 'rounded-b-3xl'
        )}
      >
        {/* text-ink: ikon hasil pencarian ikut hitam, seragam dengan kartu
            di halaman depan. PNG kategori memakai currentColor lewat mask. */}
        <div className="size-[22px] [&_svg]:stroke-[1.6] [&_svg]:size-[18px] aspect-square flex items-center justify-center text-ink">
          {icon}
        </div>
        <div className="flex flex-col min-w-0">
          <p className="font-medium m-0 truncate text-ink text-[14px] leading-[1.35]">{label}</p>
          <p className="m-0 truncate text-stone text-[12px] leading-[1.35]">{description}</p>
        </div>
        <div
          className={cn(
            'flex-1 flex items-center justify-end transition-opacity duration-200',
            isActive ? 'opacity-100' : 'opacity-0'
          )}
        >
          <ChevronRight className="size-[18px]" />
        </div>
      </div>
    </a>
  );
};

interface SearchResultsContainerProps {
  searchResults: SearchResult[];
  activeIndex: number;
  onHover: (index: number | null) => void;
}

const SearchResultsContainer = ({
  searchResults,
  activeIndex,
  onHover
}: SearchResultsContainerProps) => {
  return (
    <motion.div
      layout
      onMouseLeave={() => onHover(null)}
      className="px-2 border-t border-solid border-line flex flex-col bg-surface-2 max-h-96 overflow-y-auto w-full py-2"
    >
      {searchResults.length === 0 && (
        <p className="text-sm text-stone text-center py-6 m-0">Tidak ada hasil untuk pencarian ini.</p>
      )}

      {searchResults.map((result, index) => {
        return (
          <motion.div
            key={`${result.link}-${index}`}
            onMouseEnter={() => onHover(index)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              delay: index * 0.05,
              duration: 0.2,
              ease: 'easeOut'
            }}
          >
            <SearchResultCard
              icon={result.icon}
              label={result.label}
              description={result.description}
              link={result.link}
              isActive={index === activeIndex}
              isLast={index === searchResults.length - 1}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

interface AppleSpotlightProps {
  results?: SearchResult[];
  shortcuts?: Shortcut[];
  isOpen?: boolean;
  handleClose?: () => void;
  placeholder?: string;
  maxResults?: number;
  /** Tampil menyatu di dalam halaman (hero), bukan overlay fixed. */
  inline?: boolean;
  inputId?: string;
  /** Saran yang langsung tampil saat difokus, sebelum user mengetik apa pun. */
  defaultResults?: SearchResult[];
}

const AppleSpotlight = ({
  results = [],
  shortcuts = [],
  isOpen = true,
  handleClose = () => {},
  placeholder = 'Cari modul atau panduan...',
  maxResults = 8,
  inline = false,
  inputId,
  defaultResults = []
}: AppleSpotlightProps) => {
  const [hovered, setHovered] = useState(false);
  const [hoveredSearchResult, setHoveredSearchResult] = useState<number | null>(null);
  const [hoveredShortcut, setHoveredShortcut] = useState<number | null>(null);
  const [searchValue, setSearchValue] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [focused, setFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Reset tiap kali dibuka ulang
  useEffect(() => {
    if (isOpen) {
      setSearchValue('');
      setActiveIndex(0);
      setHoveredSearchResult(null);
    }
  }, [isOpen]);

  const searchResults = useMemo(() => {
    const q = searchValue.trim().toLowerCase();
    if (!q) return [];

    const tokens = q.split(/\s+/);
    const scored: { r: SearchResult; sc: number }[] = [];

    for (const r of results) {
      const label = r.label.toLowerCase();
      const hay = `${label} ${r.description.toLowerCase()}`;
      if (!tokens.every((t) => hay.includes(t))) continue;

      let sc: number;
      if (label === q) sc = 100;
      else if (label.startsWith(q)) sc = 80;
      else if (new RegExp(`\\b${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`).test(label)) sc = 60;
      else if (label.includes(q)) sc = 45;
      else sc = 20;

      scored.push({ r, sc });
    }

    scored.sort((a, b) => b.sc - a.sc || a.r.label.length - b.r.label.length);
    return scored.slice(0, maxResults).map((s) => s.r);
  }, [searchValue, results, maxResults]);

  useEffect(() => {
    setActiveIndex(0);
  }, [searchValue]);

  // Sebelum user mengetik, tampilkan saran (kategori) supaya tidak perlu
  // menebak huruf awal dulu.
  const displayResults = searchValue.trim()
    ? searchResults
    : defaultResults.slice(0, maxResults);

  // Di mode inline panelnya selalu ada, jadi yang menentukan buka/tutup daftar
  // hasil adalah fokus. Di mode overlay, `isOpen` sudah mewakili itu.
  const listOpen = inline ? focused : isOpen;
  const showResults = listOpen && (searchValue.trim() !== '' || displayResults.length > 0);

  // Klik di luar komponen menutup daftar hasil (khusus mode inline —
  // mode overlay sudah punya backdrop sendiri untuk menangkap klik).
  useEffect(() => {
    if (!inline) return;

    const onPointerDown = (ev: MouseEvent | TouchEvent) => {
      const el = containerRef.current;
      if (el && !el.contains(ev.target as Node)) {
        setFocused(false);
        setSearchValue('');
        setHoveredSearchResult(null);
      }
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
    };
  }, [inline]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setFocused(false);
      setSearchValue('');
      e.currentTarget.blur();
      return;
    }

    // Navigasi berlaku untuk apa pun yang sedang tampil — hasil pencarian
    // maupun daftar saran.
    if (!displayResults.length) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHoveredSearchResult(null);
      setActiveIndex((i) => (i + 1) % displayResults.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHoveredSearchResult(null);
      setActiveIndex((i) => (i - 1 + displayResults.length) % displayResults.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const target = displayResults[activeIndex];
      if (target) window.location.href = target.link;
    }
  };

  const shownIndex = hoveredSearchResult !== null ? hoveredSearchResult : activeIndex;

  // Isi panel identik untuk kedua mode; yang berbeda cuma pembungkusnya.
  const panel = (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setHoveredShortcut(null);
      }}
      onClick={(e) => e.stopPropagation()}
      style={{ filter: 'url(#blob)' }}
      className={cn(
        // text-left wajib: .hero-inner memakai text-align:center dan itu mewaris ke sini.
        'w-full flex items-center justify-end gap-4 z-20 group text-left',
        '[&>div]:bg-surface-2 [&>div]:text-ink [&>div]:rounded-full [&>div]:backdrop-blur-xl',
        '[&_svg]:size-5 [&_svg]:stroke-[1.6]',
        'max-w-2xl'
      )}
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          layoutId="search-input-container"
          transition={{
            layout: {
              duration: 0.5,
              type: 'spring',
              bounce: 0.2
            }
          }}
          style={{
            borderRadius: '30px'
          }}
          className="h-full w-full flex flex-col items-center justify-start z-10 relative shadow-lg overflow-hidden border border-solid border-line"
        >
          {/* Logika placeholder mengikuti komponen aslinya: hanya berubah saat
              hasil benar-benar di-hover. Kalau digerakkan oleh activeIndex
              (yang defaultnya 0), kotak putihnya nyangkut tampil terus. */}
          <SpotlightInput
            placeholder={
              hoveredShortcut !== null
                ? shortcuts[hoveredShortcut].label
                : hoveredSearchResult !== null && searchResults[hoveredSearchResult]
                ? searchResults[hoveredSearchResult].label
                : placeholder
            }
            placeholderClassName={
              hoveredSearchResult !== null ? 'text-ink bg-surface' : 'text-stone'
            }
            hidePlaceholder={!(hoveredSearchResult !== null || !searchValue)}
            value={searchValue}
            onChange={setSearchValue}
            onKeyDown={handleKeyDown}
            autoFocus={!inline}
            inputId={inputId}
            onFocus={() => setFocused(true)}
          />

          {showResults && (
            <SearchResultsContainer
              searchResults={displayResults}
              activeIndex={shownIndex}
              onHover={setHoveredSearchResult}
            />
          )}
        </motion.div>

        {hovered &&
          !searchValue &&
          shortcuts.map((shortcut, index) => (
            <motion.div
              key={`shortcut-${index}`}
              onMouseEnter={() => setHoveredShortcut(index)}
              layout
              initial={{ scale: 0.7, x: -1 * (64 * (index + 1)) }}
              animate={{ scale: 1, x: 0 }}
              exit={{
                scale: 0.7,
                x: 1 * (16 * (shortcuts.length - index - 1) + 64 * (shortcuts.length - index - 1))
              }}
              transition={{
                duration: 0.8,
                type: 'spring',
                bounce: 0.2,
                delay: index * 0.05
              }}
              className="rounded-full cursor-pointer"
            >
              <ShortcutButton icon={shortcut.icon} link={shortcut.link} />
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );

  if (inline) {
    return (
      <div ref={containerRef} className="relative w-full max-w-2xl mx-auto">
        <SVGFilter />
        {/* Spacer setinggi bar. Panelnya di-absolute-kan supaya hasil pencarian
            menimpa konten di bawahnya, bukan mendorongnya turun (hindari CLS). */}
        <div className="h-14" aria-hidden="true" />
        <div className="absolute inset-x-0 top-0 z-40 flex justify-center">{panel}</div>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
            filter: 'blur(20px) url(#blob)',
            scaleX: 1.3,
            scaleY: 1.1,
            y: -10
          }}
          animate={{
            opacity: 1,
            filter: 'blur(0px) url(#blob)',
            scaleX: 1,
            scaleY: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            filter: 'blur(20px) url(#blob)',
            scaleX: 1.3,
            scaleY: 1.1,
            y: 10
          }}
          transition={{
            stiffness: 550,
            damping: 50,
            type: 'spring'
          }}
          className="fixed inset-0 z-[80] flex flex-col items-center justify-center px-5"
          onClick={handleClose}
        >
          <SVGFilter />

          {panel}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { AppleSpotlight };
