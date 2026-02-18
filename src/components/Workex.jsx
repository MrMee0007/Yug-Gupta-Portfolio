import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const workData = [
  {
    role: "Official Media Crew Member",
    organization: "Galgotias University",
    year: "2024",
    description:
      "Covered large-scale university concerts and celebrity performances.",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063",
  },
  {
    role: "Concert Videographer",
    organization: "GLA University",
    year: "2023",
    description:
      "Captured cinematic performance coverage focusing on lighting and emotion.",
    image:
      "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc",
  },
  {
    role: "Freelance Video Editor",
    organization: "Independent Projects",
    year: "2022 – Present",
    description:
      "Professional editing services for artists and brands.",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  },
];

const Workex = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".timeline-item", {
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 px-6 md:px-20 bg-black text-stone-100 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/10 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative">

        {/* Heading */}
        <div className="text-center mb-28">
          <h2 className="text-5xl md:text-6xl font-extrabold">
            WORK EXPERIENCE
          </h2>
          <p className="text-red-500 tracking-[0.4em] text-xs mt-4 uppercase">
            Live Events & Creative Production
          </p>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative">

          {/* Center Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-stone-800"></div>

          <div className="space-y-32">
            {workData.map((item, index) => (
              <div
                key={index}
                className={`timeline-item relative flex items-center justify-between ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="w-5/12">
                  <p className="text-red-500 text-xs tracking-widest uppercase mb-2">
                    {item.year}
                  </p>

                  <h3 className="text-2xl font-semibold mb-2">
                    {item.role}
                  </h3>

                  <p className="text-stone-400 mb-4">
                    {item.organization}
                  </p>

                  <p className="text-stone-500 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all text-sm tracking-wide"
                  >
                    View Work
                  </motion.button>
                </div>

                {/* Center Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-red-500 rounded-full shadow-lg shadow-red-500/50 z-10"></div>

                {/* Image */}
                <motion.div
                  whileHover={{
                    rotate: 0,
                    scale: 1.05,
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className={`w-5/12 relative ${
                    index % 2 === 0 ? "-rotate-6" : "rotate-6"
                  }`}
                >
                  <div className="overflow-hidden rounded-2xl border border-stone-800 shadow-2xl">
                    <img
                      src={item.image}
                      alt={item.role}
                      className="w-full h-[300px] object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Workex;
