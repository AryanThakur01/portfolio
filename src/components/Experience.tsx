import React from "react";
import { Calendar, ExternalLink } from "lucide-react";

export interface IExperienceSection {
  start: string;
  end: string;
  company: string;
  role: string;
  implemented: string[];
  links: {
    type: string;
    web: string;
  };
}

interface ExperienceProps {
  experiences: IExperienceSection[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-space-blue/5 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-space-blue mx-auto mb-6"></div>
          <p className="text-lg text-gray-400">My professional journey and achievements</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-space-purple/30 transform md:-translate-x-0.5"></div>

            {experiences.map((experience, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-space-blue rounded-full border-4 border-dark transform md:-translate-x-1/2 z-10"></div>

                <div className={`ml-12 md:ml-0 md:flex md:items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-8" : "md:pr-8"}`}>
                    <div className="bg-dark-200/30 backdrop-blur-sm rounded-lg border border-white/10 p-6 hover:border-space-blue/50 transition-all duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center text-space-blue text-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>
                            {experience.start} - {experience.end}
                          </span>
                        </div>
                        <a
                          href={experience.links.web}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-space-purple hover:text-space-pink transition-colors duration-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-2">{experience.role}</h3>
                      <h4 className="text-lg text-space-purple mb-4">{experience.company}</h4>

                      <div className="mb-4">
                        <h5 className="text-sm font-medium text-gray-300 mb-2">Technologies & Skills:</h5>
                        <div className="flex flex-wrap gap-2">
                          {experience.implemented.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-space-blue/20 text-space-blue text-sm rounded-full border border-space-blue/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
