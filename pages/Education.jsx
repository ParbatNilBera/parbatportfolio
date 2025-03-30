import { motion } from "framer-motion";
import { FiBook, FiAward, FiCalendar, FiMapPin } from "react-icons/fi";

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Techno Main SaltLake",
      period: "2023-2025",
      location: "Kolkata, West Bengal",
      gpa: "7.69 CGPA",
      description:
        "Currently pursuing advanced studies in computer applications, focusing on modern development technologies and software engineering principles.",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Calcutta Institute of Engineering and Management",
      period: "2020-2023",
      location: "Kolkata, West Bengal",
      gpa: "8.79 CGPA",
      description:
        "Completed undergraduate degree with focus on programming fundamentals, data structures, algorithms, and web development technologies.",
    },
    {
      degree: "Higher Secondary (Class XII)",
      institution: "Gandhi Colony Madhamik Vidyalaya",
      period: "2020",
      location: "West Bengal",
      gpa: "",
      description:
        "Completed higher secondary education under the West Bengal Council of Higher Secondary Education (WBCHSE).",
    },
    {
      degree: "Secondary (Class X)",
      institution: "Gandhi Colony Madhamik Vidyalaya",
      period: "2018",
      location: "West Bengal",
      gpa: "",
      description:
        "Completed secondary education under the West Bengal Board of Secondary Education (WBBSE).",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
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
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent mb-4">
            Education
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            My academic journey that has shaped my knowledge and skills in the
            field of computer science.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-600"></div>

            <div className="space-y-12">
              {educationData.map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  className="relative md:flex items-center"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-indigo-600 border-4 border-gray-900 z-10"></div>

                  {/* Content card - alternating left and right for larger screens */}
                  <div
                    className={`md:w-1/2 ml-8 md:ml-0 ${
                      index % 2 === 0
                        ? "md:pr-12 md:text-right"
                        : "md:pl-12 md:ml-auto"
                    } relative`}
                  >
                    {/* Small screen timeline dot */}
                    <div className="absolute left-[-30px] top-0 md:hidden w-4 h-4 rounded-full bg-indigo-600 border-4 border-gray-900"></div>

                    <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-indigo-500/50 transition-all hover:shadow-lg">
                      <span className="inline-block px-3 py-1 bg-indigo-900/50 text-indigo-300 rounded-full text-sm font-medium mb-3">
                        {item.period}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {item.degree}
                      </h3>
                      <div className="flex items-center gap-1 text-gray-400 mb-3">
                        <FiBook className="text-indigo-400" />
                        <span>{item.institution}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400 mb-3">
                        <FiMapPin className="text-indigo-400" />
                        <span>{item.location}</span>
                      </div>
                      {item.gpa && (
                        <div className="flex items-center gap-1 text-gray-300 mb-3">
                          <FiAward className="text-indigo-400" />
                          <span>{item.gpa}</span>
                        </div>
                      )}
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-20 text-center bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Continuous Learning
            </h2>
            <p className="text-gray-300">
              Beyond formal education, I'm committed to continuous learning
              through online courses, tutorials, and hands-on project work to
              stay updated with the latest technologies and best practices in
              web development.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Education;
