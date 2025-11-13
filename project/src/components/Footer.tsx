const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-slate-300">
          © {currentYear} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
