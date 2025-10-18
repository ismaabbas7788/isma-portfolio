"use client";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Birdy Ventures (NSTP, NUST)",
      period: "July 2025 – Present",
      location: "Japan-based Company",
      achievements: [
        "Developed Ad Blue Events web application using Next.js with server-side rendering, dynamic routing, and responsive UI components for event organizers and managers",
        "Built cross-platform mobile application in React Native for iOS and Android with intuitive UI and seamless API integration for event participation",
        "Integrated RESTful APIs to synchronize event and vendor data, enhancing real-time management capabilities",
        "Working on enterprise OTA Event Registration Platform, maintaining backend services and resolving production bugs in NestJS",
        "Actively migrating backend services from NestJS to Rust for improved performance and scalability"
      ]
    },
    {
      role: "Software Development Intern",
      company: "INNOTECH (Military College of Signals)",
      period: "2 Months",
      location: "Rawalpindi, Pakistan",
      achievements: [
        "Implemented comprehensive employee management system using React.js and PostgreSQL with role-based access control",
        "Collaborated with OAS team on secure internal communication system for organizational messaging",
        "Designed and integrated internal organizational email system using IMAP protocol",
        "Developed password recovery system with secure authentication mechanisms"
      ]
    }
  ];

  return (
    <motion.section
      id="experience"
      className="max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-primary mb-10 text-center">
        Work Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-[#1a1a1a]/60 backdrop-blur-md border border-gray-800 rounded-2xl p-8 hover:border-primary hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-1">
                  {exp.role}
                </h3>
                <p className="text-primary font-medium">{exp.company}</p>
                <p className="text-gray-400 text-sm">{exp.location}</p>
              </div>
              <span className="text-gray-400 text-sm mt-2 md:mt-0 bg-[#252525] px-4 py-1 rounded-full">
                {exp.period}
              </span>
            </div>
            <ul className="space-y-3 mt-4">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="text-gray-300 text-sm leading-relaxed flex">
                  <span className="text-primary mr-3 mt-1">▹</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}