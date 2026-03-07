import { toast } from "@/hooks/use-toast";
import { Mail, Linkedin, Github, MapPin, Download, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    { label: "email", value: "neerajsa@umich.edu", link: "mailto:neerajsa@umich.edu", icon: Mail, bg: "bg-primary" },
    { label: "phone", value: "+1-313-285-0725", link: "tel:+13132850725", icon: Phone, bg: "bg-purple text-white" },
    { label: "linkedin", value: "linkedin.com/in/neerajsaini07", link: "https://linkedin.com/in/neerajsaini07", icon: Linkedin, bg: "bg-white" },
    { label: "github", value: "github.com/neeraj3071", link: "https://github.com/neeraj3071", icon: Github, bg: "bg-deep text-white" },
    { label: "location", value: "Detroit, MI", link: "#", icon: MapPin, bg: "bg-pink text-white" },
  ];

  const handleDownloadResume = () => {
    window.open("https://drive.google.com/file/d/1NIAo0TSpN_srA-lIm8Dtdn31Uo10IYTR/view?usp=sharing", "_blank");
    toast({ title: "opening resume", description: "your resume is opening in a new tab." });
  };

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Giant CTA section */}
      <div className="bg-pink py-24 relative overflow-hidden">
        {/* Giant emoji stickers at low opacity */}
        <div className="absolute top-10 left-10 text-[120px] opacity-20 tilt-neg-3">💣</div>
        <div className="absolute bottom-10 right-10 text-[120px] opacity-20 tilt-3">🦄</div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-5 py-2 bg-white brutal-border-2 brutal-shadow-sm rounded-full mb-6 tilt-neg-1">
              <span className="font-display font-bold text-sm text-deep uppercase">let's connect</span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[0.95]">
              get in<br />touch
            </h2>
            <p className="font-body text-white/80 text-lg mt-6 max-w-xl mx-auto">
              i'm currently open to <span className="font-bold text-white">full-time and internship opportunities</span>.
              let's build something great together!
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const tilts = ["tilt-1", "tilt-neg-1", "tilt-2", "tilt-neg-2", "tilt-1"];
              return (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={`${info.bg} ${tilts[index]} brutal-border brutal-shadow rounded-brutal p-6 bouncy block`}
                >
                  <Icon className="w-8 h-8 mb-3" />
                  <p className="font-display font-bold text-sm opacity-60 mb-1">{info.label}</p>
                  <p className="font-body font-medium text-sm break-all">{info.value}</p>
                </a>
              );
            })}
          </div>

          {/* Resume CTA */}
          <div className="text-center">
            <button
              onClick={handleDownloadResume}
              className="bg-white text-deep px-10 py-5 rounded-full font-display font-bold text-lg brutal-border brutal-shadow-lg bouncy wobble inline-flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              download resume
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t-[8px] border-deep relative overflow-hidden py-12">
        {/* Giant background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="font-display font-bold text-[10vw] text-deep/5 uppercase whitespace-nowrap">
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
                className="w-12 h-12 bg-deep text-white brutal-border-2 rounded-full flex items-center justify-center bouncy"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <p className="font-body text-deep/60 text-sm">
            © 2024 neeraj randhir singh saini · built with <span className="font-bold text-deep">react</span> & <span className="font-bold text-deep">tailwind</span>
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
