import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import SectionWrapper from "@/components/SectionWrapper";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      <Navbar />
      <Hero />
      
      <SectionWrapper animation="fade-up">
        <About />
      </SectionWrapper>
      
      <SectionWrapper animation="zoom" delay={100}>
        <Skills />
      </SectionWrapper>
      
      <SectionWrapper animation="fade-left" delay={100}>
        <Experience />
      </SectionWrapper>
      
      <SectionWrapper animation="fade-right" delay={100}>
        <Projects />
      </SectionWrapper>
      
      <SectionWrapper animation="blur" delay={100}>
        <Contact />
      </SectionWrapper>
    </div>
  );
};

export default Index;
