import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Film, Video, Camera, Wand2 } from "lucide-react";

const services = [
  {
    icon: Film,
    title: "Film Direction",
    description:
      "From concept to final cut, bringing cinematic visions to life with artistic precision.",
    number: "01",
  },
  {
    icon: Video,
    title: "Commercial Videography",
    description:
      "Creating compelling visual content for brands that demand excellence.",
    number: "02",
  },
  {
    icon: Camera,
    title: "Editorial Photography",
    description:
      "Fashion-forward imagery for publications, campaigns, and portfolios.",
    number: "03",
  },
  {
    icon: Wand2,
    title: "Post-Production",
    description:
      "Color grading, editing, and visual effects that elevate every frame.",
    number: "04",
  },
];

const ServicesSection2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      ref={ref}
      className="relative bg-black text-white py-28 md:py-36 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Cinematic Red Background Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-red-600/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-600/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ===== Premium Heading ===== */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="relative mb-28"
        >
          {/* Watermark */}
          <h2 className="absolute -top-16 left-0 text-[18vw] md:text-[10vw] font-extrabold text-white/5 uppercase tracking-tight pointer-events-none select-none">
            SERVICES
          </h2>

          {/* Accent Line */}
          <div className="w-16 h-[2px] bg-red-600 mb-6" />

          {/* Main Title */}
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">
              Crafting Visual
            </h2>
            <h2 className="text-4xl md:text-6xl font-bold uppercase text-red-600 -mt-2">
              Experiences
            </h2>

            <p className="mt-6 max-w-2xl text-white/60 leading-relaxed text-lg">
              High-end creative services designed to transform ideas into
              powerful cinematic stories. Every frame is intentional.
              Every detail refined.
            </p>
          </div>
        </motion.div>

        {/* ===== Services Grid ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative bg-black p-10 md:p-14 cursor-pointer overflow-hidden border border-white/5"
            >
              {/* Hover Red Sweep */}
              <div className="absolute inset-0 bg-red-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

              <div className="relative z-10">

                {/* Large Number */}
                <span className="absolute top-6 right-8 text-6xl md:text-8xl font-bold text-white/10 group-hover:text-white/20 transition duration-500">
                  {service.number}
                </span>

                {/* Icon */}
                <div className="mb-6 text-red-600 group-hover:text-black transition duration-500">
                  <service.icon size={40} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-semibold uppercase mb-4 group-hover:text-black transition duration-500">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 group-hover:text-black/80 transition duration-500 leading-relaxed">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="mt-8 flex items-center gap-2 text-red-600 group-hover:text-black transition duration-500">
                  <span className="text-sm uppercase tracking-widest">
                    Learn more
                  </span>
                  <span className="transform group-hover:translate-x-2 transition duration-300">
                    →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection2;