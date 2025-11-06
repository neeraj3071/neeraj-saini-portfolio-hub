import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownloadResume = () => {
    const resumeUrl = "https://drive.google.com/file/d/1QItMlpNxnJ8KD0kaLotL24Sfy_7OI5kT/view?usp=drive_link";
    window.open(resumeUrl, '_blank');
    console.log("Opening resume from Google Drive");
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-teal-50 to-emerald-50 relative overflow-hidden"
    >
      {/* Decorative elements with 3D depth */}
      <div className="absolute inset-0 overflow-hidden perspective-1000">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-teal-100/30 to-transparent rounded-full blur-3xl transform-gpu"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-emerald-100/30 to-transparent rounded-full blur-3xl transform-gpu"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block mb-6 px-6 py-3 bg-teal-100/80 backdrop-blur-sm rounded-full shadow-3d animate-fade-in">
            <span className="text-teal-800 font-semibold text-sm">👋 Welcome to my portfolio</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 animate-fade-in leading-tight">
            Neeraj Randhir <span className="text-teal-600 inline-block transform hover:scale-105 transition-transform">Singh Saini</span>
          </h1>
          
          <div className="max-w-3xl mx-auto space-y-4 mb-10">
            <p className="text-xl md:text-2xl text-slate-700 animate-fade-in-up animation-delay-200 font-medium">
              <span className="font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">Software Developer</span> specializing in scalable solutions
            </p>
            <p className="text-lg text-slate-600 animate-fade-in-up animation-delay-400">
              📍 Dearborn, Michigan, USA
            </p>
            <p className="text-base text-slate-500 animate-fade-in-up animation-delay-600">
              Master of Science in Computer and Information Science<br/>
              University of Michigan, Dearborn
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 animate-scale-in animation-delay-800 perspective-1000">
            <Button
              onClick={handleDownloadResume}
              size="lg"
              className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-3d shadow-3d-hover"
            >
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 bg-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-3d shadow-3d-hover"
            >
              View Projects
            </Button>
          </div>

          <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-50/80 backdrop-blur-sm rounded-full border border-emerald-200 shadow-3d animate-fade-in-up animation-delay-1000">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-emerald-800 font-medium">Open to Full-time & Internship Opportunities</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-teal-600" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
