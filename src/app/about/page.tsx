"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, BadgeCheck } from "lucide-react";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiFlutter,
  SiPython, SiFastapi, SiNodedotjs, SiDjango, SiPhp,
  SiPostgresql, SiMysql, SiMongodb, SiFirebase, SiSqlite, SiPrisma,
  SiVercel,
  SiStripe, SiGit, SiGithub, SiJira, SiNotion, SiAndroidstudio,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { skillCategories } from "@/data/portfolio";

type SkillMeta = { icon?: IconType; color: string; lightColor?: string };

const skillMeta: Record<string, SkillMeta> = {
  "React.js":       { icon: SiReact,             color: "#61DAFB" },
  "Next.js":        { icon: SiNextdotjs,          color: "#ffffff", lightColor: "#000000" },
  TypeScript:       { icon: SiTypescript,         color: "#3178C6" },
  JavaScript:       { icon: SiJavascript,         color: "#F7DF1E" },
  Flutter:          { icon: SiFlutter,            color: "#54C5F8" },
  "HTML/CSS":       { color: "#E34F26" },
  Python:           { icon: SiPython,             color: "#3776AB" },
  FastAPI:          { icon: SiFastapi,            color: "#009688" },
  "Node.js":        { icon: SiNodedotjs,          color: "#6DA55F" },
  Django:           { icon: SiDjango,             color: "#092E20" },
  PHP:              { icon: SiPhp,                color: "#777BB4" },
  "RESTful APIs":   { color: "#6EE7B7" },
  PostgreSQL:       { icon: SiPostgresql,         color: "#336791" },
  MySQL:            { icon: SiMysql,              color: "#4479A1" },
  MongoDB:          { icon: SiMongodb,            color: "#47A248" },
  Firebase:         { icon: SiFirebase,           color: "#FFCA28" },
  SQLite:           { icon: SiSqlite,             color: "#003B57" },
  "Prisma ORM":     { icon: SiPrisma,             color: "#ffffff", lightColor: "#2D3748" },
  AWS:              { color: "#FF9900" },
  Vercel:           { icon: SiVercel,             color: "#ffffff", lightColor: "#000000" },
  Stripe:           { icon: SiStripe,             color: "#635BFF" },
  PayPal:           { color: "#003087" },
  "Google Pay":     { color: "#4285F4" },
  Square:           { color: "#3E4348" },
  NodeMailer:       { color: "#6EE7B7" },
  Git:              { icon: SiGit,               color: "#F05032" },
  GitHub:           { icon: SiGithub,            color: "#ffffff", lightColor: "#000000" },
  "JIRA":           { icon: SiJira,              color: "#0052CC" },
  "Agile/Scrum":    { color: "#A78BFA" },
  Notion:           { icon: SiNotion,            color: "#ffffff", lightColor: "#000000" },
  "Android Studio": { icon: SiAndroidstudio,     color: "#3DDC84" },
  "VS Code":        { color: "#007ACC" },
};

const categoryAccent: Record<string, { dark: string; light: string }> = {
  Frontend:              { dark: "#38BDF8", light: "#0284C7" },
  Backend:               { dark: "#34D399", light: "#059669" },
  "Databases & Cloud":   { dark: "#818CF8", light: "#4F46E5" },
  "Payments & Integrations": { dark: "#FBBF24", light: "#B45309" },
  "Tools & Methods":     { dark: "#F472B6", light: "#BE185D" },
};

const education = [
  {
    degree: "Master of Information Technology",
    institution: "RMIT University",
    period: "Feb 2024 – Dec 2025",
    location: "Melbourne, VIC",
  },
  {
    degree: "Bachelor of Technology in Information Technology",
    institution: "Dharmasinh Desai University",
    period: "Aug 2019 – May 2023",
    location: "Gujarat, India",
  },
];

