"use client";
export default function Footer() {
  const links = ["About", "Skills", "Projects", "Contact"];

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/premadhikari-dev",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      label: "Email",
      href: "mailto:premadh7@gmail.com",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
      ),
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
        {/* Gold top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a96e]/60 to-transparent" />

        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_50%_100%,rgba(201,169,110,0.06),transparent)] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-8 py-14">

          {/* Top row */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 mb-12">

            {/* Logo */}
            <button
              onClick={scrollToTop}
              className="text-[1.35rem] font-medium text-white tracking-[-0.01em] bg-transparent border-none cursor-pointer p-0"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Prem<span className="text-[#c9a96e]">.</span>dev
            </button>

            {/* Nav links */}
            <ul className="flex flex-wrap gap-6 list-none m-0 p-0">
              {links.map((link) => (
                <li key={link}>
                  
                    <a href={`#${link.toLowerCase()}`}
                    className="text-[0.75rem] tracking-[0.12em] uppercase font-medium text-[#555] hover:text-[#c9a96e] transition-colors duration-200 no-underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/[0.06] mb-10" />

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">

            {/* Copyright */}
            <p className="text-[0.7rem] tracking-[0.08em] text-[#444] order-2 sm:order-1">
              © {new Date().getFullYear()} Prem Adhikari — Built with{" "}
              <span className="text-[#555]">Next.js</span> &{" "}
              <span className="text-[#555]">TailwindCSS</span>
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3 order-1 sm:order-2">
              {socials.map((s) => (
                
                  <a key={s.label}
                  href={s.href}
                  target={s.label !== "Email" ? "_blank" : undefined}
                  rel={s.label !== "Email" ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center rounded-sm border border-white/[0.08] text-[#555] hover:border-[#c9a96e]/50 hover:text-[#c9a96e] hover:-translate-y-px transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}

              {/* Scroll to top */}
              <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="w-9 h-9 flex items-center justify-center rounded-sm border border-white/[0.08] text-[#555] hover:border-[#c9a96e]/50 hover:text-[#c9a96e] hover:-translate-y-px transition-all duration-200 cursor-pointer bg-transparent"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}