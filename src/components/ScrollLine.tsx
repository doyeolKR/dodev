import { useEffect } from "react";
import ScrollLineCard from "./ScrollLineCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/src/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollLineCards = [
  ".scroll-line-card-0 .left-content",
  ".scroll-line-card-0 .right-content",
  ".scroll-line-card-1 .left-content",
  ".scroll-line-card-1 .right-content",
  ".scroll-line-card-2 .left-content",
  ".scroll-line-card-2 .right-content",
];

const contents = [
  {
    imageName: "엠로_AI 기반_750.png",
    title: "EMRO",
    desc: "삼성SDS 자회사이자 국내 1등 공급망관리(SCM) 기업인 엠로에서 웹서비스를 개발하였습니다.",
  },
  {
    imageName: "메이플스토리월드_지구로고.png",
    title: "메이플스토리 월드",
    desc: "(구) 넥슨 PROJECT MOD 게임 개발 클라이언트 베타 개발자로 참여하여 게임 기획과 개발을 하였습니다.",
  },
  {
    imageName: "싸피_입학식.jpg",
    title: "삼성 청년 SW 아카데미",
    desc: "삼성전자 현업 시스템에 따라 알고리즘을 레벨별로 취득하고 MSA 프로젝트를 개발하여 우수상을 수상하였습니다.",
  },
];

export default function ScrollLine() {
  // const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createScrollAnimation = (elementClass: string) => {
      gsap.fromTo(
        elementClass,
        {
          scale: 0.5, // 초기 크기
          opacity: 0, // 초기 투명도
        },
        {
          scale: 1, // 원래 크기
          opacity: 1, // 원래 투명도
          duration: 1,
          scrollTrigger: {
            trigger: elementClass, // 트리거 요소
            start: "center 100%", // 요소의 bottom이 뷰포트 80%에 도달했을 때 실행
            toggleActions: "play none play reverse", // 스크롤 방향에 따라 애니메이션 실행 및 되돌림
            // markers: true, // 디버깅용 마커 (배포 시 제거)
          },
        }
      );
    };

    ScrollLineCards.forEach(createScrollAnimation);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".new-line").forEach((line) => {
        ScrollTrigger.create({
          trigger: line as HTMLElement,
          start: "top 40%",
          end: "+=3200",
          pin: true,
        });
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="scroll-line relative py-48 pb-[30rem] bg-black overflow-hidden mt-[2100px] ">
      <div className="w-full mx-auto px-4 flex flex-col gap-24">
        <div className="absolute left-[50%] translate-x-[-50%] top-1 w-0.5 h-full bg-white/20">
          <div className="new-line absolute top-[-200px]  w-[0.2rem] translate-x-[-25%] h-48 bg-gradient-to-t from-blue-700 to-gray/20 rounded-full"></div>
        </div>

        {contents.map((content, index) => (
          <ScrollLineCard
            key={index}
            index={index}
            imageName={content.imageName}
            title={content.title}
            desc={content.desc}
          />
        ))}
      </div>
    </section>
  );
}
