import Contact from "@/components/Contact";
import { IExperienceSection } from "@/components/Experience";
import Footer from "@/components/Footer";
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

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-dark text-white">
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
            <Projects />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
