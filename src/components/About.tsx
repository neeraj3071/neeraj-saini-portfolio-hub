import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-orange relative overflow-hidden">
      {/* Decorative bouncing elements */}
      <div className="absolute top-10 right-10 text-6xl animate-bounce hidden md:block opacity-60">✦</div>
      <div className="absolute bottom-10 left-10 text-5xl animate-bounce hidden md:block opacity-40" style={{ animationDelay: "0.5s" }}>◆</div>
      <div className="absolute top-1/2 right-[5%] text-4xl float-anim hidden lg:block opacity-30">●</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-[400px] md:h-[400px] rounded-full overflow-hidden kasturi-border-6 kasturi-shadow-xl grayscale-[0.2] hover:grayscale-0 transition-all duration-700">
                <img
                  src={profilePhoto}
                  alt="Neeraj Randhir Singh Saini"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 bg-crimson text-white kasturi-border-2 kasturi-shadow-sm rounded-full px-5 py-3 float-anim">
                <span className="font-display font-extrabold text-sm uppercase">2+ yrs exp</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-black uppercase tracking-tighter leading-[0.95] mb-6">
              about neeraj
            </h2>

            <p className="text-xl md:text-2xl font-body font-medium text-black/80 leading-relaxed mb-6">
              full-stack software engineer with{" "}
              <span className="font-bold text-black underline decoration-crimson underline-offset-4 decoration-4">2 years of experience</span>{" "}
              developing scalable web applications, microservices, and automation solutions.
            </p>

            <p className="text-lg font-body text-black/60 leading-relaxed mb-8">
              skilled in java, python, react.js, spring boot, node.js, and cloud platforms (aws, azure, gcp),
              with expertise in ci/cd, containerization, and system optimization.
              currently pursuing m.s. in computer science at the{" "}
              <a href="https://umich.edu" target="_blank" rel="noopener noreferrer" className="font-bold text-crimson hover:opacity-70 transition-opacity">
                university of michigan
              </a>{" "}
              with a 3.95 gpa.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { value: "3.95", label: "gpa" },
                { value: "30+", label: "microservices" },
                { value: "99.9%", label: "uptime" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white kasturi-border kasturi-shadow-sm rounded-2xl p-4 text-center kasturi-bouncy">
                  <div className="text-3xl md:text-4xl font-display font-extrabold text-crimson">{stat.value}</div>
                  <div className="text-xs font-body font-bold uppercase tracking-widest text-black/50 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-black text-white px-8 py-4 rounded-2xl font-display font-extrabold text-lg uppercase tracking-tight kasturi-border kasturi-shadow-lg hover:scale-105 transition-transform duration-300 inline-flex items-center gap-2"
            >
              say hello →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
