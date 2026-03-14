"use client";
import { useEffect, useRef, useState } from "react";
import {
  SiHtml5, SiCss, SiJavascript, SiReact,
  SiNextdotjs, SiTailwindcss, SiPhp, SiMysql, SiGit
} from "react-icons/si";

const skills = [
  { name: "HTML",        category: "Foundation", icon: <SiHtml5 className="w-5 h-5" /> },
  { name: "CSS",         category: "Foundation", icon: <SiCss className="w-5 h-5" /> },
  { name: "JavaScript",  category: "Foundation", icon: <SiJavascript className="w-5 h-5" /> },
  { name: "React",       category: "Frontend",   icon: <SiReact className="w-5 h-5" /> },
  { name: "Next.js",     category: "Frontend",   icon: <SiNextdotjs className="w-5 h-5" /> },
  { name: "TailwindCSS", category: "Frontend",   icon: <SiTailwindcss className="w-5 h-5" /> },
  { name: "PHP",         category: "Backend",    icon: <SiPhp className="w-5 h-5" /> },
  { name: "MySQL",       category: "Backend",    icon: <SiMysql className="w-5 h-5" /> },
  { name: "Git",         category: "Tooling",    icon: <SiGit className="w-5 h-5" /> },
];

const categories = ["All", "Foundation", "Frontend", "Backend", "Tooling"];

const categoryColors = {
  Foundation: "text-blue-500",
  Frontend:   "text-emerald-500",
  Backend:    "text-purple-500",
  Tooling:    "text-orange-500",
};

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("All");
  const [hovered, setHovered] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered = active === "All" ? skills : skills.filter(s => s.category === active);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      <section
        id="skills"
        ref={ref}
        className="relative py-28 bg-white overflow-hidden"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(#0a0a0a 1px, transparent 1px), linear-gradient(90deg, #0a0a0a 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_50%,rgba(201,169,110,0.06),transparent)] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-8">

          <div className={`flex items-center gap-3 mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <span className="w-8 h-px bg-[#c9a96e]" />
            <span className="text-[0.7rem] tracking-[0.2em] uppercase text-[#c9a96e] font-medium">Skills</span>
          </div>

          <h2
            className={`text-[clamp(2rem,5vw,3rem)] font-medium leading-[1.1] tracking-[-0.02em] text-[#0a0a0a] mb-4 transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Tools I work <span className="text-[#c9a96e]">with.</span>
          </h2>

          <p className={`text-[0.9rem] text-[#888] mb-10 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Technologies I've worked with across the stack.
          </p>

          <div className={`flex flex-wrap gap-2 mb-12 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-[0.72rem] tracking-[0.12em] uppercase font-medium px-4 py-2 rounded-sm border transition-all duration-200 ${
                  active === cat
                    ? "bg-[#0a0a0a] text-white border-[#0a0a0a]"
                    : "bg-transparent text-[#666] border-black/10 hover:border-[#c9a96e] hover:text-[#c9a96e]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {filtered.map((skill, i) => (
              <div
                key={skill.name}
                onMouseEnter={() => setHovered(skill.name)}
                onMouseLeave={() => setHovered(null)}
                className={`group relative bg-white border border-black/[0.07] rounded-sm p-5 cursor-default overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-[#c9a96e]/40 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: visible ? `${300 + i * 60}ms` : "0ms" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#c9a96e]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative flex items-start justify-between mb-4">
                  <span className={`transition-colors duration-200 ${hovered === skill.name ? "text-[#c9a96e]" : "text-[#999]"}`}>
                    {skill.icon}
                  </span>
                  <span className={`text-[0.62rem] tracking-[0.1em] uppercase font-medium ${categoryColors[skill.category]}`}>
                    {skill.category}
                  </span>
                </div>

                <p className="relative text-[0.95rem] font-medium text-[#0a0a0a] mb-3 tracking-[-0.01em]">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}