import React from "react";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import { portfolio } from "../assets/assets";

const stats = [
  { value: "15", label: "Years Behind the Lens" },
  { value: "120+", label: "Films & Projects" },
  { value: "30+", label: "Awards & Selections" },
];

const AboutSection = () => {
  return (
    <section className="py-24 px-4 md:px-12 lg:px-24 relative bg-black text-stone-100 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-10"
        >
          <div className="flex items-center gap-2 bg-stone-900 border border-stone-800 rounded-full px-4 py-1.5">
            <div className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">M</span>
            </div>
            <span className="text-xs text-stone-400">
              Available for projects
            </span>
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-[1.2fr_auto] gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4"
            >
              ABOUT ME
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-stone-400 text-sm md:text-base max-w-md mb-8"
            >
              I'm Marcus — a cinematographer obsessed with painting stories
              through light and shadow. From indie features to global
              commercials, I bring a deeply personal eye to every frame.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex gap-8 mb-8"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <p className="text-3xl md:text-4xl font-bold text-red-500">
                    {stat.value}
                  </p>
                  <p className="text-stone-500 text-xs mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-8 mb-6 text-sm"
            >
              <div>
                <p className="text-stone-500 text-xs">Representation :</p>
                <p className="text-stone-100">WME Talent Agency</p>
              </div>
              <div>
                <p className="text-stone-500 text-xs">Email :</p>
                <p className="text-stone-100">
                  marcus@webbcinema.com
                </p>
              </div>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex gap-3 mb-6"
            >
              {[Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-9 h-9 rounded-full border border-stone-700 flex items-center justify-center text-stone-400 hover:text-red-500 hover:border-red-500 transition-colors cursor-pointer"
                >
                  <Icon className="w-4 h-4" />
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="px-6 py-2 rounded-full border border-red-500 text-red-500 text-lg font-semibold hover:bg-red-500 hover:text-white transition-colors"
            >
              MY REEL
            </motion.button>
          </div>

          {/* RIGHT IMAGE WITH EFFECTS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className="hidden md:flex justify-center items-center relative"
          >
            {/* Glow Ring */}
            <div className="absolute w-80 h-80 rounded-full bg-red-500/10 blur-3xl animate-pulse"></div>

            {/* Image */}
            <motion.div
              whileHover={{
                scale: 1.08,
                rotate: 3,
              }}
              transition={{ type: "spring", stiffness: 120 }}
              className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-stone-800 shadow-2xl cursor-pointer"
            >
              <img
                src={portfolio}
                alt="Marcus Webb"
                className="w-full h-full object-cover transition-transform duration-500"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;