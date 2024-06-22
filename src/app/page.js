import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Project from "./Project";
import Skill from "./Skill";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
    </main>
  );
}
