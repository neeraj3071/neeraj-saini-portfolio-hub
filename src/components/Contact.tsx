import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Mail, Linkedin, Github, MapPin, Download, Phone, Send } from "lucide-react";
import { Tilt3DCard, Float3D, GlowOrb } from "./3d/Scene3D";
import { StaggerContainer, StaggerItem, RevealText, MagneticButton } from "./3d/AnimatedSection";

const Contact = () => {
  const contactInfo = [
    {
      label: "Email",
      value: "neerajsa@umich.edu",
      link: "mailto:neerajsa@umich.edu",
      icon: Mail,
      gradient: "from-primary to-teal-500",
    },
    {
      label: "Phone",
      value: "+1-313-285-0725",
      link: "tel:+13132850725",
      icon: Phone,
      gradient: "from-emerald-500 to-green-500",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/neerajsaini07",
      link: "https://linkedin.com/in/neerajsaini07",
      icon: Linkedin,
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      label: "GitHub",
      value: "github.com/neeraj3071",
      link: "https://github.com/neeraj3071",
      icon: Github,
      gradient: "from-gray-600 to-gray-800",
    },
    {
      label: "Location",
      value: "Detroit, MI",
      link: "#",
      icon: MapPin,
      gradient: "from-purple-500 to-pink-500",
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
    <section 
      id="contact" 
      className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-primary/20 text-white relative overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      {/* 3D Background orbs */}
      <GlowOrb color="primary" size="w-96 h-96" position="top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
      <GlowOrb color="emerald-500" size="w-80 h-80" position="bottom-0 right-0 translate-x-1/2 translate-y-1/2" delay={2} />
      
      {/* Floating elements */}
      {[...Array(5)].map((_, i) => (
        <Float3D key={i} delay={i * 0.5} duration={5 + i}>
          <motion.div
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + (i % 3) * 30}%`,
            }}
          />
        </Float3D>
      ))}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="text-primary font-semibold text-sm uppercase tracking-wide"
            whileHover={{ scale: 1.05 }}
          >
            Let's Connect
          </motion.span>
          <RevealText>
            <h2 className="text-4xl md:text-6xl font-bold mt-2 mb-4">Get In Touch</h2>
          </RevealText>
          <motion.div 
            className="w-20 h-1.5 bg-gradient-to-r from-primary to-emerald-400 mx-auto rounded-full mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            I'm currently open to <span className="text-primary font-semibold">full-time and internship opportunities</span>. 
            Let's connect and discuss how we can work together!
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="max-w-4xl mx-auto">
          <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-12" staggerDelay={0.1}>
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <StaggerItem key={index}>
                  <Tilt3DCard intensity={8}>
                    <Card className="bg-white/10 backdrop-blur-xl border-white/20 p-6 hover:bg-white/15 transition-all duration-500 shadow-2xl group">
                      <a
                        href={info.link}
                        className="flex items-start gap-4"
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                      >
                        <motion.div 
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
                          whileHover={{ scale: 1.1, rotate: 10 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <div>
                          <p className="text-slate-400 text-sm mb-1">{info.label}</p>
                          <motion.p 
                            className="text-white group-hover:text-primary transition-colors font-medium"
                            whileHover={{ x: 5 }}
                          >
                            {info.value}
                          </motion.p>
                        </div>
                      </a>
                    </Card>
                  </Tilt3DCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Download button */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <MagneticButton>
              <Button
                onClick={handleDownloadResume}
                size="lg"
                className="bg-gradient-to-r from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-500/90 text-white px-10 py-6 text-lg font-semibold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-primary/25 group"
              >
                <motion.span
                  className="flex items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download Resume
                </motion.span>
              </Button>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div 
          className="border-t border-white/10 mt-20 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400">
            © 2024 Neeraj Randhir Singh Saini. Built with{" "}
            <motion.span 
              className="text-primary"
              whileHover={{ scale: 1.1 }}
              style={{ display: "inline-block" }}
            >
              React
            </motion.span>{" "}
            &{" "}
            <motion.span 
              className="text-primary"
              whileHover={{ scale: 1.1 }}
              style={{ display: "inline-block" }}
            >
              Framer Motion
            </motion.span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
