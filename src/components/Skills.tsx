import React from "react";
import { Code, PaintBucket, Server, Settings, Layers, LineChart, Database, Layout, Cpu, Wrench, Boxes } from "lucide-react";

interface Skill {
  name: string;
  category: string;
}

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Development",
    icon: <Layout className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    skills: [
      { name: "HTML", category: "frontend" },
      { name: "CSS", category: "frontend" },
      { name: "JavaScript", category: "frontend" },
      { name: "TypeScript", category: "frontend" },
      { name: "React", category: "frontend" },
      { name: "Tailwind CSS", category: "frontend" },
    ],
  },
  {
    name: "Backend Development",
    icon: <Cpu className="w-6 h-6 text-green-600 dark:text-green-400" />,
    skills: [
      { name: "Node.js", category: "backend" },
      { name: "Express", category: "backend" },
      { name: "FastAPI", category: "backend" },
      { name: "Python", category: "backend" },
    ],
  },
  {
    name: "Databases",
    icon: <Database className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    skills: [
      { name: "PostgreSQL", category: "database" },
      { name: "MongoDB", category: "database" },
      { name: "Supabase", category: "database" },
      { name: "Redis", category: "database" },
    ],
  },
  {
    name: "DevOps & Tooling",
    icon: <Wrench className="w-6 h-6 text-orange-600 dark:text-orange-400" />,
    skills: [
      { name: "Git & GitHub", category: "devops" },
      { name: "Docker", category: "devops" },
      { name: "CI/CD (GitHub Actions)", category: "devops" },
      { name: "AWS", category: "devops" },
      { name: "Linux", category: "devops" },
      { name: "Vim", category: "devops" },
    ],
  },
  {
    name: "Blockchain & Web3",
    icon: <Boxes className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />,
    skills: [
      { name: "Web3.js", category: "blockchain" },
      { name: "Solidity", category: "blockchain" },
    ],
  },
];


const categoryStyles: Record<string, string> = {
  frontend: "bg-blue-100/10 text-blue-400",
  backend: "bg-green-100/10 text-green-400",
  database: "bg-purple-100/10 text-purple-400",
  devops: "bg-orange-100/10 text-orange-400",
  blockchain: "bg-yellow-100/10 text-yellow-400",
};

const SkillItem: React.FC<{ skill: Skill }> = ({ skill }) => {
  const baseStyle = "px-4 py-2 rounded-lg text-sm font-medium transition-all";
  const categoryStyle = categoryStyles[skill.category] || "bg-gray-100/10 text-gray-400";

  return (
    <div className={`${baseStyle} ${categoryStyle}`}>
      {skill.name}
    </div>
  );
};
const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-dark text-white transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400">Here are my technical skills and expertise</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-dark-100 rounded-xl p-6 shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-dark-200 rounded-lg mr-4">{category.icon}</div>
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem key={skillIndex} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-dark-100 rounded-xl p-8 shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-2xl font-semibold mb-4">Other Expertise</h3>
              <p className="text-gray-400 mb-6">Beyond technical skills, I bring these valuable qualities to every project:</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="p-2 bg-blue-900/30 rounded-lg mr-3">
                    <Layers className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">Problem Solving</h4>
                    <p className="text-sm text-gray-400">Creative solutions to complex challenges</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 bg-green-900/30 rounded-lg mr-3">
                    <LineChart className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">Project Management</h4>
                    <p className="text-sm text-gray-400">Efficient planning and execution</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 bg-purple-900/30 rounded-lg mr-3">
                    <Settings className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">Adaptability</h4>
                    <p className="text-sm text-gray-400">Quick to learn new technologies</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 bg-orange-900/30 rounded-lg mr-3">
                    <Code className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">Clean Code</h4>
                    <p className="text-sm text-gray-400">Maintainable and scalable solutions</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 md:pl-8">
              <div className="bg-dark-200 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Current Learning Focus</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">Advanced React Patterns</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">Web3 & Blockchain Development</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">Machine Learning Basics</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">Mobile App Development</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
