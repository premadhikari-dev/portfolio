"use client";
import { useEffect, useRef, useState } from "react";

const links = [
  {
    label: "Email",
    value: "premadh7@gmail.com",
    href: "mailto:premadh7@gmail.com",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/premadhikari-dev",
    href: "https://github.com/premadhikari-dev",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const [hovered, setHovered] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("premadh7@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      <section
        id="contact"
        ref={ref}
        className="relative py-28 bg-white overflow-hidden"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_80%,rgba(201,169,110,0.07),transparent)] pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage: "linear-gradient(#0a0a0a 1px, transparent 1px), linear-gradient(90deg, #0a0a0a 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-8">

          {/* Section label */}
          <div className={`flex items-center gap-3 mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <span className="w-8 h-px bg-[#c9a96e]" />
            <span className="text-[0.7rem] tracking-[0.2em] uppercase text-[#c9a96e] font-medium">Contact</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left — heading + body */}
            <div>
              <h2
                className={`text-[clamp(2rem,5vw,3.2rem)] font-medium leading-[1.08] tracking-[-0.02em] text-[#0a0a0a] mb-6 transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Let's build something
                <br />
                <span className="text-[#c9a96e]">together.</span>
              </h2>

              <p className={`text-[0.95rem] text-[#666] leading-[1.85] max-w-sm mb-10 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                Feel free to reach out if you'd like to work together, have a
                project in mind, or just want to say hello.
              </p>

              {/* Primary CTA */}
              <div className={`transition-all duration-700 delay-[400ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                
                  <a href="mailto:premadh7@gmail.com"
                  className="group relative inline-flex items-center gap-3 bg-[#0a0a0a] text-white text-[0.78rem] font-medium tracking-[0.12em] uppercase px-7 py-4 rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-px hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]"
                >
                  <span className="absolute inset-0 bg-[#c9a96e] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <span className="relative flex items-center gap-2">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    Send me an email
                  </span>
                </a>
              </div>
            </div>

            {/* Right — contact cards + copy */}
            <div className={`transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

              {/* Contact rows */}
              <div className="flex flex-col gap-px bg-black/[0.06] rounded-sm overflow-hidden border border-black/[0.06] mb-6">
                {links.map((item, i) => (
                  
                    <a key={item.label}
                    href={item.href}
                    target={item.label === "GitHub" ? "_blank" : undefined}
                    rel={item.label === "GitHub" ? "noopener noreferrer" : undefined}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    className="group relative bg-white flex items-center justify-between px-6 py-5 no-underline overflow-hidden transition-all duration-300"
                  >
                    <div className={`absolute left-0 top-0 bottom-0 w-[3px] bg-[#c9a96e] transition-all duration-300 ${hovered === i ? "opacity-100" : "opacity-0"}`} />
                    <div className={`absolute inset-0 bg-gradient-to-r from-[#c9a96e]/[0.03] to-transparent transition-opacity duration-300 ${hovered === i ? "opacity-100" : "opacity-0"}`} />

                    <div className="relative flex items-center gap-4">
                      <span className={`transition-colors duration-200 ${hovered === i ? "text-[#c9a96e]" : "text-[#bbb]"}`}>
                        {item.icon}
                      </span>
                      <div>
                        <p className="text-[0.65rem] tracking-[0.12em] uppercase text-[#aaa] mb-0.5">{item.label}</p>
                        <p className="text-[0.88rem] font-medium text-[#0a0a0a]">{item.value}</p>
                      </div>
                    </div>

                    <div className={`relative w-7 h-7 rounded-sm border flex items-center justify-center transition-all duration-300 ${hovered === i ? "border-[#c9a96e] text-[#c9a96e] translate-x-1" : "border-black/10 text-[#ccc]"}`}>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>

              {/* Copy email pill */}
              <button
                onClick={copyEmail}
                className="w-full flex items-center justify-between px-6 py-4 border border-dashed border-black/[0.12] rounded-sm text-[0.78rem] text-[#999] hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-200 group"
              >
                <span className="tracking-[0.05em]">
                  {copied ? "✓ Copied to clipboard!" : "Click to copy email address"}
                </span>
                <span className={`text-[0.65rem] tracking-[0.12em] uppercase font-medium transition-colors duration-200 ${copied ? "text-emerald-500" : "text-[#ccc] group-hover:text-[#c9a96e]"}`}>
                  {copied ? "Done" : "Copy"}
                </span>
              </button>

            </div>
          </div>

          {/* Footer line */}
          <div className={`mt-24 pt-8 border-t border-black/[0.06] flex flex-col sm:flex-row justify-between items-center gap-3 transition-all duration-700 delay-700 ${visible ? "opacity-100" : "opacity-0"}`}>
            <p className="text-[0.7rem] tracking-[0.1em] uppercase text-[#ccc]"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Prem<span className="text-[#c9a96e]">.</span>dev
            </p>
            <p className="text-[0.7rem] text-[#ccc]">
              © {new Date().getFullYear()} — Built with Next.js & TailwindCSS
            </p>
          </div>

        </div>
      </section>
    </>
  );
}