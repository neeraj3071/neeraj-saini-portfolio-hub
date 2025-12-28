import { motion } from "framer-motion";
import { Code, Cloud, Wrench, Database, TestTube, Boxes, Brain, GitBranch, Sparkles, Zap } from "lucide-react";
import { useState } from "react";
import { Tilt3DCard, Float3D, GlowOrb } from "./3d/Scene3D";
import { StaggerContainer, StaggerItem, RevealText } from "./3d/AnimatedSection";

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "C++", "JavaScript", "TypeScript", "SQL", "HTML", "CSS", "XSL", "XML"],
      icon: Code,
      gradient: "from-blue-500 to-indigo-500",
      bgGlow: "bg-blue-500/20",
    },
    {
      title: "Frameworks",
      skills: ["React.js", "Nest.js", "Spring Boot", "Node.js", "FastAPI", "Express.js", "Microservices"],
      icon: Boxes,
      gradient: "from-emerald-500 to-teal-500",
      bgGlow: "bg-emerald-500/20",
    },
    {
      title: "Cloud/DevOps",
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Kafka", "MQTT"],
      icon: Cloud,
      gradient: "from-cyan-500 to-blue-500",
      bgGlow: "bg-cyan-500/20",
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "NoSQL"],
      icon: Database,
      gradient: "from-orange-500 to-red-500",
      bgGlow: "bg-orange-500/20",
    },
    {
      title: "Testing/Tools",
      skills: ["JUnit", "Selenium", "Postman", "Grafana", "Jira", "Camunda BPMN", "NiFi"],
      icon: TestTube,
      gradient: "from-rose-500 to-pink-500",
      bgGlow: "bg-rose-500/20",
    },
    {
      title: "AI/ML",
      skills: ["TensorFlow", "PyTorch", "Google Gemini", "Scikit-learn", "Predictive Analytics"],
      icon: Brain,
      gradient: "from-violet-500 to-purple-500",
      bgGlow: "bg-violet-500/20",
    },
    {
      title: "Practices",
      skills: ["Agile", "CI/CD", "System Design", "Cloud Optimization", "Secure Coding", "Data Structures", "Compliance", "Version Control"],
      icon: GitBranch,
      gradient: "from-teal-500 to-emerald-500",
      bgGlow: "bg-teal-500/20",
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-gradient-to-br from-background via-accent/30 to-background" style={{ perspective: "1200px" }}>
      {/* 3D Background */}
      <GlowOrb color="primary" size="w-96 h-96" position="top-20 left-10" />
      <GlowOrb color="emerald-500" size="w-80 h-80" position="bottom-20 right-10" delay={2} />
      <GlowOrb color="cyan-500" size="w-64 h-64" position="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" delay={4} />

      {/* Floating particles with 3D depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Float3D key={i} delay={i * 0.2} duration={4 + Math.random() * 4}>
            <motion.div
              className="absolute w-2 h-2 bg-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          </Float3D>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-xl border border-border/50 rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">My Expertise</span>
            <motion.div animate={{ y: [-2, 2, -2] }} transition={{ duration: 1, repeat: Infinity }}>
              <Zap className="w-4 h-4 text-yellow-500" />
            </motion.div>
          </motion.div>
          
          <RevealText>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mt-2 mb-4">
              <span className="text-gradient-animate">Technical</span> Skills
            </h2>
          </RevealText>
          
          <motion.div 
            className="w-32 h-1.5 bg-gradient-to-r from-primary via-emerald-500 to-cyan-500 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>

        {/* Skills Grid with 3D cards */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isHovered = hoveredCategory === category.title;
            
            return (
              <StaggerItem key={category.title}>
                <Tilt3DCard intensity={12}>
                  <motion.div
                    className="group relative h-full"
                    onMouseEnter={() => setHoveredCategory(category.title)}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    {/* Glow effect */}
                    <motion.div 
                      className={`absolute -inset-2 ${category.bgGlow} rounded-3xl blur-xl`}
                      animate={{ opacity: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <div className="relative h-full bg-card/70 backdrop-blur-xl rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden">
                      {/* Shine effect */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />

                      {/* Icon with 3D rotation */}
                      <div className="flex flex-col items-center mb-5 relative">
                        <motion.div 
                          className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg mb-3`}
                          whileHover={{ scale: 1.15, rotateY: 15, rotateX: -10 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          style={{ transformStyle: "preserve-3d" }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
                          <Icon className="w-8 h-8 text-white relative z-10" />
                        </motion.div>
                        
                        <motion.h3 
                          className="text-lg font-bold text-foreground text-center"
                          animate={{ 
                            color: isHovered ? "hsl(var(--primary))" : "hsl(var(--foreground))" 
                          }}
                        >
                          {category.title}
                        </motion.h3>
                      </div>

                      {/* Skills tags */}
                      <div className="flex flex-wrap gap-2 justify-center">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skill}
                            className="px-3 py-1.5 bg-secondary/50 backdrop-blur-sm text-secondary-foreground rounded-lg text-xs font-medium border border-border/50 cursor-default"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index * 0.1) + (skillIndex * 0.02) }}
                            whileHover={{ 
                              scale: 1.1,
                              backgroundColor: "hsl(var(--primary))",
                              color: "hsl(var(--primary-foreground))",
                              y: -3
                            }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>

                      {/* Corner glow */}
                      <motion.div 
                        className={`absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br ${category.gradient} rounded-full blur-2xl`}
                        animate={{ opacity: isHovered ? 0.4 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>
                </Tilt3DCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Skills counter */}
        <motion.div 
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.div 
            className="inline-flex items-center gap-4 px-8 py-4 bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl shadow-xl"
            whileHover={{ scale: 1.02 }}
          >
            {[
              { value: "50+", label: "Technologies" },
              { value: "7", label: "Categories" },
              { value: "∞", label: "Learning" },
            ].map((item, i) => (
              <motion.div 
                key={item.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.1 }}
              >
                <motion.div 
                  className="text-3xl font-bold text-gradient-animate"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                >
                  {item.value}
                </motion.div>
                <div className="text-xs text-muted-foreground font-medium">{item.label}</div>
                {i < 2 && <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-10 bg-border" />}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
