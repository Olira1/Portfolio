import { ArrowDown } from "lucide-react";

// IMPORTANT: Add your background banner image to src/assets/images/ folder
// Recommended size: 1920x1080px (Full HD) or 2560x1440px (2K) for best quality
// Format: JPG, PNG, or WebP (WebP recommended for smaller file size)
// When you add your image, uncomment the import below:
import heroBanner from '../assets/images/hero-banner.jpg';

// For now, using undefined - you can add a fallback background color or gradient
// const heroBanner: string | undefined = undefined;

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        backgroundImage: heroBanner ? `url(${heroBanner})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: heroBanner ? undefined : "transparent",
      }}
    >
      {/* Overlay for better text readability - only show if banner image exists */}
      {heroBanner && (
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-800/40 to-slate-900/50"></div>
      )}

      {/* Fallback gradient background when no banner image */}
      {!heroBanner && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700"></div>
      )}

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center animate-fade-in relative z-10">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up drop-shadow-lg">
          Hi, I'm <span className="text-blue-400">Olira Tesgera</span>
        </h1>
        <p className="text-xl sm:text-2xl text-slate-100 mb-8 animate-slide-up animation-delay-200 drop-shadow-md">
          Web Developer
        </p>
        <p className="text-lg text-slate-200 mb-12 max-w-2xl mx-auto animate-slide-up animation-delay-400 drop-shadow-md">
          Crafting beautiful, modern web experiences with clean code and
          thoughtful design
        </p>
        <button
          onClick={scrollToProjects}
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-slide-up animation-delay-600"
        >
          View My Projects
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
