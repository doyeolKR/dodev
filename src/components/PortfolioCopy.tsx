import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, EffectCube } from "swiper/modules";
import "../styles/PortfolioCopy.css";

export default function PortfolioCopy() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: "#Portfolio",
        start: "top top",
        toggleActions: "play reset play none",
        pin: true,
        scrub: true,
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  const images = [
    "스타벅스_메인.png",
    "아이패드_메인.png",
    "플레이그라운드_포폴_메인_스케일업.png",
    "러브시그널_포폴_메인_스케일업.png",
  ];

  return (
    <section id="Portfolio" className="h-[100vh] z-50">
      <div className="absolute top-[-10%] left-[50%] translate-x-[-50%] text-5xl md:text-7xl font-bold mb-10 z-50">
        <span>Portfolio</span>
      </div>
      <div className="h-[10vh]"></div>
      <Swiper
        effect="cube"
        speed={1000}
        loop
        modules={[Navigation, Pagination, EffectCube]}
        spaceBetween={50}
        slidesPerView={3}
        navigation={true}
        pagination={true}
        grabCursor={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="lg:w-[60%]"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="">
            <img
              className="border border-gray-500 rounded-2xl select-none"
              src={`/images/${image}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
