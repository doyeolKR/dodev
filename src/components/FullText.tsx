import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useEffect } from "react";
import "../styles/FullText.css";
import Lottie from "lottie-react";
import scrollDwon from "../assets/lottie/scroll_down.json";

gsap.registerPlugin(ScrollTrigger);

export default function FullText() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#fulltext",
          start: "top top",
          end: "+=2000",
          toggleActions: "play reset play none",
          pin: true,
          scrub: true,
        },
      });

      tl.to(".text-dodev", {
        fontSize: "6rem",
        duration: 3,
      }).to(".text-dodev", {
        opacity: 0.1,
        duration: 3,
      });

      gsap.to(".scroll-down", {
        opacity: 0,
        scrollTrigger: {
          trigger: "#fulltext",
          start: "top top",
          toggleActions: "play none reverse none",
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <section
      id="fulltext"
      className="relative bg-black h-screen flex items-center z-40"
    >
      <div className="scroll-down absolute top-0 left-[50%] translate-x-[-50%]">
        <Lottie className="w-28 h-28" animationData={scrollDwon} />
      </div>
      <div className="container mx-auto px-4 flex justify-center select-none">
        <div className="text-dodev text-[1000px]">Dodev</div>
      </div>
    </section>
  );
}
