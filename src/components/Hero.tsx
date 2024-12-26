import Spline from "@splinetool/react-spline";
import "../styles/Hero.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Hero() {
  useEffect(() => {
    // const ctx = gsap.context(() => {
    //   const text1 = new SplitText(".text-1", { type: "words,chars" });
    //   gsap.from(text1.chars, {
    //     opacity: 0,
    //     y: 50,
    //     stagger: 0.1, // 글자마다 0.1초씩 지연
    //     duration: 0.5,
    //   });
    // });
    // return () => {
    //   ctx.revert();
    // };
  }, []);
  return (
    <section
      id="home"
      className="full-page relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-black z-40"
    >
      <div className="container mx-auto px-4">
        <Spline
          className="absolute inset-0 top-20 left-96 z-50"
          scene="https://prod.spline.design/iQIesM5CWyPkCB78/scene.splinecode"
        />
        <Spline
          className="absolute inset-0 top-32 spline-space"
          scene="https://prod.spline.design/X4C8AhI2TU2-D0uU/scene.splinecode"
        />

        <div
          // initial={{ opacity: 0, y: 20 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true }}
          // transition={{ duration: 0.8 }}
          className="container mx-auto px-4 z-10"
        >
          <div className="max-w-5xl mx-auto ml-[-5px]">
            <div
              // initial={{ opacity: 0, y: 20 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: true }}
              // transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 pb-4 "
            >
              <div className="select-none">
                <p className="text-1 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  Welcome to
                </p>
                <p className="dodev mb-2 text-white">Dodev</p>
                <p className="text-2 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  Interactive Website
                </p>
                <p className="mb-3 text-white md:text-6xl">
                  Get UI Concept with
                </p>
                <p className="text-white md:text-6xl">3D-animation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
