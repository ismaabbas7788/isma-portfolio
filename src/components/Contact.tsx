"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="text-center max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-primary mb-6">Contact</h2>
      <p className="text-gray-300 mb-8">
        Interested in collaborating or learning more? Let’s connect!
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
        <a
          href="mailto:ismaabbas7788@gmail.com"
          className="px-6 py-2 bg-primary text-white rounded-full hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] transition-all"
        >
          Email Me: ismaabbas7788@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/isma-abbas-305b952a0/"
          target="_blank"
          className="px-6 py-2 bg-[#1a1a1a] border border-gray-700 text-gray-300 rounded-full hover:border-primary hover:text-primary transition-all"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/ismaabbas7788"
          target="_blank"
          className="px-6 py-2 bg-[#1a1a1a] border border-gray-700 text-gray-300 rounded-full hover:border-primary hover:text-primary transition-all"
        >
          GitHub
        </a>
      </div>

      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Isma Abbas. All rights reserved.
      </p>
    </motion.section>
  );
}
