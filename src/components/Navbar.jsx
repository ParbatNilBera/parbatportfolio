import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiHome,
  FiUser,
  FiCode,
  FiBookOpen,
  FiBriefcase,
  FiMail,
  FiFileText,
} from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Home", path: "/", icon: <FiHome /> },
    { title: "About", path: "/about", icon: <FiUser /> },
    { title: "Projects", path: "/projects", icon: <FiCode /> },
    { title: "Skills", path: "/skills", icon: <FiBriefcase /> },
    { title: "Education", path: "/education", icon: <FiBookOpen /> },
    { title: "Contact", path: "/contact", icon: <FiMail /> },
  ];

  // Resume link with external URL
  const resumeLink = {
    title: "MyResume",
    path: "https://docs.google.com/document/d/1OHZg8BcYJt5RZrnhuiJ-P-ZA_bVZu_-QYi4qmPhd_M0/edit?usp=sharing",
    icon: <FiFileText />,
    external: true,
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/90 backdrop-blur-md py-2 shadow-xl"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent"
            >
              Parbat Nil Bera
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-1 hover:text-indigo-400 transition-colors ${
                  location.pathname === link.path
                    ? "text-indigo-500 font-semibold"
                    : "text-gray-300"
                }`}
              >
                <span>{link.icon}</span>
                <span>{link.title}</span>
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="h-1 w-full bg-indigo-500 absolute bottom-0 left-0 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            {/* Resume Link with different styling */}
            <a
              href={resumeLink.path}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
            >
              <span>{resumeLink.icon}</span>
              <span>{resumeLink.title}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-gray-800 bg-opacity-95 backdrop-blur-md"
      >
        <div className="px-4 py-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`flex items-center space-x-3 py-3 ${
                location.pathname === link.path
                  ? "text-indigo-500 font-semibold"
                  : "text-gray-300"
              }`}
            >
              <span>{link.icon}</span>
              <span>{link.title}</span>
            </Link>
          ))}

          {/* Resume Link in mobile menu */}
          <a
            href={resumeLink.path}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center space-x-3 py-3 text-emerald-400 font-semibold"
          >
            <span>{resumeLink.icon}</span>
            <span>{resumeLink.title}</span>
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
