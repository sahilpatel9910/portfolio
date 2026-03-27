import { motion } from "framer-motion";

export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-14">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-mono text-sky-500 dark:text-sky-400 text-xs tracking-widest uppercase mb-3 flex items-center gap-3"
      >
        <span className="block w-6 h-px bg-sky-500/50 dark:bg-sky-400/50" />
        {subtitle ?? "—"}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.07 }}
        className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
      >
        {title}
      </motion.h1>
    </div>
  );
}
