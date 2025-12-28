import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "University of Michigan – Dearborn",
      position: "Graduate Research Assistant",
      duration: "Jan 2025 – Present",
      location: "Dearborn, MI",
      type: "Research",
      achievements: [
        "Performed large-scale analysis of 350+ commits across open-source projects, deriving structured insights on refactoring and software evolution",
        "Devised a hybrid automation pipeline integrating analytics tools with Python classifiers, achieving 87.8% precision and reducing manual effort by 98.9%"
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      company: "Reliance Jio Platforms Limited",
      position: "Software Developer Engineer",
      duration: "Jun 2023 – Aug 2024",
      location: "Mumbai, India",
      type: "Full-time",
      achievements: [
        "Developed 30+ Spring Boot microservices with Kafka/MySQL, improving data synchronization efficiency by 40%",
        "Optimized CI/CD using Jenkins and Kubernetes, cutting deployment time by 25% with zero downtime",
        "Constructed React.js interfaces integrated with REST APIs, increasing performance and usability by 30%",
        "Enhanced testing using JUnit, Selenium, and Postman, improving defect detection by 35%"
      ],
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      company: "Saini Battery and Auto Electrical Works",
      position: "Software Developer & Operations Manager",
      duration: "Aug 2022 – Oct 2023",
      location: "Pune, India",
      type: "Full-time",
      achievements: [
        "Created a billing and inventory system using React.js, Node.js, and MySQL, reducing processing time by 45%",
        "Launched business website and automated reports, increasing online inquiries by 25% and cutting manual effort by 40%"
      ],
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      company: "The Entrepreneurship Network",
      position: "Software Developer Intern",
      duration: "Feb 2022 – Jun 2022",
      location: "Pune, India",
      type: "Internship",
      achievements: [
        "Engineered RESTful APIs using Node.js and Express.js to support data visualization tools",
        "Optimized SQL queries and caching with Redis, achieving 35% faster execution"
      ],
      gradient: "from-orange-500 to-amber-500",
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
