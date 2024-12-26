import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "프로젝트 1",
    description: "React와 TypeScript를 활용한 웹 애플리케이션",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "프로젝트 2",
    description: "Node.js 기반 백엔드 API",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    tech: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "프로젝트 3",
    description: "풀스택 소셜 미디어 플랫폼",
    image:
      "https://images.unsplash.com/photo-1552308995-2baac1ad5490?auto=format&fit=crop&w=800&q=80",
    tech: ["Next.js", "PostgreSQL", "Prisma"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-900"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          프로젝트
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-800 rounded-xl overflow-hidden"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <Github className="w-6 h-6 text-gray-900" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <ExternalLink className="w-6 h-6 text-gray-900" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
