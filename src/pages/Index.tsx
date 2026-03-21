import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import SectionWrapper from "@/components/SectionWrapper";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />

      <SectionWrapper animation="fade-up">
        <Projects />
      </SectionWrapper>

      <SectionWrapper animation="fade-up" delay={100}>
        <About />
      </SectionWrapper>

      <SectionWrapper animation="zoom" delay={100}>
        <Skills />
      </SectionWrapper>

      <SectionWrapper animation="fade-up" delay={100}>
        <Experience />
      </SectionWrapper>

      <SectionWrapper animation="blur" delay={100}>
        <Contact />
      </SectionWrapper>
    </div>
  );
};

export default Index;
