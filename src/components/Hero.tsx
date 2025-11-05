import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-teal-300 bg-clip-text text-transparent animate-fade-in">
            Neeraj Randhir Singh Saini
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-4 animate-fade-in-up animation-delay-200">
            📍 Dearborn, Michigan, USA
          </p>
          <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            "Building Scalable Software Solutions with Spring Boot, React, and Cloud Tech."
          </p>
          <p className="text-md text-slate-500 mb-8 animate-fade-in-up animation-delay-600">
            Master of Science in Computer and Information Science | University of Michigan, Dearborn
          </p>
          <p className="text-lg text-teal-300 mb-10 animate-fade-in-up animation-delay-800">
            Open to Full-time & Internship Opportunities
          </p>
          
          <Button
            onClick={handleDownloadResume}
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-scale-in animation-delay-1000 hover:animate-glow"
          >
            Download Resume
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
