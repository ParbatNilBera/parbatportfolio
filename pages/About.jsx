import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaDatabase,
  FaTools,
  FaLaptopCode,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiCplusplus,
} from "react-icons/si";

export default function About() {
  const [activeTab, setActiveTab] = useState("education");

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const tabVariants = {
    active: {
      backgroundColor: "#1E3A8A",
      color: "white",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    },
    inactive: {
      backgroundColor: "transparent",
      color: "#94A3B8",
    },
  };

  const codeLines = [
    "// About Me Component",
    'import React from "react";',
    'const name = "Parbat Nil Bera";',
    'const role = "Software Developer";',
    "function Skills() {",
    "  return [HTML, CSS, JavaScript, React,C++,Python];",
    "}",
    "class Education extends Component {",
    "  render() {",
    "    return <MCA cgpa={7.69} />;",
    "  }",
    "}",
    "export default About;",
    "async function getinternship() {",
    '  return await fetch("/api/internship");',
    "}",
    "const technologies = useContext(TechContext);",
    "// End of component",
  ];

  const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Techno Main SaltLake",
      cgpa: "7.69",
      year: "2023 - 2025",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Calcutta Institute of Engineering and Management",
      cgpa: "8.79",
      year: "2020 - 2023",
    },
    {
      degree: "XII (WBCHSE)",
      institution: "Gandhi Colony Madhamik Vidyalaya",
      year: "2020",
    },
    {
      degree: "X (WBBSE)",
      institution: "Gandhi Colony Madhamik Vidyalaya",
      year: "2018",
    },
  ];

  const internshipData = {
    role: "Frontend React.js Intern",
    company: "Celebal Technologies",
    duration: "May 2024 - July 2024",
    points: [
      "Worked on real-world frontend projects using React.js and Tailwind CSS.",
      "Collaborated in agile teams and followed modern development workflows.",
    ],
  };

  const skillsData = [
    {
      category: "Frontend Technologies",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      ],
    },
    {
      category: "Programming Languages",
      skills: [
        { name: "C", icon: <FaCode className="text-gray-300" /> },
        { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
        { name: "Java (Basics)", icon: <FaCode className="text-red-500" /> },
        {
          name: "Python (Basics)",
          icon: <FaPython className="text-blue-400" />,
        },
      ],
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { name: "React.js", icon: <FaReact className="text-blue-400" /> },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-teal-400" />,
        },
        { name: "Bootstrap", icon: <FaCode className="text-purple-500" /> },
      ],
    },
    {
      category: "Core Concepts",
      skills: [
        { name: "DBMS", icon: <FaDatabase className="text-yellow-500" /> },
        { name: "OOP", icon: <FaCode className="text-green-400" /> },
      ],
    },
    {
      category: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-600" /> },
        { name: "Office Suite", icon: <FaTools className="text-blue-400" /> },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "SQL", icon: <FaDatabase className="text-blue-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      ],
    },
    {
      category: "Backend",
      skills: [
        {
          name: "Node.js (Basics)",
          icon: <FaNodeJs className="text-green-600" />,
        },
        {
          name: "Express.js (Basics)",
          icon: <SiExpress className="text-gray-400" />,
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-900 text-gray-100 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen">
      {/* Terminal-like header */}
      <div className="max-w-6xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 rounded-t-lg border border-gray-700 overflow-hidden"
        >
          <div className="bg-gray-900 px-4 py-2 flex items-center border-b border-gray-700">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="ml-4 text-sm text-gray-400 flex-1 text-center">
              about.js - Portfolio
            </div>
          </div>
          <div className="p-4 font-mono text-sm">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {codeLines.map((line, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { delay: index * 0.08 },
                    },
                  }}
                  className="flex"
                >
                  <span className="text-gray-500 w-8">{index + 1}</span>
                  <span
                    className={`${
                      line.includes("name")
                        ? "text-green-400"
                        : line.includes("function")
                        ? "text-blue-400"
                        : line.includes("class")
                        ? "text-yellow-400"
                        : line.includes("import") || line.includes("export")
                        ? "text-purple-400"
                        : line.includes("//")
                        ? "text-gray-500"
                        : line.includes("=")
                        ? "text-blue-300"
                        : "text-gray-300"
                    }`}
                  >
                    {line}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Animated Code Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute font-mono text-blue-400"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 0.8 + 0.5}rem`,
                transform: `rotate(${Math.random() * 60 - 30}deg)`,
              }}
              animate={{
                y: [0, Math.random() * 20 - 10],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              {
                [
                  "<div>",
                  "</div>",
                  "<span>",
                  "</span>",
                  "{",
                  "}",
                  "</>",
                  "&&",
                  "||",
                  "===",
                  "function()",
                  "=>",
                  "const",
                  "let",
                  "import",
                  "export",
                  "return",
                  "props",
                  "useState",
                  "useEffect",
                  "map",
                  "filter",
                  "reduce",
                  "async",
                  "await",
                  "promise",
                  "<React.Fragment>",
                  "ReactDOM",
                ][Math.floor(Math.random() * 28)]
              }
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-14"
        >
          <motion.h2
            className="text-4xl font-mono font-bold text-blue-400 mb-2"
            animate={{
              textShadow: [
                "0 0 5px rgba(59, 130, 246, 0)",
                "0 0 15px rgba(59, 130, 246, 0.5)",
                "0 0 5px rgba(59, 130, 246, 0)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            &lt;Parbat Nil Bera /&gt;
          </motion.h2>
          <div className="flex justify-center items-center">
            <div className="h-px w-16 bg-blue-700"></div>
            <motion.p
              className="text-xl text-green-400 font-mono mx-4"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Software Developer
            </motion.p>
            <div className="h-px w-16 bg-blue-700"></div>
          </div>
        </motion.div>

        {/* Tabs styled as terminal tabs */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-gray-800 rounded-lg p-1 flex space-x-1 border border-gray-700 shadow-lg">
            {[
              {
                id: "education",
                icon: <FaGraduationCap className="mr-2" />,
                label: "Education",
              },
              {
                id: "internship",
                icon: <FaBriefcase className="mr-2" />,
                label: "Internship",
              },
              {
                id: "skills",
                icon: <FaCode className="mr-2" />,
                label: "Skills",
              },
            ].map((tab) => (
              <motion.button
                key={tab.id}
                variants={tabVariants}
                animate={activeTab === tab.id ? "active" : "inactive"}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2 rounded-md font-medium text-sm transition-all duration-300 flex items-center ${
                  activeTab === tab.id
                    ? "bg-blue-800 text-white"
                    : "bg-gray-900 text-gray-400 hover:text-gray-200"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                {tab.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Content based on active tab - now with terminal/code theme */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 rounded-lg border border-gray-700 shadow-2xl overflow-hidden"
        >
          {/* Tab header - like a terminal or code editor tab */}
          <div className="bg-gray-900 px-4 py-2 border-b border-gray-700 flex items-center">
            <div className="text-sm text-blue-400 font-mono">
              {activeTab === "education" && "education.js"}
              {activeTab === "internship" && "internship.js"}
              {activeTab === "skills" && "skills.js"}
            </div>
            <div className="ml-auto text-xs text-gray-500 font-mono">
              {activeTab === "education" && "4 items"}
              {activeTab === "internship" && "1 item"}
              {activeTab === "skills" && "7 categories"}
            </div>
          </div>

          <div className="p-6">
            {activeTab === "education" && (
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {educationData.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={index % 2 === 0 ? fadeInRight : fadeInLeft}
                    className="bg-gray-900 rounded-lg p-6 hover:shadow-xl transition-all duration-300 transform border-l-2 border-blue-500 group"
                    whileHover={{
                      scale: 1.03,
                      backgroundColor: "rgba(30, 58, 138, 0.2)",
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    <div className="flex items-start">
                      <motion.div
                        className="mr-4 mt-1 bg-blue-900/50 p-2 rounded-lg"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <FaGraduationCap className="text-blue-400 text-2xl group-hover:text-blue-300" />
                      </motion.div>
                      <div>
                        <motion.h3
                          className="text-xl font-bold text-blue-300 group-hover:text-blue-200"
                          whileHover={{ x: 3 }}
                        >
                          {item.degree}
                        </motion.h3>
                        <p className="text-gray-300">{item.institution}</p>
                        {item.cgpa && (
                          <motion.div
                            className="text-green-400 font-mono mt-2 flex items-center"
                            whileHover={{ scale: 1.05 }}
                          >
                            <span className="text-gray-500">const</span>
                            <span className="text-blue-400 mx-1">cgpa</span>
                            <span className="text-gray-500">=</span>
                            <span className="text-yellow-400 ml-1">
                              {item.cgpa};
                            </span>
                          </motion.div>
                        )}
                        <p className="text-gray-500 mt-1 font-mono">
                          // {item.year}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "internship" && (
              <motion.div
                variants={fadeInUp}
                className="bg-gray-900 rounded-lg p-8 border-l-2 border-blue-500"
              >
                <div className="flex flex-col md:flex-row md:items-start">
                  <motion.div
                    className="mb-6 md:mb-0 md:mr-6 bg-blue-900/50 p-4 rounded-lg inline-block"
                    animate={{ rotate: [0, 10, 0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    <FaBriefcase className="text-blue-400 text-4xl" />
                  </motion.div>
                  <div>
                    <div className="font-mono text-sm text-gray-500 mb-2">
                      // Professional internship
                    </div>
                    <motion.h3
                      className="text-2xl font-bold text-blue-300"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {internshipData.role}
                    </motion.h3>
                    <motion.p
                      className="text-xl text-green-400 font-mono"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {internshipData.company}
                    </motion.p>
                    <motion.p
                      className="text-gray-500 mb-6 font-mono"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      // {internshipData.duration}
                    </motion.p>

                    <div className="font-mono text-sm text-blue-400 mb-2">
                      {"function achievements() {"}
                    </div>
                    <ul className="space-y-4 ml-4">
                      {internshipData.points.map((point, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.2 }}
                          className="flex items-start group"
                          whileHover={{ x: 5 }}
                        >
                          <motion.span
                            className="text-gray-500 font-mono mr-2"
                            whileHover={{ scale: 1.2 }}
                          >
                            {"// >"}
                          </motion.span>
                          <span className="text-gray-300 group-hover:text-blue-200">
                            {point}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                    <div className="font-mono text-sm text-blue-400 mt-2">
                      {"}"}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "skills" && (
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {skillsData.map((category, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-gray-900 rounded-lg p-5 hover:shadow-xl transition-all duration-300 border-t border-gray-700 group"
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    <motion.div
                      className="flex items-center mb-4"
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        className="text-xl"
                        animate={{
                          rotateY: [0, 180, 360],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "loop",
                          repeatDelay: 2,
                        }}
                      >
                        <FaCode className="text-blue-500" />
                      </motion.div>
                      <div className="ml-3">
                        <span className="text-gray-500 font-mono text-xs">
                          import
                        </span>
                        <h3 className="text-lg font-semibold text-blue-400 group-hover:text-blue-300 font-mono">
                          {category.category}
                        </h3>
                      </div>
                    </motion.div>
                    <div className="font-mono text-xs text-gray-500 mb-2">
                      {"const skills = ["}
                    </div>
                    <div className="flex flex-wrap mb-2 ml-4">
                      {category.skills.map((skill, i) => (
                        <motion.div
                          key={i}
                          className="m-1 px-3 py-1 bg-gray-900 border border-gray-700 text-gray-300 rounded-md text-sm flex items-center"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "#1E40AF",
                            color: "#ffffff",
                          }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <span className="mr-2">{skill.icon}</span>
                          {skill.name}
                        </motion.div>
                      ))}
                    </div>
                    <div className="font-mono text-xs text-gray-500">
                      {"];"}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
