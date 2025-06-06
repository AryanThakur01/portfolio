import Contact from "@/components/Contact";
import Experience, { IExperienceSection } from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/about";

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
    start: "Apr 2024",
    end: "May 2024",
    company: "Devneural Solutions",
    role: "Full-Stack Developer",
    implemented: ["Next.Js", "Fronted Development", "Supabase", "Typescript"],
    links: { type: "experience", web: "https://www.devneural.com/" },
  },
  {
    start: "Oct 2023",
    end: "March 2024",
    company: "Freelancing",
    role: "Software Engineer",
    implemented: ["Next.Js", "Fronted Development", "Typescript", "React.JS", "Shopify", "WordPress"],
    links: { type: "experience", web: "https://www.arterns.in/" },
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

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-dark text-white overflow-x-hidden">
        <div
          className="fixed inset-0  bg-cover bg-center opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          }}
        />
        <div className="relative z-10">
          <main>
            <Hero />
            <About />
            <Experience experiences={experiences} />
            <Projects />
            <Skills />
            <Contact />
          </main>
        </div>
      </div>
    </>
  );
}
