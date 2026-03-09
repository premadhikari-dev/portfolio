"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Movie List App",
    desc: "Search Movies, add to favorites, read descriptions and watch trailers, Responsive Design built with React and the TMDB API",
    tag: "React · API",
    category: "Frontend",
    link: "https://movielist-lyzcfdvsn-eto0001s-projects.vercel.app/",
    year: "2026",
    color: "from-blue-500/10 to-indigo-500/5",
    accent: "bg-blue-500",
  },
  {
    title: "CHES-Computer Hardware E-commerce System",
    desc: "PHP MySQL online store with cart, auth, admin panel, payment integration, and responsive design",
    tag: "PHP · MySQL",
    category: "Fullstack",
    link: "https://github.com/premadhikari-dev/Computer-Hardware-E-Commerce-System",
    year: "2025",
    color: "from-emerald-500/10 to-teal-500/5",
    accent: "bg-emerald-500",
  },
  {
    title: "React Counter App",
    desc: "Simple counter with dark mode toggle and local state management",
    tag: "React · UI",
    category: "Frontend",
    link: "https://github.com/premadhikari-dev/learning-react",
    year: "2026",
    color: "from-purple-500/10 to-violet-500/5",
    accent: "bg-purple-500",
  },
];

export default function Projects() {
  const [visible, setVisible] = useState(false);
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

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      <section
        id="projects"
        ref={ref}
        className="relative py-28 bg-[#fafaf8] overflow-hidden"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_80%_30%,rgba(201,169,110,0.07),transparent)] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-8">

          <div className={`flex items-center gap-3 mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <span className="w-8 h-px bg-[#c9a96e]" />
            <span className="text-[0.7rem] tracking-[0.2em] uppercase text-[#c9a96e] font-medium">Projects</span>
          </div>

          <div className={`flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <h2
              className="text-[clamp(2rem,5vw,3rem)] font-medium leading-[1.1] tracking-[-0.02em] text-[#0a0a0a]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Things I've <span className="text-[#c9a96e]">built.</span>
            </h2>
            
              <a href="https://github.com/premadhikari-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[0.75rem] tracking-[0.12em] uppercase font-medium text-[#666] hover:text-[#c9a96e] transition-colors duration-200 whitespace-nowrap pb-1 border-b border-black/10 hover:border-[#c9a96e]"
            >
              All on GitHub
              <ArrowUpRight className="w-3 h-3" strokeWidth={2} />
            </a>
          </div>

          <div className="flex flex-col gap-px bg-black/[0.06] rounded-sm overflow-hidden border border-black/[0.06]">
            {projects.map((project, i) => (
              
                <a key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`group relative bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-6 px-8 py-7 no-underline overflow-hidden transition-all duration-500 ${
                  visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                } ${hovered === i ? "bg-[#fafaf8]" : ""}`}
                style={{ transitionDelay: visible ? `${250 + i * 100}ms` : "0ms" }}
              >
                <div className={`absolute left-0 top-0 bottom-0 w-[3px] bg-[#c9a96e] transition-all duration-300 ${hovered === i ? "opacity-100" : "opacity-0"}`} />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} transition-opacity duration-300 ${hovered === i ? "opacity-100" : "opacity-0"}`} />

                <div className="relative flex items-start gap-6">
                  <span
                    className="text-[0.65rem] tracking-[0.1em] text-[#ccc] pt-1 select-none hidden sm:block"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <div className="flex items-center gap-3 mb-1.5">
                      <h3
                        className="text-[1rem] font-medium text-[#0a0a0a] tracking-[-0.01em]"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {project.title}
                      </h3>
                      <span className={`w-1.5 h-1.5 rounded-full ${project.accent} opacity-70`} />
                    </div>
                    <p className="text-[0.85rem] text-[#777] leading-relaxed max-w-sm">
                      {project.desc}
                    </p>
                  </div>
                </div>

                <div className="relative flex items-center gap-6 shrink-0 pl-12 sm:pl-0">
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[0.68rem] tracking-[0.1em] uppercase font-medium text-[#aaa]">
                      {project.tag}
                    </span>
                    <span className="text-[0.65rem] text-[#ccc]">{project.year}</span>
                  </div>

                  <div className={`w-8 h-8 rounded-sm border flex items-center justify-center transition-all duration-300 ${
                    hovered === i
                      ? "border-[#c9a96e] text-[#c9a96e] bg-[#c9a96e]/5 translate-x-1"
                      : "border-black/10 text-[#bbb]"
                  }`}>
                    <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
                  </div>
                </div>
              </a>
            ))}
          </div>

          <p className={`mt-6 text-[0.7rem] tracking-[0.15em] uppercase text-[#bbb] text-right transition-all duration-700 delay-700 ${visible ? "opacity-100" : "opacity-0"}`}>
            {projects.length} projects — more on GitHub
          </p>
        </div>
      </section>
    </>
  );
}