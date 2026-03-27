"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// ── Helpers ────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
});

// ── Cursor spotlight ───────────────────────────────────────
function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fn = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.background = `radial-gradient(700px circle at ${e.clientX - r.left}px ${e.clientY - r.top}px, var(--cursor-spotlight), transparent 55%)`;
    };
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);
  return <div ref={ref} className="absolute inset-0 pointer-events-none z-1" />;
}

// ── SVG circuit board background ──────────────────────────
function CircuitBg() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="circ" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
          <path d="M60 0 L60 35 L95 35 L95 60 L120 60" style={{ stroke: "var(--svg-stroke-mid)", animation: "svg-flow 3s linear infinite" }} strokeWidth="0.6" fill="none" strokeDasharray="5 5" />
          <path d="M0 60 L25 60 L25 85 L60 85 L60 120" style={{ stroke: "var(--svg-stroke-faint)", animation: "svg-flow 4.5s linear infinite reverse" }} strokeWidth="0.6" fill="none" strokeDasharray="5 5" />
          <path d="M0 0 L35 0 L35 35" style={{ stroke: "var(--svg-stroke-faint)", animation: "svg-flow 6s linear infinite" }} strokeWidth="0.5" fill="none" strokeDasharray="4 6" />
          <circle cx="60" cy="35" r="2.5" style={{ fill: "var(--svg-fill-strong)", animation: "svg-pulse 2.5s ease-in-out 0s infinite" }} />
          <circle cx="95" cy="60" r="2.5" style={{ fill: "var(--svg-fill-strong)", animation: "svg-pulse 2.5s ease-in-out 0.5s infinite" }} />
          <circle cx="25" cy="85" r="2.5" style={{ fill: "var(--svg-stroke-mid)", animation: "svg-pulse 2.5s ease-in-out 1s infinite" }} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circ)" opacity="0.45" />
    </svg>
  );
}

// ── Floating geometric shapes ──────────────────────────────
const GEO_SHAPES = [
  { path: "M12 2 L22 22 L2 22Z", x: "7%", y: "12%", s: 22, dur: 6, del: 0 },
  { path: "M12 2 L22 7 L22 17 L12 22 L2 17 L2 7Z", x: "90%", y: "18%", s: 20, dur: 8, del: 1 },
  { path: "M3 3 H21 V21 H3Z", x: "4%", y: "65%", s: 16, dur: 7, del: 2 },
  { path: "M12 2 L22 12 L12 22 L2 12Z", x: "93%", y: "72%", s: 18, dur: 9, del: 0.5 },
  { path: "M12 3 A9 9 0 1 1 11.999 3Z", x: "48%", y: "88%", s: 12, dur: 5, del: 1.5 },
  { path: "M12 2 L22 22 L2 22Z", x: "78%", y: "52%", s: 13, dur: 7.5, del: 3 },
];

function FloatingShapes() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {GEO_SHAPES.map((g, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: g.x, top: g.y }}
          animate={{ y: [0, -18, 0], rotate: [0, 360], opacity: [0.25, 0.6, 0.25] }}
          transition={{ duration: g.dur, delay: g.del, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width={g.s} height={g.s} viewBox="0 0 24 24">
            <path d={g.path} style={{ stroke: "var(--svg-stroke-mid)" }} strokeWidth="1.5" fill="none" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

// ── Typewriter ─────────────────────────────────────────────
const ROLES = ["Full-Stack Developer", "Backend Engineer", "Project Coordinator", "Agile Team Lead"];

function Typewriter() {
  const [idx, setIdx] = useState(0);
  const [sub, setSub] = useState(0);
  const [del, setDel] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      const word = ROLES[idx];
      if (!del && sub === word.length) { setTimeout(() => setDel(true), 1400); return; }
      if (del && sub === 0) { setDel(false); setIdx((i) => (i + 1) % ROLES.length); return; }
      setSub((s) => s + (del ? -1 : 1));
    }, del ? 55 : 85);
    return () => clearTimeout(t);
  }, [sub, del, idx]);

  useEffect(() => {
    const t = setInterval(() => setBlink((b) => !b), 530);
    return () => clearInterval(t);
  }, []);

  return (
    <span>
      {ROLES[idx].substring(0, sub)}
      <span className="text-sky-500 dark:text-sky-400" style={{ opacity: blink ? 1 : 0 }}>|</span>
    </span>
  );
}

