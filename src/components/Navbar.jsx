import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiHome,
  FiUser,
  FiCode,
  FiBriefcase,
  FiBookOpen,
  FiMail,
  FiFileText,
  FiTerminal,
  FiGithub,
} from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { title: "Home", path: "/", icon: <FiHome /> },
    { title: "About", path: "/about", icon: <FiUser /> },
    { title: "Projects", path: "/projects", icon: <FiCode /> },
    { title: "Skills", path: "/skills", icon: <FiBriefcase /> },
    { title: "Education", path: "/education", icon: <FiBookOpen /> },
    { title: "Contact", path: "/contact", icon: <FiMail /> },
  ];

  // Resume link with external URL
  const externalLinks = [
    {
      title: "Resume",
      path: "https://docs.google.com/document/d/1FjsUDnWFRy4FA3Le5F-p-ZcMKLO-JKzz5xmS1_3u4rg/edit?usp=sharing",
      icon: <FiFileText />,
    },
    {
      title: "GitHub",
      path: "https://github.com/ParbatNilBera",
      icon: <FiGithub />,
    },
  ];

  const isActiveLink = (path) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-md py-2 shadow-xl border-b border-indigo-500/30"
          : "bg-gray-900/70 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="flex items-center space-x-2">
              <FiTerminal className="text-indigo-400 text-xl" />
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-xl font-mono font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent"
              >
                Parbat Nil Bera
              </motion.div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative flex items-center space-x-1 px-3 py-2 rounded-md transition-all ${
                  isActiveLink(link.path)
                    ? "text-white font-medium bg-indigo-500/20 font-mono"
                    : "text-gray-300 hover:text-white hover:bg-gray-800/70"
                }`}
              >
                <span className="text-indigo-400">{link.icon}</span>
                <span className="font-mono">{link.title}</span>
                {isActiveLink(link.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="h-0.5 w-full bg-indigo-500 absolute -bottom-1 left-0 rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            <div className="h-6 w-px bg-gray-700 mx-1"></div>

            {/* External Links */}
            {externalLinks.map((link) => (
              <a
                key={link.title}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 px-3 py-2 rounded-md font-mono text-emerald-400 hover:text-emerald-300 hover:bg-emerald-900/20 transition-all"
              >
                <span>{link.icon}</span>
                <span className="font-bold">{link.title}</span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors focus:outline-none bg-gray-800/70 p-2 rounded-md"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-gray-900 bg-opacity-95 backdrop-blur-md border-t border-gray-800"
      >
        <div className="px-4 py-2 flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center space-x-3 py-3 px-2 rounded-md my-1 font-mono ${
                isActiveLink(link.path)
                  ? "bg-indigo-500/20 text-white font-medium border-l-2 border-indigo-500 pl-3"
                  : "text-gray-300 hover:bg-gray-800/70"
              }`}
            >
              <span className="text-indigo-400">{link.icon}</span>
              <span>{link.title}</span>
            </Link>
          ))}

          <div className="border-t border-gray-800 my-2"></div>

          {/* External Links in mobile menu */}
          {externalLinks.map((link) => (
            <a
              key={link.title}
              href={link.path}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 py-3 px-2 rounded-md my-1 font-mono text-emerald-400 hover:bg-emerald-900/20"
            >
              <span>{link.icon}</span>
              <span className="font-bold">{link.title}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
