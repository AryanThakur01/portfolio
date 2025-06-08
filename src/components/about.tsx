import React from "react";
import { User, Calendar, MapPin, Briefcase } from "lucide-react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">Get to know more about me and my background</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Who am I?</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I&apos;m a passionate software developer with expertise in creating responsive, user-friendly websites and applications. With a
              background in both design and development, I bridge the gap between aesthetics and functionality.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I&apos;m constantly learning and experimenting with new technologies to stay at the forefront of web development. My goal is
              to create digital experiences that are not only visually appealing but also intuitive and accessible.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center">
                <User className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400">Name</h4>
                  <p className="text-gray-800 dark:text-gray-200 font-medium">Aryan Thakur</p>
                </div>
              </div>

              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400">Experience</h4>
                  <p className="text-gray-800 dark:text-gray-200 font-medium">2+ Years</p>
                </div>
              </div>

              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400">Location</h4>
                  <p className="text-gray-800 dark:text-gray-200 font-medium">Dehradun, India</p>
                </div>
              </div>

              {/* <div className="flex items-center"> */}
              {/*   <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" /> */}
              {/*   <div> */}
              {/*     <h4 className="text-sm text-gray-500 dark:text-gray-400">Availability</h4> */}
              {/*     <p className="text-gray-800 dark:text-gray-200 font-medium">Available for hire</p> */}
              {/*   </div> */}
              {/* </div> */}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gray-100 dark:bg-gray-800 rounded-lg -z-10 transform -rotate-3"></div>
            <Image
              src={assets.Laptop.src}
              alt="About me"
              className="rounded-lg shadow-lg w-full transform rotate-3 transition-transform duration-500 hover:rotate-0"
              width={1080}
              height={1080}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
