import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiCode,
  FiTerminal,
} from "react-icons/fi";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data, e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await e.target.submit(data);
      setSubmitted(true);
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-28 min-h-screen bg-gray-900 relative">
      {/* Code-themed background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div className="text-xs md:text-sm text-green-500 font-mono leading-relaxed p-4">
          {Array(20)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="mb-1">
                {`const connect = async () => {`}
                <br />
                {`  try {`}
                <br />
                {`    await sendMessage({`}
                <br />
                {`      from: "you@example.com",`}
                <br />
                {`      to: "parbatnilbera743@gmail.com",`}
                <br />
                {`      subject: "Let's collaborate",`}
                <br />
                {`      body: "I'd like to work with you!"`}
                <br />
                {`    });`}
                <br />
                {`    return true;`}
                <br />
                {`  } catch (error) {`}
                <br />
                {`    console.error(error);`}
                <br />
                {`    return false;`}
                <br />
                {`  }`}
                <br />
                {`};`}
              </div>
            ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <FiTerminal className="text-3xl mr-2 text-indigo-500" />
            <h1 className="text-4xl md:text-5xl font-bold font-mono bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Connect( )
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto font-light">
            <span className="text-green-500">// </span>
            Feel free to reach out for collaborations, opportunities, or just a
            friendly chat about web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <div className="h-5 w-5 rounded-full bg-green-500 mr-2"></div>
              <h2 className="text-2xl font-bold text-white font-mono">
                contact.info
              </h2>
            </div>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4 bg-gray-800/40 backdrop-blur-sm p-4 rounded-lg border-l-4 border-indigo-500 hover:bg-gray-800/60 transition-all">
                <div className="bg-indigo-600/20 p-3 rounded-lg">
                  <FiMail className="text-indigo-500 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white font-mono">
                    email:
                  </h3>
                  <p className="text-indigo-400">parbatnilbera743@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gray-800/40 backdrop-blur-sm p-4 rounded-lg border-l-4 border-indigo-500 hover:bg-gray-800/60 transition-all">
                <div className="bg-indigo-600/20 p-3 rounded-lg">
                  <FiPhone className="text-indigo-500 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white font-mono">
                    phone:
                  </h3>
                  <p className="text-indigo-400">(+91) 9163419935</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gray-800/40 backdrop-blur-sm p-4 rounded-lg border-l-4 border-indigo-500 hover:bg-gray-800/60 transition-all">
                <div className="bg-indigo-600/20 p-3 rounded-lg">
                  <FiGithub className="text-indigo-500 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white font-mono">
                    github:
                  </h3>
                  <a
                    href="https://github.com/ParbatNilBera"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    github.com/Parbatnil
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gray-800/40 backdrop-blur-sm p-4 rounded-lg border-l-4 border-indigo-500 hover:bg-gray-800/60 transition-all">
                <div className="bg-indigo-600/20 p-3 rounded-lg">
                  <FiLinkedin className="text-indigo-500 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white font-mono">
                    linkedin:
                  </h3>
                  <a
                    href="https://www.linkedin.com/in/parbatnilbera"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    linkedin.com/in/parbatnilbera
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-3">
                <FiCode className="text-green-500 mr-2" />
                <h3 className="text-xl font-semibold text-white font-mono">
                  collaboration.js
                </h3>
              </div>
              <p className="text-gray-400">
                <span className="text-green-500">// </span>
                I'm currently open to freelance projects, collaboration
                opportunities, and junior developer positions. Feel free to
                reach out if you think we'd be a good fit!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gray-800/20 backdrop-blur-sm border border-gray-700 rounded-xl p-6 md:p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="flex space-x-2 mr-3">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <h2 className="text-2xl font-bold text-white font-mono">
                  sendMessage( )
                </h2>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-600/20 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white font-mono mb-2">
                    // Success!
                  </h3>
                  <p className="text-gray-400">
                    Message sent successfully. I'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  action="https://formspree.io/f/xgvalpok"
                  method="POST"
                  className="relative"
                >
                  <div className="absolute -left-6 top-0 bottom-0 border-l-2 border-dashed border-gray-700"></div>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-green-500 font-mono mb-1"
                      >
                        const name =
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register("name", {
                          required: "Name is required",
                          minLength: {
                            value: 2,
                            message: "Name must be at least 2 characters",
                          },
                        })}
                        className={`w-full px-4 py-3 bg-gray-800/50 border ${
                          errors.name ? "border-red-500" : "border-gray-600"
                        } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-gray-500 font-mono`}
                        placeholder='"John Doe"'
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">
                          {`// Error: ${errors.name.message}`}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-green-500 font-mono mb-1"
                      >
                        const email =
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                        className={`w-full px-4 py-3 bg-gray-800/50 border ${
                          errors.email ? "border-red-500" : "border-gray-600"
                        } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-gray-500 font-mono`}
                        placeholder='"john@example.com"'
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">
                          {`// Error: ${errors.email.message}`}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-green-500 font-mono mb-1"
                      >
                        const subject =
                      </label>
                      <input
                        type="text"
                        id="subject"
                        {...register("subject", {
                          required: "Subject is required",
                          minLength: {
                            value: 3,
                            message: "Subject must be at least 3 characters",
                          },
                        })}
                        className={`w-full px-4 py-3 bg-gray-800/50 border ${
                          errors.subject ? "border-red-500" : "border-gray-600"
                        } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-gray-500 font-mono`}
                        placeholder='"Project Collaboration"'
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-500">
                          {`// Error: ${errors.subject.message}`}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-green-500 font-mono mb-1"
                      >
                        const message =
                      </label>
                      <textarea
                        id="message"
                        rows="4"
                        {...register("message", {
                          required: "Message is required",
                          minLength: {
                            value: 10,
                            message: "Message must be at least 10 characters",
                          },
                        })}
                        className={`w-full px-4 py-3 bg-gray-800/50 border ${
                          errors.message ? "border-red-500" : "border-gray-600"
                        } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-gray-500 font-mono`}
                        placeholder='"Hello, I would like to discuss a project..."'
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500">
                          {`// Error: ${errors.message.message}`}
                        </p>
                      )}
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-indigo-600 rounded-lg shadow-lg hover:shadow-green-500/30 transition-all text-white font-medium flex items-center justify-center hover:from-green-500 hover:to-indigo-500"
                      >
                        {isSubmitting ? (
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                        ) : (
                          <FiSend className="mr-2" />
                        )}
                        {isSubmitting ? "sendMessage()" : "sendMessage()"}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
