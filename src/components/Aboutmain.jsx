import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { about } from "../assets/assets";

const TypeWriter = ({
  text,
  speed = 60,
  deleteSpeed = 40,
  delay = 1500,
  pause = 1000,
  className,
}) => {
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        if (displayed.length < text.length) {
          timeout = setTimeout(() => {
            setDisplayed(text.slice(0, displayed.length + 1));
          }, speed);
        } else {
          timeout = setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        // Deleting
        if (displayed.length > 0) {
          timeout = setTimeout(() => {
            setDisplayed(text.slice(0, displayed.length - 1));
          }, deleteSpeed);
        } else {
          timeout = setTimeout(() => setIsDeleting(false), delay);
        }
      }
    };

    timeout = setTimeout(handleTyping, 0);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, text, speed, deleteSpeed, delay, pause]);

  return (
    <p className={className}>
      {displayed}
      <span className="animate-pulse">|</span>
    </p>
  );
};
export default function Aboutmain() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const aboutRef = useRef(null);

  const heroImageRef = useRef(null);
  const aboutImageRef = useRef(null);

  const aboutInView = useInView(aboutImageRef, { margin: "-40% 0px -40% 0px" });
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start start", "end end"],
  });

  const portraitScale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.documentElement.classList.add("dark");
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-500 overflow-x-hidden relative">

      {/* Hero Section */}
{/* Hero Section */}
<section className="relative min-h-screen flex items-center justify-center bg-black text-stone-100 overflow-hidden px-6">

  {/* Soft Radial Glow (Dark Version) */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,0,0,0.08),_transparent_60%)]"></div>

  <div className="relative flex items-center justify-center w-full max-w-7xl">

    {/* LEFT TEXT */}
    <motion.div
      initial={{ x: 400, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="absolute right-220 z-0 flex flex-col items-start"
    >
      <TypeWriter
        text="Yug Gupta"
        speed={60}
        delay={1500}
        className="text-sm md:text-base uppercase tracking-[0.3em] text-stone-500 mb-4"
      />

      <h1 className="text-[12vw] md:text-[5vw] font-extrabold uppercase tracking-[-0.04em] text-stone-100 leading-none">
        Cinemato
      </h1>
    </motion.div>

    {/* RIGHT TEXT */}
    <motion.div
      initial={{ x: -400, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      className="absolute left-220 z-0 flex flex-col items-end text-right"
    >
      <TypeWriter
        text="I'm an Indian-based Videographer and Editor"
        speed={30}
        delay={1700}
        className="text-sm md:text-base uppercase tracking-[0.3em] text-stone-500 mb-4 max-w-xs"
      />

      <h1 className="text-[12vw] md:text-[5vw] font-extrabold uppercase tracking-[-0.04em] text-stone-100 leading-none">
        GRAPHER
      </h1>
    </motion.div>

    {/* CENTER IMAGE */}
    <motion.div
      ref={heroImageRef}
      layoutId="shared-image"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{
        scale: aboutInView ? 0.8 : 1,
        rotateY: aboutInView ? 180 : 0,
        opacity: 1,
      }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ perspective: 1200 }}
      className="relative z-10"
    >
      <div className="rounded-3xl overflow-hidden shadow-2xl w-[300px] sm:w-[360px] md:w-[420px] border border-stone-800">
        <img
          src={about}
          alt="Profile"
          className="w-full h-[420px] md:h-[520px] object-cover"
        />
      </div>
    </motion.div>

  </div>
</section>

      {/* Work Section
      <section id="work" className="px-8 lg:px-20 py-32 border-t border-black/5 dark:border-white/5">
        <div className="mb-20">
          <h2 className="text-[10vw] lg:text-[4vw] font-extrabold uppercase tracking-tight">
            Selected Work
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {[
            { title: "SHADOWS OF REASON", year: "2024" },
            { title: "NORDIC SILENCE", year: "2023" },
            { title: "CONCRETE PULSE", year: "2022" },
            { title: "FRACTURED LIGHT", year: "2021" },
          ].map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={photo}
                  alt={project.title}
                  className="w-full h-[400px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              <div className="mt-6">
                <h3 className="text-xl uppercase font-bold tracking-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs uppercase tracking-[0.3em] opacity-60 mt-2">
                  {project.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section> */}



      {/* Dark Mode Toggle */}
      <button
        onClick={() => document.documentElement.classList.toggle("dark")}
        className="fixed bottom-8 right-8 w-12 h-12 bg-black text-white dark:bg-white dark:text-black rounded-full flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-xl"
      >
        ◐
      </button>
    </div>
  );
}
