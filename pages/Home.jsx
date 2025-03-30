import { motion } from "framer-motion";
import { FiArrowRight, FiGithub, FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";
import parbat from "/images/parbatNilBera.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center pt-24 pb-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-indigo-600/10"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              filter: "blur(80px)",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block text-gray-300">Hello, I'm</span>
              <span className="block text-5xl md:text-6xl lg:text-7xl mt-2 bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Parbat Nil Bera
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-400 mb-4"
            >
              A passionate{" "}
              <span className="font-semibold text-indigo-400">
                Software Developer
              </span>{" "}
              specializing in building exceptional digital experiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-gray-500 mb-8"
            >
              Crafting robust, scalable solutions with expertise in full-stack
              development, modern frameworks, and performance optimization.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 flex items-center gap-2 bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 rounded-lg shadow-lg hover:shadow-indigo-500/30 transition-all text-white font-medium"
                >
                  View My Work <FiArrowRight />
                </motion.button>
              </Link>
              <a
                href="https://github.com/ParbatNilBera"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 transition-all text-white font-medium"
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
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 transition-all text-white font-medium"
                >
                  <FiLinkedin /> LinkedIn
                </motion.button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
              {/* Hero image with animated gradient border */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-600"
              ></motion.div>
              <div className="absolute inset-[3px] rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                {/* Profile image container with proper sizing */}
                <div className="w-full h-full relative">
                  <img
                    src={parbat}
                    alt="Parbat Nil Bera"
                    className="w-full h-full object-cover"
                  />
                  {/* Removed the text "PNB" since we're using the actual image */}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {[
            {
              label: "Front-End",
              value: "React.js, HTML, CSS, Tailwind, Bootstrap",
            },
            { label: "Back-End", value: "Node.js, Express" },
            { label: "Languages", value: "JavaScript, C, C++, Python, Java" },
            { label: "Database", value: " SQL, MongoDB" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.2)",
              }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-indigo-500/50 transition-all"
            >
              <h3 className="text-xl font-semibold text-indigo-400">
                {item.label}
              </h3>
              <p className="text-gray-400">{item.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
