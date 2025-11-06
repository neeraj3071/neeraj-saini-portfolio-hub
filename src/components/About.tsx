import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.jpg";
import { Award, Rocket, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Award, value: "3.9", label: "Graduate GPA", color: "text-teal-600" },
    { icon: Rocket, value: "20+", label: "Microservices Deployed", color: "text-emerald-600" },
    { icon: TrendingUp, value: "99.9%", label: "System Uptime", color: "text-cyan-600" },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide animate-fade-in">Get to know me</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4 animate-fade-in">About Me</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-teal-600 to-emerald-600 mx-auto rounded-full animate-slide-in-right"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20 perspective-1000">
          <div className="flex flex-col items-center lg:items-start animate-fade-in-up">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <Avatar className="relative w-64 h-64 mb-6 ring-4 ring-white ring-offset-4 ring-offset-teal-50 shadow-3d shadow-3d-hover hover:scale-105 transition-all duration-500 card-3d backface-hidden">
                <AvatarImage src={profilePhoto} alt="Neeraj Randhir Singh Saini" />
                <AvatarFallback>NS</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in-up animation-delay-200">
            <h3 className="text-3xl font-bold text-slate-900 leading-tight">Full-Stack Developer & Cloud Architect</h3>
            <p className="text-lg text-slate-700 leading-relaxed">
              I'm a Software Developer with a strong foundation in <span className="font-bold text-teal-600">microservices architecture</span>, 
              real-time data streaming, and cloud-native applications.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              I bring hands-on experience across the full software development lifecycle, and I thrive in 
              collaborative, agile teams where <span className="font-bold text-emerald-600">high-quality software meets real-world impact</span>.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Spring Boot", "React.js", "AWS", "Docker", "Kubernetes", "Python"].map((tech, idx) => (
                <span 
                  key={tech} 
                  className="px-5 py-2.5 bg-white text-teal-700 rounded-xl text-sm font-semibold border-2 border-teal-200 hover:border-teal-400 hover:bg-teal-50 transition-all duration-300 shadow-3d hover:-translate-y-1"
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
                className="p-8 text-center bg-white hover:bg-teal-50/50 transition-all duration-500 transform hover:-translate-y-3 border-0 border-t-4 border-t-teal-600 animate-scale-in shadow-3d shadow-3d-hover card-3d backface-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-teal-100 rounded-2xl blur-xl opacity-50"></div>
                  <Icon className={`relative w-14 h-14 ${stat.color}`} />
                </div>
                <div className="text-5xl font-bold text-slate-900 mb-3 bg-gradient-to-br from-slate-900 to-slate-600 bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-slate-600 font-semibold text-base">{stat.label}</div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
