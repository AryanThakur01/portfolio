import React, { FC } from "react";
import ContainerSection from "./ContainerSection";
import { cn } from "@/lib/utils";

const Skills = () => {
  const skillsList = [
    { skill: "HTML", level: 100 },
    { skill: "JavaScript", level: 90 },
    { skill: "TailwindCss", level: 100 },
    { skill: "Prisma", level: 90 },
    { skill: "Postgresql", level: 80 },
    { skill: "Redux", level: 90 },
    { skill: "NextJs", level: 90 },
    { skill: "CSS", level: 100 },
    { skill: "ReactJs", level: 80 },
    { skill: "MongoDb", level: 90 },
  ];
  return (
    <ContainerSection className="my-20" id="skills">
      <div className="bg-muted/50 rounded-xl p-6">
        <div className="flex justify-between">
          <div className="bg-primary rounded-full p-4" />
          <div className="bg-primary rounded-full p-4" />
        </div>
        <h2 className="md:text-center md:text-4xl text-2xl font-bold my-8">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 gap-x-32 my-20">
          {skillsList
            .sort((a, b) => (a.level < b.level ? 1 : -1))
            .map((s) => (
              <SkillLevel skill={s.skill} level={s.level} key={s.skill} />
            ))}
        </div>
      </div>
    </ContainerSection>
  );
};

interface ISkillLevel {
  skill: string;
  level: number;
}
const SkillLevel: FC<ISkillLevel> = ({ skill, level }) => {
  return (
    <div>
      <p className="text-lg text-muted-foreground font-bold flex justify-between">
        <span>{skill}</span>
        <span
          className={cn(
            level >= 80 && "text-green-500",
            level >= 50 && level < 80 && "text-orange-500",
            level < 50 && "text-red-500",
          )}
        >
          {level}%
        </span>
      </p>
      <div className="my-2 rounded-full bg-muted overflow-hidden">
        <div
          className={cn(
            "w-full rounded-full p-1",
            level >= 80 && "bg-green-500",
            level >= 50 && level < 80 && "bg-orange-500",
            level < 50 && "bg-red-500",
          )}
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Skills;
