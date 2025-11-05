
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const contactInfo = [
    {
      label: "Email",
      value: "neerajsa@umich.edu",
      link: "mailto:neerajsa@umich.edu",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/neerajsaini07",
      link: "https://linkedin.com/in/neerajsaini07",
    },
    {
      label: "GitHub",
      value: "github.com/neeraj3071",
      link: "https://github.com/neeraj3071",
    },
    {
      label: "Location",
      value: "Dearborn, MI",
      link: "#",
    },
  ];

  const handleDownloadResume = () => {
    const resumeUrl = "https://drive.google.com/file/d/1QItMlpNxnJ8KD0kaLotL24Sfy_7OI5kT/view?usp=drive_link";
    window.open(resumeUrl, '_blank');
    toast({
      title: "Opening Resume",
      description: "Your resume is opening in a new tab from Google Drive.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto mb-4"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            I'm currently open to full-time and internship opportunities. 
            Let's connect and discuss how we can work together!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div className="w-4 h-4 bg-teal-400 rounded-full mr-4"></div>
                  <div>
                    <p className="text-slate-400 text-sm">{info.label}</p>
                    <a
                      href={info.link}
                      className="text-white hover:text-teal-400 transition-colors duration-200 text-lg"
                      target={info.link.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button
                onClick={handleDownloadResume}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 font-semibold rounded-lg transition-all duration-300"
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-800 mt-16 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 Neeraj Randhir Singh Saini. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
