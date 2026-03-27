import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import TechStack from "./TechStack";
import Contact from "./Contact";
import Footer from "./Footer";
import TechMarquee from "./TechMarquee";
import Cursor from "./Cursor";
import Certificates from "./Certificates";

const Layout = () => {
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
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
