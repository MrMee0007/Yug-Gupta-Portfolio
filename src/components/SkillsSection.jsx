import { motion } from "framer-motion";
import {
  Film,
  Video,
  Palette,
  Users,
  Clock,
  MessageCircle,
  Crown,
} from "lucide-react";

export default function SkillsSection() {
  const skills = [
    {
      name: "Cinematography",
      level: 92,
      icon: Film,
      description:
        "Mastery of framing, lighting, composition and cinematic storytelling.",
    },
    {
      name: "Video Editing",
      level: 90,
      icon: Video,
      description:
        "Advanced workflow using Premiere Pro & After Effects.",
    },
    {
      name: "Graphic Design",
      level: 85,
      icon: Palette,
      description:
        "High-impact visuals and branding using Canva & Photoshop.",
    },
    {
      name: "Leadership",
      level: 88,
      icon: Crown,
      description:
        "Led creative teams and managed professional productions.",
    },
    {
      name: "Teamwork",
      level: 87,
      icon: Users,
      description:
        "Collaborative mindset in multi-creator environments.",
    },
    {
      name: "Time Management",
      level: 84,
      icon: Clock,
      description:
        "Delivered premium results under strict deadlines.",
    },
    {
      name: "Communication",
      level: 86,
      icon: MessageCircle,
      description:
        "Clear and confident interaction with teams & clients.",
    },
  ];

  return (
    <section className="relative bg-black text-white px-6 md:px-20 py-36 overflow-hidden">

      {/* Cinematic Background Glow */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-red-600/10 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-600/10 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Watermark Text */}
        <h2 className="absolute top-10 left-0 text-[18vw] font-extrabold text-white/5 uppercase pointer-events-none select-none">
          Skills
        </h2>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-24 relative"
        >
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight">
            What I Bring to the Table
          </h3>
          <p className="text-white/60 mt-4 max-w-xl">
            A refined blend of technical precision, creative direction and
            leadership built through years of visual storytelling.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                }}
                className="group relative p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-xl transition-all duration-500 overflow-hidden"
              >
                {/* Animated Red Glow Border */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 border border-red-600 shadow-[0_0_40px_rgba(220,38,38,0.7)]" />

                <div className="relative z-10">

                  {/* Header */}
                  <div className="flex items-center gap-5 mb-6">
                    <div className="p-4 bg-red-600/10 border border-red-600/40 rounded-2xl group-hover:rotate-6 transition-transform duration-500">
                      <Icon size={26} className="text-red-600" />
                    </div>
                    <h4 className="text-2xl font-semibold">
                      {skill.name}
                    </h4>
                  </div>

                  {/* Description */}
                  <p className="text-white/60 mb-8 leading-relaxed text-sm">
                    {skill.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="relative h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="h-full bg-red-600 shadow-[0_0_20px_rgba(220,38,38,0.9)]"
                    />
                  </div>

                  {/* Percentage */}
                  <div className="mt-3 text-right text-xs text-white/40 tracking-widest">
                    {skill.level}%
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}