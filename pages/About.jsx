import { motion } from "framer-motion";
import {
  FiCode,
  FiLayout,
  FiServer,
  FiDatabase,
  FiTool,
  FiGitBranch,
} from "react-icons/fi";

const About = () => {
  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="py-28 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
            About Me
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            I'm a Software Developer specializing in MERN stack development with
            a passion for creating innovative digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Who I Am</h2>
            <p className="text-gray-300 mb-4">
              I'm Parbat Nil Bera, a full-stack developer with expertise in the
              MERN stack (MongoDB, Express, React, Node.js). I'm currently
              pursuing a Master's in Computer Applications at Techno Main Salt
              Lake, focusing on advanced software development principles.
            </p>
            <p className="text-gray-300 mb-4">
              I specialize in building end-to-end web applications, combining
              frontend expertise with backend capabilities to deliver complete
              solutions. My technical foundation includes React.js, Node.js,
              along with core programming languages like JavaScript, C++, and
              Python.
            </p>
            <p className="text-gray-300">
              My goal is to grow as a Software Development Engineer,
              continuously learning new technologies and architectural patterns
              to build scalable, maintainable applications that solve real-world
              challenges.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              {
                icon: <FiCode className="text-indigo-500" size={28} />,
                title: "Web Development",
                description:
                  "Building responsive, full-stack web applications with modern MERN stack.",
              },
              {
                icon: <FiServer className="text-purple-500" size={28} />,
                title: "Backend Development",
                description: "Creating robust APIs with Node.js and Express.",
              },
              {
                icon: <FiLayout className="text-indigo-400" size={28} />,
                title: "Frontend Engineering",
                description:
                  "Crafting engaging user interfaces with React.js and modern CSS.",
              },
              {
                icon: <FiDatabase className="text-purple-400" size={28} />,
                title: "Database Design",
                description:
                  "Working with SQL and NoSQL databases for efficient data management.",
              },
              {
                icon: <FiGitBranch className="text-indigo-500" size={28} />,
                title: "Version Control",
                description:
                  "Managing code with Git for collaborative development.",
              },
              {
                icon: <FiTool className="text-purple-500" size={28} />,
                title: "Problem Solving",
                description:
                  "Engineering elegant solutions to complex technical challenges.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-500/10"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold mb-12 text-white text-center">
            My Journey
          </h2>

          {/* New timeline design - horizontal cards */}
          <div className="space-y-12">
            {[
              {
                year: "2023-Present",
                title: "Master of Computer Applications",
                description:
                  "Pursuing MCA at Techno Main Salt Lake, focusing on advanced computing concepts and practical application development.",
                details:
                  "Specializing in software engineering practices, database management, and full-stack development.",
                highlight: "Computer Application",
              },
              {
                year: "2024",
                title: "Internship at Celebal Technologies",
                description:
                  "Gained hands-on experience in real-world projects, team collaboration, and software development methodologies.",
                details:
                  "Worked on developing web applications using React.js, contributed to backend services, and practiced agile development.",
                highlight: "ReactJS",
              },
              {
                year: "2020-2023",
                title: "Bachelor of Computer Applications",
                description:
                  "Completed BCA at Calcutta Institute of Engineering and Management with a strong foundation in computer science fundamentals.",
                details:
                  "Studied data structures, algorithms, OOP concepts, and built various programming projects.",
                highlight: "Computer Application",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                  {/* Timeline marker */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/30">
                      {item.year.split("-")[0]}
                    </div>
                    {index < 2 && (
                      <div className="w-1 h-20 bg-gradient-to-b from-indigo-500 to-purple-600 my-2 opacity-70"></div>
                    )}
                  </div>

                  {/* Content card */}
                  <div className="flex-grow">
                    <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-500/5">
                      <div className="flex flex-wrap justify-between mb-4 items-center">
                        <span className="inline-block px-4 py-1.5 bg-indigo-900/50 text-indigo-300 rounded-full text-sm font-medium">
                          {item.year}
                        </span>
                        <span className="inline-block px-4 py-1.5 bg-purple-900/50 text-purple-300 rounded-full text-sm font-medium mt-2 md:mt-0">
                          {item.highlight}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 mb-3">{item.description}</p>
                      <p className="text-gray-400 text-sm">{item.details}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl font-bold mb-6 text-white">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-12">
            As a Software Development Engineer, I've developed expertise across
            multiple technologies
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-indigo-500/30 transition-all">
              <h3 className="text-xl font-semibold text-indigo-400 mb-4">
                Development Stack
              </h3>
              <ul className="space-y-2 text-left">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></span>
                  MERN (MongoDB, Express, React, Node.js)
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></span>
                  HTML5, CSS3, JavaScript
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></span>
                  Tailwind CSS, Bootstrap
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></span>
                  RESTful API Design
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-500/30 transition-all">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">
                Programming Languages
              </h3>
              <ul className="space-y-2 text-left">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                  JavaScript (ES6+)
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                  C/C++
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                  Python (Basics)
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                  Java (Basics)
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/30 transition-all">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                Tools & Concepts
              </h3>
              <ul className="space-y-2 text-left">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-cyan-500 rounded-full mr-2"></span>
                  Git & GitHub
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-cyan-500 rounded-full mr-2"></span>
                  SQL & DBMS
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-cyan-500 rounded-full mr-2"></span>
                  OOP Principles
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-cyan-500 rounded-full mr-2"></span>
                  Microsoft Office Suite
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
