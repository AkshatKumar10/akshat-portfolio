"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

export default function Projects({ data }: { data: any[] }) {
  return (
    <section id="projects" className="py-12 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-4xl font-bold mb-16 flex items-center gap-4"
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative bg-linear-to-br from-white/10 to-transparent border border-white/10 rounded-3xl overflow-hidden p-8 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10"
          >
            <div className="flex justify-between items-center mb-6">
              <Folder className="text-blue-500" size={40} />
              <div className="flex gap-4 text-gray-400">
                <a
                  href={project?.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github
                    size={22}
                    className="hover:text-white cursor-pointer transition-colors"
                  />
                </a>

                {project?.demo && (
                  <a
                    href={project?.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink
                      size={22}
                      className="hover:text-white cursor-pointer transition-colors"
                    />
                  </a>
                )}
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-blue-500 font-mono mb-4">
              {project.date}
            </p>
            <ul className="space-y-3 mb-6">
              {project.description.map((bullet: string, i: number) => (
                <li
                  key={i}
                  className="text-gray-400 text-sm leading-relaxed list-disc ml-4"
                >
                  {bullet}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech: string, i: number) => (
                <span
                  key={i}
                  className="text-[10px] uppercase tracking-widest px-2 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
