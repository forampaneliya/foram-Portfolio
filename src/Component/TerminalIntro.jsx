import { useEffect, useState } from "react";

const content = [
  "Hi, I am Foram Paneliya.",
  "Full Stack Developer",
  "----------------------------",
  "Skills: React, Tailwind, Node, MongoDB",
  "",
  "Press ENTER to continue..."
];

export default function TerminalIntro({ onDone }) {
  const [lines, setLines] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < content.length) {
      const t = setTimeout(() => {
        setLines(prev => [...prev, content[index]]);
        setIndex(prev => prev + 1);
      }, 120);
      return () => clearTimeout(t);
    }
  }, [index]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Enter") onDone();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="h-screen bg-black flex items-center justify-center text-green-400 font-mono">
      <div className="w-full max-w-3xl border border-green-400 rounded-lg">
        <div className="px-4 py-2 border-b border-green-400 flex gap-2">
          <span className="w-3 h-3 bg-red-500 rounded-full" />
          <span className="w-3 h-3 bg-yellow-400 rounded-full" />
          <span className="w-3 h-3 bg-green-500 rounded-full" />
        </div>
        <div className="p-4 text-sm">
          {lines.map((l, i) => (
            <pre key={i}>{l}</pre>
          ))}
          <span className="animate-pulse">█</span>
        </div>
      </div>
    </div>
  );
}
