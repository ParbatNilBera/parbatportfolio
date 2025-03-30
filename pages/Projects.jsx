import { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import minor from "/public/images/minor.png";
import major from "/public/images/major.png";
import ecommerce from "/public/images/Ecommerce.png";

const Projects = () => {
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

  return (
    <div className="py-28 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent mb-4">
            My Projects
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Here's a collection of my work showcasing my skills and growth as a
            developer. Each project represents challenges overcome and
            techniques mastered.
          </p>
        </motion.div>

        {/* Unified Projects Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => {
            const isMiniProject = project.category.includes("mini");
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                key={project.id}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-indigo-500/50 transition-all group h-full"
              >
                {/* Category Label */}
                <div className="px-4 py-2 bg-indigo-700/60 text-white text-sm font-medium">
                  {getCategoryLabel(project)}
                  {project.status && (
                    <span className="ml-2 bg-indigo-500 px-2 py-0.5 rounded-full text-xs">
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
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {project.description}
                  </p>

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
