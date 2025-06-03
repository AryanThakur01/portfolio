import React from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 pb-0">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-space-gradient opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:50px_50px] opacity-10" />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 order-2 md:order-1">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                <span className="text-space-blue">Hello, </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-space-purple to-space-pink">
                  I&apos;m Aryan Thakur
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-6">Software Engineer</p>
              <p className="text-base md:text-lg text-gray-400 mb-8 max-w-lg">Creating digital experiences that are out of this world</p>

              <div className="flex space-x-4 mb-8">
                <a
                  href="https://github.com/AryanThakur01"
                  target="_blank"
                  className="p-2 bg-dark-200/50 backdrop-blur-sm rounded-full hover:bg-dark-300/50 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-space-blue" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aryan-thakur-73b251250"
                  target="_blank"
                  className="p-2 bg-dark-200/50 backdrop-blur-sm rounded-full hover:bg-dark-300/50 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-space-purple" />
                </a>
                <a
                  href="#contact"
                  className="p-2 bg-dark-200/50 backdrop-blur-sm rounded-full hover:bg-dark-300/50 transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-space-pink" />
                </a>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="#projects"
                  className="px-8 py-3 bg-space-blue/20 backdrop-blur-sm border border-space-blue/30 hover:bg-space-blue/30 text-space-blue rounded-lg transition-all duration-300 text-center"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 bg-space-purple/20 backdrop-blur-sm border border-space-purple/30 hover:bg-space-purple/30 text-space-purple rounded-lg transition-all duration-300 text-center"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 order-1 md:order-2 flex justify-center -translate-y-8 md:translate-y-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-space-blue via-space-purple to-space-pink opacity-20 animate-pulse" />
              <div className="relative rounded-full overflow-hidden border-2 border-white/10 backdrop-blur-sm">
                <Image src={assets.Profile.src} alt="Profile" className="w-full h-full object-cover" height={400} width={400} />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center animate-bounce">
          <span className="text-sm text-gray-400 mb-2">Explore</span>
          <ArrowDown className="w-5 h-5 text-space-blue" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
