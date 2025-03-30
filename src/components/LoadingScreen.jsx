import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="text-5xl font-bold text-indigo-500"
        >
          PNB
        </motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 200 }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mt-4 rounded-full"
        />
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
