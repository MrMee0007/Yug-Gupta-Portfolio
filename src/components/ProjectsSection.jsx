import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { herovideo, video1, video2, video3, video4 } from "../assets/assets";

const projects = [
  {
    title: "Recording Navjot — Short Clip",
    category: "Stage Frame",
    video: video2,
  },
  {
    title: "Navjot Ahuja — Short Clip",
    category: "Stage Frame",
    video: video1,
  },
  {
    title: "Navjot Ahuja — Short Clip",
    category: "Music Concert",
    video: video3,
  },
  {
    title: "Ember & Smoke",
    category: "Public View Installation",
    video: video4,
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-28 px-6 md:px-12 lg:px-24 bg-black text-white">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
  OFFICIAL VISUAL ARCHITECT — GALGOTIAS EVENT
</h2>
<p className="text-stone-400 max-w-xl mx-auto">
  Specially invited to capture the spectacle — framing every light,
  every movement, and every unforgettable moment.
</p>
        </motion.div>

        {/* Featured Large Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group rounded-3xl overflow-hidden mb-16 cursor-pointer"
        >
          <video
            src={projects[0].video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[60vh] object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500 flex flex-col justify-end p-10">
            <p className="text-sm uppercase tracking-widest text-red-500 mb-2">
              {projects[0].category}
            </p>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              {projects[0].title}
            </h3>

            <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
              <ExternalLink className="w-5 h-5" />
            </div>
          </div>
        </motion.div>

        {/* Grid Layout for Remaining Videos */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.slice(1).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative group rounded-2xl overflow-hidden cursor-pointer"
            >
              <video
                src={project.video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">
                <p className="text-xs uppercase tracking-widest text-red-500 mb-2">
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;