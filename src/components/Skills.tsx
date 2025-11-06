import { Code, Cloud, Wrench, Database, TestTube, Boxes, Brain, GitBranch } from "lucide-react";

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
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide animate-fade-in">My Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4 animate-fade-in">Technical Skills</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-teal-600 to-emerald-600 mx-auto rounded-full animate-slide-in-right"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-white rounded-2xl p-6 transition-all duration-500 transform hover:-translate-y-4 border border-slate-100 animate-fade-in-up shadow-3d shadow-3d-hover card-3d backface-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center mb-5">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg mb-3`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 text-center">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-slate-50 text-slate-700 rounded-lg text-xs font-medium hover:bg-teal-50 hover:text-teal-700 border border-slate-200 hover:border-teal-300 transition-all duration-200"
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
