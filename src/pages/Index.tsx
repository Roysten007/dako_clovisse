import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Tools from "@/components/Tools";
import Projects from "@/components/Projects";
import Vision from "@/components/Vision";
import SocialSection from "@/components/SocialSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <CustomCursor />
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Skills />
    <Tools />
    <Projects />
    <Vision />
    <SocialSection />
    <Contact />
    <Footer />
  </div>
);

export default Index;
