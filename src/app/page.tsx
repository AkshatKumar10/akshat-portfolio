import data from "@/data/resume.json";
import Background from "@/components/Background";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className="relative min-h-screen text-slate-200 selection:bg-blue-500/30">
      <Background />
      <div className="relative z-10">
        <Hero personal={data.personal} />
        <Skills skills={data.skills} />
        <Experience data={data.experience} />
        <Projects data={data.projects} />
        <section className="pt-12 pb-20 px-6 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <Achievements data={data.achievements} />
          <Education data={data.education} />
        </section>

        <footer className="py-4 text-center text-gray-500 text-sm border-t border-white/5">
          <p>Copyright © {new Date().getFullYear()} - Akshat Kumar</p>
        </footer>
      </div>
    </main>
  );
}
