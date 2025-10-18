import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] text-white overflow-x-hidden">
      <div className="container mx-auto px-4 md:px-6 py-2 space-y-8">
        <Header />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
    </div>
  );
}