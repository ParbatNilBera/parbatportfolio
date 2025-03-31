import { motion } from "framer-motion";
import { FiCode, FiLayout, FiDatabase, FiTool } from "react-icons/fi";
import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiReact,
  DiGit,
  DiNpm,
  DiNodejs,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiCplusplus,
  SiPython,
  SiC,
  SiExpress,
  SiPostman,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";

const Skills = () => {
  const webDevelopmentSkills = [
    { name: "HTML", icon: <DiHtml5 />, color: "text-orange-500", level: 90 },
    { name: "CSS", icon: <DiCss3 />, color: "text-blue-500", level: 85 },
    {
      name: "JavaScript",
      icon: <DiJavascript />,
      color: "text-yellow-400",
      level: 80,
    },
    { name: "React.js", icon: <DiReact />, color: "text-blue-400", level: 85 },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "text-teal-400",
      level: 80,
    },
    {
      name: "Node.js",
      icon: <DiNodejs />,
      color: "text-green-500",
      level: 40,
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
      color: "text-gray-400",
      level: 40,
    },
  ];

  const programmingSkills = [
    { name: "C", icon: <SiC />, color: "text-blue-600", level: 75 },
    { name: "C++", icon: <SiCplusplus />, color: "text-blue-500", level: 70 },
    { name: "Java", icon: <FaJava />, color: "text-red-500", level: 60 },
    { name: "Python", icon: <SiPython />, color: "text-yellow-500", level: 60 },
    { name: "Git", icon: <DiGit />, color: "text-orange-600", level: 75 },
    { name: "npm", icon: <DiNpm />, color: "text-red-500", level: 70 },
    {
      name: "Postman",
      icon: <SiPostman />,
      color: "text-orange-400",
      level: 65,
    },
  ];

  const SkillBar = ({ skill }) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-6"
      >
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <span className={`text-2xl ${skill.color}`}>{skill.icon}</span>
            <span className="font-medium text-gray-200">{skill.name}</span>
          </div>
          <span className="text-gray-400">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className={`h-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600`}
          ></motion.div>
        </div>
      </motion.div>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="py-28 min-h-screen">
      <div className="container mx-auto my-4 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent mb-4">
            My Skills
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto my-6">
            Here's an overview of my technical skills and competencies developed
            through education and projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <FiLayout className="text-3xl text-indigo-500" />
              <h2 className="text-2xl font-bold text-white">Web Development</h2>
            </motion.div>

            <div className="space-y-6">
              {webDevelopmentSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3 mb-8"
            >
              <FiCode className="text-3xl text-purple-500" />
              <h2 className="text-2xl font-bold text-white">
                Programming Languages & Tools
              </h2>
            </motion.div>

            <div className="space-y-6">
              {programmingSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center text-white mb-12"
          >
            Core Competencies
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FiLayout className="text-3xl text-indigo-400" />,
                title: "Responsive Design",
                description:
                  "Creating websites that look great on all devices and screen sizes.",
              },
              {
                icon: <FiCode className="text-3xl text-purple-400" />,
                title: "Clean Code",
                description:
                  "Writing maintainable, efficient, and well-documented code.",
              },
              {
                icon: <FiDatabase className="text-3xl text-blue-400" />,
                title: "Database Management",
                description:
                  "Basic understanding of database structure and SQL queries.",
              },
              {
                icon: <FiTool className="text-3xl text-green-400" />,
                title: "Problem Solving",
                description:
                  "Analytical approach to debugging and feature implementation.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-indigo-500/50 transition-colors hover:shadow-lg"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
