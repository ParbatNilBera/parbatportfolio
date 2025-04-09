import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiCode,
  FiTerminal,
} from "react-icons/fi";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const iconAnimation = {
    hover: { y: -5, scale: 1.2, transition: { duration: 0.3 } },
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-10 relative overflow-hidden">
      {/* Decorative code elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-2 left-4 text-green-400">
          &lt;footer&gt;
        </div>
        <div className="absolute bottom-2 left-4 text-green-400">
          &lt;/footer&gt;
        </div>
        <div className="absolute top-10 right-10 text-blue-400">
          const developer = true;
        </div>
        <div className="absolute bottom-10 right-20 text-purple-400">
          function buildAmazing() {}
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold"
            >
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Parbat Nil Bera
              </span>
            </motion.div>
            <div className="flex items-center text-gray-400 mt-2">
              <FiCode className="mr-2" />
              <p>Software Developer</p>
              <span className="ml-2 h-4 w-1 bg-indigo-500 animate-pulse"></span>
            </div>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <motion.a
              whileHover={iconAnimation.hover}
              href="https://github.com/ParbatNilBera"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={24} />
            </motion.a>
            <motion.a
              whileHover={iconAnimation.hover}
              href="https://www.linkedin.com/in/parbatnilbera"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={iconAnimation.hover}
              href="mailto:parbatnilbera743@gmail.com"
              className="text-gray-400 hover:text-pink-400 transition-colors"
              aria-label="Email"
            >
              <FiMail size={24} />
            </motion.a>
            <motion.div
              whileHover={iconAnimation.hover}
              className="text-gray-400 cursor-pointer"
            >
              <FiTerminal size={24} />
            </motion.div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear}{" "}
            <span className="text-indigo-400">Parbat Nil Bera</span>. All rights
            reserved.
          </p>

          <div className="text-gray-600 text-sm flex items-center">
            <span className="text-green-400 mr-2">&lt;/&gt;</span>
            Made with
            <span className="text-red-500 mx-1">♥</span>
            and code
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
