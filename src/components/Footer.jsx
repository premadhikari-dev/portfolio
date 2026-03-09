"use client";
import { SiGithub } from "react-icons/si";
import { Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const links = [
    { label: "About",       href: "#about" },
    { label: "Skills",      href: "#skills" },
    { label: "Projects",    href: "#projects" },
    { label: "Contact",     href: "#contact" },
    { label: "Download CV", href: "/prem_adhikari_cv.pdf", download: true },
  ];

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/premadhikari-dev",
      icon: <SiGithub className="w-4 h-4" />,
    },
    {
      label: "Email",
      href: "mailto:premadh7@gmail.com",
      icon: <Mail className="w-4 h-4" strokeWidth={1.5} />,
    },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      <footer
        className="relative bg-[#0a0a0a] overflow-hidden"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a96e]/60 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_50%_100%,rgba(201,169,110,0.06),transparent)] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-8 py-14">

          {/* Top row */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 mb-12">
            <button
              onClick={scrollToTop}
              className="text-[1.35rem] font-medium text-white tracking-[-0.01em] bg-transparent border-none cursor-pointer p-0"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Prem<span className="text-[#c9a96e]">.</span>dev
            </button>

            <ul className="flex flex-wrap gap-6 list-none m-0 p-0">
              {links.map(({ label, href }) => (
                <li key={label}>
                  
                    <a href={href}
                    download={label === "Download CV" ? true : undefined}
                    className="text-[0.75rem] tracking-[0.12em] uppercase font-medium text-[#555] hover:text-[#c9a96e] transition-colors duration-200 no-underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full h-px bg-white/[0.06] mb-10" />

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-[0.7rem] tracking-[0.08em] text-[#444] order-2 sm:order-1">
              © {new Date().getFullYear()} Prem Adhikari — Built with{" "}
              <span className="text-[#555]">Next.js</span> &{" "}
              <span className="text-[#555]">TailwindCSS</span>
            </p>

            <div className="flex items-center gap-3 order-1 sm:order-2">
              {socials.map((s) => (
                
                  <a key={s.label}
                  href={s.href}
                  target={s.label === "GitHub" ? "_blank" : undefined}
                  rel={s.label === "GitHub" ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center rounded-sm border border-white/[0.08] text-[#555] hover:border-[#c9a96e]/50 hover:text-[#c9a96e] hover:-translate-y-px transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}

              <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="w-9 h-9 flex items-center justify-center rounded-sm border border-white/[0.08] text-[#555] hover:border-[#c9a96e]/50 hover:text-[#c9a96e] hover:-translate-y-px transition-all duration-200 cursor-pointer bg-transparent"
              >
                <ArrowUp className="w-3.5 h-3.5" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}