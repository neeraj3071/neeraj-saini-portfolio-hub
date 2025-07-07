
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Youtube } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      name: "AI Chatbot Web App",
      description: "Full-stack chatbot using React and Spring Boot, integrated with the Gemini Flash API for AI-driven query handling.",
      technologies: ["React (Vite)", "Spring Boot", "Docker", "Render", "Netlify"],
      liveDemo: "https://myaichatbot-springboot.netlify.app/",
      sourceCode: "https://github.com/neeraj3071/AI-ChatBot",
      color: "border-blue-500",
    },
    {
      name: "Aura Sense – Gender and Mood Recognition",
      description: "Real-time deep learning system for gender and mood recognition using MobileNetV2 and CNN models.",
      technologies: ["TensorFlow", "Keras", "Flask", "OpenCV", "Python"],
      liveDemo: "https://www.youtube.com/watch?v=uZQCt3bLOB4&ab_channel=SachetUtekar",
      sourceCode: "https://github.com/neeraj3071/Aura-Sense---Gender-and-Mood-Recognizer-System",
      presentation: "https://www.youtube.com/watch?v=BnlZIYyMLEc&ab_channel=SachetUtekar",
      color: "border-green-500",
    },
    {
      name: "DVD Rental Database System",
      description: "PostgreSQL-based database project focused on schema design, query optimization, and performance tuning.",
      technologies: ["PostgreSQL", "SQL", "ER Modeling", "Indexing", "EXPLAIN ANALYZE"],
      sourceCode: "https://github.com/neeraj3071/dvd_rental_project_sql",
      color: "border-purple-500",
    },
    {
      name: "Cloud-Based Full-Stack Application (AWS Integration)",
      description: "Responsive full-stack application deployed with AWS services and integrated CI/CD monitoring tools.",
      technologies: ["React", "Spring Boot", "AWS (EC2, S3, DynamoDB)", "CI/CD", "CloudWatch"],
      sourceCode: "https://github.com/neeraj3071/Book-Store-on-Aws-full-stack-",
      color: "border-orange-500",
    },
    {
      name: "Quiz Management System",
      description: "Secure and scalable quiz platform with user roles, performance optimization, and logging.",
      technologies: ["Java", "Spring Boot", "MySQL", "REST API", "JPA", "SLF4J", "Postman"],
      sourceCode: "https://github.com/neeraj3071/Quiz-App",
      color: "border-red-500",
    },
    {
      name: "Saini Battery & Auto Electrical Works Website",
      description: "Official website for a local business offering battery and electrical services, built for mobile and SEO performance.",
      technologies: ["HTML", "CSS", "JavaScript", "SEO Optimization"],
      liveDemo: "https://saini-battery.netlify.app/",
      color: "border-teal-500",
    },
    {
      name: "AI-Powered Test Case Generator",
      description: "An intelligent tool that automates the generation of unit test cases using OpenAI's API, with support for multiple languages and frameworks.",
      technologies: ["React (Vite)", "Flask", "OpenAI API", "GitHub Actions"],
      sourceCode: "https://github.com/neeraj3071/AI-Powered-Test-Case-Generator",
      color: "border-indigo-500",
    },
    {
      name: "Git Research Tool",
      description: "Java-based application designed to assist researchers and developers in analyzing GitHub repositories with automated commit analysis and metadata extraction.",
      technologies: ["Java", "GitHub REST API", "CSV/JSON", "Java Swing"],
      sourceCode: "https://github.com/neeraj3071/Git-Research-Tool",
      color: "border-pink-500",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 ${project.color} h-full flex flex-col`}
            >
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {project.name}
              </h3>
              
              <p className="text-slate-600 mb-4 leading-relaxed flex-grow">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-700 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 mt-auto">
                {project.liveDemo && (
                  <Button
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                    onClick={() => window.open(project.liveDemo, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {project.liveDemo.includes('youtube') ? 'View Demo' : 'Live Demo'}
                  </Button>
                )}
                
                {project.presentation && (
                  <Button
                    variant="outline"
                    className="w-full border-orange-500 text-orange-600 hover:bg-orange-50"
                    onClick={() => window.open(project.presentation, '_blank')}
                  >
                    <Youtube className="w-4 h-4 mr-2" />
                    View Presentation
                  </Button>
                )}

                {project.sourceCode && (
                  <Button
                    variant="outline"
                    className="w-full border-slate-600 text-slate-600 hover:bg-slate-50"
                    onClick={() => window.open(project.sourceCode, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white"
            onClick={() => window.open("https://github.com/neeraj3071", '_blank')}
          >
            <Github className="w-4 h-4 mr-2" />
            View More Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
