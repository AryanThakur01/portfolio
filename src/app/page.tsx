import Introduction from "@/components/Introduction";
import ProjectList from "@/components/ProjectList";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="text-white">
      <Introduction />
      <Skills />
      <ProjectList />
    </main>
  );
}
