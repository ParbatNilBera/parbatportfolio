import { motion } from "framer-motion";
import { FiArrowRight, FiGithub, FiLinkedin } from "react-icons/fi";
import { PiTerminalFill } from "react-icons/pi";
import { VscCode } from "react-icons/vsc";

import { TbBrandVscode } from "react-icons/tb";
import { FaServer } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import parbat from "/images/parbatNilBera.jpg";

const Home = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Track cursor for desktop only
    if (!isMobile) {
      const handleMouseMove = (e) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", checkMobile);
      };
    }
  }, [isMobile]);

  // Code-like strings for animation
  const codingPhrases = [
    "const developer = new Developer('Parbat');",
    "function solveProblems() { return awesome_solutions; }",
    "if (coffee) { code(); } else { getCoffee(); }",
    "while (!success) { try_again(); }",
    "git commit -m 'Fixed bugs and added features'",
    "<div className='awesome'>Portfolio</div>",
  ];

  return (
    <div className="min-h-screen pt-20 pb-20 relative overflow-hidden bg-gray-900 text-gray-100">
      {/* Custom animated cursor effect - desktop only */}
      {!isMobile && (
        <motion.div
          className="hidden md:block fixed w-16 h-16 rounded-full border-2 border-indigo-500 pointer-events-none z-50 opacity-50"
          animate={{
            x: cursorPosition.x - 32,
            y: cursorPosition.y - 32,
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 200,
            mass: 0.8,
          }}
        />
      )}

      {/* Terminal-like header */}
      <div className="absolute top-0 w-full bg-gray-800 border-b border-gray-700 pt-18 px-4 pb-2  flex items-center ">
        <PiTerminalFill className="text-green-400 mr-2" />
        <span className="text-sm font-mono text-green-400">
          ~/parbat-nil-bera/portfolio
        </span>
        <div className="ml-auto flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>

      {/* Code background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {codingPhrases.map((phrase, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-xs md:text-sm text-green-500"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100 * (i + 1),
              opacity: 0.7,
            }}
            animate={{
              y: [null, window.innerHeight + 300],
              opacity: [0.7, 0.5, 0.2, 0],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              delay: i * 2,
            }}
          >
            {phrase}
          </motion.div>
        ))}
      </div>

      {/* Hexagon grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-opacity-50 [background-size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="mb-4 font-mono text-sm text-green-400">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                &gt; initiating developer profile...
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.2 }}
                className="block"
              >
                &gt; profile loaded successfully
              </motion.span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <motion.span
                className="block text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Hello, I'm
              </motion.span>
              <motion.span
                className="block text-5xl md:text-6xl lg:text-7xl mt-2 font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <span className="bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Parbat Nil Bera
                </span>
              </motion.span>
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="font-mono text-lg text-green-400 mb-6 flex items-center"
            >
              <span className="mr-2">function</span>
              <span className="text-yellow-400">developer</span>
              <span className="text-gray-400">() {`{`}</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 mb-4 pl-6"
            >
              return{" "}
              <span className="font-semibold text-indigo-400">
                "Software Developer"
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg text-gray-400 mb-8 pl-6"
            >
              // Crafting robust, scalable solutions with expertise in
              full-stack development, modern frameworks, and performance
              optimization.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="font-mono text-green-400 mb-8"
            >
              <span className="text-gray-400">{`}`}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#4f46e5" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 flex items-center gap-2 bg-indigo-600 rounded-lg shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all text-white font-mono"
                >
                  <VscCode /> View My Code <FiArrowRight />
                </motion.button>
              </Link>
              <a
                href="https://github.com/ParbatNilBera"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    borderColor: "#6366f1",
                    boxShadow: "0 0 15px rgba(99, 102, 241, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 flex items-center gap-2 bg-gray-800 border border-gray-600 rounded-lg hover:bg-gray-700 transition-all text-white font-mono"
                >
                  <FiGithub /> GitHub
                </motion.button>
              </a>
              <a
                href="https://www.linkedin.com/in/parbatnilbera"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    borderColor: "#6366f1",
                    boxShadow: "0 0 15px rgba(99, 102, 241, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 flex items-center gap-2 bg-gray-800 border border-gray-600 rounded-lg hover:bg-gray-700 transition-all text-white font-mono"
                >
                  <FiLinkedin /> LinkedIn
                </motion.button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px]">
              {/* Profile image with code-themed border animation */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  boxShadow: [
                    "0 0 25px rgba(99, 102, 241, 0.7)",
                    "0 0 25px rgba(56, 189, 248, 0.7)",
                    "0 0 25px rgba(168, 85, 247, 0.7)",
                    "0 0 25px rgba(99, 102, 241, 0.7)",
                  ],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-600"
              ></motion.div>

              {/* Binary code overlay */}
              <motion.div
                className="absolute inset-0 rounded-full overflow-hidden opacity-20 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ delay: 0.8, duration: 1 }}
              >
                <div className="w-full h-full flex flex-wrap overflow-hidden font-mono text-[6px] md:text-[8px] text-indigo-400">
                  {Array(200)
                    .fill()
                    .map((_, i) => (
                      <span key={i} className="inline-block">
                        {Math.round(Math.random())}
                      </span>
                    ))}
                </div>
              </motion.div>

              <div className="absolute inset-[3px] rounded-full bg-gray-900 flex items-center justify-center overflow-hidden z-20">
                <div className="w-full h-full relative">
                  <img
                    src={parbat}
                    alt="Parbat Nil Bera"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Orbit elements */}
              <div className="absolute inset-0 z-0">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute w-full h-full"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-indigo-500 rounded-full shadow-lg shadow-indigo-500/50"></div>
                </motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute w-[115%] h-[115%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 md:mt-24"
        >
          <div className="mb-8 flex items-center">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
            <h2 className="px-4 text-xl font-mono text-gray-300">
              tech_stack.json
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <VscCode className="text-3xl text-blue-400" />,
                label: "Front-End",
                value: "React.js, HTML, CSS, Tailwind, Bootstrap",
                color: "blue",
              },
              {
                icon: <FaServer className="text-3xl text-green-400" />,
                label: "Back-End",
                value: "Node.js, Express",
                color: "green",
              },
              {
                icon: <PiTerminalFill className="text-3xl text-yellow-400" />,
                label: "Languages",
                value: "JavaScript, C, C++, Python, Java",
                color: "yellow",
              },
              {
                icon: <TbBrandVscode className="text-3xl text-purple-400" />,
                label: "Database",
                value: "SQL, MongoDB",
                color: "purple",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.1, duration: 0.5 }}
                whileHover={{
                  y: -5,
                  boxShadow: `0 10px 25px -5px rgba(${
                    item.color === "blue"
                      ? "59, 130, 246"
                      : item.color === "green"
                      ? "74, 222, 128"
                      : item.color === "yellow"
                      ? "234, 179, 8"
                      : "168, 85, 247"
                  }, 0.3)`,
                }}
                className="bg-gray-800/80 backdrop-blur-md rounded-xl p-6 border border-gray-700 hover:border-indigo-500/50 transition-all group"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-3">{item.icon}</div>
                  <h3 className="text-xl font-mono font-semibold text-indigo-400">
                    {item.label}
                  </h3>
                </div>
                <p className="text-gray-400 font-mono text-sm">{item.value}</p>

                {/* Code dots animation */}
                <div className="h-1 w-full flex items-center gap-1 pt-4">
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      delay: index * 0.2,
                    }}
                    className="h-1.5 w-1.5 rounded-full bg-indigo-500"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      delay: index * 0.2 + 0.2,
                    }}
                    className="h-1.5 w-1.5 rounded-full bg-cyan-400"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      delay: index * 0.2 + 0.4,
                    }}
                    className="h-1.5 w-1.5 rounded-full bg-purple-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Typing cursor animation at bottom */}
        <motion.div
          className="mt-16 flex justify-center text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <div className="font-mono text-sm text-gray-500 flex items-center">
            <span>// Let's build something amazing</span>
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="ml-1 h-4 w-2 bg-indigo-500"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