const certifications = [
  {
    title: "Python Programming Certification",
    issuer: "GUVI Geek Network",
    href: "https://www.guvi.in/share-certificate/2S3BF1767D3209986s",
  },
  {
    title: "AI Fluency: Framework and Foundations",
    issuer: "Anthropic",
    href: "https://verify.skilljar.com/c/xrmj2av5r85a",
  },
];

function SkillChip({ name, isDark }: { name: string; isDark?: boolean }) {
  const meta = skillMeta[name];
  const Icon = meta?.icon;
  const color = isDark ? (meta?.color ?? "#71717a") : (meta?.lightColor ?? meta?.color ?? "#71717a");

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-mono
        bg-white dark:bg-zinc-900
        border border-zinc-200 dark:border-zinc-800
        text-zinc-700 dark:text-zinc-300
        shadow-sm hover:shadow-md transition-shadow cursor-default"
    >
      {Icon ? (
        <Icon style={{ color, flexShrink: 0 }} size={13} />
      ) : (
        <span
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{ background: meta?.color ?? "#71717a" }}
        />
      )}
      {name}
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-sky-500 dark:text-sky-400 text-xs tracking-widest uppercase mb-3 flex items-center gap-3"
          >
            <span className="block w-6 h-px bg-sky-500/50" />
            About
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.07 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
          >
            Who I am
          </motion.h1>
        </div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14 }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base mb-4">
            I&apos;m a Melbourne-based Software Developer and Project Coordinator with a track record of
            owning full product delivery cycles — from JIRA sprint planning and stakeholder alignment
            right through to hands-on full-stack development and QA sign-off.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base mb-4">
            I&apos;m comfortable leading small Agile teams while staying deeply technical. My core stack
            spans Next.js, FastAPI, PostgreSQL, and cloud deployments on AWS and Vercel. I apply AI
            fluency as a force multiplier — integrating LLM tools for scaffolding, test generation, and
            debugging while exercising architectural judgement to validate every output, not just accept it.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base">
            Currently open to Full-Stack Developer, Backend Engineer, and Junior PM / Scrum Master roles
            in Melbourne. Temporary Graduate Visa (485) — no restrictions on hours or employment type.
          </p>

          <div className="flex items-center gap-2 mt-5">
            <MapPin size={13} className="text-sky-500 flex-shrink-0" />
            <span className="text-sm text-zinc-500 font-mono">Melbourne, VIC, Australia</span>
            <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700 mx-1" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm text-zinc-500 font-mono">Open to work</span>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-8">Skills & Technologies</h2>
          <div className="space-y-8">
            {skillCategories.map((cat, ci) => {
              const accent = categoryAccent[cat.label] ?? { dark: "#71717a", light: "#71717a" };
              return (
                <motion.div
                  key={cat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.22 + ci * 0.07 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="w-1.5 h-4 rounded-full"
                      style={{ background: accent.dark }}
                    />
                    <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 font-mono tracking-wide">
                      {cat.label}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <SkillChip key={skill} name={skill} isDark />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mb-16"
        >
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 flex items-center gap-2">
            <GraduationCap size={20} className="text-sky-500" />
            Education
          </h2>
          <div className="space-y-4">
            {education.map((ed, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">{ed.degree}</h3>
                    <p className="text-zinc-500 text-sm">{ed.institution}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-xs text-sky-500">{ed.period}</p>
                    <p className="text-xs text-zinc-500 flex items-center gap-1 sm:justify-end mt-0.5">
                      <MapPin size={10} />
                      {ed.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42 }}
        >
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 flex items-center gap-2">
            <BadgeCheck size={20} className="text-sky-500" />
            Certifications
          </h2>
          <div className="flex flex-wrap gap-3">
            {certifications.map((c, i) => (
              <a
                key={i}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl border border-sky-300/50 dark:border-sky-500/20 bg-sky-50 dark:bg-sky-500/5 flex items-center gap-2"
              >
                <BadgeCheck size={14} className="text-sky-500" />
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{c.title}</span>
                <span className="text-xs text-zinc-400 font-mono">· {c.issuer}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
