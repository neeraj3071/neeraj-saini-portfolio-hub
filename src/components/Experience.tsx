import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "University of Michigan – Dearborn",
      position: "graduate research assistant",
      duration: "Jan 2025 – Present",
      location: "Dearborn, MI",
      type: "Research",
      achievements: [
        "performed large-scale analysis of 350+ commits across open-source projects, deriving structured insights on refactoring and software evolution",
        "devised a hybrid automation pipeline integrating analytics tools with python classifiers, achieving 87.8% precision and reducing manual effort by 98.9%"
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
        "developed 30+ spring boot microservices with kafka/mysql, improving data synchronization efficiency by 40%",
        "optimized ci/cd using jenkins and kubernetes, cutting deployment time by 25% with zero downtime",
        "constructed react.js interfaces integrated with rest apis, increasing performance and usability by 30%",
        "enhanced testing using junit, selenium, and postman, improving defect detection by 35%"
      ],
      bg: "bg-primary",
      tilt: "tilt-neg-1",
    },
    {
      company: "Saini Battery and Auto Electrical Works",
      position: "software developer & operations manager",
      duration: "Aug 2022 – Oct 2023",
      location: "Pune, India",
      type: "Full-time",
      achievements: [
        "created a billing and inventory system using react.js, node.js, and mysql, reducing processing time by 45%",
        "launched business website and automated reports, increasing online inquiries by 25% and cutting manual effort by 40%"
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
        "engineered restful apis using node.js and express.js to support data visualization tools",
        "optimized sql queries and caching with redis, achieving 35% faster execution"
      ],
      bg: "bg-deep text-white",
      tilt: "tilt-neg-2",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-white relative overflow-hidden">
      {/* Stickers */}
      <div className="absolute top-16 right-16 text-4xl float-sticker sticker rounded-xl bg-white p-2">💼</div>
      <div className="absolute bottom-16 left-16 text-4xl float-sticker-reverse sticker rounded-xl bg-white p-2">🏢</div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-2 bg-pink text-white brutal-border-2 brutal-shadow-sm rounded-full mb-4 tilt-2">
            <span className="font-display font-bold text-sm uppercase">career journey</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-deep">
            work <span className="text-gradient-brutal">experience</span>
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`${exp.bg} ${exp.tilt} brutal-border brutal-shadow-lg rounded-brutal p-8 bouncy`}
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
