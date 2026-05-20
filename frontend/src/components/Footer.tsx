import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: "fa-github",
      url: "https://github.com/yohannes2025",
      label: "GitHub",
    },
    {
      icon: "fa-linkedin-in",
      url: "https://www.linkedin.com/in/yohannes-mebrahtu-tekle-98a01322a/",
      label: "LinkedIn",
    },
    { icon: "fa-twitter", url: "https://x.com", label: "Twitter" },
    {
      icon: "fa-instagram",
      url: "https://instagram.com/yohannes.mebrahtu.5",
      label: "Instagram",
    },
  ];

  return (
    <footer className="px-4 md:px-20 py-10 text-center border-t border-white/10 mt-12">
      <div className="flex justify-center gap-6 mb-5">
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -8, rotate: 5 }}
            className="w-14 h-14 flex items-center justify-center rounded-full bg-slate-800 hover:bg-indigo-600 transition-all text-xl"
            aria-label={social.label}
          >
            <i className={`fab ${social.icon}`}></i>
          </motion.a>
        ))}
      </div>
      <p className="text-slate-500">
        © 2026 DevPortfolio. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
