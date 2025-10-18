"use client";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.section
      id="header"
      className="text-center mt-10 pt-10"
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <img
        src="/profile.jpg"
        alt="Isma Abbas"
        className="w-36 h-36 rounded-full mx-auto mb-6 border-4 border-primary shadow-[0_0_30px_rgba(139,92,246,0.4)]"
      />
      <h1 className="text-5xl font-extrabold text-white tracking-tight">
        Isma Abbas
      </h1>
      <h2 className="text-xl text-primary mt-3 font-medium">
        Front-End Developer | React.js | Next.js
      </h2>
      <p className="mt-5 text-gray-400 max-w-2xl mx-auto leading-relaxed">
        Passionate about crafting elegant, high-performance web and mobile experiences.
        Experienced in building modern applications using Next.js, React Native, and Tailwind CSS.
      </p>
      <div className="mt-8">
        <a
          href="#contact"
          className="bg-primary/90 hover:bg-primary text-white px-6 py-2 rounded-full transition-all shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.6)]"
        >
          Get in Touch
        </a>
      </div>
    </motion.section>
  );
}
