"use client";
import { Experience, IExperienceSection } from "@/components/Experience";
import Introduction from "@/components/Introduction";
import { MainContainer } from "@/components/MainContainer";

const experiences: IExperienceSection[] = [
  {
    start: "June 2024",
    end: "Present",
    company: "Blinker Technology",
    role: "Software Engineer",
    implemented: ["Blockchain", "Typescript", "AWS", "KaiOS"],
    links: { type: "experience", web: "https://www.blinkertechnology.com" },
  },
  {
    start: "Jan 2024",
    end: "May 2024",
    company: "Devneural Solutions",
    role: "Full-Stack Developer",
    implemented: ["Next.Js", "Fronted Development", "Supabase", "Typescript"],
    links: { type: "experience", web: "https://www.devneural.com/" },
  },
  {
    start: "Jun 2023",
    end: "Sep 2023",
    company: "Arterns Technologies",
    role: "Front-end Engineer",
    implemented: ["Next.Js", "Fronted Development", "Typescript", "React.JS"],
    links: { type: "experience", web: "https://www.arterns.in/" },
  },
];
const projects: IExperienceSection[] = [
  {
    start: "Oct 2023",
    end: "Jan 2024",
    role: "DSA Visualizer",
    implemented: ["Blockchain", "Typescript", "AWS", "KaiOS"],
    links: {
      type: "project",
      web: "https://dsa.aryanthakur.tech",
      github: "https://github.com/AryanThakur01/DSA_Visualizer",
    },
  },
  {
    start: "Jan 2024",
    end: "May 2024",
    role: "Multi Vendor E-Commerce platform",
    implemented: ["Next.Js", "Fronted Development", "Supabase", "Typescript"],
    links: {
      type: "project",
      github: "https://github.com/AryanThakur01/Shopicom",
    },
  },
  {
    start: "Aug 2023",
    end: "Sep 2023",
    role: "Custom Text Editor (Vim based)",
    implemented: ["Next.Js", "Fronted Development", "Typescript", "React.JS"],
    links: {
      type: "project",
      github: "https://github.com/AryanThakur01/VimVerse",
    },
  },
];

export default function Home() {
  return (
    <MainContainer className="text-white">
      <Introduction zIndex={1} />
      <Experience
        zIndex={2}
        experiences={experiences}
        header={
          <>
            <span className="text-white">My</span> Experience
          </>
        }
      />
      <Experience
        zIndex={3}
        experiences={projects}
        header={
          <>
            <span className="text-white">My</span> Projects
          </>
        }
      />
    </MainContainer>
  );
}
