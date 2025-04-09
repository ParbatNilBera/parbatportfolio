import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiCode, FiFilter } from "react-icons/fi";
import minor from "/images/minor.png";
import major from "/images/major.png";
import ecommerce from "/images/Ecommerce.png";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [typingText, setTypingText] = useState("");
  const codeSnippet =
    "const developer = { passion: true, skills: ['React', 'Node', 'MongoDB'] };";
  const typingSpeed = 50;

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < codeSnippet.length) {
        setTypingText(codeSnippet.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  const projects = [
    // College Projects - Minor
    {
      id: 1,
      title: "E-College Management System",
      description:
        "A comprehensive platform with dedicated sections for students, teachers, and administrators. Teachers can share class links while students access them through personalized profiles. Administrators have full system access for seamless educational management.",
      image: minor,
      category: ["college", "minor", "mern"],
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
      liveLink: "https://ecollege.vercel.app",
      sourceLink: "https://github.com/ParbatNilBera/E-college-main",
      codePreview:
        "app.get('/api/classes', authMiddleware, async (req, res) => {\n  try {\n    const classes = await Class.find();\n    res.json(classes);\n  } catch (err) {\n    res.status(500).send('Server Error');\n  }\n});",
    },
    // College Projects - Major (Under Development)
    {
      id: 2,
      title: "Advanced E-College System",
      description:
        "An upgraded version with integrated live class functionality without third-party dependencies. Features include attendance tracking, smart authentication for live sessions, and restricted access controls. Students can access college courses and attend live classes through a secure platform.",
      image: major,
      category: ["college", "major", "mern", "ongoing"],
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "MERN Stack"],
      liveLink: "https://e-college-nu.vercel.app/",
      sourceLink: "https://github.com/ParbatNilBera/MajorProject",
      status: "In Development",
      codePreview:
        "const [session, setSession] = useState(null);\n\nuseEffect(() => {\n  socket.on('live-session', (data) => {\n    setSession(data);\n    startAttendanceTracking();\n  });\n}, []);",
    },
    // Frontend - Major
    {
      id: 3,
      title: "E-Commerce Website",
      description:
        "A comprehensive online shopping platform featuring product listings, shopping cart functionality, and advanced filtering options. Built with a responsive design to provide seamless navigation and enhanced user experience across all devices.",
      image: ecommerce,
      category: ["frontend", "major", "react"],
      tags: ["React.js", "Tailwind CSS"],
      liveLink: "https://parbatnilberaecommerce.netlify.app",
      sourceLink: "https://github.com/ParbatNilBera/e-commerce",
      codePreview:
        "const addToCart = (product, quantity = 1) => {\n  dispatch({\n    type: 'ADD_TO_CART',\n    payload: { ...product, quantity }\n  });\n};",
    },
    // Frontend - Mini Projects
    {
      id: 4,
      title: "Firebase Contact App",
      description:
        "A streamlined contact management application that allows users to create, store, and manage contacts with Firebase backend integration. Features real-time data synchronization and responsive design.",
      image: "/api/placeholder/600/400",
      category: ["frontend", "mini", "react", "firebase"],
      tags: ["React.js", "Firebase", "Tailwind CSS"],
      liveLink: "https://parbatnil-contact-app.netlify.app",
      sourceLink: "https://github.com/ParbatNilBera/firebase-Contact-app",
      codePreview:
        "useEffect(() => {\n  const contactsRef = collection(db, 'contacts');\n  const q = query(contactsRef, where('userId', '==', user.uid));\n  \n  onSnapshot(q, (snapshot) => {\n    const contactsArray = [];\n    snapshot.forEach((doc) => {\n      contactsArray.push({ id: doc.id, ...doc.data() });\n    });\n    setContacts(contactsArray);\n  });\n}, [user]);",
    },
    {
      id: 5,
      title: "Dice Game Application",
      description:
        "An interactive dice game where players guess outcomes to earn points. Features include random dice generation, score tracking, and penalties for incorrect guesses, all wrapped in an engaging user interface.",
      image: "/api/placeholder/600/400",
      category: ["frontend", "mini", "react"],
      tags: ["React.js", "Tailwind CSS", "Game Development"],
      liveLink: "https://parbatnil-dicegame.netlify.app",
      sourceLink: "https://github.com/ParbatNilBera/Dice-Game",
      codePreview:
        "const rollDice = () => {\n  const randomNumber = Math.floor(Math.random() * 6) + 1;\n  setDiceNumber(randomNumber);\n  \n  if (selectedNumber === randomNumber) {\n    setScore(prev => prev + randomNumber);\n  } else {\n    setScore(prev => prev - 2);\n  }\n};",
    },
    {
      id: 6,
      title: "Todo Application",
      description:
        "A feature-rich task management application with complete CRUD functionality. Users can create, read, update, and delete tasks with an intuitive interface, task prioritization, and filtering options.",
      image: "/api/placeholder/600/400",
      category: ["frontend", "mini", "react"],
      tags: ["React.js", "Tailwind CSS", "CRUD Operations"],
      liveLink: "https://parbatnilbera-todolist.netlify.app",
      sourceLink: "https://github.com/ParbatNilBera/todo-app",
      codePreview:
        "const addTodo = (text) => {\n  const newTodo = {\n    id: Date.now(),\n    text,\n    completed: false,\n    priority: 'medium'\n  };\n  setTodos([...todos, newTodo]);\n};",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { y: -5, transition: { duration: 0.3 } },
  };

  // Function to get category label for each project
  const getCategoryLabel = (project) => {
    if (
      project.category.includes("college") &&
      project.category.includes("major")
    ) {
      return "College Major Project";
    } else if (
      project.category.includes("college") &&
      project.category.includes("minor")
    ) {
      return "College Minor Project";
    } else if (
      project.category.includes("frontend") &&
      project.category.includes("major")
    ) {
      return "Frontend Major Project";
    } else if (
      project.category.includes("frontend") &&
      project.category.includes("mini")
    ) {
      return "Frontend Mini Project";
    } else if (project.category.includes("mern")) {
      return "MERN Stack Project";
    } else {
      return "Project";
    }
  };

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) =>
          project.category.includes(selectedCategory)
        );

  // Categories for filter
  const categories = [
    { value: "all", label: "All Projects" },
    { value: "college", label: "College Projects" },
    { value: "frontend", label: "Frontend Projects" },
    { value: "mern", label: "MERN Stack" },
    { value: "react", label: "React.js" },
  ];

  return (
    <div className="py-28 min-h-screen bg-gray-900">
      {/* Terminal-like header */}
      <div className="container mx-auto px-4 md:px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl relative"
        >
          <div className="bg-gray-800 rounded-t-lg p-2 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="mx-auto text-gray-400 text-sm font-mono">
              projects.jsx
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-b-lg p-6 font-mono text-sm">
            <span className="text-green-400">const</span>{" "}
            <span className="text-blue-400">developer</span> =
            <span className="text-yellow-300"> {"{"}</span>
            <br />
            <span className="pl-4">
              name: <span className="text-green-300">"Parbat Nil Bera"</span>,
            </span>
            <br />
            <span className="pl-4">
              role:{" "}
              <span className="text-green-300">"Full Stack Developer"</span>,
            </span>
            <br />
            <span className="pl-4">
              passion: <span className="text-purple-400">true</span>,
            </span>
            <br />
            <span className="pl-4">
              projects: <span className="text-yellow-300">{"["}</span>
            </span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="ml-2 text-white"
            >
              {/* This will be replaced by the actual projects listing */}
              <span className="text-green-300">"E-College"</span>,{" "}
              <span className="text-green-300">"E-Commerce"</span>,{" "}
              <span className="text-green-300">"Todo App"</span>, ...
            </motion.span>
            <span className="text-yellow-300">{"]"}</span>
            <br />
            <span className="text-yellow-300">{"}"}</span>;
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="mt-4 font-mono text-sm"
            >
              <div>
                <span className="text-green-400">function</span>{" "}
                <span className="text-blue-400">viewProjects</span>
                <span className="text-yellow-300">() &#123;</span>
              </div>
              <div className="pl-4">
                <span className="text-purple-400">return</span>{" "}
                <span className="text-orange-400">projects</span>
                <span className="text-white">.map(</span>
                <span className="text-green-300">project</span>{" "}
                <span className="text-white">=&#62;</span>{" "}
                <span className="text-green-300">project</span>
                <span className="text-white">.showcase()</span>
                <span className="text-white">);</span>
              </div>
              <div>
                <span className="text-yellow-300">&#125;</span>
              </div>
            </motion.div>
            <div className="flex items-center mt-6">
              <span className="text-green-400">$</span>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ duration: 2 }}
                className="ml-2 overflow-hidden whitespace-nowrap"
              >
                {typingText}
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="ml-1 w-2 h-5 bg-green-400"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="text-blue-400">&lt;</span>
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              My Projects
            </span>
            <span className="text-blue-400">/&gt;</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Here's a collection of my work showcasing my skills and growth as a
            developer. Each project represents challenges overcome and
            techniques mastered.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2 transition-all
              ${
                selectedCategory === category.value
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              <FiFilter size={14} />
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => {
            const isMiniProject = project.category.includes("mini");
            return (
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                key={project.id}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-indigo-500/50 transition-all group h-full"
              >
                {/* Category Label with Line Numbers */}
                <div className="px-4 py-2 bg-gray-800 text-white text-sm font-mono flex justify-between items-center border-b border-gray-700">
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-3">{project.id}</span>
                    <span className="text-green-400">
                      {getCategoryLabel(project)}
                    </span>
                  </div>
                  {project.status && (
                    <span className="bg-indigo-600 px-2 py-0.5 rounded-full text-xs">
                      {project.status}
                    </span>
                  )}
                </div>

                {!isMiniProject && (
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                  </div>
                )}

                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2 font-mono flex items-center">
                    <span className="text-yellow-400 mr-2">{"{}"}</span>
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {project.description}
                  </p>

                  {/* Code Preview Section */}
                  <div className="mb-4 bg-gray-900 rounded-md p-3 border border-gray-700 font-mono text-xs overflow-x-auto">
                    <div className="flex items-center mb-2 text-gray-500">
                      <FiCode className="mr-2" />
                      <span>Code Preview</span>
                    </div>
                    <pre className="text-green-300 whitespace-pre-wrap break-words">
                      {project.codePreview}
                    </pre>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-indigo-900/40 text-indigo-300 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-2 mt-auto">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors text-white text-xs font-medium"
                    >
                      <FiExternalLink size={14} /> Live Demo
                    </a>
                    <a
                      href={project.sourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors text-white text-xs font-medium"
                    >
                      <FiGithub size={14} /> Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
