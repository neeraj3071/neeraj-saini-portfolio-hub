import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Terminal, Braces, Database, Cloud, Sparkles } from "lucide-react";
import { Float3D, GlowOrb } from "./3d/Scene3D";
import { MagneticButton, RevealText } from "./3d/AnimatedSection";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Full-Stack Software Engineer";
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

  useEffect(() => {
    setIsVisible(true);
    
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
    { Icon: Terminal, delay: 0, x: "15%", y: "20%" },
    { Icon: Braces, delay: 0.5, x: "85%", y: "25%" },
    { Icon: Database, delay: 1, x: "10%", y: "70%" },
    { Icon: Cloud, delay: 1.5, x: "90%", y: "65%" },
    { Icon: Sparkles, delay: 2, x: "50%", y: "10%" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-background via-accent/30 to-primary/5"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* 3D Grid floor effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-[60vh]"
          style={{
            background: `linear-gradient(transparent 0%, hsl(var(--background)) 100%),
                        repeating-linear-gradient(90deg, hsl(var(--primary) / 0.1) 0px, transparent 1px, transparent 60px),
                        repeating-linear-gradient(0deg, hsl(var(--primary) / 0.1) 0px, transparent 1px, transparent 60px)`,
            transform: "perspective(500px) rotateX(60deg)",
            transformOrigin: "bottom",
          }}
        />
      </div>

      {/* Floating 3D orbs */}
      <GlowOrb color="primary" size="w-96 h-96" position="-top-48 -left-48" delay={0} />
      <GlowOrb color="emerald-500" size="w-80 h-80" position="-bottom-40 -right-40" delay={2} />
      <GlowOrb color="cyan-500" size="w-64 h-64" position="top-1/4 right-1/4" delay={4} />

      {/* Floating tech icons with 3D effect */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <Float3D key={index} delay={delay} className="absolute" duration={5 + index}>
          <motion.div
            className="text-primary/30"
            style={{ left: x, top: y, position: "absolute" }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay + 0.5, duration: 0.5 }}
          >
            <Icon className="w-8 h-8 md:w-12 md:h-12" />
          </motion.div>
        </Float3D>
      ))}

      {/* Main content with 3D transforms */}
      <motion.div 
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        style={{ y, opacity, scale }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: -15 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50, rotateX: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Terminal greeting with 3D depth */}
          <motion.div 
            className="inline-block mb-6 px-6 py-3 bg-card/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-border/50"
            initial={{ opacity: 0, z: -100 }}
            animate={{ opacity: 1, z: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <span className="text-muted-foreground font-mono text-sm">
              <span className="text-primary">$</span> echo "👋 Welcome to my portfolio"
            </span>
          </motion.div>

          {/* Name with 3D reveal */}
          <div className="overflow-hidden mb-6">
            <RevealText>
              <h1 className="text-5xl md:text-8xl font-bold text-foreground leading-tight">
                <motion.span 
                  className="inline-block"
                  whileHover={{ 
                    rotateY: 10,
                    textShadow: "0 0 40px hsl(var(--primary))",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Neeraj Randhir
                </motion.span>
              </h1>
            </RevealText>
            <RevealText delay={0.1}>
              <h1 className="text-5xl md:text-8xl font-bold leading-tight">
                <span className="text-gradient-animate">Singh Saini</span>
              </h1>
            </RevealText>
          </div>
          
          {/* Typewriter effect with glow */}
          <motion.div 
            className="max-w-3xl mx-auto space-y-4 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-xl md:text-2xl text-muted-foreground font-medium h-8">
              <span className="font-bold text-gradient-animate font-mono">{typedText}</span>
              {typedText.length < fullText.length && <span className="typewriter-cursor"></span>}
              {typedText.length === fullText.length && (
                <motion.span 
                  className="text-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {" "}with 2 years of experience
                </motion.span>
              )}
            </p>
            
            <motion.p 
              className="text-lg text-muted-foreground flex items-center justify-center gap-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <span className="inline-flex items-center gap-1">
                <motion.span 
                  className="w-2 h-2 bg-primary rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Detroit, Michigan, USA
              </span>
              <span className="hidden sm:inline text-border">|</span>
              <span>📞 +1-313-285-0725</span>
            </motion.p>
            
            <motion.div 
              className="inline-block px-4 py-2 bg-accent/50 backdrop-blur-sm rounded-lg border border-border"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">M.S. in Computer and Information Science</span> (GPA: 3.95)
                <br/>
                <span className="text-primary">University of Michigan, Dearborn</span>
              </p>
            </motion.div>
          </motion.div>

          {/* 3D Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <MagneticButton>
              <Button
                onClick={handleDownloadResume}
                size="lg"
                className="bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-600/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-primary/25 group"
              >
                <motion.span
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                >
                  <Terminal className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Download Resume
                </motion.span>
              </Button>
            </MagneticButton>
            
            <MagneticButton>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-card/50 backdrop-blur-sm px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 group"
              >
                <motion.span
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                >
                  <Braces className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  View Projects
                </motion.span>
              </Button>
            </MagneticButton>
          </motion.div>

          {/* Status badge with glow */}
          <motion.div 
            className="inline-flex items-center gap-3 px-6 py-3 bg-card/80 backdrop-blur-xl rounded-full border border-border shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <motion.div 
                className="w-3 h-3 bg-emerald-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <motion.div 
                className="absolute inset-0 w-3 h-3 bg-emerald-500 rounded-full"
                animate={{ scale: [1, 2], opacity: [0.6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
            <span className="text-foreground font-medium">Open to Full-time & Internship Opportunities</span>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-xs font-mono text-muted-foreground">scroll()</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-primary" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
