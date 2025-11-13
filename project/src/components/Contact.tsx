import { Mail, Github, Send } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const Contact = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  // Update these with your actual social media links
  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:oliratessera1@gmail.com",
    },
    { icon: Github, label: "GitHub", href: "https://github.com/Olira1" },
    {
      icon: Send,
      label: "Telegram",
      href: "https://t.me/@OliraTesgera",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach
            out through my social media!
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 text-center">
              Connect With Me
            </h3>
            <p className="text-slate-600 mb-10 leading-relaxed text-center">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Let's create something
              amazing together!
            </p>

            <div className="space-y-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 bg-slate-50 rounded-lg hover:bg-blue-50 hover:shadow-md transition-all duration-300 group border border-slate-200 hover:border-blue-300"
                  >
                    <div className="p-3 bg-white rounded-lg group-hover:bg-blue-100 transition-colors">
                      <Icon
                        size={28}
                        className="text-blue-600 group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <span className="text-slate-700 font-medium text-lg flex-1">
                      {link.label}
                    </span>
                    <span className="text-slate-400 group-hover:text-blue-600 transition-colors">
                      →
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
