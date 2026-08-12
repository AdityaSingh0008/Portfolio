import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import AnimatedBackground from "./components/AnimatedBackground";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <>
      <AnimatedBackground />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
