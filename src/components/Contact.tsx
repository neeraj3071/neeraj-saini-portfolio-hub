import { toast } from "@/hooks/use-toast";
import { Mail, Linkedin, Github, Download } from "lucide-react";

const Contact = () => {
  const handleDownloadResume = () => {
    window.open("https://drive.google.com/file/d/1NIAo0TSpN_srA-lIm8Dtdn31Uo10IYTR/view?usp=sharing", "_blank");
    toast({ title: "opening resume", description: "your resume is opening in a new tab." });
  };

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Giant CTA - Kasturi crimson */}
      <div className="bg-crimson py-20 md:py-28 relative overflow-hidden">
        {/* Giant emoji stickers at low opacity */}
        <div className="absolute top-10 left-10 text-[120px] opacity-20 hidden md:block" style={{ transform: "rotate(-5deg)" }}>💣</div>
        <div className="absolute bottom-10 right-10 text-[120px] opacity-20 hidden md:block" style={{ transform: "rotate(5deg)" }}>🦄</div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Massive headline */}
          <h2 className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-display font-extrabold text-white uppercase tracking-tighter leading-[0.85] mb-4">
            hi
          </h2>

          <h3 className="font-margherita text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tighter italic mb-8">
            it's a match!
          </h3>

          <p className="text-xl md:text-2xl font-body font-medium text-white/80 max-w-2xl mx-auto mb-8">
            let's craft software that leaves a mark. currently open to{" "}
            <span className="font-bold text-white">full-time and internship opportunities</span>.
          </p>

          {/* Email link */}
          <a
            href="mailto:neerajsa@umich.edu"
            className="text-2xl sm:text-3xl md:text-5xl font-display font-extrabold text-white underline decoration-black underline-offset-8 decoration-4 hover:text-orange transition-colors duration-300 inline-block mb-10"
          >
            neerajsa@umich.edu
          </a>

          {/* Social buttons */}
          <div className="flex justify-center gap-4 mb-10">
            {[
              { icon: Github, link: "https://github.com/neeraj3071" },
              { icon: Linkedin, link: "https://linkedin.com/in/neerajsaini07" },
              { icon: Mail, link: "mailto:neerajsa@umich.edu" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 md:w-20 md:h-20 bg-transparent text-white kasturi-border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
              >
                <social.icon className="w-6 h-6 md:w-7 md:h-7" />
              </a>
            ))}
          </div>

          {/* Resume button */}
          <button
            onClick={handleDownloadResume}
            className="bg-white text-black px-10 py-5 rounded-2xl font-display font-extrabold text-lg uppercase tracking-tight kasturi-border kasturi-shadow-lg hover:scale-105 transition-transform duration-300 inline-flex items-center gap-3"
          >
            <Download className="w-6 h-6" />
            download resume
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white kasturi-border-8 border-x-0 border-b-0 relative overflow-hidden py-10 sm:py-12">
        {/* Giant background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="font-display font-extrabold text-[10vw] text-black/5 uppercase whitespace-nowrap">
            neeraj saini
          </span>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
          <div className="flex justify-center gap-4 mb-6">
            {[
              { icon: Github, link: "https://github.com/neeraj3071" },
              { icon: Linkedin, link: "https://linkedin.com/in/neerajsaini07" },
              { icon: Mail, link: "mailto:neerajsa@umich.edu" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-black text-white kasturi-border-2 rounded-full flex items-center justify-center hover:bg-crimson hover:scale-110 transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <p className="font-body text-black/60 text-sm">
            © 2024 neeraj randhir singh saini · handcrafted with character
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
