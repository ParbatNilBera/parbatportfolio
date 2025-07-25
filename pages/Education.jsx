import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiBook,
  FiAward,
  FiCalendar,
  FiMapPin,
  FiCode,
  FiCpu,
  FiLayers,
} from "react-icons/fi";

const Education = () => {
  const [activeCard, setActiveCard] = useState(null);

  const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Techno Main SaltLake",
      period: "2023-2025",
      location: "Kolkata, West Bengal",
      gpa: "8.21 CGPA",
      description:
        "Currently pursuing advanced studies in computer applications, focusing on modern development technologies and software engineering principles.",
      icon: <FiCpu className="text-2xl" />,
      color: "from-blue-500 to-violet-600",
      bgColor: "bg-blue-900/20",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Calcutta Institute of Engineering and Management",
      period: "2020-2023",
      location: "Kolkata, West Bengal",
      gpa: "8.79 CGPA",
      description:
        "Completed undergraduate degree with focus on programming fundamentals, data structures, algorithms, and web development technologies.",
      icon: <FiCode className="text-2xl" />,
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-900/20",
    },
    {
      degree: "Higher Secondary (Class XII)",
      institution: "Gandhi Colony Madhamik Vidyalaya",
      period: "2020",
      location: "West Bengal",
      gpa: "",
      description:
        "Completed higher secondary education under the West Bengal Council of Higher Secondary Education (WBCHSE).",
      icon: <FiLayers className="text-2xl" />,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-900/20",
    },
    {
      degree: "Secondary (Class X)",
      institution: "Gandhi Colony Madhamik Vidyalaya",
      period: "2018",
      location: "West Bengal",
      gpa: "",
      description:
        "Completed secondary education under the West Bengal Board of Secondary Education (WBBSE).",
      icon: <FiBook className="text-2xl" />,
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-900/20",
    },
  ];

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const glowVariants = {
    initial: { opacity: 0.5, scale: 1 },
    animate: {
      opacity: [0.5, 0.8, 0.5],
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <div className="py-20 min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-indigo-900/20 blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-purple-900/20 blur-3xl"></div>
        <div className="absolute -bottom-20 right-20 w-72 h-72 rounded-full bg-blue-900/20 blur-3xl"></div>

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-indigo-500/30 to-purple-500/30 blur-xl"
          variants={glowVariants}
          initial="initial"
          animate="animate"
        ></motion.div>
        <motion.div
          className="absolute bottom-40 right-40 w-40 h-40 rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-500/30 blur-xl"
          variants={glowVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 1 }}
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <motion.div
              className="w-24 h-24 rounded-full bg-indigo-900/50 flex items-center justify-center mx-auto"
              whileHover={{ scale: 1.05 }}
            >
              <FiBook className="text-4xl text-indigo-300" />
            </motion.div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 relative inline-block">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Education Journey
            </span>
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
            ></motion.span>
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            My academic foundation that has shaped my knowledge and vision in
            the world of computer science and technology.
          </p>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Timeline path */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full">
            <motion.div
              className="w-1 h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1.5 }}
            />
          </div>

          {/* Education cards */}
          <div className="space-y-16 md:space-y-24 relative">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="relative md:flex items-center"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Timeline node */}
                <motion.div
                  className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full z-10 items-center justify-center ${item.bgColor} border-2 border-white/20`}
                  whileHover={{ scale: 1.2 }}
                  animate={activeCard === index ? { scale: 1.2 } : { scale: 1 }}
                >
                  <motion.div
                    className={`w-10 h-10 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                </motion.div>

                {/* Card container with alternating layout */}
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0
                      ? "md:pr-16 md:text-right md:mr-auto"
                      : "md:pl-16 md:ml-auto"
                  } relative`}
                >
                  {/* Mobile timeline node */}
                  <motion.div
                    className={`absolute left-[-40px] top-0 md:hidden flex items-center justify-center w-12 h-12 rounded-full ${item.bgColor}`}
                    whileHover={{ scale: 1.2 }}
                  >
                    {item.icon}
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    className={`bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-8 hover:border-opacity-80 transition-all duration-300`}
                    whileHover={{
                      boxShadow: `0 10px 25px -5px rgba(79, 70, 229, 0.2)`,
                    }}
                    style={{
                      boxShadow:
                        activeCard === index
                          ? `0 10px 25px -5px rgba(79, 70, 229, 0.2)`
                          : "none",
                      borderColor:
                        activeCard === index ? "rgba(99, 102, 241, 0.5)" : "",
                    }}
                  >
                    {/* Year badge */}
                    <motion.span
                      className={`inline-block px-4 py-2 bg-gradient-to-r ${item.color} rounded-full text-white text-sm font-medium mb-4 shadow-lg`}
                      whileHover={{ y: -3 }}
                    >
                      <div className="flex items-center gap-2">
                        <FiCalendar />
                        <span>{item.period}</span>
                      </div>
                    </motion.span>

                    <h3 className="text-2xl font-bold text-white mb-3">
                      {item.degree}
                    </h3>

                    <div className="flex items-center gap-2 text-gray-300 mb-3">
                      <FiBook
                        className={`text-gradient-to-r ${item.color} bg-clip-text`}
                      />
                      <span className="text-lg">{item.institution}</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-400 mb-3">
                      <FiMapPin className="text-indigo-400" />
                      <span>{item.location}</span>
                    </div>

                    {item.gpa && (
                      <div className="flex items-center gap-2 text-gray-300 mb-4">
                        <FiAward className="text-indigo-400" />
                        <span className="font-medium">{item.gpa}</span>
                      </div>
                    )}

                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Animated decoration */}
                    <motion.div
                      className={`absolute ${
                        index % 2 === 0 ? "right-0" : "left-0"
                      } bottom-0 w-20 h-20 rounded-full bg-gradient-to-r ${
                        item.color
                      } opacity-10`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Continuous Learning section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="mt-24 text-center relative"
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md border border-gray-700 rounded-2xl p-10 overflow-hidden">
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-indigo-900/30 blur-2xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-purple-900/30 blur-2xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              />

              <motion.div
                className="inline-block rounded-full p-5 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 backdrop-blur-sm mb-6"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full p-3">
                  <FiCode className="text-3xl text-white" />
                </div>
              </motion.div>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-5">
                Continuous Learning
              </h2>

              <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
                Beyond formal education, I'm committed to continuous learning
                through online courses, tutorials, and hands-on project work to
                stay updated with the latest technologies and best practices in
                web development.
              </p>

              <motion.div
                className="flex flex-wrap gap-4 justify-center mt-8 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, staggerChildren: 0.1 }}
                viewport={{ once: true }}
              >
                {["React", "Node.js", "Tailwind CSS", "HTML", "JavaScript"].map(
                  (skill, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ y: -3, scale: 1.05 }}
                      className="px-4 py-2 rounded-full bg-gray-800/70 border border-gray-700 text-gray-300 text-sm"
                    >
                      {skill}
                    </motion.span>
                  )
                )}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
