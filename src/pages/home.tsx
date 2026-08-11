import Navbar from "../components/navbar";
import PageUp from "../components/pageup";
/**My Components */
import "../App.css";
/**Style */
import HeroSection from "./Hero/heroSection";
import Footer from "../components/footer";
import AboutSection from "./About/aboutSection";
import ProjectSection from "./Projects/projectSection";
import VideoSection from "./VideoPortfolio/videoSection";
import SectionTransition from "../components/SectionTransition";
import { RoleProvider } from "../context/RoleContext";
/**Sections */

export default function Home() {
  return (
    <RoleProvider>
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <PageUp />
      <SectionTransition id="about" targetId="about-content" title="About" />
      <div id="about-content">
        <AboutSection />
      </div>
      <SectionTransition
        id="projects"
        targetId="projects-content"
        title="Projects"
      />
      <div id="projects-content">
        <ProjectSection />
        <VideoSection />
      </div>
      <Footer />
    </RoleProvider>
  );
}
