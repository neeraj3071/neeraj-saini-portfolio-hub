
const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "C++", "C#", "JavaScript", "TypeScript"],
      color: "bg-blue-500",
    },
    {
      title: "Frameworks",
      skills: ["Spring Boot", "React.js", "Node.js", "Angular", ".NET Core"],
      color: "bg-green-500",
    },
    {
      title: "Tools & DevOps",
      skills: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Postman", "JMeter"],
      color: "bg-purple-500",
    },
    {
      title: "Cloud & Databases",
      skills: ["AWS", "Azure", "Google Cloud", "MySQL", "PostgreSQL", "MongoDB"],
      color: "bg-orange-500",
    },
    {
      title: "Testing",
      skills: ["JUnit", "Selenium", "TestRail"],
      color: "bg-red-500",
    },
    {
      title: "Others",
      skills: ["Agile", "CI/CD", "RESTful APIs", "Microservices", "OOP"],
      color: "bg-teal-500",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <div className={`w-4 h-4 ${category.color} rounded-full mr-3`}></div>
                <h3 className="text-xl font-semibold text-slate-800">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-teal-100 hover:text-teal-700 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
