import { ExternalLink, Github, Youtube, Star, Folder } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      name: "hot wheels marketplace",
      description: "production-ready marketplace for hot wheels collectors with real-time messaging, search & filtering, wishlists, and admin dashboard.",
      technologies: ["Next.js 16", "React 19", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "JWT"],
      sourceCode: "https://github.com/neeraj3071/HotWheels-Marketplace",
      liveDemo: "https://hotwheels-marketplace.vercel.app/",
      highlights: "34 api endpoints · 74 tests (88% pass) · 100+ concurrent users · zero vulns",
      featured: true,
      bg: "bg-pink text-white",
      span: "md:col-span-2 lg:col-span-7",
      tilt: "tilt-1",
    },
    {
      name: "iot vehicle monitoring",
      description: "cloud-native iot solution for real-time vehicle monitoring with live telemetry for 500+ vehicles using mqtt streaming.",
      technologies: ["React.js", "Node.js", "Python", "MongoDB", "Kubernetes", "MQTT"],
      sourceCode: "https://github.com/neeraj3071/IOT---Enabled-Vehicle-Monitoring-Dashboard",
      highlights: "99.9% uptime · scalable data pipelines",
      featured: true,
      bg: "bg-purple text-white",
      span: "lg:col-span-5",
      tilt: "tilt-neg-2",
    },
    {
      name: "greenchain eco tracker",
      description: "ai-powered sustainability tracker using gemini api with jwt auth, boosting api speed by 40%.",
      technologies: ["React.js", "FastAPI", "MongoDB", "Gemini API", "JWT"],
      sourceCode: "https://github.com/neeraj3071/GreenChain-Community-Eco-Action-Tracker",
      highlights: "ai-powered eco-action insights",
      featured: true,
      bg: "bg-primary",
      span: "lg:col-span-5",
      tilt: "tilt-2",
    },
    {
      name: "ai chatbot",
      description: "full-stack chatbot using react and spring boot, integrated with gemini flash api.",
      technologies: ["React", "Spring Boot", "Docker", "Render"],
      liveDemo: "https://myaichatbot-springboot.netlify.app/",
      sourceCode: "https://github.com/neeraj3071/AI-ChatBot",
      bg: "bg-deep text-white",
      span: "lg:col-span-7",
      tilt: "tilt-neg-1",
    },
    {
      name: "aura sense",
      description: "real-time deep learning system for gender and mood recognition using mobilenetv2 and cnn.",
      technologies: ["TensorFlow", "Keras", "Flask", "OpenCV"],
      liveDemo: "https://www.youtube.com/watch?v=uZQCt3bLOB4",
      sourceCode: "https://github.com/neeraj3071/Aura-Sense---Gender-and-Mood-Recognizer-System",
      presentation: "https://www.youtube.com/watch?v=BnlZIYyMLEc",
      bg: "bg-white",
      span: "lg:col-span-6",
      tilt: "tilt-1",
    },
    {
      name: "aws cloud app",
      description: "full-stack app deployed with aws services and integrated ci/cd monitoring.",
      technologies: ["React", "Spring Boot", "AWS", "CloudWatch"],
      sourceCode: "https://github.com/neeraj3071/Book-Store-on-Aws-full-stack-",
      bg: "bg-primary",
      span: "lg:col-span-6",
      tilt: "tilt-neg-2",
    },
    {
      name: "ai test case generator",
      description: "intelligent tool that automates unit test case generation using openai's api.",
      technologies: ["React", "Flask", "OpenAI API", "GitHub Actions"],
      sourceCode: "https://github.com/neeraj3071/AI-Powered-Test-Case-Generator",
      bg: "bg-purple text-white",
      span: "lg:col-span-4",
      tilt: "tilt-2",
    },
    {
      name: "quiz management system",
      description: "secure and scalable quiz platform with user roles and performance optimization.",
      technologies: ["Java", "Spring Boot", "MySQL", "REST API"],
      sourceCode: "https://github.com/neeraj3071/Quiz-App",
      bg: "bg-pink text-white",
      span: "lg:col-span-4",
      tilt: "tilt-neg-1",
    },
    {
      name: "dvd rental database",
      description: "postgresql-based project focused on schema design, query optimization, and tuning.",
      technologies: ["PostgreSQL", "SQL", "Indexing"],
      sourceCode: "https://github.com/neeraj3071/dvd_rental_project_sql",
      bg: "bg-deep text-white",
      span: "lg:col-span-4",
      tilt: "tilt-1",
    },
    {
      name: "git research tool",
      description: "java app for analyzing github repos with automated commit analysis and metadata extraction.",
      technologies: ["Java", "GitHub API", "Java Swing"],
      sourceCode: "https://github.com/neeraj3071/Git-Research-Tool",
      bg: "bg-white",
      span: "lg:col-span-6",
      tilt: "tilt-neg-2",
    },
    {
      name: "saini battery website",
      description: "official website for a local business, built for mobile and seo performance.",
      technologies: ["HTML", "CSS", "JavaScript", "SEO"],
      liveDemo: "https://saini-battery.netlify.app/",
      bg: "bg-primary",
      span: "lg:col-span-6",
      tilt: "tilt-2",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      {/* Stickers */}
      <div className="absolute top-12 left-12 text-4xl float-sticker sticker rounded-xl bg-white p-2">📁</div>
      <div className="absolute bottom-12 right-12 text-4xl float-sticker-reverse sticker rounded-xl bg-white p-2">🏗️</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-2 bg-deep text-white brutal-border-2 brutal-shadow-sm rounded-full mb-4 tilt-neg-1">
            <span className="font-display font-bold text-sm uppercase">portfolio</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-deep">
            featured <span className="text-gradient-brutal">projects</span>
          </h2>
          <p className="font-body text-deep/60 mt-4 max-w-2xl mx-auto">
            innovative solutions across full-stack development, ai, iot, and cloud computing
          </p>
        </div>

        {/* Bento project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${project.span} ${project.bg} ${project.tilt} brutal-border brutal-shadow rounded-brutal p-6 bouncy group`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Folder className="w-5 h-5 opacity-70" />
                  <h3 className="text-lg font-display font-bold leading-tight">{project.name}</h3>
                </div>
                {project.featured && (
                  <Star className="w-5 h-5 fill-current opacity-70 flex-shrink-0" />
                )}
              </div>

              <p className="font-body text-sm leading-relaxed opacity-80 mb-3">{project.description}</p>

              {project.highlights && (
                <div className="mb-3 px-3 py-2 bg-white/20 brutal-border-2 rounded-2xl">
                  <p className="text-xs font-body font-medium opacity-90">⭐ {project.highlights}</p>
                </div>
              )}

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="px-2.5 py-1 bg-white/90 text-deep brutal-border-2 rounded-full text-[10px] font-body font-medium">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-2.5 py-1 bg-white/40 rounded-full text-[10px] font-body font-medium">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.liveDemo && (
                  <button
                    onClick={() => window.open(project.liveDemo, "_blank")}
                    className="flex items-center gap-1.5 px-4 py-2 bg-white text-deep brutal-border-2 rounded-full text-xs font-display font-bold bouncy"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    {project.liveDemo.includes("youtube") ? "demo" : "live"}
                  </button>
                )}
                {project.presentation && (
                  <button
                    onClick={() => window.open(project.presentation, "_blank")}
                    className="flex items-center gap-1.5 px-4 py-2 bg-white/30 brutal-border-2 rounded-full text-xs font-display font-bold bouncy"
                  >
                    <Youtube className="w-3.5 h-3.5" />
                    talk
                  </button>
                )}
                {project.sourceCode && (
                  <button
                    onClick={() => window.open(project.sourceCode, "_blank")}
                    className="flex items-center gap-1.5 px-4 py-2 bg-white/30 brutal-border-2 rounded-full text-xs font-display font-bold bouncy"
                  >
                    <Github className="w-3.5 h-3.5" />
                    code
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => window.open("https://github.com/neeraj3071", "_blank")}
            className="bg-deep text-white px-10 py-5 rounded-full font-display font-bold text-lg brutal-border brutal-shadow bouncy wobble inline-flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            view all on github
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
