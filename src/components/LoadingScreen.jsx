import { motion } from "framer-motion";

const CppLoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <motion.div className="relative">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="text-5xl font-mono font-bold text-blue-500"
          >
            {" "}
            PNB{" "}
          </motion.div>

          {/* C++ brackets */}
          <motion.div
            className="absolute -left-4 top-0 text-5xl font-mono text-blue-300"
            animate={{
              rotateY: [0, 180, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {"<"}
          </motion.div>

          <motion.div
            className="absolute -right-4 top-0 text-5xl font-mono text-blue-300"
            animate={{
              rotateY: [0, 180, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              delay: 0.5,
            }}
          >
            {">"}
          </motion.div>
        </motion.div>

        {/* Code-like progress indicator */}
        <div className="mt-6 bg-gray-800 p-3 rounded-md w-64 font-mono text-sm">
          <div className="flex items-center text-green-400 mb-2">
            <span>$ compiling</span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              _
            </motion.span>
          </div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, repeat: Infinity }}
            className="h-1 bg-gradient-to-r from-blue-500 to-green-400 rounded-full"
          />

          <motion.div
            className="text-xs text-gray-400 mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            #include &lt;iostream&gt;
            <br /> #include &lt;parbatnilbera.me&gt;
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default CppLoadingScreen;
