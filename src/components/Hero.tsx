import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Terminal, Braces, Database, Cloud } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Full-Stack Software Engineer";

  useEffect(() => {
    setIsVisible(true);
    
    // Typewriter effect
    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, []);

  const handleDownloadResume = () => {
    const resumeUrl = "https://drive.google.com/file/d/1QItMlpNxnJ8KD0kaLotL24Sfy_7OI5kT/view?usp=drive_link";
    window.open(resumeUrl, '_blank');
  };

  const floatingIcons = [
    { Icon: Terminal, position: "top-1/4 left-[10%]", delay: "0s", size: "w-8 h-8" },
    { Icon: Braces, position: "top-1/3 right-[15%]", delay: "0.5s", size: "w-10 h-10" },
    { Icon: Database, position: "bottom-1/3 left-[20%]", delay: "1s", size: "w-6 h-6" },
    { Icon: Cloud, position: "bottom-1/4 right-[10%]", delay: "1.5s", size: "w-9 h-9" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center gradient-morph relative overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating tech icons */}
      {floatingIcons.map(({ Icon, position, delay, size }, index) => (
        <div 
          key={index}
          className={`absolute ${position} text-primary/20 float-slow`}
          style={{ animationDelay: delay }}
        >
          <Icon className={size} />
        </div>
      ))}

      {/* Decorative blobs with morph animation */}
      <div className="absolute inset-0 overflow-hidden perspective-1000">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl transform-gpu float-slow"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-full blur-3xl transform-gpu float-medium animation-delay-2000"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl float-fast"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Terminal-style greeting */}
          <div className="inline-block mb-6 px-6 py-3 bg-card/80 backdrop-blur-sm rounded-xl shadow-3d animate-fade-in border border-border">
            <span className="text-muted-foreground font-mono text-sm">
              <span className="text-primary">$</span> echo "👋 Welcome to my portfolio"
            </span>
          </div>

          {/* Name with glitch effect on hover */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground animate-fade-in leading-tight">
            <span className="glitch" data-text="Neeraj Randhir">Neeraj Randhir</span>{" "}
            <span className="text-gradient-animate inline-block">Singh Saini</span>
          </h1>
          
          <div className="max-w-3xl mx-auto space-y-4 mb-10">
            {/* Typewriter effect for title */}
            <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in-up animation-delay-200 font-medium h-8">
              <span className="font-bold text-gradient-animate font-mono">{typedText}</span>
              {typedText.length < fullText.length && <span className="typewriter-cursor"></span>}
              {typedText.length === fullText.length && (
                <span className="text-foreground"> with 2 years of experience</span>
              )}
            </p>
            
            <p className="text-lg text-muted-foreground animate-fade-in-up animation-delay-400 flex items-center justify-center gap-4 flex-wrap">
              <span className="inline-flex items-center gap-1">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Detroit, Michigan, USA
              </span>
              <span className="hidden sm:inline text-border">|</span>
              <span>📞 +1-313-285-0725</span>
            </p>
            
            <div className="inline-block px-4 py-2 bg-accent/50 rounded-lg border border-border animate-fade-in-up animation-delay-600">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">M.S. in Computer and Information Science</span> (GPA: 3.95)
                <br/>
                <span className="text-primary">University of Michigan, Dearborn</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 animate-scale-in animation-delay-800 perspective-1000">
            <Button
              onClick={handleDownloadResume}
              size="lg"
              className="bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-600/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 magnetic shadow-3d shadow-3d-hover shimmer"
            >
              <Terminal className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-primary text-primary hover:bg-accent bg-card px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 magnetic shadow-3d shadow-3d-hover"
            >
              <Braces className="w-5 h-5 mr-2" />
              View Projects
            </Button>
          </div>

          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card/80 backdrop-blur-sm rounded-full border border-border shadow-3d animate-fade-in-up animation-delay-1000">
            <div className="relative">
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              <div className="absolute inset-0 w-3 h-3 bg-emerald-500 rounded-full animate-ping"></div>
            </div>
            <span className="text-foreground font-medium">Open to Full-time & Internship Opportunities</span>
          </div>
        </div>

        {/* Scroll indicator with code style */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs font-mono text-muted-foreground">scroll()</span>
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
