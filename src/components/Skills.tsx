"use client";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = {
    Frontend: ["React.js", "Next.js", "React Native", "Tailwind CSS", "Bootstrap", "JavaScript"],
    Backend: ["Node.js", "NestJS", "PHP", "Rust", "Python"],
    Databases: ["MySQL", "PostgreSQL", "MS Access"],
    Tools: ["Git", "Jenkins", "Figma", "Keycloak", "Asana", "RESTful APIs"],
  };

  return (
    <motion.section
      id="skills"
      className="max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(skills).map(([category, list]) => (
          <motion.div
            key={category}
            className="bg-[#181818]/80 backdrop-blur-lg border border-gray-800 p-6 rounded-2xl shadow-md hover:shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:border-primary transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-white">{category}</h3>
            <ul className="space-y-1 text-gray-300 text-sm">
              {list.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
