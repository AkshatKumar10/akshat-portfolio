"use client";
import { motion } from "framer-motion";
import {
  Code2,
  Terminal,
  Database,
  Monitor,
  Layout,
  Sparkles,
  HeartHandshake,
} from "lucide-react";

const iconMap: any = {
  "Programming Languages": <Code2 size={22} />,
  Libraries: <Layout size={22} />,
  "Developer Tools": <Terminal size={22} />,
  "AI / Productivity Tools": <Sparkles size={22} />,
  Softwares: <Monitor size={22} />,
  Databases: <Database size={22} />,
  "Soft Skills": <HeartHandshake size={22} />,
};

export default function Skills({ skills }: { skills: any[] }) {
  return (
    <section id="skills" className="py-12 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-4xl font-bold mb-16 flex items-center gap-4"
      >
        Technical Skills
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative h-full bg-linear-to-br from-white/10 to-transparent border border-white/10 rounded-2xl p-6 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5 ">
              {iconMap[skill.category]}
            </div>
            <h3 className="text-base font-bold text-white mb-4 tracking-wider">
              {skill.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item: string, i: number) => (
                <span
                  key={i}
                  className="text-[10px] uppercase tracking-widest leading-relaxed px-2 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
