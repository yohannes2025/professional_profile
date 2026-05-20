import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const words = ["Web Developer", "UI/UX Designer", "Problem Solver"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, 100);

    return () => clearInterval(ticker);
  }, [displayText, isDeleting]);

  const tick = () => {
    const i = loopNum % words.length;
    const fullText = words[i];

    if (isDeleting) {
      setDisplayText(fullText.substring(0, displayText.length - 1));
    } else {
      setDisplayText(fullText.substring(0, displayText.length + 1));
    }

    if (!isDeleting && displayText === fullText) {
      setTimeout(() => setIsDeleting(true), period);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-4 md:px-20 pt-32 gap-12"
    >
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left"
      >
        <h3 className="text-2xl md:text-3xl text-slate-300 mb-3">Hello, I'm</h3>
        <h1 className="text-4xl md:text-7xl font-extrabold mb-4">
          Full Stack <br />
          <span className="text-indigo-500 border-r-3 border-indigo-500">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </h1>
        <p className="text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
          I create modern, responsive, and high-performance websites with
          beautiful user experiences and interactive designs using cutting-edge
          technologies.
        </p>
        <div className="flex gap-5 justify-center md:justify-start">
          <button
            onClick={() => scrollToSection("services")}
            className="px-8 py-3 bg-indigo-600 rounded-xl hover:bg-indigo-500 transition-all hover:translate-y-[-5px] shadow-lg hover:shadow-indigo-500/40"
          >
            View Services
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 border border-slate-500 rounded-xl hover:bg-white hover:text-slate-900 transition-all hover:translate-y-[-5px]"
          >
            Contact Me
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center"
      >
        <img
          src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop"
          alt="Developer"
          className="w-full max-w-md md:max-w-lg rounded-2xl shadow-2xl shadow-indigo-500/30 hover:scale-105 transition-transform duration-300"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
