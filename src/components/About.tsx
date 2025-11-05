import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 animate-fade-in">About Me</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto animate-slide-in-right"></div>
        </div>
        
        <div className="flex flex-col items-center mb-12">
          <Avatar className="w-48 h-48 mb-6 ring-4 ring-teal-600 ring-offset-4 animate-scale-in hover:animate-float">
            <AvatarImage src={profilePhoto} alt="Neeraj Randhir Singh Saini" />
            <AvatarFallback>NS</AvatarFallback>
          </Avatar>
        </div>

        <div className="bg-slate-50 rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up">
          <p className="text-lg text-slate-700 leading-relaxed text-center max-w-3xl mx-auto">
            I'm a Software Developer with a strong foundation in microservices architecture, 
            real-time data streaming, and cloud-native applications. I bring hands-on experience 
            across the full software development lifecycle, and I thrive in collaborative, agile 
            teams where high-quality software meets real-world impact.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center transform hover:scale-110 transition-transform duration-300 animate-fade-in animation-delay-200">
              <div className="text-3xl font-bold text-teal-600 mb-2">3.9</div>
              <div className="text-slate-600">Graduate GPA</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300 animate-fade-in animation-delay-400">
              <div className="text-3xl font-bold text-teal-600 mb-2">20+</div>
              <div className="text-slate-600">Microservices Deployed</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300 animate-fade-in animation-delay-600">
              <div className="text-3xl font-bold text-teal-600 mb-2">99.9%</div>
              <div className="text-slate-600">System Uptime Achieved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
