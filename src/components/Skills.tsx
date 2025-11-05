import { Code, Cloud, Wrench, Database, TestTube, Boxes } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "C++", "C#", "JavaScript", "TypeScript"],
      icon: Code,
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      title: "Frameworks",
      skills: ["Spring Boot", "React.js", "Node.js", "Angular", ".NET Core"],
      icon: Boxes,
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      title: "Tools & DevOps",
      skills: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Postman", "JMeter"],
      icon: Wrench,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Cloud & Databases",
      skills: ["AWS", "Azure", "Google Cloud", "MySQL", "PostgreSQL", "MongoDB"],
      icon: Database,
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Testing",
      skills: ["JUnit", "Selenium", "TestRail"],
      icon: TestTube,
      gradient: "from-rose-500 to-red-500",
    },
    {
      title: "Others",
      skills: ["Agile", "CI/CD", "RESTful APIs", "Microservices", "OOP"],
      icon: Cloud,
      gradient: "from-cyan-500 to-teal-500",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-slate-100 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 ml-4">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-slate-50 text-slate-700 rounded-lg text-sm font-medium hover:bg-teal-50 hover:text-teal-700 border border-slate-200 hover:border-teal-300 transition-all duration-200"
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
