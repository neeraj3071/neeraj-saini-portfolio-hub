
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Mail, Linkedin, Github, MapPin, Download, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      label: "Email",
      value: "neerajsa@umich.edu",
      link: "mailto:neerajsa@umich.edu",
      icon: Mail,
      color: "text-teal-600",
    },
    {
      label: "Phone",
      value: "+1-313-285-0725",
      link: "tel:+13132850725",
      icon: Phone,
      color: "text-emerald-600",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/neerajsaini07",
      link: "https://linkedin.com/in/neerajsaini07",
      icon: Linkedin,
      color: "text-blue-600",
    },
    {
      label: "GitHub",
      value: "github.com/neerajsaini3071",
      link: "https://github.com/neerajsaini3071",
      icon: Github,
      color: "text-slate-700",
    },
    {
      label: "Location",
      value: "Detroit, MI",
      link: "#",
      icon: MapPin,
      color: "text-purple-600",
    },
  ];

  const handleDownloadResume = () => {
    const resumeUrl = "https://drive.google.com/file/d/1QItMlpNxnJ8KD0kaLotL24Sfy_7OI5kT/view?usp=drive_link";
    window.open(resumeUrl, '_blank');
    toast({
      title: "Opening Resume",
      description: "Your resume is opening in a new tab from Google Drive.",
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-teal-400 font-semibold text-sm uppercase tracking-wide animate-fade-in">Let's Connect</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 animate-fade-in">Get In Touch</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-teal-400 to-emerald-400 mx-auto rounded-full mb-6 animate-slide-in-right"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            I'm currently open to <span className="text-teal-400 font-semibold">full-time and internship opportunities</span>. 
            Let's connect and discuss how we can work together!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12 perspective-1000">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card 
                  key={index} 
                  className="bg-white/10 backdrop-blur-sm border-white/20 p-6 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 animate-scale-in shadow-3d card-3d backface-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <a
                    href={info.link}
                    className="flex items-start gap-4 group"
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors`}>
                      <Icon className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm mb-1">{info.label}</p>
                      <p className="text-white group-hover:text-teal-400 transition-colors font-medium">
                        {info.value}
                      </p>
                    </div>
                  </a>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Button
              onClick={handleDownloadResume}
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white px-10 py-6 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-3d shadow-3d-hover animate-glow"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 mt-20 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 Neeraj Randhir Singh Saini. Built with <span className="text-teal-400">React</span> & <span className="text-teal-400">Tailwind CSS</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
