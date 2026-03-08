"use client";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "1+", label: "Years Building" },
    { value: "10+", label: "Projects Shipped" },
    { value: "5+", label: "Technologies" },
  ];

  const tags = ["React", "Next.js", "TailwindCSS", "MySQL", "JavaScript", "TypeScript"];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      <section
        id="about"
        ref={ref}
        className="relative py-28 bg-[#fafaf8] overflow-hidden"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* Background radial */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_80%_50%,rgba(201,169,110,0.07),transparent)] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-8">

          {/* Section label */}
          <div
            className={`flex items-center gap-3 mb-12 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-8 h-px bg-[#c9a96e]" />
            <span className="text-[0.7rem] tracking-[0.2em] uppercase text-[#c9a96e] font-medium">
              About Me
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — text */}
            <div>
              <h2
                className={`text-[clamp(2rem,5vw,3rem)] font-medium leading-[1.1] tracking-[-0.02em] text-[#0a0a0a] mb-6 transition-all duration-700 delay-150 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Crafting interfaces
                <br />
                <span className="text-[#c9a96e]">with purpose.</span>
              </h2>

              <p
                className={`text-[0.95rem] text-[#555] leading-[1.85] mb-8 transition-all duration-700 delay-300 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                I'm a BCA graduate and aspiring developer who enjoys building
                modern, responsive web applications. I care deeply about the
                details — clean code, thoughtful UI, and experiences that
                actually feel good to use.
              </p>

              {/* Tags */}
              <div
                className={`flex flex-wrap gap-2 transition-all duration-700 delay-[400ms] ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.72rem] tracking-[0.1em] uppercase font-medium px-3.5 py-1.5 rounded-sm border border-[#0a0a0a]/10 text-[#444] bg-white hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors duration-200 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — card + stats */}
            <div
              className={`transition-all duration-700 delay-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {/* Card */}
              <div className="relative bg-white border border-black/[0.06] rounded-sm p-8 shadow-[0_2px_40px_rgba(0,0,0,0.05)]">
                {/* Gold corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[48px] border-t-[#c9a96e]/20 border-l-[48px] border-l-transparent" />
                </div>

                <p className="text-[0.8rem] tracking-[0.15em] uppercase text-[#c9a96e] font-medium mb-4">
                  At a glance
                </p>

                <ul className="space-y-4">
                  {[
                    { icon: "🎓", label: "Education", value: "BCA Graduate" },
                    { icon: "📍", label: "Location", value: "Nepal" },
                    { icon: "💼", label: "Focus", value: "Frontend Development" },
                    { icon: "🌱", label: "Currently learning", value: "TypeScript & System Design" },
                  ].map(({ icon, label, value }) => (
                    <li key={label} className="flex items-start gap-3 text-sm">
                      <span className="text-base mt-px">{icon}</span>
                      <div className="flex flex-col">
                        <span className="text-[#aaa] text-[0.7rem] tracking-[0.1em] uppercase">{label}</span>
                        <span className="text-[#0a0a0a] font-medium">{value}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-px mt-4 bg-black/[0.06] rounded-sm overflow-hidden">
                {stats.map(({ value, label }) => (
                  <div key={label} className="bg-white px-4 py-5 text-center">
                    <p
                      className="text-2xl font-medium text-[#0a0a0a] tracking-tight"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {value}
                    </p>
                    <p className="text-[0.65rem] tracking-[0.12em] uppercase text-[#999] mt-1">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}