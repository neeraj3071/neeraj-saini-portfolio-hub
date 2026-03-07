import profilePhoto from "@/assets/profile-photo.jpg";
import { Award, Rocket, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Award, value: "3.95", label: "graduate gpa", bg: "bg-primary" },
    { icon: Rocket, value: "30+", label: "microservices deployed", bg: "bg-purple text-white" },
    { icon: TrendingUp, value: "99.9%", label: "system uptime", bg: "bg-pink text-white" },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-2 bg-primary brutal-border-2 brutal-shadow-sm rounded-full mb-4 tilt-neg-1">
            <span className="font-display font-bold text-sm text-deep uppercase">about me</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-deep">
            who is <span className="text-gradient-brutal">neeraj</span>?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Photo */}
          <div className="flex justify-center">
            <div className="relative tilt-neg-2">
              <div className="w-64 h-64 rounded-brutal overflow-hidden brutal-border brutal-shadow-lg">
                <img
                  src={profilePhoto}
                  alt="Neeraj Randhir Singh Saini"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Sticker badge */}
              <div className="absolute -bottom-4 -right-4 bg-primary brutal-border-2 brutal-shadow-sm rounded-full px-4 py-2 float-sticker">
                <span className="font-display font-bold text-sm text-deep">&lt;dev/&gt;</span>
              </div>
              <div className="absolute -top-4 -left-4 text-3xl float-sticker-reverse sticker rounded-xl bg-white p-2">🧑‍💻</div>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <h3 className="text-3xl font-display font-bold text-deep">
              full-stack software engineer
            </h3>
            <p className="text-lg font-body text-deep/70 leading-relaxed">
              i'm a full-stack engineer with <span className="font-bold text-deep bg-primary px-1">2 years of experience</span> building scalable web apps,
              microservices, and automation solutions. i love turning complex problems into clean, efficient code.
            </p>
            <p className="text-lg font-body text-deep/70 leading-relaxed">
              expertise in <span className="font-bold text-deep bg-pink/20 px-1">ci/cd, containerization, and system optimization</span>,
              with a track record of improving efficiency and reducing deployment times.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Java", "Python", "React.js", "Spring Boot", "AWS", "Docker", "Kubernetes", "Node.js"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white font-body font-medium text-sm text-deep brutal-border-2 brutal-shadow-sm rounded-full bouncy cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats - bento style */}
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const tilts = ["tilt-1", "tilt-neg-1", "tilt-2"];
            return (
              <div
                key={stat.label}
                className={`${stat.bg} ${tilts[index]} brutal-border brutal-shadow-lg rounded-brutal p-8 text-center bouncy`}
              >
                <Icon className="w-10 h-10 mx-auto mb-3" />
                <div className="text-5xl font-display font-bold mb-2">{stat.value}</div>
                <div className="font-body font-medium text-sm opacity-80">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
