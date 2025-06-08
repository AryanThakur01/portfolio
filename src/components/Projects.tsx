"use client";
import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { assets } from "@/assets/assets";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  githubLink: string;
  inProgress?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "DSA Visualizer",
    description: "An interactive tool to visualize data structures and algorithms in action.",
    image: assets.DsaVisualizer.src,
    tags: ["React", "TypeScript"],
    demoLink: "https://dsa.aryanthakur.tech",
    githubLink: "https://github.com/AryanThakur01/DSA_Visualizer",
  },
  {
    id: 2,
    title: "Shopicom",
    description: "A multi-vendor e-commerce platform built in Nextjs with Typescript.",
    image: assets.Shopicom.src,
    tags: ["Next.js", "TypeScript", "PostgreSQL", "drizzle ORM"],
    // demoLink: "https://shopicom.aryanthakur.tech",
    githubLink: "https://github.com/AryanThakur01/Shopicom",
  },
  {
    id: 3,
    title: "Trade Blocks",
    description: "A Platform for creating and managing trading bots.",
    image: assets.TradingBot.src,
    tags: ["Python", "FastAPI", "PostgreSQL"],
    // demoLink: "https://shopicom.aryanthakur.tech",
    githubLink: "https://github.com/AryanThakur01/Trade-Blocks",
    inProgress: true,
  },
];

const Projects: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">Check out some of my recent work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden h-60">
                {project.inProgress && (
                  <div className="absolute top-0 right-0 bg-green-600 text-white text-md font-semibold px-2 py-1 rounded-bl-lg z-20">
                    In Progress
                  </div>
                )}
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-110"
                  width={600}
                  height={400}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 ${hoveredId === project.id ? "opacity-100" : ""}`}
                >
                  <div className="absolute bottom-4 left-4 flex space-x-3">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                        aria-label="Live Demo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </a>
                    )}
                    <a
                      href={project.githubLink}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                      aria-label="GitHub Repository"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
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
