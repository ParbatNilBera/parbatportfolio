import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiCode,
  FiLayout,
  FiDatabase,
  FiTool,
  FiTerminal,
  FiCpu,
} from "react-icons/fi";
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
  const [activeTab, setActiveTab] = useState("web");

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
    { name: "Node.js", icon: <DiNodejs />, color: "text-green-500", level: 40 },
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

  const competencies = [
    {
      icon: <FiLayout className="text-3xl text-indigo-400" />,
      title: "Responsive Design",
      description:
        "Creating websites that look great on all devices and screen sizes.",
    },
    {
      icon: <FiCode className="text-3xl text-purple-400" />,
      title: "Clean Code",
      description: "Writing maintainable, efficient, and well-documented code.",
    },
    {
      icon: <FiDatabase className="text-3xl text-blue-400" />,
      title: "Database Management",
      description: "Basic understanding of database structure and SQL queries.",
    },
    {
      icon: <FiTool className="text-3xl text-green-400" />,
      title: "Problem Solving",
      description:
        "Analytical approach to debugging and feature implementation.",
    },
  ];

  // Terminal typing effect
  const terminalText = "Exploring my tech stack...";
  const [displayText, setDisplayText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < terminalText.length) {
        setDisplayText((prev) => prev + terminalText.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    const cursorTimer = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, []);

  // No-animation Skill Bar component
  const SkillBar = ({ skill }) => {
    return (
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <span className={`text-2xl ${skill.color}`}>{skill.icon}</span>
            <span className="font-medium text-gray-200">{skill.name}</span>
          </div>
          <div className="flex items-center">
            <code className="text-sm font-mono text-gray-400">
              {skill.level}%
            </code>
          </div>
        </div>
        <div className="w-full bg-gray-800 rounded h-2 border border-gray-700 overflow-hidden">
          <div
            className={`h-full rounded bg-gradient-to-r from-indigo-600 to-purple-600`}
            style={{
              width: `${skill.level}%`,
              boxShadow: `0 0 10px rgba(139, 92, 246, 0.5)`,
            }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div className="py-16 min-h-screen bg-gray-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black">
      <div className="container mx-auto px-4 md:px-6">
        {/* Terminal-like header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 border border-gray-700 rounded-lg shadow-lg mb-16 mx-auto max-w-4xl overflow-hidden"
        >
          <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="flex-1 text-center">
              <span className="text-xs text-gray-400 font-mono">skills.js</span>
            </div>
          </div>
          <div className="p-6 font-mono">
            <div className="flex items-center text-green-400">
              <span className="mr-2">$</span>
              <span>{displayText}</span>
              <span
                className={`ml-1 ${
                  cursorVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                _
              </span>
            </div>
            <div className="mt-4">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
                &lt;My Skills /&gt;
              </h1>
              <p className="text-gray-400 text-lg mt-4 max-w-3xl">
                A collection of technologies I've learned and use to build
                awesome digital experiences.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Binary Code Background Element */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
          <div className="font-mono text-xs text-indigo-500 fixed top-10 left-10">
            {Array(20)
              .fill()
              .map((_, i) => (
                <div key={i}>
                  {Array(15)
                    .fill()
                    .map((_, j) => Math.round(Math.random()))
                    .join("")}
                </div>
              ))}
          </div>
          <div className="font-mono text-xs text-purple-500 fixed bottom-10 right-10">
            {Array(20)
              .fill()
              .map((_, i) => (
                <div key={i}>
                  {Array(15)
                    .fill()
                    .map((_, j) => Math.round(Math.random()))
                    .join("")}
                </div>
              ))}
          </div>
        </div>

        {/* Tab Navigation - UPDATED FOR MOBILE RESPONSIVENESS */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-col sm:flex-row bg-gray-800 p-1 rounded-lg shadow-md border border-gray-700 w-full max-w-md">
            <button
              onClick={() => setActiveTab("web")}
              className={`px-4 py-3 rounded-md font-medium flex items-center justify-center sm:justify-start gap-2 transition-all mb-1 sm:mb-0 ${
                activeTab === "web"
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <FiLayout className="flex-shrink-0" />
              <span>Web Dev</span>
            </button>
            <button
              onClick={() => setActiveTab("programming")}
              className={`px-4 py-3 rounded-md font-medium flex items-center justify-center sm:justify-start gap-2 transition-all mb-1 sm:mb-0 ${
                activeTab === "programming"
                  ? "bg-purple-600 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <FiTerminal className="flex-shrink-0" />
              <span>Programming</span>
            </button>
            <button
              onClick={() => setActiveTab("competencies")}
              className={`px-4 py-3 rounded-md font-medium flex items-center justify-center sm:justify-start gap-2 transition-all ${
                activeTab === "competencies"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <FiCpu className="flex-shrink-0" />
              <span>Core Skills</span>
            </button>
          </div>
        </div>

        {/* Skills Content */}
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Web Development */}
          <div className={`${activeTab === "web" ? "block" : "hidden"}`}>
            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
                  <FiLayout className="text-2xl text-indigo-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Web Development
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {webDevelopmentSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
            </div>
          </div>

          {/* Programming Languages */}
          <div
            className={`${activeTab === "programming" ? "block" : "hidden"}`}
          >
            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <FiCode className="text-2xl text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Programming Languages & Tools
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {programmingSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
            </div>
          </div>

          {/* Core Competencies */}
          <div
            className={`${activeTab === "competencies" ? "block" : "hidden"}`}
          >
            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <FiCpu className="text-2xl text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Core Competencies
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {competencies.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-indigo-500/30 transition-colors hover:shadow-lg group"
                  >
                    <div className="mb-4 p-3 bg-gray-900 rounded-lg inline-block group-hover:bg-indigo-900/20 transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Code Editor Footer */}
        <div className="max-w-5xl mx-auto mt-12">
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 flex items-center justify-between text-gray-400">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-xs font-mono">Ready to collaborate</span>
            </div>
            <div className="text-xs font-mono">
              /* Always learning new skills */
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
