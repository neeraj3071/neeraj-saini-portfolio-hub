import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.jpg";
import { Award, Rocket, TrendingUp, Code2 } from "lucide-react";
import { Tilt3DCard, Float3D, GlowOrb } from "./3d/Scene3D";
import { StaggerContainer, StaggerItem, RevealText } from "./3d/AnimatedSection";

const About = () => {
  const stats = [
    { icon: Award, value: "3.95", label: "Graduate GPA", color: "text-primary" },
    { icon: Rocket, value: "30+", label: "Microservices Deployed", color: "text-emerald-600" },
    { icon: TrendingUp, value: "99.9%", label: "System Uptime", color: "text-cyan-600" },
  ];

  const techStack = ["Java", "Python", "React.js", "Spring Boot", "AWS", "Docker", "Kubernetes", "Node.js"];

  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden" style={{ perspective: "1200px" }}>
      {/* 3D Background elements */}
      <GlowOrb color="primary" size="w-80 h-80" position="top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
      <GlowOrb color="emerald-500" size="w-64 h-64" position="bottom-0 right-0 translate-x-1/2 translate-y-1/2" delay={2} />

      {/* Floating code elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {["</>", "{ }", "( )", "=>", "[]"].map((code, i) => (
          <Float3D key={i} delay={i * 0.5} duration={5 + i}>
            <motion.div
              className="absolute text-4xl font-mono text-primary/5"
              style={{
                left: `${10 + i * 20}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
            >
              {code}
            </motion.div>
          </Float3D>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wide"
            whileHover={{ scale: 1.05 }}
          >
            <Code2 className="w-4 h-4" />
            Get to know me
          </motion.span>
          <RevealText>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mt-2 mb-4">About Me</h2>
          </RevealText>
          <motion.div 
            className="w-20 h-1.5 bg-gradient-to-r from-primary to-emerald-600 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>
        
        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Image with 3D effects */}
          <motion.div 
            className="flex flex-col items-center lg:items-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              {/* Orbiting elements */}
              <motion.div 
                className="absolute -inset-8"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 w-4 h-4 bg-primary rounded-full shadow-lg" />
              </motion.div>
              <motion.div 
                className="absolute -inset-12"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute bottom-0 right-1/2 w-3 h-3 bg-emerald-500 rounded-full shadow-lg" />
              </motion.div>
              
              {/* Glowing background */}
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-emerald-400/30 rounded-full blur-2xl"
                animate={{ opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              {/* Photo container */}
              <Tilt3DCard intensity={8}>
                <motion.div 
                  className="relative w-64 h-64 rounded-full overflow-hidden ring-4 ring-card ring-offset-4 ring-offset-accent shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src={profilePhoto} 
                    alt="Neeraj Randhir Singh Saini" 
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Shine overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%", y: "-100%" }}
                    whileHover={{ x: "100%", y: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
              </Tilt3DCard>
              
              {/* Floating badge */}
              <Float3D delay={0.5}>
                <motion.div 
                  className="absolute -bottom-2 -right-2 bg-card px-4 py-2 rounded-full shadow-xl border border-border"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className="text-primary font-mono text-sm font-semibold">&lt;dev/&gt;</span>
                </motion.div>
              </Float3D>
            </div>
          </motion.div>

          {/* Bio content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <RevealText>
              <h3 className="text-3xl font-bold text-foreground leading-tight">
                <span className="code-bracket">Full-Stack Software Engineer</span>
              </h3>
            </RevealText>
            
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Full-Stack Software Engineer with <span className="font-bold text-primary">2 years of experience</span> developing scalable web applications, 
              microservices, and automation solutions. Skilled in building cloud-native applications with modern tech stacks.
            </motion.p>
            
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Expertise in <span className="font-bold text-emerald-600">CI/CD, containerization, and system optimization</span>, 
              with a proven track record of improving efficiency and reducing deployment times in agile environments.
            </motion.p>
            
            {/* Tech stack with 3D hover */}
            <StaggerContainer className="flex flex-wrap gap-3 pt-4" staggerDelay={0.05}>
              {techStack.map((tech) => (
                <StaggerItem key={tech}>
                  <motion.span 
                    className="px-5 py-2.5 bg-card text-primary rounded-xl text-sm font-semibold border-2 border-border cursor-default"
                    whileHover={{ 
                      scale: 1.1, 
                      rotateY: 10,
                      borderColor: "hsl(var(--primary))",
                      boxShadow: "0 10px 30px -10px hsl(var(--primary) / 0.3)"
                    }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {tech}
                  </motion.span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>
        </div>

        {/* Stats cards with 3D effect */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <StaggerItem key={stat.label}>
                <Tilt3DCard>
                  <Card className="p-8 text-center bg-card hover:bg-accent/50 transition-all duration-500 border-0 border-t-4 border-t-primary shadow-xl">
                    <motion.div 
                      className="relative inline-block mb-4"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl" />
                      <Icon className={`relative w-14 h-14 ${stat.color}`} />
                    </motion.div>
                    <motion.div 
                      className="text-5xl font-bold text-foreground mb-3 text-gradient-animate"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-muted-foreground font-semibold text-base">{stat.label}</div>
                  </Card>
                </Tilt3DCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default About;
