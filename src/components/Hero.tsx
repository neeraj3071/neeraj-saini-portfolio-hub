import { useState, useEffect } from "react";
import { ArrowDown, Terminal, Zap, Rocket } from "lucide-react";

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

  const handleDownloadResume = () => {
    window.open("https://drive.google.com/file/d/1NIAo0TSpN_srA-lIm8Dtdn31Uo10IYTR/view?usp=sharing", "_blank");
  };

  return (
    <section id="home" className="min-h-[100svh] md:min-h-screen flex items-center justify-center bg-primary relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20">
      {/* Decorative blurred circles */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-purple rounded-full blur-[120px] opacity-40 hidden md:block"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink rounded-full blur-[120px] opacity-30 hidden md:block"></div>

      {/* Floating stickers */}
      <div className="absolute top-[15%] right-[10%] text-5xl float-sticker sticker rounded-2xl bg-white p-3 hidden md:block" style={{ animationDelay: "0s" }}>🚀</div>
      <div className="absolute top-[60%] left-[8%] text-5xl float-sticker-reverse sticker rounded-2xl bg-white p-3 hidden md:block" style={{ animationDelay: "1s" }}>💻</div>
      <div className="absolute bottom-[20%] right-[20%] text-4xl float-sticker sticker rounded-2xl bg-white p-3 hidden md:block" style={{ animationDelay: "2s" }}>⚡</div>
      <div className="absolute top-[30%] left-[15%] text-4xl float-sticker-reverse sticker rounded-2xl bg-white p-3 hidden md:block" style={{ animationDelay: "0.5s" }}>🔥</div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Left side - text */}
          <div className="animate-fade-in">
            {/* Terminal greeting */}
            <div className="inline-block mb-6 px-5 py-2.5 bg-white brutal-border-2 brutal-shadow-sm rounded-full">
              <span className="font-body text-sm font-medium text-deep">
                <span className="text-pink font-bold">$</span> hey there, i'm neeraj 👋
              </span>
            </div>

            {/* Big headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-deep leading-[0.95] mb-6">
              building{" "}
              <span className="text-gradient-brutal">scalable</span>{" "}
              software
            </h1>

            {/* Typewriter */}
            <p className="text-base sm:text-lg md:text-xl font-body text-deep/70 mb-4 min-h-[2rem]">
              <span className="font-bold text-deep">{typedText}</span>
              {typedText.length < fullText.length && <span className="typewriter-cursor"></span>}
            </p>

            <p className="text-sm sm:text-base font-body text-deep/60 mb-8">
              m.s. computer science @ university of michigan · 2 years exp · detroit, mi
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={handleDownloadResume}
                className="w-full sm:w-auto justify-center bg-deep text-white px-8 py-4 rounded-full font-display font-bold text-lg brutal-border brutal-shadow bouncy flex items-center gap-2"
              >
                <Terminal className="w-5 h-5" />
                download resume
              </button>
              <button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full sm:w-auto justify-center bg-white text-deep px-8 py-4 rounded-full font-display font-bold text-lg brutal-border brutal-shadow bouncy flex items-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                view projects
              </button>
            </div>

            {/* Status badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-white brutal-border-2 brutal-shadow-sm rounded-full">
              <div className="relative">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full pulse-dot"></div>
              </div>
              <span className="font-body font-medium text-deep text-sm">open to full-time & internships</span>
            </div>
          </div>

          {/* Right side - phone mockup */}
          <div className="hidden lg:flex justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative tilt-2">
              {/* Phone frame */}
              <div className="w-72 bg-deep brutal-border-8 rounded-[3rem] p-4 brutal-shadow-lg">
                <div className="bg-white rounded-[2rem] p-4 space-y-3 overflow-hidden">
                  {/* Mini header */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary brutal-border-2 flex items-center justify-center font-display font-bold text-xs">n</div>
                    <div>
                      <div className="font-display font-bold text-xs text-deep">neeraj.dev</div>
                      <div className="text-[10px] text-deep/50 font-body">online now</div>
                    </div>
                  </div>
                  
                  {/* Mock posts */}
                  {[
                    { bg: "bg-primary", text: "shipped 30+ microservices 🚀", tilt: "tilt-neg-1" },
                    { bg: "bg-purple text-white", text: "aws + docker + k8s ☁️", tilt: "tilt-1" },
                    { bg: "bg-pink text-white", text: "gpa: 3.96 @ umich 🎓", tilt: "tilt-neg-1" },
                    { bg: "bg-white", text: "react · spring boot · node", tilt: "tilt-1" },
                  ].map((post, i) => (
                    <div key={i} className={`${post.bg} ${post.tilt} brutal-border-2 brutal-shadow-sm rounded-2xl p-3`}>
                      <p className="font-body font-medium text-xs">{post.text}</p>
                    </div>
                  ))}

                  {/* Bottom tab bar */}
                  <div className="flex items-center justify-around pt-2 border-t-2 border-deep mt-2">
                    <span className="text-lg">🏠</span>
                    <span className="text-lg">🔍</span>
                    <div className="w-10 h-10 bg-primary brutal-border-2 rounded-full flex items-center justify-center">
                      <Zap className="w-5 h-5 text-deep" />
                    </div>
                    <span className="text-lg">💬</span>
                    <span className="text-lg">👤</span>
                  </div>
                </div>
              </div>
              
              {/* Extra floating stickers around phone */}
              <div className="absolute -top-6 -right-6 text-3xl float-sticker sticker rounded-xl bg-white p-2">✨</div>
              <div className="absolute -bottom-4 -left-6 text-3xl float-sticker-reverse sticker rounded-xl bg-white p-2">🎯</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2">
        <span className="text-xs font-display text-deep/60">scroll down</span>
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 text-deep" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
