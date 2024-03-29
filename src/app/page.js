import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import FigmaEmbed from "./components/FigmaEmbed";




export default function Home() {



  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"></link>
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />

        
        
        <AboutSection />
        <FigmaEmbed />
        <ProjectsSection />
        <EmailSection />
 

       


      </div>
      <Footer />
    </main>
  );
}
