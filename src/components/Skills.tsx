import { Code, Cloud, Wrench, Database, TestTube, Boxes, Brain, GitBranch, Sparkles, Zap } from "lucide-react";
import { useState } from "react";

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "C++", "JavaScript", "TypeScript", "SQL", "HTML", "CSS", "XSL", "XML"],
      icon: Code,
      gradient: "from-blue-500 to-indigo-500",
      bgGlow: "bg-blue-500/20",
    },
    {
      title: "Frameworks",
      skills: ["React.js", "Nest.js", "Spring Boot", "Node.js", "FastAPI", "Express.js", "Microservices"],
      icon: Boxes,
      gradient: "from-emerald-500 to-teal-500",
      bgGlow: "bg-emerald-500/20",
    },
    {
      title: "Cloud/DevOps",
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Kafka", "MQTT"],
      icon: Cloud,
      gradient: "from-cyan-500 to-blue-500",
      bgGlow: "bg-cyan-500/20",
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "NoSQL"],
      icon: Database,
      gradient: "from-orange-500 to-red-500",
      bgGlow: "bg-orange-500/20",
    },
    {
      title: "Testing/Tools",
      skills: ["JUnit", "Selenium", "Postman", "Grafana", "Jira", "Camunda BPMN", "NiFi"],
      icon: TestTube,
      gradient: "from-rose-500 to-pink-500",
      bgGlow: "bg-rose-500/20",
    },
    {
      title: "AI/ML",
      skills: ["TensorFlow", "PyTorch", "Google Gemini", "Scikit-learn", "Predictive Analytics"],
      icon: Brain,
      gradient: "from-violet-500 to-purple-500",
      bgGlow: "bg-violet-500/20",
    },
    {
      title: "Practices",
      skills: ["Agile", "CI/CD", "System Design", "Cloud Optimization", "Secure Coding", "Data Structures", "Compliance", "Version Control"],
      icon: GitBranch,
      gradient: "from-teal-500 to-emerald-500",
      bgGlow: "bg-teal-500/20",
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-gradient-to-br from-background via-accent/30 to-background">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Glassmorphism blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl float-slow"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl float-medium animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-xl border border-border/50 rounded-full mb-4 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary animate-spin-slow" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">My Expertise</span>
            <Zap className="w-4 h-4 text-yellow-500 animate-bounce-subtle" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mt-2 mb-4 animate-fade-in">
            <span className="text-gradient-animate">Technical</span> Skills
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-emerald-500 to-cyan-500 mx-auto rounded-full animate-slide-in-right"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isHovered = hoveredCategory === category.title;
            
            return (
              <div
                key={category.title}
                className="group relative"
                onMouseEnter={() => setHoveredCategory(category.title)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                {/* Glow effect on hover */}
                <div className={`absolute -inset-2 ${category.bgGlow} rounded-3xl blur-xl transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
                
                <div
                  className="relative bg-card/70 backdrop-blur-xl rounded-2xl p-6 transition-all duration-500 border border-border/50 hover:border-primary/50 animate-fade-in-up tilt-card shadow-3d shadow-3d-hover overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>

                  <div className="flex flex-col items-center mb-5 relative">
                    <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      {/* Icon glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-foreground/20 to-transparent rounded-2xl"></div>
                      <Icon className="w-8 h-8 text-primary-foreground relative z-10" />
                      
                      {/* Pulse ring on hover */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-primary-foreground/30 scale-100 opacity-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700 animate-ping"></div>
                    </div>
                    <h3 className="text-lg font-bold text-foreground text-center group-hover:text-gradient-animate transition-all duration-300">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-secondary/50 backdrop-blur-sm text-secondary-foreground rounded-lg text-xs font-medium hover:bg-primary hover:text-primary-foreground border border-border/50 hover:border-primary transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 cursor-default"
                        style={{ 
                          animationDelay: `${(index * 0.1) + (skillIndex * 0.02)}s`,
                          transitionDelay: `${skillIndex * 20}ms`
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Corner accent */}
                  <div className={`absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills count badge */}
        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl animate-fade-in-up animation-delay-800">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-animate">50+</div>
              <div className="text-xs text-muted-foreground font-medium">Technologies</div>
            </div>
            <div className="w-px h-10 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-animate">7</div>
              <div className="text-xs text-muted-foreground font-medium">Categories</div>
            </div>
            <div className="w-px h-10 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-animate">∞</div>
              <div className="text-xs text-muted-foreground font-medium">Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