// ── Animated terminal window ───────────────────────────────
const TERMINAL_LINES = [
  { delay: 0.6,  text: "const developer = {",              color: "text-sky-400 dark:text-sky-300" },
  { delay: 0.9,  text: '  name: "Sahil Patel",',           color: "text-emerald-400" },
  { delay: 1.2,  text: '  location: "Melbourne, AU",',     color: "text-emerald-400" },
  { delay: 1.5,  text: '  stack: [',                       color: "text-zinc-300 dark:text-zinc-400" },
  { delay: 1.7,  text: '    "Next.js", "FastAPI",',        color: "text-amber-400" },
  { delay: 1.9,  text: '    "PostgreSQL", "AWS",',         color: "text-amber-400" },
  { delay: 2.1,  text: "  ],",                             color: "text-zinc-300 dark:text-zinc-400" },
  { delay: 2.4,  text: '  visa: "485 · No restrictions",', color: "text-emerald-400" },
  { delay: 2.7,  text: '  status: "open to work ✓",',     color: "text-emerald-300" },
  { delay: 3.0,  text: "};",                               color: "text-sky-400 dark:text-sky-300" },
];

function TerminalWindow() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    TERMINAL_LINES.forEach((line, i) => {
      const timer = setTimeout(() => setVisibleLines(i + 1), line.delay * 1000);
      return () => clearTimeout(timer);
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 36 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.72, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full"
    >
      {/* Glow behind terminal */}
      <div className="absolute -inset-4 bg-sky-500/8 dark:bg-indigo-500/10 blur-3xl rounded-3xl pointer-events-none" />

      {/* Terminal frame */}
      <div className="relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-950/95 shadow-2xl shadow-zinc-900/20 dark:shadow-black/40 overflow-hidden backdrop-blur-sm">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/80">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-amber-400" />
          <span className="w-3 h-3 rounded-full bg-emerald-400" />
          <span className="ml-3 font-mono text-xs text-zinc-400 dark:text-zinc-500">portfolio.ts</span>
        </div>

        {/* Code body */}
        <div className="p-5 font-mono text-sm leading-7 min-h-[280px]">
          {TERMINAL_LINES.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: i < visibleLines ? 1 : 0 }}
              transition={{ duration: 0.15 }}
              className={`${line.color} whitespace-pre`}
            >
              {line.text}
              {i === visibleLines - 1 && visibleLines < TERMINAL_LINES.length && (
                <span
                  className="inline-block w-2 h-4 bg-sky-400 ml-0.5 align-middle"
                  style={{ animation: "terminal-blink 1s step-end infinite" }}
                />
              )}
            </motion.div>
          ))}
          {visibleLines >= TERMINAL_LINES.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-2 text-zinc-500 dark:text-zinc-600 flex items-center gap-1"
            >
              <span className="text-emerald-500">▶</span>
              <span className="text-zinc-400">ready</span>
              <span
                className="inline-block w-2 h-4 bg-emerald-500 ml-0.5 align-middle"
                style={{ animation: "terminal-blink 1s step-end infinite" }}
              />
            </motion.div>
          )}
        </div>

        {/* Bottom status bar */}
        <div className="flex items-center gap-4 px-4 py-2 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/80">
          <span className="font-mono text-[10px] text-emerald-500 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            TypeScript
          </span>
          <span className="font-mono text-[10px] text-zinc-400">UTF-8</span>
          <span className="font-mono text-[10px] text-sky-500 ml-auto">Ln 10, Col 2</span>
        </div>
      </div>

      {/* Floating tech tags */}
      <motion.div
        className="absolute -right-4 top-[10%] flex flex-col gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {["Ship it, then refine", "API-first thinking", "AI as a tool", "Systems over heroics"].map((tag, i) => (
          <motion.div
            key={tag}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 + i * 0.12 }}
            whileHover={{ x: -5, scale: 1.06 }}
            className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/90 dark:bg-zinc-950/95 border border-sky-300/60 dark:border-sky-500/25 text-sky-700 dark:text-sky-400 backdrop-blur-sm shadow-lg shadow-sky-500/10 cursor-default whitespace-nowrap"
          >
            {tag}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

// ── Magnetic button ────────────────────────────────────────
function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 280, damping: 18 });
  const sy = useSpring(y, { stiffness: 280, damping: 18 });
  const onMove = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.28);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.28);
  };
  const onLeave = () => { x.set(0); y.set(0); };
  return (
    <motion.div ref={ref} style={{ x: sx, y: sy }} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </motion.div>
  );
}

