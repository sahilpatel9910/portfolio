"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase } from "lucide-react";
import { experiences } from "@/data/portfolio";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-sky-500 dark:text-sky-400 text-xs tracking-widest uppercase mb-3 flex items-center gap-3"
          >
            <span className="block w-6 h-px bg-sky-500/50" />
            Career
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.07 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
          >
            Experience
          </motion.h1>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${i}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-12 sm:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 sm:left-4 top-1 w-4 h-4 rounded-full border-2 border-sky-500 bg-background flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                </div>

                {/* Card */}
                <div className="group relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg hover:shadow-zinc-900/5 dark:hover:shadow-black/20 transition-all overflow-hidden">
                  <div className="h-0.5 w-full bg-linear-to-r from-sky-500 via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity absolute top-0 left-0 right-0" />

                  {/* Role + period */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 leading-tight">{exp.role}</h3>
                    <span className="font-mono text-xs text-sky-500 dark:text-sky-400 flex-shrink-0 pt-0.5">{exp.period}</span>
                  </div>

                  {/* Company + location */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Briefcase size={12} className="text-zinc-400" />
                      <span className="text-sm font-medium text-zinc-600 dark:text-zinc-300">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={11} className="text-zinc-400" />
                      <span className="text-xs text-zinc-400 font-mono">{exp.location}</span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-sky-500/60 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Note about education */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30"
        >
          <p className="text-sm text-zinc-500 dark:text-zinc-400 font-mono text-center">
            🎓 &nbsp;Master of Information Technology · RMIT University · Melbourne · Dec 2025
          </p>
        </motion.div>
      </div>
    </div>
  );
}
