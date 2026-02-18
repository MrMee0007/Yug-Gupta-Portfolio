import { motion } from "framer-motion";

export default function HireMe() {
  return (
    <section className="relative bg-black text-white px-6 md:px-20 py-32 overflow-hidden">

      {/* Subtle Red Glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-600/10 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-600/10 blur-[160px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* HERO STATEMENT */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          I Don’t Just Build Projects.
          <span className="block text-red-500 mt-4">
            I Build Experiences.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-gray-400 mt-10 max-w-2xl text-lg"
        >
          If you're looking for ordinary, I’m not your person.
          If you're building something bold, cinematic, impactful —
          we should talk.
        </motion.p>

        {/* SPACING */}
        <div className="mt-32 space-y-32">

          {/* SECTION 1 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-semibold">
              What You Get
            </h2>

            <p className="text-gray-400 mt-6 max-w-3xl text-lg leading-relaxed">
              Strategic thinking. Clean execution. High-end aesthetics.
              Whether it's film, design, or digital — every project is crafted
              with precision and emotional depth.
            </p>
          </motion.div>

          {/* SECTION 2 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-semibold">
              Who I Work With
            </h2>

            <p className="text-gray-400 mt-6 max-w-3xl text-lg leading-relaxed">
              Visionary founders. Creative brands. Fearless storytellers.
              People who understand that great work isn't rushed —
              it's refined.
            </p>
          </motion.div>

          {/* SECTION 3 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-semibold">
              My Process
            </h2>

            <p className="text-gray-400 mt-6 max-w-3xl text-lg leading-relaxed">
              01. Understand the vision  
              02. Build the strategy  
              03. Design & Execute  
              04. Refine to perfection  
            </p>
          </motion.div>

        </div>

        {/* FINAL CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-40 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold">
            Let’s Create Something
            <span className="block text-red-500 mt-3">
              Unforgettable
            </span>
          </h2>

          <a
            href="/contact"
            className="inline-block mt-12 px-12 py-4 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 rounded-full font-semibold tracking-wide"
          >
            Hire Me
          </a>
        </motion.div>

      </div>
    </section>
  );
}
