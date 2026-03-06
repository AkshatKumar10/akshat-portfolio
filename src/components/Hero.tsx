"use client";
import { motion } from "framer-motion";
import {
  Download,
  ArrowDownRight,
  Github,
  Linkedin,
  Mail,
  Code2,
} from "lucide-react";

export default function Hero({ personal }: { personal: any }) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-blue-500 font-mono tracking-widest mb-4">
            FULL STACK ENGINEER
          </h2>
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter bg-linear-to-r from-blue-400 via-white to-blue-600 bg-clip-text text-transparent">
            {personal.name.toUpperCase()}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed mb-10">
            {personal.summary}
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <button
              onClick={() =>
                document
                  .getElementById("experience")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-blue-600 hover:bg-blue-800 text-white rounded-full font-bold transition-all flex items-center gap-2 group cursor-pointer"
            >
              View Experience{" "}
              <ArrowDownRight className="group-hover:rotate-45 transition-transform" />
            </button>

            <a
              href="/Akshat_Kumar_Resume.pdf"
              download
              className="px-8 py-4 border border-white/10 bg-gray-800 hover:bg-white/5 text-white rounded-full font-bold transition-all flex items-center gap-2 cursor-pointer"
            >
              Download Resume <Download size={18} />
            </a>
          </div>

          <div className="flex gap-6">
            {personal.profiles.map((profile: any, i: number) => (
              <a
                key={i}
                href={profile.url}
                target="_blank"
                className="text-gray-500 hover:text-blue-500 transition-transform duration-300 ease-out p-2 border border-white/5 rounded-xl bg-white/5 hover:border-blue-500/50 hover:scale-110"
              >
                {profile.social === "GitHub" && <Github size={24} />}
                {profile.social === "LinkedIn" && <Linkedin size={24} />}
                {profile.social === "LeetCode" && <Code2 size={24} />}
              </a>
            ))}
            <a
              href={`mailto:${personal.email}`}
              className="text-gray-500 hover:text-blue-500 transition-transform duration-300 ease-out p-2 border border-white/5 rounded-xl bg-white/5 hover:border-blue-500/50 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-600"
      >
        <div className="w-px h-12 bg-linear-to-b from-blue-500 to-transparent mx-auto" />
      </motion.div>
    </section>
  );
}
