"use client";
import { motion } from "framer-motion";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function Experience({ data }: { data: any[] }) {
  return (
    <section id="experience" className="py-12 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-4xl font-bold mb-16 flex items-center gap-4"
      >
        Professional Experience
      </motion.h2>

      <div className="space-y-12 relative border-l border-blue-500/30 pl-8 ml-4">
        {data.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="relative group"
          >
            <div className="absolute -left-10.25 top-1 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:scale-125 transition-transform ring-4 ring-blue-500/20" />

            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 transition-colors shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white  transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-blue-400 font-medium text-lg">
                    {exp.company}
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} /> {exp.start} - {exp.end}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} /> {exp.location}
                  </span>
                </div>
              </div>

              <ul className="space-y-4">
                {exp.description.map((bullet: string, i: number) => (
                  <li
                    key={i}
                    className="flex gap-3 text-gray-300 leading-relaxed"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-blue-500 mt-1 shrink-0"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
