import { Code, Cloud, Database, Shield, GitBranch, Boxes, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "languages",
      skills: ["Java", "Python", "C++", "JavaScript", "TypeScript", "SQL", "HTML", "CSS", "XSL", "XML"],
      icon: Code,
      bg: "bg-crimson",
      textColor: "text-white",
    },
    {
      title: "frameworks",
      skills: ["React.js", "Nest.js", "Spring Boot", "Node.js", "FastAPI", "Express.js", "Microservices"],
      icon: Boxes,
      bg: "bg-black",
      textColor: "text-white",
    },
    {
      title: "cloud & devops",
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Kafka", "MQTT"],
      icon: Cloud,
      bg: "bg-orange",
      textColor: "text-black",
    },
    {
      title: "databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "NoSQL"],
      icon: Database,
      bg: "bg-white",
      textColor: "text-black",
    },
    {
      title: "testing & tools",
      skills: ["JUnit", "Selenium", "Postman", "Grafana", "Jira", "Camunda BPMN", "NiFi"],
      icon: Shield,
      bg: "bg-crimson",
      textColor: "text-white",
    },
    {
      title: "ai / ml",
      skills: ["TensorFlow", "PyTorch", "Google Gemini", "Scikit-learn", "Predictive Analytics"],
      icon: Brain,
      bg: "bg-black",
      textColor: "text-white",
    },
    {
      title: "practices",
      skills: ["Agile", "CI/CD", "System Design", "Cloud Optimization", "Secure Coding", "Data Structures", "Compliance", "Version Control"],
      icon: GitBranch,
      bg: "bg-orange",
      textColor: "text-black",
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 bg-black relative overflow-hidden">
      {/* Background decorative text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="font-margherita text-[15vw] text-white/5 uppercase whitespace-nowrap">
          skills
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <h2 className="font-margherita text-6xl sm:text-7xl md:text-8xl uppercase tracking-tighter text-white leading-[0.9]">
            technical
          </h2>
          <h2 className="font-margherita text-6xl sm:text-7xl md:text-8xl uppercase tracking-tighter text-orange leading-[0.9] italic">
            skills
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className={`${category.bg} ${category.textColor} kasturi-border kasturi-shadow-lg rounded-2xl p-6 kasturi-bouncy`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 kasturi-border-2 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-extrabold uppercase tracking-tight">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-white/90 text-black kasturi-border-2 rounded-full text-xs font-body font-medium kasturi-bouncy cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
