import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";

export default function ContactSection() {
  return (
    <>
    <Navbar/>
    <section className="bg-gray-100 dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white py-20 px-6 md:px-16 transition-colors duration-500">
      <div className="pt-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold mb-4">
            Get in <span className="text-pink-500 dark:text-pink-400">Touch</span>
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Have a project in mind or just want to say hello?  
            I’d love to hear from you! Fill out the form or reach me directly.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="text-pink-600 dark:text-pink-400" />
              <span className="text-gray-800 dark:text-gray-300">
                hello@example.com
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-pink-600 dark:ttext-pink-400" />
              <span className="text-gray-800 dark:text-gray-300">
                +91 98765 43210
              </span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-pink-600 dark:text-pink-400" />
              <span className="text-gray-800 dark:text-gray-300">
                Kanpur, India
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl dark:shadow-pink-900/20 space-y-5 transition-colors duration-500"
        >
          <div>
            <label className="block mb-2 text-gray-800 dark:text-gray-300 font-medium">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-pink-500 focus:outline-none text-gray-900 dark:text-gray-200 transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-800 dark:text-gray-300 font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-pink-500 focus:outline-none text-gray-900 dark:text-gray-200 transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-800 dark:text-gray-300 font-medium">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-pink-500 focus:outline-none text-gray-900 dark:text-gray-200 transition"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 transition text-white py-3 rounded-lg font-semibold shadow-md"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
    </>
  );
}
