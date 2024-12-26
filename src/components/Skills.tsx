import { motion } from "framer-motion";

const skills = [
  {
    name: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Flutter"],
  },
  { name: "Backend", items: ["Node.js", "Express", "Java", "Spring"] },
  { name: "Database", items: ["PostgreSQL", "MongoDB", "Redis", "Supabase"] },
  { name: "DevOps", items: ["Git", "Docker", "AWS", "CI / CD"] },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-900 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          기술 스택
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 bg-gradient-to-br from-gray-800 to-gray-800 rounded-xl"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                {category.name}
              </h3>
              <div className="space-y-3">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: index * 0.2 + skillIndex * 0.1,
                    }}
                    className="bg-purple-500/20 rounded-full overflow-hidden"
                  >
                    <div className="px-4 py-2 text-purple-400">{skill}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
