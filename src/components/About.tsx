"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="max-w-5xl mx-auto text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-primary mb-6">About Me</h2>

      <div className="bg-[#1a1a1a]/70 backdrop-blur-md p-10 rounded-2xl border border-gray-800 shadow-[0_0_30px_rgba(139,92,246,0.1)] text-left">
        <p className="text-gray-300 leading-relaxed mb-6">
          I’m <b className="text-white">Isma Abbas</b> — a passionate{" "}
          <b className="text-white">Full Stack Developer</b> with a strong
          foundation in modern web and mobile app development. I hold a{" "}
          <b className="text-white">BS in Software Engineering</b> from
          International Islamic University Islamabad (CGPA: 3.56/4.0).
        </p>

        <p className="text-gray-300 leading-relaxed mb-6">
          Currently, I’m working at{" "}
          <b className="text-white">Birdy Ventures (NSTP NUST)</b> — a
          Japan-based company — where I develop scalable event management
          platforms using <b>Next.js</b> and build companion mobile apps using{" "}
          <b>React Native</b>. I also have experience maintaining enterprise
          backends in <b>NestJS</b> and migrating them to <b>Rust</b> for
          performance improvements.
        </p>

        <p className="text-gray-300 leading-relaxed mb-6">
          Previously, I completed my internship at{" "}
          <b className="text-white">INNOTECH (Military College of Signals)</b>,
          where I developed internal employee management systems and an
          organizational email communication platform in <b>React.js</b> and{" "}
          <b>PostgreSQL</b>.
        </p>


        
      </div>
    </motion.section>
  );
}
