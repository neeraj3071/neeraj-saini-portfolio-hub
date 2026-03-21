import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "full-stack software engineer";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center bg-crimson relative overflow-hidden pt-24 pb-16">
      {/* Floating decorative stickers */}
      <div className="absolute top-[15%] right-[8%] text-6xl float-anim hidden md:block opacity-80">🚀</div>
      <div className="absolute top-[55%] left-[5%] text-5xl float-anim-reverse hidden md:block opacity-80">💻</div>
      <div className="absolute bottom-[15%] right-[15%] text-4xl float-anim hidden md:block opacity-60" style={{ animationDelay: "2s" }}>⚡</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left - Text */}
          <div className="animate-fade-in">
            <p className="caption-meta text-white/70 mb-4">
              software engineer · detroit, mi
            </p>

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-extrabold text-white uppercase tracking-tighter leading-[0.9] mb-6" style={{ transform: "rotate(-2deg)" }}>
              art of{" "}
              <span className="font-margherita italic text-orange">
                building
              </span>{" "}
              scalable code
            </h1>

            <p className="text-lg md:text-xl font-body text-white/80 mb-3 max-w-lg">
              <span className="font-bold text-white">{typedText}</span>
              {typedText.length < fullText.length && <span className="typewriter-cursor"></span>}
            </p>

            <p className="text-base font-body text-white/60 mb-8 max-w-lg">
              helping companies build scalable software with character-driven engineering. m.s. @ university of michigan.
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => window.open("https://drive.google.com/file/d/1NIAo0TSpN_srA-lIm8Dtdn31Uo10IYTR/view?usp=sharing", "_blank")}
                className="bg-black text-white px-8 py-4 rounded-2xl font-display font-extrabold text-lg uppercase tracking-tight kasturi-border kasturi-shadow-lg kasturi-bouncy"
              >
                get resume
              </button>
              <button
                onClick={() => document.querySelector("#works")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-white text-black px-8 py-4 rounded-2xl font-display font-extrabold text-lg uppercase tracking-tight kasturi-border kasturi-shadow-lg kasturi-bouncy"
              >
                view works
              </button>
            </div>

            {/* Status */}
            <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-sm kasturi-border-2 rounded-full">
              <div className="relative">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full pulse-dot"></div>
              </div>
              <span className="font-body font-medium text-white text-sm">open to full-time & internships</span>
            </div>
          </div>

          {/* Right - Photo */}
          <div className="hidden lg:flex justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative" style={{ transform: "rotate(3deg)" }}>
              <div className="aspect-video w-full max-w-md overflow-hidden rounded-2xl kasturi-border kasturi-shadow-xl">
                <img
                  src={profilePhoto}
                  alt="Neeraj Randhir Singh Saini"
                  className="w-full h-full object-cover object-top hover:scale-[1.02] transition-all duration-700"
                />
              </div>
              {/* Decorative stickers around image */}
              <div className="absolute -top-6 -right-6 bg-orange kasturi-border-2 kasturi-shadow-sm rounded-full px-4 py-2 float-anim">
                <span className="font-display font-extrabold text-sm text-black">&lt;dev/&gt;</span>
              </div>
              <div className="absolute -bottom-4 -left-6 text-3xl float-anim-reverse bg-white kasturi-border-2 rounded-xl p-2">🧑‍💻</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2">
        <span className="text-xs font-body text-white/60 uppercase tracking-widest">scroll</span>
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 text-white" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
