import { GraduationCap } from "lucide-react";

export default function Education({ data }: { data: any[] }) {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
        <GraduationCap className="text-blue-500" />
        Education
      </h2>

      <div className="relative pl-10 border-l border-white/10 space-y-8">
        {data.map((edu, i) => (
          <div key={i} className="relative group">
            <div className="absolute -left-11.25 top-1 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-blue-500/20" />
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-sm hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 transition-colors">
              <h4 className="text-lg font-semibold text-white">
                {edu.institution}
              </h4>
              <p className="text-gray-400 text-sm mt-1">
                {edu.degree}
              </p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-blue-400 font-mono text-sm">
                  {edu.date}
                </span>
                <span className="text-green-400 text-sm font-semibold">
                  {edu.score}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}