import { Code, Cloud, Wrench, Database, TestTube, Boxes, Brain, GitBranch, Sparkles } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "C++", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
      icon: Code,
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      title: "Frameworks",
      skills: ["React.js", "Node.js", "Spring Boot", "FastAPI", "Express.js", "Microservices"],
      icon: Boxes,
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      title: "Cloud Platforms",
      skills: ["AWS", "Azure", "Google Cloud"],
      icon: Cloud,
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "NoSQL"],
      icon: Database,
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "DevOps & Tools",
      skills: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Kafka", "MQTT"],
      icon: Wrench,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Testing",
      skills: ["JUnit", "Selenium", "Postman", "Grafana", "Jira"],
      icon: TestTube,
      gradient: "from-rose-500 to-red-500",
    },
    {
      title: "AI/ML",
      skills: ["TensorFlow", "PyTorch", "Google Gemini", "Scikit-learn", "Predictive Analytics"],
      icon: Brain,
      gradient: "from-violet-500 to-purple-500",
    },
    {
      title: "Practices",
      skills: ["Agile", "CI/CD", "System Design", "Cloud Optimization", "Secure Coding"],
      icon: GitBranch,
      gradient: "from-teal-500 to-emerald-500",
    },
  ];

  return (
    <section id="skills" className="py-24 gradient-morph relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl float-slow"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-2xl float-medium animation-delay-400"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wide animate-fade-in">
            <Sparkles className="w-4 h-4" />
            My Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4 animate-fade-in">Technical Skills</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-emerald-600 mx-auto rounded-full animate-slide-in-right"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-card rounded-2xl p-6 transition-all duration-500 border border-border animate-fade-in-up tilt-card shadow-3d shadow-3d-hover group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center mb-5">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground text-center">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-lg text-xs font-medium hover:bg-accent hover:text-accent-foreground border border-border hover:border-primary transition-all duration-200 magnetic"
                      style={{ animationDelay: `${skillIndex * 0.05}s` }}
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
