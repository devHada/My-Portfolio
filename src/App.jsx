import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TechMarquee from "./components/TechMarquee";
import Cursor from "./components/Cursor";

function App() {
  return (
    <div className="min-h-screen w-full">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <Projects />
        <TechStack />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
