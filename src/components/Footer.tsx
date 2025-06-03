"use client";
import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
          <p className="text-gray-400 text-center max-w-lg mb-6">
            Creating beautiful, functional websites and applications with a focus on user experience and clean code.
          </p>

          <div className="flex space-x-4">
            <a
              href="https://github.com/AryanThakur01"
              target="_blank"
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/aryan-thakur-73b251250"
              target="_blank"
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-gray-300" />
            </a>
            <a
              href="mailto:aryan197297@gmail.com"
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-gray-300" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>

            <nav className="flex flex-wrap justify-center space-x-4 md:space-x-6">
              <a href="#home" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Home
              </a>
              <a href="#about" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                About
              </a>
              <a href="#projects" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Projects
              </a>
              <a href="#skills" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Skills
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 p-3 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg transition-colors duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </button>
    </footer>
  );
};

export default Footer;
