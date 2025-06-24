
const Experience = () => {
  const experiences = [
    {
      company: "Reliance Jio Platforms Limited",
      position: "Software Developer Engineer",
      duration: "Sep 2023 - Aug 2024",
      type: "Full-time",
      achievements: [
        "Designed and deployed 20+ scalable microservices for the HR Workflow Management System using Spring Boot, MySQL, and Kafka",
        "Optimized deployment pipelines with Jenkins CI/CD, Kubernetes, and Azure Cloud, accelerating deployment speed by 25%",
        "Developed and integrated a responsive React.js front end with robust back end, strengthening API communication",
        "Enhanced testing coverage by 35% and reduced defect rates by 20% through complex MySQL query designs and automated testing",
        "Facilitated DevOps collaboration to improve deployment efficiency and ensure adherence to unified development lifecycle"
      ],
      color: "border-blue-500",
    },
    {
      company: "TEN Technologies",
      position: "Software Developer Intern (Java)",
      duration: "Feb 2022 - Jun 2022",
      type: "Internship",
      achievements: [
        "Developed and implemented a scalable inventory management system using Spring Boot, MySQL, and React",
        "Reduced operational errors by 20% and demonstrated effective teamwork on hands-on projects",
        "Enhanced system performance by 30% using SonarQube and IntelliJ IDEA",
        "Refined load testing with JMeter and integrated CI/CD pipelines to support automation"
      ],
      color: "border-green-500",
    },
    {
      company: "University of Michigan",
      position: "Graduate Research Assistant - VR Testing and Refactoring",
      duration: "Jan 2025 - Present",
      type: "Research",
      achievements: [
        "Developed an automated VR testing tool, increasing test coverage by 40%",
        "Reduced manual test execution time by 60%",
        "Designed a Java-based VR framework that improved defect detection by 35%",
        "Enhanced CI/CD pipeline efficiency by 50% through GitHub Actions and Jenkins integration"
      ],
      color: "border-purple-500",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`bg-slate-50 rounded-xl p-8 border-l-4 ${exp.color} hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-1">
                    {exp.position}
                  </h3>
                  <p className="text-xl text-teal-600 font-semibold mb-2">
                    {exp.company}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-slate-600 font-medium">{exp.duration}</p>
                  <span className="inline-block px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm font-medium mt-1">
                    {exp.type}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-2">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-teal-600 mr-3 mt-1">•</span>
                    <span className="text-slate-700 leading-relaxed">
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
