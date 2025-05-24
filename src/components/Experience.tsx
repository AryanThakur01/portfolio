import { GithubIcon, Globe, GlobeIcon, LinkIcon } from "lucide-react";
import { Container } from "./Container";
import Link from "next/link";

export interface IExperienceSection {
  start: string;
  end: string;
  company?: string;
  role: string;
  implemented: string[];
  links?: {
    type: "experience" | "project";
    github?: string;
    linkedin?: string;
    web?: string;
  };
}

interface IExperience {
  experiences: IExperienceSection[];
  header: React.ReactNode;
}
export const Experience: React.FC<IExperience> = ({ experiences, header }) => {
  return (
    <Container.Section>
      <Container.Header className="text-white/70">{header}</Container.Header>
      <div className="flex flex-col gap-4">
        {experiences.map((exp, index) => (
          <ExperienceSection key={`${exp.role}-${index}`} {...exp} />
        ))}
      </div>
    </Container.Section>
  );
};

const ExperienceSection: React.FC<IExperienceSection> = ({ start, end, company, role, implemented, links }) => {
  return (
    <div className="bg-gray-400/10 p-6 rounded-md transition-all hover:shadow-md hover:shadow-white/5">
      <div className="md:flex justify-between">
        <div className="flex gap-4 items-center md:text-base md:text-white text-sm text-muted-foreground">
          <p>{start}</p>
          <div className="md:w-10 w-4 h-px bg-white"></div>
          <p>{end}</p>
        </div>
        <div className="capitalize md:my-0 my-8">
          <h2 className="text-lg">{role}</h2>
          {links?.type === "project" && (
            <div className="flex gap-2 my-1">
              {links.github && (
                <Link href={links.github} className="group" target="_blank">
                  <GithubIcon size={15} className="group-hover:stroke-blue-500" />
                </Link>
              )}

              {links.web && (
                <Link href={links.web} className="group" target="_blank">
                  <GlobeIcon size={15} className="group-hover:stroke-blue-500" />
                </Link>
              )}
            </div>
          )}
          {company && links?.type === "experience" && links?.web && (
            <Link
              href={links.web}
              className="text-md text-muted-foreground flex gap-1 items-center group cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{company}</span>
              <LinkIcon size={10} className="group-hover:stroke-blue-500" />
            </Link>
          )}
        </div>
      </div>
      <hr className="my-2" />
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-4">
        <div className="flex md:gap-4 gap-1 gap-y-1 flex-wrap h-fit">
          {implemented.map((imp, index) => (
            <div
              key={`${imp}-${index}`}
              className="border rounded-lg w-fit md:p-2 md:px-4 p-2 md:text-base text-xs hover:cursor-default hover:border-white/20 hover:italic"
            >
              {imp}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
