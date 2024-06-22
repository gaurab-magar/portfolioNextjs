import About from "./About";
import Contact from "./Contact";
import Featured from "./Featured";
import Hero from "./Hero";
import Project from "./Project";
import Skill from "./Skill";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Featured />
      <Skill />
      <Project />
      <Contact />
    </main>
  );
}
