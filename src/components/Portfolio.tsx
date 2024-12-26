import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Portfolio.css";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

export default function Portfolio() {
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const images = [
    "스타벅스_메인.png",
    "아이패드_메인.png",
    "플레이그라운드_포폴_메인_스케일업.png",
    "러브시그널_포폴_메인_스케일업.png",
  ];

  return (
    <section id="Portfolio" className="h-[100vh]">
      <div className="absolute top-[-10%] left-[50%] translate-x-[-50%] text-5xl md:text-7xl font-bold mb-10 z-50">
        <span>Portfolio</span>
      </div>
      <div className="h-[5vh]"></div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="slider-item" key={index}>
            <img
              className="slider-image lg:w-[70%] lg:h-[70%] mx-auto"
              src={`/images/${image}`}
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}
