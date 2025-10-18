"use client";
import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      degree: "BS (Software Engineering)",
      institution: "International Islamic University Islamabad",
      period: "2021 - 2025",
      grade: "CGPA: 3.56/4.0",
    },
    {
      degree: "FSC (ICS) - Intermediate",
      institution: "Punjab Group of Colleges, Islamabad",
      period: "2019 - 2021",
      grade: "91.0%",
    },
    {
      degree: "SSC (Science Subjects) - Matriculation",
      institution: "Islamabad Model College for Girls F-6/2",
      period: "2017 - 2019",
      grade: "90%",
    }
  ];

  return (
    <motion.section
      id="education"
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-primary mb-10 text-center">
        Education
      </h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-[#1a1a1a]/60 backdrop-blur-md border border-gray-800 rounded-2xl p-6 hover:border-primary hover:shadow-[0_0_25px_rgba(139,92,246,0.15)] transition-all"
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-300 mb-1">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-primary font-semibold">{edu.grade}</p>
                    <p className="text-gray-400 text-sm">{edu.period}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}