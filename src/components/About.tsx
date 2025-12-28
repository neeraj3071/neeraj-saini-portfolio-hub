import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.jpg";
import { Award, Rocket, TrendingUp, Code2 } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Award, value: "3.95", label: "Graduate GPA", color: "text-primary" },
    { icon: Rocket, value: "30+", label: "Microservices Deployed", color: "text-emerald-600" },
    { icon: TrendingUp, value: "99.9%", label: "System Uptime", color: "text-cyan-600" },
  ];

  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      {/* Floating code elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl font-mono text-primary/5 float-slow">&lt;/&gt;</div>
        <div className="absolute top-40 right-20 text-4xl font-mono text-primary/5 float-medium animation-delay-400">{ }</div>
        <div className="absolute bottom-32 left-1/4 text-5xl font-mono text-primary/5 float-fast animation-delay-800">( )</div>
        <div className="absolute bottom-20 right-1/3 text-3xl font-mono text-primary/5 float-slow animation-delay-600">=&gt;</div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wide animate-fade-in">
            <Code2 className="w-4 h-4" />
            Get to know me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4 animate-fade-in">About Me</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-emerald-600 mx-auto rounded-full animate-slide-in-right"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20 perspective-1000">
          <div className="flex flex-col items-center lg:items-start animate-fade-in-up">
            <div className="relative group">
              {/* Orbiting elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="orbit">
                  <div className="w-3 h-3 bg-primary rounded-full pulse-glow"></div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="orbit-reverse">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                </div>
              </div>
              
              {/* Glowing background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-emerald-400/30 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              
              {/* Photo container with proper aspect ratio */}
              <div className="relative w-64 h-64 rounded-full overflow-hidden ring-4 ring-card ring-offset-4 ring-offset-accent shadow-3d shadow-3d-hover pulse-glow img-zoom">
                <img 
                  src={profilePhoto} 
                  alt="Neeraj Randhir Singh Saini" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 bg-card px-4 py-2 rounded-full shadow-3d border border-border float-fast">
                <span className="text-primary font-mono text-sm font-semibold">&lt;dev/&gt;</span>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in-up animation-delay-200">
            <h3 className="text-3xl font-bold text-foreground leading-tight">
              <span className="code-bracket">Full-Stack Software Engineer</span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Full-Stack Software Engineer with <span className="font-bold text-primary">2 years of experience</span> developing scalable web applications, 
              microservices, and automation solutions. Skilled in building cloud-native applications with modern tech stacks.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Expertise in <span className="font-bold text-emerald-600">CI/CD, containerization, and system optimization</span>, 
              with a proven track record of improving efficiency and reducing deployment times in agile environments.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Java", "Python", "React.js", "Spring Boot", "AWS", "Docker", "Kubernetes", "Node.js"].map((tech, idx) => (
                <span 
                  key={tech} 
                  className="px-5 py-2.5 bg-card text-primary rounded-xl text-sm font-semibold border-2 border-border hover:border-primary hover:bg-accent transition-all duration-300 shadow-3d hover:-translate-y-1 magnetic shimmer"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 perspective-1000">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={stat.label}
                className="p-8 text-center bg-card hover:bg-accent/50 transition-all duration-500 border-0 border-t-4 border-t-primary animate-scale-in tilt-card shadow-3d shadow-3d-hover"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl scale-bounce"></div>
                  <Icon className={`relative w-14 h-14 ${stat.color}`} />
                </div>
                <div className="text-5xl font-bold text-foreground mb-3 text-gradient-animate">{stat.value}</div>
                <div className="text-muted-foreground font-semibold text-base">{stat.label}</div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
