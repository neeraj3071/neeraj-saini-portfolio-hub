import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Tilt3DCard, GlowOrb } from "./3d/Scene3D";
import { RevealText, StaggerContainer, StaggerItem } from "./3d/AnimatedSection";

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  const experiences = [
    {
      company: "University of Michigan – Dearborn",
      position: "Graduate Research Assistant",
      duration: "Jan 2025 – Present",
      location: "Dearborn, MI",
      type: "Research",
      achievements: [
        "Performed large-scale analysis of 350+ commits across open-source projects, deriving structured insights on refactoring and software evolution",
        "Devised a hybrid automation pipeline integrating analytics tools with Python classifiers, achieving 87.8% precision and reducing manual effort by 98.9%"
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      company: "Reliance Jio Platforms Limited",
      position: "Software Developer Engineer",
      duration: "Jun 2023 – Aug 2024",
      location: "Mumbai, India",
      type: "Full-time",
      achievements: [
        "Developed 30+ Spring Boot microservices with Kafka/MySQL, improving data synchronization efficiency by 40%",
        "Optimized CI/CD using Jenkins and Kubernetes, cutting deployment time by 25% with zero downtime",
        "Constructed React.js interfaces integrated with REST APIs, increasing performance and usability by 30%",
        "Enhanced testing using JUnit, Selenium, and Postman, improving defect detection by 35%"
      ],
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      company: "Saini Battery and Auto Electrical Works",
      position: "Software Developer & Operations Manager",
      duration: "Aug 2022 – Oct 2023",
      location: "Pune, India",
      type: "Full-time",
      achievements: [
        "Created a billing and inventory system using React.js, Node.js, and MySQL, reducing processing time by 45%",
        "Launched business website and automated reports, increasing online inquiries by 25% and cutting manual effort by 40%"
      ],
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      company: "The Entrepreneurship Network",
      position: "Software Developer Intern",
      duration: "Feb 2022 – Jun 2022",
      location: "Pune, India",
      type: "Internship",
      achievements: [
        "Engineered RESTful APIs using Node.js and Express.js to support data visualization tools",
        "Optimized SQL queries and caching with Redis, achieving 35% faster execution"
      ],
      gradient: "from-orange-500 to-amber-500",
    },
  ];

  return (
    <section 
      id="experience" 
      className="py-24 bg-background relative overflow-hidden"
      style={{ perspective: "1200px" }}
      ref={containerRef}
    >
      {/* 3D Background */}
      <GlowOrb color="primary" size="w-80 h-80" position="top-20 -left-40" />
      <GlowOrb color="purple-500" size="w-64 h-64" position="bottom-40 -right-32" delay={2} />

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
            Career Journey
          </motion.span>
          <RevealText>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mt-2 mb-4">Professional Experience</h2>
          </RevealText>
          <motion.div 
            className="w-20 h-1.5 bg-gradient-to-r from-primary to-emerald-600 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>

        <div className="relative">
          {/* Animated timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border/30 rounded-full overflow-hidden">
            <motion.div 
              className="w-full bg-gradient-to-b from-primary via-emerald-500 to-cyan-500 rounded-full"
              style={{ height: lineHeight }}
            />
          </div>

          <StaggerContainer className="space-y-12" staggerDelay={0.2}>
            {experiences.map((exp, index) => (
              <StaggerItem key={index}>
                <div className="relative">
                  {/* Timeline dot with pulse */}
                  <motion.div 
                    className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -translate-y-4 z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                  >
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${exp.gradient} ring-4 ring-background shadow-lg`} />
                    <motion.div 
                      className={`absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-br ${exp.gradient}`}
                      animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>

                  <div className={`lg:grid lg:grid-cols-2 lg:gap-12 ${index % 2 === 0 ? '' : 'lg:grid-flow-dense'}`}>
                    <div className={index % 2 === 0 ? '' : 'lg:col-start-2'}>
                      <Tilt3DCard intensity={8}>
                        <motion.div 
                          className="bg-card rounded-2xl p-8 border border-border shadow-xl hover:shadow-2xl transition-all duration-500"
                          whileHover={{ y: -5 }}
                        >
                          {/* Gradient top border */}
                          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.gradient} rounded-t-2xl`} />
                          
                          <div className="flex items-start gap-4 mb-4">
                            <motion.div 
                              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
                              whileHover={{ scale: 1.1, rotate: 10 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <Briefcase className="w-6 h-6 text-white" />
                            </motion.div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-foreground mb-1">{exp.position}</h3>
                              <p className="text-lg font-semibold text-primary mb-2">{exp.company}</p>
                              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1.5">
                                  <Calendar className="w-4 h-4" />
                                  {exp.duration}
                                </span>
                                <span className="flex items-center gap-1.5">
                                  <MapPin className="w-4 h-4" />
                                  {exp.location}
                                </span>
                                <motion.span 
                                  className="inline-block px-3 py-1 bg-accent text-accent-foreground rounded-lg font-semibold border border-border"
                                  whileHover={{ scale: 1.05 }}
                                >
                                  {exp.type}
                                </motion.span>
                              </div>
                            </div>
                          </div>
                          
                          <ul className="space-y-3 mt-6">
                            {exp.achievements.map((achievement, idx) => (
                              <motion.li 
                                key={idx} 
                                className="flex items-start group"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                              >
                                <motion.span 
                                  className="text-primary mr-3 mt-1 text-lg"
                                  animate={{ scale: [1, 1.2, 1] }}
                                  transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                                >
                                  •
                                </motion.span>
                                <span className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                                  {achievement}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </Tilt3DCard>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default Experience;
