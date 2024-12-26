import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import Spline from "@splinetool/react-spline";

const timelineData = [
  {
    year: "2024",
    title: "프리랜서 도전",
    company: "Dodev",
    description:
      "React, Next, TypeScript, Supabase 등을 활용한 풀스택 프리랜서 활동 시작",
    icon: Briefcase,
    color: "text-blue-400",
  },
  {
    year: "2023",
    title: "삼성 SDS 자회사 입사",
    company: "EMRO",
    description: "국내 1등 SCM 기업인 EMRO 에서 웹 서비스 개발",
    icon: Briefcase,
    color: "text-purple-400",
  },
  {
    year: "2022",
    title: "주니어 개발자로 성장",
    company: "삼성 청년 SW 아카데미 (SSAFY)",
    description:
      "Vue.js, Java, Spring, Redis, MSA 등 개발 기술 학습 및 프로젝트 진행",
    icon: GraduationCap,
    color: "text-green-400",
  },
  {
    year: "2021",
    title: "넥슨 MOD PROJECT",
    company: "NEXON",
    description:
      "(현) 메이플스토리 월드 게임 개발 클라이언트 베타 개발자로 참여",
    icon: Briefcase,
    color: "text-yellow-400",
  },
  {
    year: "2021",
    title: "개발 입문",
    company: "JSL 인재개발원",
    description: "HTML, CSS, JavaScript, Java 및 웹과 백엔드 개발 학습",
    icon: Award,
    color: "text-pink-400",
  },
];

export default function Timeline() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden "
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* <Calendar className="w-12 h-12 mx-auto text-purple-400 mb-4" /> */}
          <h2 className="text-4xl font-bold text-white">경력 사항</h2>
        </motion.div>

        {/* <Spline
          className="absolute inset-0"
          scene="https://prod.spline.design/matn12pDjjeGwvL7/scene.splinecode"
        /> */}
        <Spline
          className="absolute inset-0 mt-[60px]"
          scene="https://prod.spline.design/X4C8AhI2TU2-D0uU/scene.splinecode"
        />

        <div className="max-w-4xl mx-auto">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative flex items-center mb-16 last:mb-0"
            >
              {/* Timeline line */}
              {index !== timelineData.length - 1 && (
                <div className="absolute left-8 top-16 w-1 h-full bg-gray-700" />
              )}

              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center ${item.color} z-10`}
              >
                <item.icon className="w-8 h-8" />
              </div>

              {/* Content */}
              <div className="ml-8 bg-gray-800/60 rounded-lg p-6 flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <span className="px-3 py-1 text-sm text-gray-300">
                    {item.year}
                  </span>
                </div>
                <p className="text-purple-400 mb-2">{item.company}</p>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
