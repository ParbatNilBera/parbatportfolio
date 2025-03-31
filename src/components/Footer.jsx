import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent"
            >
              Parbat Nil Bera
            </motion.div>
            <p className="text-gray-400 mt-1">Software Developer </p>
          </div>

          <div className="flex space-x-6">
            <motion.a
              whileHover={{ y: -5, color: "#6366f1" }}
              href="https://github.com/ParbatNilBera"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FiGithub size={24} />
            </motion.a>
            <motion.a
              whileHover={{ y: -5, color: "#6366f1" }}
              href="https://www.linkedin.com/in/parbatnilbera"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FiLinkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ y: -5, color: "#6366f1" }}
              href="mailto:parbatnilbera743@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FiMail size={24} />
            </motion.a>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Parbat Nil Bera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
