"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-black text-white flex flex-col items-center justify-start px-6">
      {/* Hero Section */}
      <section className="text-center min-h-screen flex flex-col justify-center py-32">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4"
        >
          Welcome to <span className="text-blue-500">ProxyAgent</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg text-gray-400 max-w-xl mx-auto"
        >
          Built for the future of AI automation. Create, connect, and control your intelligent network — all in one place.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold"
        >
          Get Started
        </motion.button>
      </section>

      {/* About Us Section */}
      <section className="max-w-4xl text-center py-20 border-t border-gray-800">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold mb-6"
        >
          About Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-gray-400 leading-relaxed"
        >
          ProxyAgent is redefining business automation. We help teams and creators design, deploy, and manage AI-powered agents that handle communication, scheduling, and operations — saving hours every week while boosting growth.
        </motion.p>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl py-20 border-t border-gray-800">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-center mb-10"
        >
          Features
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: "AI Receptionists", desc: "Let AI handle calls, messages, and appointments automatically." },
            { title: "Workflow Hub", desc: "Design automations visually and connect to your favorite tools." },
            { title: "Team Intelligence", desc: "Give your team a shared AI brain that learns from every interaction." },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-blue-900/30 transition-all"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center py-20 border-t border-gray-800">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold mb-6"
        >
          Contact Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-gray-400 mb-8"
        >
          Have questions or want a custom AI agent? Reach out and let’s build something powerful together.
        </motion.p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="mailto:contact@proxyagent.ai"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold"
        >
          Email Us
        </motion.a>
      </section>

      {/* Footer */}
      <footer className="py-10 text-gray-600 text-sm border-t border-gray-800 w-full text-center">
        © 2025 ProxyAgent. All rights reserved.
      </footer>
    </main>
  );
}
