import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import "../styles/Curtain.css";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const info = [
  {
    title: "FRONTEND",
    skills: ["JS", "React", "Next", "Flutter"],
    img: "/images/구슬.jpg",
  },
  {
    title: "BACKEND",
    skills: ["Java", "Spring", "JPA"],
    img: "/images/백엔드3.png",
  },
  {
    title: "DB",
    skills: ["SQL", "Redis", "Supabase"],
    img: "/images/데이터베이스3.png",
  },
  {
    title: "DEVOPS",
    skills: ["Docker", "AWS"],
    img: "/images/데브옵스2.png",
  },
];

export default function Curtain() {
  useEffect(() => {
    Promise.all(
      info.map((obj) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = obj.img;
          img.onload = resolve; // 이미지 로드 성공 시 resolve 호출
          img.onerror = reject; // 이미지 로드 실패 시 reject 호출
        });
      })
    );
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".ulbox", {
        opacity: 1,
        scrollTrigger: {
          trigger: ".curtain-section",
          start: "top 35%",
          end: "75% 15%",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.to(".curtain-title", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".curtain-section",
          start: "top 15%",
          end: "bottom top",
          toggleActions: "play none play reverse",
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  const seletPortfolio = (index: number) => {
    const li = document.querySelector(`.curtain-item-${index}`) as HTMLElement;
    const bgs = document.querySelectorAll(".bg-container");
    const bg = document.querySelectorAll(`.bg-container-${index}`);

    gsap.to(li, {
      flexGrow: 1.5,
      duration: 0.5,
    });

    gsap.to(bgs, {
      opacity: 0,
      duration: 0.5,
    });

    gsap.to(bg, {
      opacity: 1,
      duration: 0.5,
    });
  };

  const unSelectPortfolio = (index: number) => {
    const li = document.querySelector(`.curtain-item-${index}`) as HTMLElement;

    gsap.to(li, {
      flexGrow: 1,
      duration: 0.5,
    });
  };

  return (
    <section className="full-page curtain-section relative h-[100vh] mt-[1100px] mb-[500px] z-50">
      <div className="h-full">
        <div className="curtain-title absolute top-[20vh] left-[50%] translate-x-[-50%] text-5xl font-bold z-30">
          SKILLS
        </div>
        <div className="curtain-content h-full">
          <div className="ulbox h-full opacity-0">
            <ul className="flex h-full">
              {info.map((obj, index) => (
                <li
                  key={index}
                  className={`curtain-item curtain-item-${index}`}
                  onMouseEnter={() => seletPortfolio(index)}
                  onMouseLeave={() => unSelectPortfolio(index)}
                >
                  <div className="info-box relative text-4xl font-bold text-white flex justify-center items-center">
                    {obj.title}
                    <div className="skills-box absolute top-16 text-sm opacity-0">
                      <ul className="w-72 flex justify-center flex-wrap gap-4">
                        {obj.skills.map((skill, index) => (
                          <li
                            key={index}
                            className="border border-white rounded-2xl py-1 px-4"
                          >{`# ${skill}`}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`bg absolute inset-0 z-[-2] bg-cover opacity-0`}
                    style={{ backgroundImage: `url(${obj.img})` }}
                  ></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
