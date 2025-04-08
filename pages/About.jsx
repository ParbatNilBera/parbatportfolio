import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FiCode,
  FiLayout,
  FiServer,
  FiDatabase,
  FiTool,
  FiGitBranch,
  FiTerminal,
  FiCpu,
  FiMonitor,
} from "react-icons/fi";

const About = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const [terminalVisible, setTerminalVisible] = useState(false);
  const fullText =
    "const developer = { name: 'Parbat Nil Bera', role: 'Full-Stack Developer' };";

  useEffect(() => {
    const trackCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", trackCursor);
    return () => window.removeEventListener("mousemove", trackCursor);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setTerminalVisible(true);
    }, 500);

    let i = 0;
    const typeText = () => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
        setTimeout(typeText, Math.random() * 50 + 30);
      }
    };

    if (terminalVisible) {
      setTimeout(typeText, 800);
    }
  }, [terminalVisible]);

  // Card hover effect
  const cardVariants = {
    hover: {
      y: -10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <div className="relative py-16 min-h-screen bg-gray-900 overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-gray-300"></div>
          ))}
        </div>
        <div className="grid grid-rows-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-b border-gray-300"></div>
          ))}
        </div>
      </div>

      {/* Animated background nodes */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-indigo-500 opacity-30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.4 + 0.1,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              transition: {
                duration: Math.random() * 30 + 20,
                repeat: Infinity,
                repeatType: "mirror",
              },
            }}
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
            }}
          />
        ))}
      </div>

      {/* Cursor follower */}
      <motion.div
        className="fixed w-64 h-64 rounded-full bg-indigo-500 opacity-5 pointer-events-none z-0"
        animate={{
          x: cursorPosition.x - 32,
          y: cursorPosition.y - 32,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Terminal effect at the top */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: terminalVisible ? "auto" : 0,
            opacity: terminalVisible ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl mb-16 overflow-hidden"
        >
          <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
            <div className="flex items-center px-4 py-2 bg-gray-900 border-b border-gray-700">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-4 text-gray-400 text-sm">~/about-me</div>
            </div>
            <div className="p-4 font-mono text-sm text-green-400">
              <div className="flex">
                <span className="text-purple-400">$</span>
                <span className="ml-2">{typedText}</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="ml-1 w-2 h-4 bg-green-400 inline-block"
                ></motion.span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-20"
        >
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 relative z-10">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-600">
                &lt;About Me/&gt;
              </span>
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-600"
            ></motion.div>
          </div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            I'm a Software Developer specializing in MERN stack development with
            a passion for creating innovative digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-24">
          {/* Left column - About me */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-indigo-500/30 transition-all"
          >
            <div className="flex items-center space-x-2 mb-6">
              <FiTerminal className="text-indigo-400" size={24} />
              <h2 className="text-3xl font-bold text-white">Who I Am</h2>
            </div>

            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-purple-600"></div>
              <div className="pl-6 space-y-4">
                <p className="text-gray-300">
                  I'm{" "}
                  <span className="text-indigo-400 font-semibold">
                    Parbat Nil Bera
                  </span>
                  , a full-stack developer with expertise in the MERN stack
                  (MongoDB, Express, React, Node.js). I'm currently pursuing a
                  Master's in Computer Applications at Techno Main Salt Lake,
                  focusing on advanced software development principles.
                </p>
                <p className="text-gray-300">
                  I specialize in building end-to-end web applications,
                  combining frontend expertise with backend capabilities to
                  deliver complete solutions. My technical foundation includes
                  React.js, Node.js, along with core programming languages like
                  JavaScript, C++, and Python.
                </p>
                <p className="text-gray-300">
                  My goal is to grow as a Software Development Engineer,
                  continuously learning new technologies and architectural
                  patterns to build scalable, maintainable applications that
                  solve real-world challenges.
                </p>
              </div>
            </div>

            {/* Code snippet */}
            <div className="mt-8 font-mono text-sm">
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                <div className="text-gray-400">// My current status</div>
                <div className="text-indigo-400">
                  const <span className="text-cyan-400">currentFocus</span> ={" "}
                  {`{`}
                </div>
                <div className="pl-4 text-green-400">
                  studying: <span className="text-amber-400">'MCA'</span>,
                </div>
                <div className="pl-4 text-green-400">
                  working:{" "}
                  <span className="text-amber-400">
                    'on real-world projects'
                  </span>
                  ,
                </div>
                <div className="pl-4 text-green-400">
                  learning:{" "}
                  <span className="text-amber-400">
                    'advanced software patterns'
                  </span>
                </div>
                <div className="text-indigo-400">{`}`};</div>
              </div>
            </div>
          </motion.div>

          {/* Right column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {[
              {
                icon: <FiCode size={28} />,
                title: "Web Development",
                description:
                  "Building responsive, full-stack web applications with modern MERN stack.",
                color: "from-blue-500 to-indigo-600",
              },
              {
                icon: <FiServer size={28} />,
                title: "Backend Development",
                description: "Creating robust APIs with Node.js and Express.",
                color: "from-purple-500 to-pink-600",
              },
              {
                icon: <FiLayout size={28} />,
                title: "Frontend Engineering",
                description:
                  "Crafting engaging user interfaces with React.js and modern CSS.",
                color: "from-cyan-500 to-blue-600",
              },
              {
                icon: <FiDatabase size={28} />,
                title: "Database Design",
                description:
                  "Working with SQL and NoSQL databases for efficient data management.",
                color: "from-green-500 to-emerald-600",
              },
              {
                icon: <FiGitBranch size={28} />,
                title: "Version Control",
                description:
                  "Managing code with Git for collaborative development.",
                color: "from-orange-500 to-red-600",
              },
              {
                icon: <FiTool size={28} />,
                title: "Problem Solving",
                description:
                  "Engineering elegant solutions to complex technical challenges.",
                color: "from-yellow-500 to-amber-600",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:shadow-lg transition-all relative overflow-hidden group"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-sm"
                  style={{
                    background: `linear-gradient(to bottom right, ${item.color
                      .split(" ")[0]
                      .replace("from-", "")}, ${item.color
                      .split(" ")[1]
                      .replace("to-", "")})`,
                  }}
                ></div>
                <div className="relative z-10">
                  <div
                    className={`mb-4 text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
                <div
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{
                    background: `linear-gradient(to right, ${item.color
                      .split(" ")[0]
                      .replace("from-", "")}, ${item.color
                      .split(" ")[1]
                      .replace("to-", "")})`,
                  }}
                ></div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Journey section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white inline-block relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
                &lt;My Journey/&gt;
              </span>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600"
              ></motion.div>
            </h2>
            <p className="text-gray-400 mt-2">
              Tracing my path through education and professional development
            </p>
          </div>

          {/* Vertical timeline */}
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-600 to-cyan-500 md:transform md:-translate-x-1/2"></div>

            {[
              {
                year: "2023-Present",
                title: "Master of Computer Applications",
                description:
                  "Pursuing MCA at Techno Main Salt Lake, focusing on advanced computing concepts and practical application development.",
                details:
                  "Specializing in software engineering practices, database management, and full-stack development.",
                highlight: "Computer Application",
                icon: <FiCpu />,
              },
              {
                year: "2024",
                title: "Internship at Celebal Technologies",
                description:
                  "Gained hands-on experience in real-world projects, team collaboration, and software development methodologies.",
                details:
                  "Worked on developing web applications using React.js, contributed to backend services, and practiced agile development.",
                highlight: "ReactJS",
                icon: <FiMonitor />,
              },
              {
                year: "2020-2023",
                title: "Bachelor of Computer Applications",
                description:
                  "Completed BCA at Calcutta Institute of Engineering and Management with a strong foundation in computer science fundamentals.",
                details:
                  "Studied data structures, algorithms, OOP concepts, and built various programming projects.",
                highlight: "Computer Application",
                icon: <FiCode />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative mb-16 md:mb-24 ${
                  index % 2 === 0 ? "md:ml-auto md:mr-0" : "md:mr-auto md:ml-0"
                } md:w-5/12`}
              >
                {/* Timeline node */}
                <div
                  className={`absolute left-0 top-0 md:left-auto ${
                    index % 2 === 0 ? "md:-left-12" : "md:-right-12"
                  } flex items-center justify-center z-10`}
                >
                  <div className="w-20 h-20 rounded-full bg-gray-800 border-4 border-indigo-500 flex items-center justify-center text-indigo-500 shadow-lg shadow-indigo-500/30">
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`ml-16 md:ml-0 pl-8 md:pl-0 relative bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-500/5`}
                >
                  <div className="absolute top-0 bottom-0 right-full w-8 md:hidden">
                    <div className="absolute top-0 bottom-0 right-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-600"></div>
                    <div className="absolute top-10 right-0 w-8 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
                  </div>

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
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white inline-block relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-indigo-600">
                &lt;Technical Skills/&gt;
              </span>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-indigo-600"
              ></motion.div>
            </h2>
            <p className="text-gray-400 mt-2">
              As a Software Development Engineer, I've developed expertise
              across multiple technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Development Stack",
                color: "from-indigo-500 to-blue-600",
                skills: [
                  "MERN (MongoDB, Express, React, Node.js)",
                  "HTML5, CSS3, JavaScript",
                  "Tailwind CSS, Bootstrap",
                  "RESTful API Design",
                ],
              },
              {
                title: "Programming Languages",
                color: "from-purple-500 to-pink-600",
                skills: [
                  "JavaScript (ES6+)",
                  "C/C++",
                  "Python (Basics)",
                  "Java (Basics)",
                ],
              },
              {
                title: "Tools & Concepts",
                color: "from-cyan-500 to-blue-600",
                skills: [
                  "Git & GitHub",
                  "SQL & DBMS",
                  "OOP Principles",
                  "Microsoft Office Suite",
                ],
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-indigo-500/30 transition-all relative overflow-hidden group"
              >
                <div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r opacity-70"
                  style={{
                    background: `linear-gradient(to right, ${category.color
                      .split(" ")[0]
                      .replace("from-", "")}, ${category.color
                      .split(" ")[1]
                      .replace("to-", "")})`,
                  }}
                ></div>

                <h3
                  className={`text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}
                >
                  {category.title}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * i }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <div
                        className="w-2 h-8 rounded-full bg-gradient-to-b mr-4"
                        style={{
                          background: `linear-gradient(to bottom, ${category.color
                            .split(" ")[0]
                            .replace("from-", "")}, ${category.color
                            .split(" ")[1]
                            .replace("to-", "")})`,
                        }}
                      ></div>
                      <div className="font-mono text-gray-300">{skill}</div>
                    </motion.div>
                  ))}
                </div>

                <div
                  className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-gradient-to-r opacity-5 -mr-16 -mb-16 blur-xl"
                  style={{
                    background: `linear-gradient(to right, ${category.color
                      .split(" ")[0]
                      .replace("from-", "")}, ${category.color
                      .split(" ")[1]
                      .replace("to-", "")})`,
                  }}
                ></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16 pb-8"
        >
          <div className="inline-block border-t border-gray-700 pt-4 px-8">
            <p className="text-gray-400 text-sm font-mono">
              <span className="text-indigo-400">const</span>{" "}
              <span className="text-cyan-400">connect</span> ={" "}
              <span className="text-purple-400">() =&gt;</span>{" "}
              <span className="text-white">{`{`}</span>{" "}
              <span className="text-green-400">
                console.log("Let's build something amazing together!")
              </span>{" "}
              <span className="text-white">{`}`}</span>;
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
