"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, FileText } from "lucide-react";

const RESUME_URL =
  "https://drive.google.com/file/d/1X2F9ni6M3oBgjM81GT3O4SDLOYgADaWi/view?usp=sharing";

// Convert Google Drive view URL to embed URL
const EMBED_URL =
  "https://drive.google.com/file/d/1X2F9ni6M3oBgjM81GT3O4SDLOYgADaWi/preview";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-sky-500 dark:text-sky-400 text-xs tracking-widest uppercase mb-3 flex items-center gap-3"
          >
            <span className="block w-6 h-px bg-sky-500/50" />
            CV
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.07 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6"
          >
            Resume
          </motion.h1>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all shadow-lg shadow-sky-500/25 hover:shadow-sky-500/45"
            >
              <ArrowUpRight size={15} />
              Open in Google Drive
            </a>
            <a
              href={`https://drive.google.com/uc?export=download&id=1X2F9ni6M3oBgjM81GT3O4SDLOYgADaWi`}
              className="inline-flex items-center gap-2 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 px-5 py-2.5 rounded-xl text-sm font-medium transition-all"
            >
              <Download size={15} />
              Download PDF
            </a>
          </motion.div>
        </div>

        {/* Embedded PDF */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-xl shadow-zinc-900/5 dark:shadow-black/20"
        >
          {/* Toolbar strip */}
          <div className="flex items-center gap-3 px-5 py-3 bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
            <FileText size={14} className="text-sky-500" />
            <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
              sahil_patel_resume.pdf
            </span>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto font-mono text-[10px] text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors flex items-center gap-1"
            >
              Full screen <ArrowUpRight size={10} />
            </a>
          </div>

          {/* iFrame embed */}
          <div className="relative bg-white dark:bg-zinc-950" style={{ paddingBottom: "129.4%", height: 0 }}>
            <iframe
              src={EMBED_URL}
              className="absolute top-0 left-0 w-full h-full"
              allow="autoplay"
              title="Sahil Patel Resume"
            />
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-center text-xs text-zinc-400 dark:text-zinc-600 font-mono"
        >
          If the preview doesn&apos;t load,{" "}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 hover:underline"
          >
            open it directly
          </a>
          .
        </motion.p>
      </div>
    </div>
  );
}
