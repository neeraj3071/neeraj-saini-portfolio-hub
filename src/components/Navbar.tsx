
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          <div className="text-2xl font-bold">
            <span className={`transition-colors ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
              <span className="text-teal-600">N</span>eeraj
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`px-4 py-2 font-medium transition-all duration-200 rounded-lg relative group ${
                  isScrolled 
                    ? 'text-slate-700 hover:text-teal-600' 
                    : 'text-slate-700 hover:text-teal-600'
                }`}
              >
                {item.label}
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-teal-600 transition-all duration-200 group-hover:w-3/4 rounded-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-slate-700' : 'text-slate-700'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/98 backdrop-blur-lg rounded-2xl mb-4 py-4 shadow-xl border border-slate-200 animate-fade-in">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-6 py-3 text-slate-700 hover:text-teal-600 hover:bg-teal-50 transition-all duration-200 font-medium animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
