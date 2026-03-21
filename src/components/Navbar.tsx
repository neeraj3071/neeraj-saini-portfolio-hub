import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "home" },
    { href: "#works", label: "works" },
    { href: "#about", label: "about" },
    { href: "#skills", label: "skills" },
    { href: "#experience", label: "experience" },
    { href: "#contact", label: "contact" },
  ];

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-3xl pointer-events-none">
      <div
        className={`pointer-events-auto flex justify-between items-center px-4 py-3 rounded-full kasturi-border-2 kasturi-shadow-sm transition-all duration-300 ${
          isScrolled ? "glass-nav" : "bg-white/10 backdrop-blur-md"
        }`}
      >
        {/* Logo */}
        <button onClick={() => scrollToSection("#home")} className="flex items-center gap-2 pointer-events-auto">
          <div className="w-9 h-9 rounded-full bg-crimson text-white flex items-center justify-center font-display font-extrabold text-lg uppercase">
            N
          </div>
          <span className="font-display font-extrabold text-black text-lg hidden sm:inline uppercase tracking-tighter">neeraj</span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1 pointer-events-auto">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="px-3 py-1.5 text-sm font-body font-medium text-black hover:bg-crimson hover:text-white rounded-full transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => scrollToSection("#contact")}
          className="hidden md:block pointer-events-auto bg-black text-white px-5 py-2 rounded-full font-display font-extrabold text-sm uppercase tracking-wider hover:bg-crimson transition-colors duration-300"
        >
          contact
        </button>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-black pointer-events-auto"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="pointer-events-auto md:hidden mt-2 bg-white kasturi-border-2 kasturi-shadow rounded-2xl p-4 animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left px-4 py-3 text-black hover:bg-crimson hover:text-white rounded-xl font-body font-medium transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("#contact")}
            className="w-full mt-2 bg-black text-white px-5 py-3 rounded-xl font-display font-extrabold text-sm uppercase"
          >
            contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
