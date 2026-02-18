// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import { Film, Video, Camera, Wand2 } from "lucide-react";

// const services = [
//   {
//     icon: Film,
//     title: "Film Direction",
//     description:
//       "From concept to final cut, bringing cinematic visions to life with artistic precision.",
//     number: "01",
//   },
//   {
//     icon: Video,
//     title: "Commercial Videography",
//     description:
//       "Creating compelling visual content for brands that demand excellence.",
//     number: "02",
//   },
//   {
//     icon: Camera,
//     title: "Editorial Photography",
//     description:
//       "Fashion-forward imagery for publications, campaigns, and portfolios.",
//     number: "03",
//   },
//   {
//     icon: Wand2,
//     title: "Post-Production",
//     description:
//       "Color grading, editing, and visual effects that elevate every frame.",
//     number: "04",
//   },
// ];

// const ServicesSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section
//       id="services"
//       ref={ref}
//       className="px-8 lg:px-20 py-32 border-t border-black/5 dark:border-white/5"
//     >
//       <div className="max-w-7xl mx-auto">

//         {/* 🔥 CINEMATIC HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 1 }}
//           className="mb-28 relative"
//         >
//           {/* Background Stroke Text */}
//           <h2 className="absolute inset-0 text-[14vw] lg:text-[7vw] font-extrabold uppercase tracking-tight text-transparent stroke-text pointer-events-none select-none opacity-10">
//             Services
//           </h2>

//           {/* Main Gradient Heading */}
//           <div className="relative overflow-hidden inline-block">
//             <h2 className="text-[10vw] lg:text-[4vw] font-extrabold uppercase tracking-tight leading-none bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent">
//               Services
//             </h2>

//             {/* Animated Shine */}
//             <div className="absolute top-0 left-[-100%] w-full h-full bg-white/20 skew-x-12 animate-shine pointer-events-none" />
//           </div>

//           <p className="mt-10 max-w-xl text-black/60 dark:text-white/60 leading-relaxed">
//             Comprehensive creative solutions designed with precision,
//             storytelling depth, and cinematic craftsmanship.
//           </p>
//         </motion.div>

//         {/* SERVICES LIST */}
//         <div className="flex flex-col divide-y divide-black/10 dark:divide-white/10">

//           {services.map((service, index) => (
//             <motion.div
//               key={service.title}
//               initial={{ opacity: 0, y: 60 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{
//                 duration: 0.8,
//                 delay: 0.2 + index * 0.15,
//               }}
//               whileHover={{ y: -8 }}
//               className="relative group py-16 cursor-pointer overflow-hidden transition-all duration-500"
//             >
//               {/* 🔴 Gradient Hover Layer */}
//               <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-500 to-red-700 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] z-0" />

//               {/* Shine Sweep */}
//               <div className="absolute inset-0 overflow-hidden pointer-events-none">
//                 <div className="absolute -left-1/2 top-0 w-1/2 h-full bg-white/10 rotate-12 translate-x-[-100%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-out" />
//               </div>

//               <div className="relative z-10 grid md:grid-cols-3 gap-12 items-start">

//                 {/* Number */}
//                 <div className="text-6xl md:text-7xl font-extrabold text-black/10 dark:text-white/10 group-hover:text-white/20 transition-colors duration-500">
//                   {service.number}
//                 </div>

//                 {/* Content */}
//                 <div className="md:col-span-2">

//                   <div className="flex items-center gap-6 mb-6">
//                     <div className="text-primary group-hover:text-white transition-colors duration-300">
//                       <service.icon size={32} strokeWidth={1.5} />
//                     </div>

//                     <h3 className="text-2xl md:text-3xl uppercase font-bold tracking-tight group-hover:text-white transition-colors duration-300">
//                       {service.title}
//                     </h3>
//                   </div>

//                   <p className="text-black/60 dark:text-white/60 group-hover:text-white/80 transition-colors duration-300 leading-relaxed max-w-xl">
//                     {service.description}
//                   </p>

//                   <div className="mt-6 text-xs uppercase tracking-[0.3em] text-primary group-hover:text-white flex items-center gap-3 transition-colors duration-300">
//                     <span>Learn More</span>
//                     <span className="group-hover:translate-x-2 transition-transform duration-300">
//                       →
//                     </span>
//                   </div>

//                 </div>
//               </div>
//             </motion.div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { photo } from "../assets/assets"; // adjust path if needed

const services = [
  { num: "1", title: "NARRATIVE FILM" },
  { num: "2", title: "COMMERCIAL & ADS" },
  { num: "3", title: "MUSIC VIDEOS" },
  { num: "4", title: "DOCUMENTARY" },
];

const ServicesSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 relative bg-black text-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              WHAT I SHOOT
            </h2>

            <div className="flex items-center gap-2 bg-zinc-800 rounded-full px-4 py-1.5">
              <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                <span className="text-black text-[10px] font-bold">M</span>
              </div>
              <span className="text-xs text-zinc-400">
                Available for projects
              </span>
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            </div>
          </div>

          <p className="text-zinc-400 text-sm md:text-base max-w-lg mb-10">
            From intimate narratives to large-scale productions, I bring every
            frame to life with intention and artistry.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start">

          {/* Services List */}
          <div>
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex items-center justify-between py-6 border-b border-zinc-800 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <span className="text-zinc-500 text-sm">
                    {service.num}.
                  </span>

                  <span className="text-xl md:text-2xl font-semibold group-hover:text-red-500 transition-colors duration-300">
                    {service.title}
                  </span>
                </div>

                <ChevronRight className="w-5 h-5 text-zinc-500 group-hover:text-red-500 group-hover:translate-x-1 transition-all duration-300" />
              </motion.div>
            ))}
          </div>

          {/* Side Image */}
          <motion.div
            initial={{ opacity: 0, rotate: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, rotate: 3, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="hidden md:block w-64 lg:w-72 rounded-xl overflow-hidden shadow-2xl"
          >
            <img
              src={photo}
              alt="On set"
              className="w-full h-90 object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;