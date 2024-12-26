import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useEffect } from "react";
import "../styles/BlueCircle.css";

gsap.registerPlugin(ScrollTrigger);

const circles = [
  ".left-blue-circle",
  ".center-blue-circle",
  ".right-blue-circle",
];

export default function BlueCircle2() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".blue-circle-section",
          start: "top center",
          pin: true,
          scrub: true,
          // markers: true,
        },
      });
      tl.to(".blue-circle, .blue-circle::before", {
        width: "35rem",
        height: "35rem",
        duration: 0.1,
      })
        .to(".title", {
          opacity: "1",
        })
        .to(
          circles,
          {
            opacity: "1",
            border: "2.5px solid transparent",
            backgroundColor: "black",
            backgroundImage:
              "linear-gradient(black, black), linear-gradient(to left, rgba(255, 255, 255, 0.1) 30%,  #1d4ed8 100%)",
            backgroundOrigin: "border-box",
            backgroundClip: "content-box, border-box",
          },
          0
        )
        .to(
          ".blue-circle",
          {
            y: "-17.5rem",
          },
          0
        )
        .to(
          ".left-blue-circle",
          {
            x: "-35rem",
          },
          0
        )
        .to(
          ".right-blue-circle",
          {
            x: "35rem",
          },
          0
        );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="blue-circle-section relative bg-black h-screen z-40">
      <div className="circle-box relative flex justify-center">
        <div className="blue-circle left-blue-circle absolute w-3 h-3 bg-blue-700/50 rounded-full opacity-1 flex justify-center items-center">
          <div className="title absolute text-5xl opacity-0 flex flex-col justify-center items-center gap-4">
            <div className="">Design</div>
            <div className="">Solutions</div>
          </div>
        </div>

        <div className="blue-circle center-blue-circle absolute w-3 h-3 bg-blue-700/50 rounded-full opacity-1 flex justify-center items-center">
          <div className="title absolute text-5xl opacity-0 flex flex-col justify-center items-center gap-4">
            <div className="">Development</div>
            <div className="">Solutions</div>
          </div>
        </div>
        <div className="blue-circle right-blue-circle absolute w-3 h-3 bg-blue-700/50 rounded-full opacity-1 flex justify-center items-center">
          <div className="title absolute text-5xl opacity-0 flex flex-col justify-center items-center gap-4">
            <div className="">Custom</div>
            <div className="">Solutions</div>
          </div>
        </div>
      </div>
    </section>
  );
}
