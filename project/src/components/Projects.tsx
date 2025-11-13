import { ExternalLink, Github } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

// IMPORTANT: Add your project images to src/assets/images/ folder
// Recommended size: 1200x600px (2:1 aspect ratio) or 1600x800px for best quality
// Format: JPG, PNG, or WebP (WebP recommended for smaller file size)
// When you add your images, uncomment the imports below:
import project1Image from "../assets/images/project1.jpg";
import project2Image from "../assets/images/project2.jpg";
import project3Image from "../assets/images/project3.jpg";
import project4Image from "../assets/images/project4.jpg";

// For now, these are undefined - placeholders will be shown until you add images
// const project1Image: string | undefined = undefined;
// const project2Image: string | undefined = undefined;
// const project3Image: string | undefined = undefined;
// const project4Image: string | undefined = undefined;

const Projects = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const projects = [
    {
      id: 1,
      title: "AgriConnect",
      description:
        "AgriConnect is a web application designed to bridge the gap between rural farmers and urban consumers. It creates a direct and reliable platform where farmers can showcase their fresh produce, and consumers can purchase directly — ensuring fair prices and reducing middlemen. The app promotes digital agriculture, empowers local farmers, and supports sustainable food distribution.",
      demoLink: "https://agri-connect-sxyw.vercel.app/",
      githubLink: "https://github.com/Olira1/AgriConnect",
      image: project1Image,
    },
    {
      id: 2,
      title: "Netflix Clone",
      description:
        "The Netflix Clone is a full-stack web application built with the MERN stack, designed to replicate the core features of the popular streaming platform. Users can browse movies, view details, and enjoy a smooth, responsive interface with dynamic content loading. This project demonstrates my skills in React, API integration, authentication, and UI/UX design, offering a realistic streaming experience similar to Netflix.",
      demoLink: "https://olira1.github.io/Movie-project/",
      githubLink: "https://github.com/Olira1/Movie-project",
      image: project2Image,
    },
    {
      id: 3,
      title: "DevYonira",
      description:
        "DevYonira is an online learning platform designed to teach coding and software development skills to students and beginners. The app provides structured lessons, hands-on projects, and interactive learning experiences that help learners grow from fundamentals to advanced programming concepts.",
      demoLink: "https://dev-yonira.vercel.app/",
      githubLink: "https://github.com/Olira1/DevYonira",
      image: project3Image,
    },
    {
      id: 4,
      title: "Aliexpress Clone",
      description:
        "The AliExpress Clone is an e-commerce web app that connects buyers and sellers, allowing users to explore products, add items to their cart, and make secure purchases. Built using the MERN stack, it features product listings, user authentication, and order management systems. This project highlights my ability to build scalable online marketplaces with a focus on performance, responsiveness, and a user-friendly design.",
      demoLink: "https://ali-express-red.vercel.app/",
      githubLink: "https://github.com/Olira1/Aliexpress",
      image: project4Image,
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Here are some of my recent works showcasing my skills in web
            development and design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="h- bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center overflow-hidden relative">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-white text-6xl font-bold opacity-50">
                    {project.id}
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex-1 flex items-center justify-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-900 transition-colors duration-300"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
