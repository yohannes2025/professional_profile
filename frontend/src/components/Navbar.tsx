import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "services", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 px-4 md:px-20 py-5 flex flex-col md:flex-row justify-between items-center transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/90 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="logo text-3xl font-bold mb-4 md:mb-0">
        <span className="text-indigo-500">Dev</span>Portfolio
      </div>

      <div className="flex flex-wrap justify-center gap-5 md:gap-8 items-center">
        {["home", "services", "contact"].map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`relative font-medium transition-colors duration-300 capitalize ${
              activeSection === section
                ? "text-indigo-400"
                : "text-white hover:text-indigo-400"
            }`}
          >
            {section}
            {activeSection === section && (
              <motion.div
                layoutId="activeSection"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-500"
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        ))}
        <button
          onClick={() => scrollToSection("contact")}
          className="bg-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-500 transition-all hover:translate-y-[-2px] shadow-lg"
        >
          Hire Me
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
