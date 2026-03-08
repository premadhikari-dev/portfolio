"use client";
import { use, useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const roles = ["Frontend Developer", "React Specialist", "Next.js Engineer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      <section
        className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* Background grain + radial glow */}
        <div className="absolute inset-0 bg-[#fafaf8] z-0" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(201,169,110,0.1),transparent)]" />
        <div
          className="absolute inset-0 z-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px",
          }}
        />

        {/* Decorative lines */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#c9a96e]/40 to-transparent hidden lg:block" />
        <div className="absolute right-8 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#c9a96e]/40 to-transparent hidden lg:block" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Badge */}
          <div
            className={`mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c9a96e]/30 bg-[#c9a96e]/[0.07] text-[#8a6f3e] text-xs tracking-[0.15em] uppercase font-medium transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e] animate-pulse" />
            Available for work
          </div>

          {/* Heading */}
          <h1
            className={`text-[clamp(2.8rem,8vw,5.5rem)] leading-[1.05] font-medium text-[#0a0a0a] tracking-[-0.03em] transition-all duration-700 delay-150 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Hi, I'm{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#c9a96e]">Prem</span>
              <span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#c9a96e]/15 rounded-sm -z-0" />
            </span>{" "}
            <span className="inline-block animate-[wave_2s_ease-in-out_infinite]">👋</span>
          </h1>

          {/* Typewriter role */}
          <p
            className={`mt-5 text-[1.05rem] text-[#666] tracking-[0.04em] h-7 transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {displayed}
            <span className="inline-block w-[2px] h-[1em] bg-[#c9a96e] ml-[2px] align-middle animate-[blink_1s_step-end_infinite]" />
          </p>

          {/* Divider */}
          <div
            className={`mt-8 mb-8 w-12 h-px bg-[#c9a96e]/40 transition-all duration-700 delay-[400ms] ${
              visible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          />

          {/* CTAs */}
          <div
            className={`flex flex-wrap gap-3 justify-center transition-all duration-700 delay-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            
              <a href="#projects"
              className="group relative inline-flex items-center gap-2 bg-[#0a0a0a] text-white text-[0.78rem] font-medium tracking-[0.12em] uppercase px-7 py-3.5 rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-px hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]"
            >
              <span className="absolute inset-0 bg-[#c9a96e] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative">View Projects</span>
              <span className="relative text-xs">↗</span>
            </a>

            
              <a href="https://github.com/premadhikari-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#0a0a0a]/20 text-[#0a0a0a] text-[0.78rem] font-medium tracking-[0.12em] uppercase px-7 py-3.5 rounded-sm transition-all duration-300 hover:border-[#c9a96e] hover:text-[#c9a96e] hover:-translate-y-px"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>

          {/* Scroll hint */}
          <div
            className={`mt-16 flex flex-col items-center gap-2 text-[#aaa] transition-all duration-700 delay-700 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="text-[0.65rem] tracking-[0.2em] uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-[#aaa] to-transparent animate-[pulse_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </section>

      <style>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-10deg); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </>
  );
}