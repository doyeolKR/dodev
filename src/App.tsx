import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/App.css";
import ScrollLine from "./components/ScrollLine";
import FullText from "./components/FullText";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useEffect } from "react";
import BlueCircle from "./components/BlueCircle";
import Curtaion from "./components/Curtain";
import PortfolioCopy from "./components/PortfolioCopy";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollSmoother.create({
        wrapper: ".smooth-wrapper",
        content: ".smooth-content",
        smooth: 2,
        effects: true,
      });

      gsap.utils.toArray(".full-page").forEach((page) => {
        ScrollTrigger.create({
          trigger: page as HTMLElement,
          start: "top top",
          pin: true,
          pinSpacing: false,
          // markers: true,
        });
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div className="bg-black text-white relative z-30">
      <Header />
      <div className="smooth-wrapper">
        <div className="smooth-content">
          <main>
            <Hero />
            <FullText />
            <ScrollLine />
            <BlueCircle />
            <Curtaion />
            <PortfolioCopy />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
