"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function HomePage() {
  const [form, setForm] = useState({ email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("https://formspree.io/f/xzzbgrnp", {
        // Replace the above endpoint with your own Formspree endpoint
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          message: form.message,
        }),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setForm({ email: "", message: "" });
      } else {
        setStatus("Something went wrong. Try again.");
      }
    } catch {
      setStatus("Network error. Please try again.");
    }
  };

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-dark">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-heading font-bold leading-tight text-light"
        >
          Automate Your Business with <span className="text-accent">ProxyAgent</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-lg md:text-xl max-w-2xl text-muted"
        >
          Streamline communication, scheduling, and lead management with our AI receptionist agents.
          Affordable. Scalable. Effortless.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-10 bg-accent text-white px-8 py-4 rounded-full text-lg font-semibold shadow-glow"
        >
          Get Started
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="absolute bottom-10 text-muted text-sm"
        >
          Trusted by small businesses across the 757 DMV.
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-surface px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-heading font-bold text-center mb-16"
        >
          Powerful AI. Human Results.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "AI Receptionist",
              desc: "Respond instantly to messages and schedule appointments with natural AI conversation.",
            },
            {
              title: "Smart Integrations",
              desc: "Connect to Gmail, Notion, Sheets, and more for seamless automation.",
            },
            {
              title: "24/7 Availability",
              desc: "Your business never sleeps—neither do your AI agents.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-dark rounded-2xl p-8 text-center shadow-lg border border-gray-800 transition-all"
            >
              <h3 className="text-2xl font-semibold mb-4 text-accent">{item.title}</h3>
              <p className="text-muted">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-dark px-6 md:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-heading font-bold mb-12"
        >
          Why Businesses Choose ProxyAgent
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6 text-left">
            <p className="text-lg text-light">
              At ProxyAgent, we build AI agents that think, respond, and act on your behalf. From
              email replies to full client interactions—our technology saves you hours daily.
            </p>
            <p className="text-lg text-muted">
              We tailor each agent to your company’s unique workflow, ensuring brand consistency and
              reliability across all platforms.
            </p>
            <ul className="text-left list-disc list-inside text-muted mt-4">
              <li>Instant email & message responses</li>
              <li>Calendar & booking automation</li>
              <li>CRM-style client tracking</li>
              <li>Easy integration with your tools</li>
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl bg-surface p-10 border border-gray-800"
          >
            <h3 className="text-2xl font-semibold mb-4 text-accent">
              What Our Clients Say
            </h3>
            <p className="italic text-muted">
              “ProxyAgent transformed our small detailing business. Our AI receptionist handles
              every lead while we focus on customers. It’s like hiring a full team for the price of one
              subscription.”
            </p>
            <p className="mt-4 text-sm text-gray-500">— Coastal Detailing Team</p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-surface text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-heading font-bold text-light mb-6"
        >
          Ready to Automate Your Business?
        </motion.h2>
        <p className="text-muted mb-10 max-w-2xl mx-auto">
          Your AI journey starts here. Let ProxyAgent create a digital teammate that scales your
          business effortlessly.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="bg-accent text-white px-8 py-4 rounded-full font-semibold shadow-glow"
        >
          Contact Us
        </motion.button>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-dark text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-heading font-bold mb-8"
        >
          Get in Touch
        </motion.h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto flex flex-col gap-4"
        >
          <input
            type="email"
            required
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="px-5 py-3 rounded-lg bg-surface border border-gray-700 focus:border-accent outline-none text-light"
          />
          <textarea
            required
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="px-5 py-3 rounded-lg bg-surface border border-gray-700 focus:border-accent outline-none text-light min-h-[150px]"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="bg-accent text-white px-8 py-3 rounded-full font-semibold"
          >
            Send Message
          </motion.button>
        </form>

        {status && <p className="mt-4 text-sm text-muted">{status}</p>}

        <p className="mt-12 text-sm text-muted">
          Or email us directly:{" "}
          <a href="mailto:proxyagent.business@gmail.com" className="text-accent">
            proxyagent.business@gmail.com
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-surface text-center text-muted text-sm">
        © {new Date().getFullYear()} ProxyAgent. All rights reserved.
      </footer>
    </main>
  );
}
