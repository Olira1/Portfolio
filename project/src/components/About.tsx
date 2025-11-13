import { Code2, Layout, Palette, Zap } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

// IMPORTANT: Add your images to src/assets/images/ folder before building
// - profile.jpg (for the circle - recommended: 512x512px, square)
// - image1.jpg (for first explanation - recommended: 400x400px, square)
// - image2.jpg (for second explanation - recommended: 400x400px, square)
// You can use .png, .webp, or other formats - just update the file extensions below

// When you add your images, uncomment these lines:
import profileImage from '../assets/images/profile.jpg';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';

// For now, these are undefined - placeholders will be shown until you add images
// const profileImage: string | undefined = undefined;
// const image1: string | undefined = undefined;
// const image2: string | undefined = undefined;

const About = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const technologies = [
    { name: "HTML5", icon: Code2 },
    { name: "CSS3", icon: Palette },
    { name: "JavaScript", icon: Zap },
    { name: "React", icon: Layout },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Circle with profile image */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="w-80 h-80 md:w-96 md:h-96 mx-auto bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-2xl flex items-center justify-center p-2">
              <div className="w-full h-full bg-white rounded-full overflow-hidden flex items-center justify-center">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-7xl md:text-8xl font-bold text-blue-600">
                    OT
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right side - Content with two image+explanation divs */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Full Stack Developer
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              I’m a Full Stack Developer with expertise in both frontend and
              backend technologies. I build complete web applications that
              combine modern design, strong functionality, and smooth user
              experience.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              On the frontend, I focus on creating responsive and interactive
              interfaces using HTML, CSS, JavaScript, and React. On the backend,
              I develop secure and scalable server-side systems with Node.js,
              Express, and MongoDB. I’m passionate about problem-solving and
              bringing ideas to life through code. I enjoy working across the
              full development cycle — from planning and design to deployment
              and maintenance — ensuring every project runs efficiently and
              delivers real value.
            </p>

            {/* First image with explanation */}
            <div className="mb-8 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                <div className="flex-shrink-0">
                  {image1 ? (
                    <img
                      src={image1}
                      alt="Explanation image 1"
                      className="w-50 h-50 sm:w-60 sm:h-60 object-cover rounded-lg"
                    />
                  ) : (
                    <div className="w-32 h-32 sm:w-40 sm:h-40 bg-slate-200 rounded-lg flex items-center justify-center text-slate-400 text-sm font-medium">
                      Image 1
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">
                    Teaching What I’ve Learned
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    I help beginner devs get started with web development —
                    breaking down concepts and guiding them through projects.
                    Teaching keeps me sharp and reminds me why I started.
                  </p>
                </div>
              </div>
            </div>

            {/* Second image with explanation */}
            <div className="mb-8 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                <div className="flex-shrink-0">
                  {image2 ? (
                    <img
                      src={image2}
                      alt="Explanation image 2"
                      className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg"
                    />
                  ) : (
                    <div className="w-32 h-32 sm:w-40 sm:h-40 bg-slate-200 rounded-lg flex items-center justify-center text-slate-400 text-sm font-medium">
                      Image 2
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">
                    Tech Stack
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    I’m a MERN Stack Developer with a strong passion for
                    building modern, responsive, and user-friendly web
                    applications. I specialize in using MongoDB, Express.js,
                    React, and Node.js to design and develop full-stack
                    solutions that are both efficient and scalable.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {technologies.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Icon size={32} className="text-blue-600" />
                    <span className="text-sm font-medium text-slate-700">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
