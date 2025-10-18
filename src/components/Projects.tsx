"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "AdBlue Events Platform",
      tech: "Next.js, React Native, RESTful APIs",
      desc: "Developed a web platform for event organizers with server-side rendering, dynamic routing, and API integration. Built companion mobile app in React Native for event participation.",
    },
    {
      title: "OTA Event Registration Platform",
      tech: "NestJS, Rust, PostgreSQL",
      desc: "Maintaining and migrating backend services for enterprise event management, improving scalability and performance.",
    },
    {
      title: "AR Furniture Placement System",
      tech: "React.js, Three.js, MySQL",
      desc: "Built a 3D augmented reality furniture visualization app with seamless UI/UX designed in Figma.",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-primary mb-10 text-center">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="bg-[#1a1a1a]/80 backdrop-blur-md border border-gray-800 rounded-2xl p-6 hover:border-primary hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-sm text-primary mb-3">{project.tech}</p>
            <p className="text-gray-300 text-sm leading-relaxed">{project.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
