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
    { href: "#about", label: "about" },
    { href: "#skills", label: "skills" },
    { href: "#experience", label: "experience" },
    { href: "#projects", label: "projects" },
    { href: "#contact", label: "contact" },
  ];

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-3xl">
      <div
        className={`flex justify-between items-center px-4 py-3 rounded-full brutal-border-2 brutal-shadow-sm transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-sm" : "bg-white/90"
        }`}
      >
        {/* Logo mark */}
        <button onClick={() => scrollToSection("#home")} className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-deep text-white flex items-center justify-center font-display font-bold text-lg">
            n
          </div>
          <span className="font-display font-bold text-deep text-lg hidden sm:inline">neeraj</span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="px-3 py-1.5 text-sm font-body font-medium text-deep hover:bg-primary rounded-full transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA button */}
        <button
          onClick={() => {
            window.open("https://drive.google.com/file/d/1NIAo0TSpN_srA-lIm8Dtdn31Uo10IYTR/view?usp=sharing", "_blank");
          }}
          className="hidden md:block bg-deep text-white px-5 py-2 rounded-full font-display font-bold text-sm bouncy"
        >
          get resume
        </button>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-deep"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 bg-white brutal-border-2 brutal-shadow rounded-brutal p-4 animate-fade-in">
          {navItems.map((item, index) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left px-4 py-3 text-deep hover:bg-primary rounded-xl font-body font-medium transition-colors"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              window.open("https://drive.google.com/file/d/1NIAo0TSpN_srA-lIm8Dtdn31Uo10IYTR/view?usp=sharing", "_blank");
            }}
            className="w-full mt-2 bg-deep text-white px-5 py-3 rounded-xl font-display font-bold text-sm"
          >
            get resume
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
