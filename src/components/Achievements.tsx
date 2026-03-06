import { Trophy, Award } from "lucide-react";

export default function Achievements({ data }: { data: string[] }) {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
        <Award className="text-blue-500" /> Key Achievements
      </h2>

      <div className="space-y-4">
        {data.map((item, i) => (
          <div
            key={i}
            className="p-6 bg-blue-600/5 border border-blue-500/20 rounded-2xl flex gap-6 items-center"
          >
            <Trophy className="text-blue-500 shrink-0" size={32} />
            <p className="text-lg text-gray-200 font-medium">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}