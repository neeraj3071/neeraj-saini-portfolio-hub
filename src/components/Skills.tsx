import { Code, Cloud, Database, TestTube, Shield, GitBranch, Boxes } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "languages",
      skills: ["Java", "Python", "C++", "JavaScript", "TypeScript", "SQL", "HTML", "PHP", "GraphQL", "XML"],
      icon: Code,
      bg: "bg-primary",
      span: "lg:col-span-7",
      tilt: "tilt-1",
    },
    {
      title: "frameworks & platforms",
      skills: ["Spring Boot", "React.js", "Next.js", "Node.js", "FastAPI", "Nest.js", "Express.js", "Vue.js", "Angular", "Hibernate", "JDBC", "REST APIs", "Microservices"],
      icon: Boxes,
      bg: "bg-deep text-white",
      span: "lg:col-span-5",
      tilt: "tilt-neg-1",
    },
    {
      title: "cloud & devops",
      skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Kafka", "MQTT"],
      icon: Cloud,
      bg: "bg-purple text-white",
      span: "lg:col-span-5",
      tilt: "tilt-neg-2",
    },
    {
      title: "databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "DynamoDB", "NoSQL", "Query Optimization", "Indexing"],
      icon: Database,
      bg: "bg-white",
      span: "lg:col-span-7",
      tilt: "tilt-1",
    },
    {
      title: "testing & security",
      skills: ["JUnit", "Selenium", "Postman", "Test Automation", "Unit/Integration Testing", "JWT", "OAuth2"],
      icon: Shield,
      bg: "bg-pink text-white",
      span: "lg:col-span-6",
      tilt: "tilt-neg-1",
    },
    {
      title: "tools & practices",
      skills: ["Git Version Control", "Jira", "Grafana", "Camunda BPMN", "Apache NiFi", "Agile", "CI/CD", "OOP", "MVC", "System Design", "Event-Driven Architecture", "Data Structures", "Code Refactoring", "Web Development"],
      icon: GitBranch,
      bg: "bg-primary",
      span: "lg:col-span-6",
      tilt: "tilt-2",
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-24 bg-background relative overflow-hidden">
      {/* Stickers */}
      <div className="absolute top-10 right-10 text-4xl float-sticker sticker rounded-xl bg-white p-2 hidden md:block">🛠️</div>
      <div className="absolute bottom-10 left-10 text-4xl float-sticker-reverse sticker rounded-xl bg-white p-2 hidden md:block">⚙️</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-2 bg-purple text-white brutal-border-2 brutal-shadow-sm rounded-full mb-4 tilt-1">
            <span className="font-display font-bold text-sm uppercase">my expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-deep">
            technical <span className="text-gradient-brutal">skills</span>
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid lg:grid-cols-12 gap-5">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className={`${category.span} ${category.bg} ${category.tilt} brutal-border brutal-shadow rounded-brutal p-5 sm:p-6 bouncy`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 brutal-border-2 rounded-2xl flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-white/90 text-deep brutal-border-2 rounded-full text-xs font-body font-medium bouncy cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills counter */}
        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-xl sm:w-auto px-6 sm:px-8 py-4 bg-white brutal-border brutal-shadow rounded-[2rem] sm:rounded-full tilt-neg-1">
            <div className="grid grid-cols-3 gap-4 sm:flex sm:items-center sm:gap-6">
              <div className="text-center min-w-[4.5rem]">
                <div className="text-3xl font-display font-bold text-deep">60+</div>
                <div className="text-xs font-body text-deep/60">technologies</div>
              </div>
              <div className="hidden sm:block w-[3px] h-10 bg-deep rounded-full"></div>
              <div className="text-center min-w-[4.5rem]">
                <div className="text-3xl font-display font-bold text-deep">6</div>
                <div className="text-xs font-body text-deep/60">categories</div>
              </div>
              <div className="hidden sm:block w-[3px] h-10 bg-deep rounded-full"></div>
              <div className="text-center min-w-[4.5rem]">
                <div className="text-3xl font-display font-bold text-purple">∞</div>
                <div className="text-xs font-body text-deep/60">learning</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
