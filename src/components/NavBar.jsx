"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "About",    href: "#about" },
    { label: "Skills",   href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Resume",   href: "/resume.pdf", download: true },
    { label: "Contact",  href: "#contact" },
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
          scrolled
            ? "bg-white/92 backdrop-blur-lg border-b border-black/[0.06] shadow-[0_1px_40px_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto px-8 h-[68px] flex items-center justify-between">

          {/* Logo */}
          
            <a href="#"
            className="text-[1.55rem] font-medium text-[#0a0a0a] no-underline tracking-[-0.01em]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Prem<span className="text-[#c9a96e]">.</span>dev
          </a>

          {/* Desktop Links */}
          <ul className="hidden sm:flex gap-10 list-none m-0 p-0">
            {links.map(({ label, href, download }) => (
              <li key={label}>
                {label === "Contact" ? (
                  
                    <a href={href}
                    onClick={() => setActiveLink(label)}
                    className="no-underline text-[0.8rem] font-medium tracking-[0.12em] uppercase text-white bg-[#0a0a0a] px-5 py-2 rounded-sm transition-all duration-200 hover:bg-[#c9a96e] hover:-translate-y-px"
                  >
                    {label}
                  </a>
                ) : (
                  
                    <a href={href}
                    download={download ?? undefined}
                    onClick={() => !download && setActiveLink(label)}
                    className={`no-underline text-[0.8rem] font-medium tracking-[0.12em] uppercase relative pb-[3px] transition-colors duration-200
                      after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#c9a96e] after:transition-all after:duration-300
                      ${
                        activeLink === label
                          ? "text-[#0a0a0a] after:w-full"
                          : "text-[#444] hover:text-[#0a0a0a] after:w-0 hover:after:w-full"
                      }`}
                  >
                    {label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className="flex sm:hidden flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-[22px] h-[1.5px] bg-[#0a0a0a] transition-all duration-300 origin-center ${menuOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
            <span className={`block w-[22px] h-[1.5px] bg-[#0a0a0a] transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-[22px] h-[1.5px] bg-[#0a0a0a] transition-all duration-300 origin-center ${menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[68px] left-0 right-0 z-40 flex sm:hidden flex-col bg-white/97 backdrop-blur-xl border-b border-black/[0.08] px-8 pb-8 pt-6 transition-all duration-300 ease-out ${
          menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {links.map(({ label, href, download }, i) => (
          
            <a key={label}
            href={href}
            download={download ?? undefined}
            onClick={() => setMenuOpen(false)}
            className={`no-underline text-[0.8rem] font-medium tracking-[0.12em] uppercase text-[#444] py-4 transition-colors duration-200 hover:text-[#c9a96e] ${
              i < links.length - 1 ? "border-b border-black/[0.05]" : ""
            }`}
          >
            {label}
          </a>
        ))}
      </div>
    </>
  );
}