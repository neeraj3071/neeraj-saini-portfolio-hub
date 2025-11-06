import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Reliance Jio Platforms Limited",
      position: "Software Developer Engineer",
      duration: "Sep 2023 - Aug 2024",
      location: "Mumbai, India",
      type: "Full-time",
      achievements: [
        "Designed and deployed 20+ scalable microservices for the HR Workflow Management System using Spring Boot, MySQL, and Kafka",
        "Optimized deployment pipelines with Jenkins CI/CD, Kubernetes, and Azure Cloud, accelerating deployment speed by 25%",
        "Developed and integrated a responsive React.js front end with robust back end, strengthening API communication",
        "Enhanced testing coverage by 35% and reduced defect rates by 20% through complex MySQL query designs and automated testing",
        "Facilitated DevOps collaboration to improve deployment efficiency and ensure adherence to unified development lifecycle"
      ],
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      company: "University of Michigan",
      position: "Graduate Research Assistant - VR Testing and Refactoring",
      duration: "Jan 2025 - Present",
      location: "Dearborn, MI",
      type: "Research",
      achievements: [
        "Developed an automated VR testing tool, increasing test coverage by 40%",
        "Reduced manual test execution time by 60%",
        "Designed a Java-based VR framework that improved defect detection by 35%",
        "Enhanced CI/CD pipeline efficiency by 50% through GitHub Actions and Jenkins integration"
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      company: "TEN Technologies",
      position: "Software Developer Intern (Java)",
      duration: "Feb 2022 - Jun 2022",
      location: "Remote",
      type: "Internship",
      achievements: [
        "Developed and implemented a scalable inventory management system using Spring Boot, MySQL, and React",
        "Reduced operational errors by 20% and demonstrated effective teamwork on hands-on projects",
        "Enhanced system performance by 30% using SonarQube and IntelliJ IDEA",
        "Refined load testing with JMeter and integrated CI/CD pipelines to support automation"
      ],
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide animate-fade-in">Career Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4 animate-fade-in">Professional Experience</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-teal-600 to-emerald-600 mx-auto rounded-full animate-slide-in-right"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-teal-200 via-emerald-200 to-teal-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${exp.gradient} ring-4 ring-white shadow-lg`}></div>
                </div>

                <div className={`lg:grid lg:grid-cols-2 lg:gap-12 ${index % 2 === 0 ? '' : 'lg:grid-flow-dense'}`}>
                  <div className={index % 2 === 0 ? '' : 'lg:col-start-2'}>
                    <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 transition-all duration-500 border border-slate-100 shadow-3d shadow-3d-hover card-3d backface-hidden transform hover:-translate-y-2">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}>
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-900 mb-1">
                            {exp.position}
                          </h3>
                          <p className="text-lg font-semibold text-teal-600 mb-2">
                            {exp.company}
                          </p>
                          <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                            <span className="flex items-center gap-1.5">
                              <Calendar className="w-4 h-4" />
                              {exp.duration}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </span>
                            <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 rounded-lg font-semibold border border-teal-200">
                              {exp.type}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <ul className="space-y-3 mt-6">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start group">
                            <span className="text-teal-600 mr-3 mt-1 text-lg">•</span>
                            <span className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
