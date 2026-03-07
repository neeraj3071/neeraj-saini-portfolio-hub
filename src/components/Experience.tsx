import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "University of Michigan",
      position: "graduate research assistant",
      duration: "Jan 2025 – Present",
      location: "Dearborn, MI",
      type: "Research",
      achievements: [
        "designed and implemented a spring boot github mining pipeline to analyze 1,000+ unity/c# repositories; automated commit extraction and filtering to generate a validated research dataset",
        "performed diff-level analysis on 350+ commits using a structured classification framework; separated vr-specific vs general refactorings and mapped technical debt indicators for research accuracy",
        "extended refactoringminer 2.0 with a custom c# analysis layer for unity/vr projects, enabling detection of 100+ refactoring patterns across previously unsupported codebases"
      ],
      bg: "bg-purple text-white",
      tilt: "tilt-1",
    },
    {
      company: "Reliance Jio Platforms Limited",
      position: "software developer engineer",
      duration: "Jun 2023 – Aug 2024",
      location: "Mumbai, India",
      type: "Full-time",
      achievements: [
        "delivered 30+ spring boot microservices and implemented react.js workflow dashboards and form-driven ui modules; integrated kafka event streams and optimized mysql queries, reducing cross-system sync latency by 40%",
        "architected reusable react component libraries and api integration layers for hr workflow portals; aligned frontend-backend contracts to reduce payload size and cut page load time by 30%",
        "streamlined end-to-end ci/cd pipelines using jenkins and kubernetes for backend services and frontend builds, enabling automated testing and container deployments, shortening release cycles by 25% with zero downtime",
        "enhanced full-stack reliability by authoring 120+ automated api and ui tests using junit, selenium, and postman, increasing pre-release defect detection by 35%"
      ],
      bg: "bg-primary",
      tilt: "tilt-neg-1",
    },
    {
      company: "Saini Battery and Auto Electrical Works",
      position: "software developer",
      duration: "Jul 2022 – Jun 2023",
      location: "Pune, India",
      type: "Full-time",
      achievements: [
        "built a full-stack billing and inventory platform using react, node.js, and mysql, replacing manual workflows and cutting transaction processing time by 45%",
        "introduced automated reporting and a customer web portal, increasing inbound leads by 25% and reducing operational effort by 40%"
      ],
      bg: "bg-pink text-white",
      tilt: "tilt-2",
    },
    {
      company: "The Entrepreneurship Network",
      position: "software developer intern",
      duration: "Feb 2022 – Jun 2022",
      location: "Pune, India",
      type: "Internship",
      achievements: [
        "Engineered RESTful APIs using Node.js and Express.js to support data visualization tools, enabling real-time insights for 500+ users and improving data accessibility by 30%",
        "Collaborated with frontend developers to integrate APIs with React.js dashboards, enhancing user experience and increasing engagement by 20%",
        "Implemented authentication and authorization mechanisms using JWT, ensuring secure access to sensitive data and reducing security incidents by 15%"
      ],
      bg: "bg-deep text-white",
      tilt: "tilt-neg-2",
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-24 bg-white relative overflow-hidden">
      {/* Stickers */}
      <div className="absolute top-16 right-16 text-4xl float-sticker sticker rounded-xl bg-white p-2 hidden md:block">💼</div>
      <div className="absolute bottom-16 left-16 text-4xl float-sticker-reverse sticker rounded-xl bg-white p-2 hidden md:block">🏢</div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-2 bg-pink text-white brutal-border-2 brutal-shadow-sm rounded-full mb-4 tilt-2">
            <span className="font-display font-bold text-sm uppercase">career journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-deep">
            work <span className="text-gradient-brutal">experience</span>
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`${exp.bg} ${exp.tilt} brutal-border brutal-shadow-lg rounded-brutal p-6 sm:p-8 bouncy`}
            >
              <div className="flex flex-wrap items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-white/20 brutal-border-2 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-7 h-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl font-display font-bold mb-1">{exp.position}</h3>
                  <p className="text-lg font-display font-bold opacity-80">{exp.company}</p>
                  <div className="flex flex-wrap gap-3 mt-2 text-sm font-body opacity-70">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" /> {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" /> {exp.location}
                    </span>
                    <span className="px-3 py-1 bg-white/20 brutal-border-2 rounded-full font-display font-bold text-xs">
                      {exp.type}
                    </span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mt-6">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-3 mt-1 text-lg">→</span>
                    <span className="font-body leading-relaxed opacity-90">{achievement}</span>
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