// ── Scroll cue ────────────────────────────────────────────
function ScrollCue() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
    >
      <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-zinc-500">scroll</span>
      <motion.div
        className="w-px h-10 bg-linear-to-b from-sky-500 dark:from-sky-400 to-transparent"
        animate={{ scaleY: [0, 1, 0] }}
        style={{ originY: "top" }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

// ── Main hero ──────────────────────────────────────────────
export default function Hero() {
  return (
    <main className="relative min-h-screen bg-background flex items-center overflow-hidden">
      <CircuitBg />
      <CursorSpotlight />

      <div
        className="absolute inset-0 z-2 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="absolute inset-0 z-3"
        style={{ background: "radial-gradient(ellipse 85% 75% at 50% 0%, transparent 25%, var(--background) 78%)" }}
      />

      {/* Glow blobs */}
      <motion.div
        className="absolute -top-16 -left-32 w-170 h-170 rounded-full bg-indigo-600/10 blur-[160px] pointer-events-none z-3"
        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-140 h-140 rounded-full bg-sky-500/8 blur-[140px] pointer-events-none z-3"
        animate={{ scale: [1, 1.18, 1], opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <FloatingShapes />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32 w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* ── Text column ── */}
          <div className="order-2 md:order-1">
            <motion.p
              {...fadeUp(0)}
              className="font-mono text-sky-500 dark:text-sky-400 text-sm tracking-widest uppercase mb-5 flex items-center gap-3"
            >
              <span className="block w-8 h-px bg-sky-500/50 dark:bg-sky-400/50" />
              Hey, I&apos;m
            </motion.p>

            <motion.h1
              {...fadeUp(0.08)}
              className="text-5xl sm:text-6xl md:text-6xl lg:text-8xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-5 leading-none"
            >
              Sahil
              <br />
              <span className="relative inline-block text-sky-600 dark:text-sky-400">
                Patel.
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-linear-to-r from-sky-600 via-sky-400 dark:from-sky-400 dark:via-sky-300 to-transparent"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                />
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.17)}
              className="text-xl sm:text-2xl text-zinc-500 dark:text-zinc-400 font-light mb-4 max-w-xl font-mono min-h-8"
            >
              <Typewriter />
            </motion.p>

            <motion.p
              {...fadeUp(0.24)}
              className="text-zinc-600 dark:text-zinc-500 max-w-lg leading-relaxed mb-9"
            >
              <b className="text-base lg:text-lg dark:text-zinc-400 font-semibold lg:font-medium">
                Owning full product delivery cycles — from JIRA to production.
              </b>{" "}
              <br />
              Comfortable leading Agile teams while staying deeply technical across Next.js, PostgreSQL, and cloud.
              Applies AI as a force multiplier, not a shortcut.
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.31)}
              className="flex flex-col sm:flex-row gap-3 mb-12 w-full sm:w-auto"
            >
              <Magnetic>
                <Link
                  href="/projects"
                  className="flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-500 dark:bg-sky-600 dark:hover:bg-sky-500 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-lg shadow-sky-500/25 hover:shadow-sky-500/45 hover:shadow-xl"
                >
                  View my work
                  <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
                    <ArrowUpRight size={16} />
                  </motion.span>
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  href="/resume"
                  className="flex items-center justify-center gap-2 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 px-6 py-3 rounded-xl font-medium transition-all"
                >
                  Resume
                </Link>
              </Magnetic>
              <Magnetic>
                <a
                  href="mailto:s.d.patel9910@gmail.com"
                  className="flex items-center justify-center gap-2 bg-transparent hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 px-6 py-3 rounded-xl font-medium transition-all"
                >
                  Get in touch
                </a>
              </Magnetic>
            </motion.div>

            {/* Social links */}
            <motion.div {...fadeUp(0.38)} className="flex items-center gap-5">
              <a
                href="https://github.com/sahilpatel9910"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
              >
                <motion.div whileHover={{ scale: 1.2, rotate: -6 }} whileTap={{ scale: 0.88 }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </motion.div>
              </a>
              <a
                href="https://linkedin.com/in/sd9910"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
              >
                <motion.div whileHover={{ scale: 1.2, rotate: 6 }} whileTap={{ scale: 0.88 }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </motion.div>
              </a>
              <span className="w-px h-4 bg-zinc-300 dark:bg-zinc-700" />
              <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Melbourne, AU
              </span>
            </motion.div>
          </div>

          {/* ── Terminal column ── */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end w-full">
            <div className="w-full max-w-md">
              <TerminalWindow />
            </div>
          </div>
        </div>
      </div>

      <ScrollCue />
    </main>
  );
}
