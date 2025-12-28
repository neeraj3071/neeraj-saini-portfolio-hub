import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Youtube, Star, Folder, FolderOpen } from "lucide-react";
import { Tilt3DCard, Float3D, GlowOrb } from "./3d/Scene3D";
import { StaggerContainer, StaggerItem, RevealText, MagneticButton } from "./3d/AnimatedSection";

const Projects = () => {
  const projects = [
    {
      name: "Real-Time IoT Vehicle Monitoring Dashboard",
      description: "Cloud-native IoT solution for real-time vehicle monitoring with live telemetry visualization for 500+ vehicles using MQTT streaming.",
      technologies: ["React.js", "Node.js", "Python", "MongoDB", "Kubernetes", "MQTT"],
      sourceCode: "https://github.com/neeraj3071/IOT---Enabled-Vehicle-Monitoring-Dashboard",
      gradient: "from-purple-500 to-pink-500",
      highlights: "99.9% uptime via container orchestration, scalable data processing pipelines",
      featured: true,
    },
    {
      name: "GreenChain – Community Eco Action Tracker",
      description: "AI-powered sustainability tracker using Gemini API with JWT authentication and async queries, boosting API speed by 40%.",
      technologies: ["React.js", "FastAPI", "MongoDB", "Google Gemini API", "JWT"],
      sourceCode: "https://github.com/neeraj3071/GreenChain-Community-Eco-Action-Tracker",
      gradient: "from-emerald-500 to-teal-500",
      highlights: "AI-powered eco-action insights, FastAPI backend with async optimization",
      featured: true,
    },
    {
      name: "Hot Wheels Marketplace – Full-Stack Collectibles Platform",
      description: "Production-ready marketplace for Hot Wheels collectors featuring real-time messaging, advanced search & filtering, user collections & wishlists, and admin dashboard with content moderation.",
      technologies: ["Next.js 16", "React 19", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma ORM", "Tailwind CSS", "JWT", "bcrypt"],
      sourceCode: "https://github.com/neeraj3071/HotWheels-Marketplace",
      liveDemo: "https://hotwheels-marketplace.vercel.app/",
      gradient: "from-orange-500 to-red-500",
      highlights: "34 REST API endpoints, 74 automated tests (88% pass rate), load tested 100+ concurrent users, zero security vulnerabilities, CI/CD on Render & Vercel",
      featured: true,
    },
    {
      name: "AI Chatbot Web App",
      description: "Full-stack chatbot using React and Spring Boot, integrated with the Gemini Flash API for AI-driven query handling.",
      technologies: ["React (Vite)", "Spring Boot", "Docker", "Render", "Netlify"],
      liveDemo: "https://myaichatbot-springboot.netlify.app/",
      sourceCode: "https://github.com/neeraj3071/AI-ChatBot",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      name: "Aura Sense – Gender and Mood Recognition",
      description: "Real-time deep learning system for gender and mood recognition using MobileNetV2 and CNN models.",
      technologies: ["TensorFlow", "Keras", "Flask", "OpenCV", "Python"],
      liveDemo: "https://www.youtube.com/watch?v=uZQCt3bLOB4&ab_channel=SachetUtekar",
      sourceCode: "https://github.com/neeraj3071/Aura-Sense---Gender-and-Mood-Recognizer-System",
      presentation: "https://www.youtube.com/watch?v=BnlZIYyMLEc&ab_channel=SachetUtekar",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: "Cloud-Based Full-Stack Application (AWS Integration)",
      description: "Responsive full-stack application deployed with AWS services and integrated CI/CD monitoring tools.",
      technologies: ["React", "Spring Boot", "AWS (EC2, S3, DynamoDB)", "CI/CD", "CloudWatch"],
      sourceCode: "https://github.com/neeraj3071/Book-Store-on-Aws-full-stack-",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      name: "AI-Powered Test Case Generator",
      description: "An intelligent tool that automates the generation of unit test cases using OpenAI's API, with support for multiple languages and frameworks.",
      technologies: ["React (Vite)", "Flask", "OpenAI API", "GitHub Actions"],
      sourceCode: "https://github.com/neeraj3071/AI-Powered-Test-Case-Generator",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      name: "Quiz Management System",
      description: "Secure and scalable quiz platform with user roles, performance optimization, and logging.",
      technologies: ["Java", "Spring Boot", "MySQL", "REST API", "JPA", "SLF4J", "Postman"],
      sourceCode: "https://github.com/neeraj3071/Quiz-App",
      gradient: "from-red-500 to-pink-500",
    },
    {
      name: "DVD Rental Database System",
      description: "PostgreSQL-based database project focused on schema design, query optimization, and performance tuning.",
      technologies: ["PostgreSQL", "SQL", "ER Modeling", "Indexing", "EXPLAIN ANALYZE"],
      sourceCode: "https://github.com/neeraj3071/dvd_rental_project_sql",
      gradient: "from-purple-500 to-violet-500",
    },
    {
      name: "Git Research Tool",
      description: "Java-based application designed to assist researchers and developers in analyzing GitHub repositories with automated commit analysis and metadata extraction.",
      technologies: ["Java", "GitHub REST API", "CSV/JSON", "Java Swing"],
      sourceCode: "https://github.com/neeraj3071/Git-Research-Tool",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      name: "Saini Battery & Auto Electrical Works Website",
      description: "Official website for a local business offering battery and electrical services, built for mobile and SEO performance.",
      technologies: ["HTML", "CSS", "JavaScript", "SEO Optimization"],
      liveDemo: "https://saini-battery.netlify.app/",
      gradient: "from-cyan-500 to-teal-500",
    },
  ];

  return (
    <section 
      id="projects" 
      className="py-24 bg-gradient-to-br from-background via-accent/20 to-background relative overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      {/* 3D Background */}
      <GlowOrb color="primary" size="w-96 h-96" position="top-0 left-0" />
      <GlowOrb color="purple-500" size="w-80 h-80" position="bottom-0 right-0" delay={2} />

      {/* Floating code decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <Float3D delay={0}>
          <pre className="absolute top-20 left-10 text-xs font-mono text-foreground">
{`function buildProject() {
  const skills = ['React', 'Node', 'AWS'];
  return skills.map(skill => deploy(skill));
}`}
          </pre>
        </Float3D>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <Folder className="w-4 h-4" />
            Portfolio
          </motion.span>
          <RevealText>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mt-2 mb-4">Featured Projects</h2>
          </RevealText>
          <motion.div 
            className="w-20 h-1.5 bg-gradient-to-r from-primary to-emerald-600 mx-auto rounded-full mb-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions across full-stack development, AI, IoT, and cloud computing
          </p>
        </motion.div>

        {/* Projects Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
          {projects.map((project, index) => (
            <StaggerItem key={index}>
              <Tilt3DCard intensity={10}>
                <motion.div 
                  className="group h-full bg-card rounded-2xl overflow-hidden border border-border shadow-xl hover:shadow-2xl transition-all duration-500"
                  whileHover={{ y: -5 }}
                >
                  {/* Gradient header with shine */}
                  <motion.div 
                    className={`h-2 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <motion.div
                          whileHover={{ rotate: 15, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <FolderOpen className="w-5 h-5 text-primary" />
                        </motion.div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                          {project.name}
                        </h3>
                      </div>
                      {project.featured && (
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Star className="w-5 h-5 text-amber-500 fill-amber-500 flex-shrink-0" />
                        </motion.div>
                      )}
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {project.highlights && (
                      <motion.div 
                        className="mb-4 p-3 bg-gradient-to-r from-accent to-emerald-50 rounded-lg border-l-2 border-primary"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                      >
                        <p className="text-xs text-primary font-medium leading-relaxed">
                          ⭐ {project.highlights}
                        </p>
                      </motion.div>
                    )}

                    {/* Tech tags */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1 bg-secondary text-secondary-foreground rounded-lg text-xs font-medium border border-border"
                            whileHover={{ 
                              scale: 1.05,
                              backgroundColor: "hsl(var(--accent))",
                              borderColor: "hsl(var(--primary))"
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-3 py-1 bg-secondary text-muted-foreground rounded-lg text-xs font-medium">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="space-y-2">
                      {project.liveDemo && (
                        <MagneticButton>
                          <Button
                            size="sm"
                            className={`w-full bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white transition-all duration-300`}
                            onClick={() => window.open(project.liveDemo, '_blank')}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            {project.liveDemo.includes('youtube') ? 'View Demo' : 'Live Demo'}
                          </Button>
                        </MagneticButton>
                      )}
                      
                      {project.presentation && (
                        <MagneticButton>
                          <Button
                            size="sm"
                            variant="outline"
                            className="w-full border-2 border-orange-300 text-orange-600 hover:bg-orange-50 transition-all duration-300"
                            onClick={() => window.open(project.presentation, '_blank')}
                          >
                            <Youtube className="w-4 h-4 mr-2" />
                            Presentation
                          </Button>
                        </MagneticButton>
                      )}

                      {project.sourceCode && (
                        <MagneticButton>
                          <Button
                            size="sm"
                            variant="outline"
                            className="w-full border-2 border-border text-foreground hover:bg-accent transition-all duration-300"
                            onClick={() => window.open(project.sourceCode, '_blank')}
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Source Code
                          </Button>
                        </MagneticButton>
                      )}
                    </div>
                  </div>
                </motion.div>
              </Tilt3DCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View all button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <MagneticButton>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-6 text-lg rounded-xl shadow-xl"
              onClick={() => window.open("https://github.com/neeraj3071", '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
