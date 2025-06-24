
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      name: "AI Chatbot Web Application",
      description: "Architected a full-stack AI chatbot with React.js and Spring Boot, automating 80% of query handling via the Gemini Flash API while ensuring 100% stability through Postman testing.",
      technologies: ["React.js", "Spring Boot", "Gemini API", "Docker", "Netlify"],
      liveDemo: "#",
      highlights: ["80% automation of query handling", "100% stability", "50% reduction in setup time"],
      color: "border-blue-500",
    },
    {
      name: "Cloud Bookstore System",
      description: "Engineered a full-stack web application optimizing CRUD operations to boost user engagement by 40%, implementing scalable AWS architecture ensuring 99.9% uptime.",
      technologies: ["Spring Boot", "React.js", "AWS S3", "AWS EC2", "AWS RDS", "AWS ALB"],
      liveDemo: "#",
      highlights: ["99.9% uptime", "40% boost in user engagement", "25% latency reduction"],
      color: "border-green-500",
    },
    {
      name: "VR Testing Tool",
      description: "Developed an automated VR testing tool with Java-based framework, increasing test coverage by 40% and reducing manual test execution time by 60%.",
      technologies: ["Java", "Jenkins", "GitHub Actions", "CI/CD", "Unity Framework"],
      liveDemo: "#",
      highlights: ["40% increase in test coverage", "60% reduction in manual testing", "35% improvement in defect detection"],
      color: "border-purple-500",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 ${project.color}`}
            >
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {project.name}
              </h3>
              
              <p className="text-slate-600 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-slate-700 mb-2">Key Highlights:</h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-600">
                      <span className="text-teal-600 mr-2">✓</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

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

              <Button
                className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                onClick={() => window.open(project.liveDemo, '_blank')}
              >
                View Live Demo
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white"
            onClick={() => window.open("https://github.com/neeraj3071", '_blank')}
          >
            View More Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
