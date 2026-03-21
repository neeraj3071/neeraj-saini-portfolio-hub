import { ExternalLink, Github, Youtube, Star, Folder } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      name: "daily orbit",
      description: "full-stack personal analytics cockpit to track sleep, workouts, habits, mood, and spending with ai-powered insights.",
      technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Express 5", "Prisma", "PostgreSQL", "Gemini 2.0 Flash"],
      sourceCode: "https://github.com/neeraj3071/Personal-Life-DashBoard",
      liveDemo: "https://daily-orbit-six.vercel.app",
      highlights: "life score engine · ai forecast · frontend on vercel",
      featured: true,
    },
    {
      name: "hot wheels marketplace",
      description: "production-ready marketplace for hot wheels collectors with real-time messaging, search & filtering, wishlists.",
      technologies: ["Next.js 16", "React 19", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "JWT"],
      sourceCode: "https://github.com/neeraj3071/HotWheels-Marketplace",
      liveDemo: "https://hotwheels-marketplace.vercel.app/",
      highlights: "34 api endpoints · 74 tests · 100+ concurrent users",
      featured: true,
    },
    {
      name: "invoicepro",
      description: "cloud-based invoice management app with firebase authentication and real-time data sync.",
      technologies: ["Vue.js 3", "Vuex 4", "Firebase", "Firestore", "SCSS"],
      sourceCode: "https://github.com/neeraj3071/InvoicePro",
      liveDemo: "https://neeraj3071.github.io/InvoicePro/",
      highlights: "firebase auth · real-time cloud sync",
      featured: true,
    },
    {
      name: "iot vehicle monitoring",
      description: "cloud-native iot solution for real-time vehicle monitoring with live telemetry for 500+ vehicles.",
      technologies: ["React.js", "Node.js", "Python", "MongoDB", "Kubernetes", "MQTT"],
      sourceCode: "https://github.com/neeraj3071/IOT---Enabled-Vehicle-Monitoring-Dashboard",
      highlights: "99.9% uptime · scalable pipelines",
      featured: true,
    },
    {
      name: "greenchain eco tracker",
      description: "ai-powered sustainability tracker using gemini api with jwt auth.",
      technologies: ["React.js", "FastAPI", "MongoDB", "Gemini API", "JWT"],
      sourceCode: "https://github.com/neeraj3071/GreenChain-Community-Eco-Action-Tracker",
      highlights: "ai-powered eco insights",
    },
    {
      name: "ai chatbot",
      description: "full-stack chatbot using react and spring boot, integrated with gemini flash api.",
      technologies: ["React", "Spring Boot", "Docker", "Render"],
      liveDemo: "https://myaichatbot-springboot.netlify.app/",
      sourceCode: "https://github.com/neeraj3071/AI-ChatBot",
    },
    {
      name: "aura sense",
      description: "real-time deep learning system for gender and mood recognition using mobilenetv2.",
      technologies: ["TensorFlow", "Keras", "Flask", "OpenCV"],
      liveDemo: "https://www.youtube.com/watch?v=uZQCt3bLOB4",
      sourceCode: "https://github.com/neeraj3071/Aura-Sense---Gender-and-Mood-Recognizer-System",
      presentation: "https://www.youtube.com/watch?v=BnlZIYyMLEc",
    },
    {
      name: "aws cloud app",
      description: "full-stack app deployed with aws services and integrated ci/cd monitoring.",
      technologies: ["React", "Spring Boot", "AWS", "CloudWatch"],
      sourceCode: "https://github.com/neeraj3071/Book-Store-on-Aws-full-stack-",
    },
    {
      name: "ai test case generator",
      description: "intelligent tool that automates unit test case generation using openai's api.",
      technologies: ["React", "Flask", "OpenAI API", "GitHub Actions"],
      sourceCode: "https://github.com/neeraj3071/AI-Powered-Test-Case-Generator",
    },
    {
      name: "quiz management system",
      description: "secure and scalable quiz platform with user roles and performance optimization.",
      technologies: ["Java", "Spring Boot", "MySQL", "REST API"],
      sourceCode: "https://github.com/neeraj3071/Quiz-App",
    },
    {
      name: "dvd rental database",
      description: "postgresql-based project focused on schema design, query optimization, and tuning.",
      technologies: ["PostgreSQL", "SQL", "Indexing"],
      sourceCode: "https://github.com/neeraj3071/dvd_rental_project_sql",
    },
    {
      name: "git research tool",
      description: "java app for analyzing github repos with automated commit analysis.",
      technologies: ["Java", "GitHub API", "Java Swing"],
      sourceCode: "https://github.com/neeraj3071/Git-Research-Tool",
    },
    {
      name: "saini battery website",
      description: "official website for a local business, built for mobile and seo performance.",
      technologies: ["HTML", "CSS", "JavaScript", "SEO"],
      liveDemo: "https://saini-battery.netlify.app/",
    },
  ];

  return (
    <section id="works" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading - Kasturi style */}
        <div className="mb-16">
          <h2 className="font-margherita text-6xl sm:text-7xl md:text-8xl uppercase tracking-tighter text-black leading-[0.9]">
            selected
          </h2>
          <h2 className="font-margherita text-6xl sm:text-7xl md:text-8xl uppercase tracking-tighter text-black leading-[0.9] italic">
            works
          </h2>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl kasturi-border kasturi-shadow-lg kasturi-bouncy cursor-pointer"
              onClick={() => {
                const url = project.liveDemo || project.sourceCode;
                if (url) window.open(url, "_blank");
              }}
            >
              {/* Colored background block */}
              <div className={`aspect-[4/3] relative overflow-hidden ${
                index % 4 === 0 ? "bg-crimson" :
                index % 4 === 1 ? "bg-orange" :
                index % 4 === 2 ? "bg-black" :
                "bg-gray-100"
              }`}>
                {/* Project content overlay */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <Folder className={`w-5 h-5 ${index % 4 === 2 || index % 4 === 0 ? "text-white" : "text-black"}`} />
                      {project.featured && <Star className={`w-5 h-5 fill-current ${index % 4 === 2 || index % 4 === 0 ? "text-white" : "text-black"}`} />}
                    </div>
                    <div className="flex gap-2">
                      {project.liveDemo && (
                        <button
                          onClick={(e) => { e.stopPropagation(); window.open(project.liveDemo, "_blank"); }}
                          className="w-10 h-10 bg-white text-black kasturi-border-2 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      )}
                      {project.sourceCode && (
                        <button
                          onClick={(e) => { e.stopPropagation(); window.open(project.sourceCode, "_blank"); }}
                          className="w-10 h-10 bg-white text-black kasturi-border-2 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                        >
                          <Github className="w-4 h-4" />
                        </button>
                      )}
                      {project.presentation && (
                        <button
                          onClick={(e) => { e.stopPropagation(); window.open(project.presentation, "_blank"); }}
                          className="w-10 h-10 bg-white text-black kasturi-border-2 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                        >
                          <Youtube className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className={`text-3xl md:text-4xl font-display font-extrabold mb-2 ${
                      index % 4 === 2 || index % 4 === 0 ? "text-white" : "text-black"
                    }`}>
                      {project.name}
                    </h3>
                    <p className={`font-body text-sm mb-3 ${
                      index % 4 === 2 || index % 4 === 0 ? "text-white/80" : "text-black/70"
                    }`}>
                      {project.description}
                    </p>
                    {project.highlights && (
                      <p className={`caption-meta text-xs ${
                        index % 4 === 2 || index % 4 === 0 ? "text-white/60" : "text-black/50"
                      }`}>
                        {project.highlights}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="px-2.5 py-1 bg-white/90 text-black kasturi-border-2 rounded-full text-[10px] font-body font-medium">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2.5 py-1 bg-white/40 text-black rounded-full text-[10px] font-body font-medium">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => window.open("https://github.com/neeraj3071", "_blank")}
            className="bg-black text-white px-10 py-5 rounded-2xl font-display font-extrabold text-lg uppercase tracking-tight kasturi-border kasturi-shadow-lg kasturi-bouncy wobble inline-flex items-center gap-3"
          >
            <Github className="w-6 h-6" />
            view all on github
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
