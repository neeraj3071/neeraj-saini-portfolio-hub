import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Youtube, Star, Folder, FolderOpen } from "lucide-react";

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
    <section id="projects" className="py-24 gradient-morph relative overflow-hidden">
      {/* Code background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.02]">
        <pre className="text-xs font-mono text-foreground leading-relaxed p-8">
{`function buildProject() {
  const skills = ['React', 'Node', 'AWS'];
  return skills.map(skill => deploy(skill));
}

class Developer {
  constructor() {
    this.passion = Infinity;
  }
}`}
        </pre>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wide animate-fade-in">
            <Folder className="w-4 h-4" />
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4 animate-fade-in">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-emerald-600 mx-auto rounded-full animate-slide-in-right"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Innovative solutions across full-stack development, AI, IoT, and cloud computing</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden transition-all duration-500 border border-border animate-fade-in-up tilt-card shadow-3d shadow-3d-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header with gradient and shimmer */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient} shimmer`}></div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <FolderOpen className="w-5 h-5 text-primary group-hover:animate-wiggle" />
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                      {project.name}
                    </h3>
                  </div>
                  {project.featured && (
                    <Star className="w-5 h-5 text-amber-500 fill-amber-500 flex-shrink-0 animate-bounce-subtle" />
                  )}
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {project.highlights && (
                  <div className="mb-4 p-3 bg-gradient-to-r from-accent to-emerald-50 rounded-lg border-l-2 border-primary">
                    <p className="text-xs text-primary font-medium leading-relaxed">
                      ⭐ {project.highlights}
                    </p>
                  </div>
                )}

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-lg text-xs font-medium hover:bg-accent hover:text-accent-foreground border border-border hover:border-primary transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-secondary text-muted-foreground rounded-lg text-xs font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  {project.liveDemo && (
                    <Button
                      size="sm"
                      className="w-full bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-600/90 text-primary-foreground transition-all duration-300 magnetic"
                      onClick={() => window.open(project.liveDemo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {project.liveDemo.includes('youtube') ? 'View Demo' : 'Live Demo'}
                    </Button>
                  )}
                  
                  {project.presentation && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full border-2 border-orange-300 text-orange-600 hover:bg-orange-50 transition-all duration-300"
                      onClick={() => window.open(project.presentation, '_blank')}
                    >
                      <Youtube className="w-4 h-4 mr-2" />
                      Presentation
                    </Button>
                  )}

                  {project.sourceCode && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full border-2 border-border text-foreground hover:bg-accent transition-all duration-300"
                      onClick={() => window.open(project.sourceCode, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 magnetic animate-scale-in px-8 py-6 text-lg rounded-xl shimmer"
            onClick={() => window.open("https://github.com/neeraj3071", '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
