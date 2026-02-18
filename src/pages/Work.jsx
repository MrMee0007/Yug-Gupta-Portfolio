import { motion } from "framer-motion";
import {
  img3,
  img4,
  img5,
  img2,
  img6,
  video1,
  video2,
  video3,
  video4,
  bg,
} from "../assets/assets";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



export default function Work() {
  const events = [
    {
      title: "Navjot Ahuja Live",
      venue: "Galgotias University",
      year: "2024",
      description:
        "Part of the official media crew covering Navjot Ahuja’s live performance. Focused on dynamic crowd reactions, stage lighting transitions, and cinematic close-ups for high-impact social media reels.",
      details:
        "Handled multi-angle camera coverage, highlight reel creation, short-form edits, and final color balancing for Instagram and YouTube delivery.",
      gallery: [img3, img4, img5, img2],
      rawClips: [video2, video3],
      editedClips: [video1],
    },
    {
      title: "Ankit Tiwari Concert",
      venue: "GLA University",
      year: "2023",
      description:
        "Captured the emotional and atmospheric stage performance of Ankit Tiwari, focusing on dramatic lighting, audience energy, and intimate close-ups.",
      details:
        "Delivered cinematic after-movie, vertical social reels, and promotional highlight edits optimized for engagement.",
      gallery: [img3, img6, img4],
      rawClips: [video3],
      editedClips: [video4],
    },
    {
      title: "University Cultural Fest",
      venue: "Delhi NCR",
      year: "2023",
      description:
        "Full-day event coverage including dance battles, musical performances, and celebrity guest appearances.",
      details:
        "Managed photography, recap video production, backstage coverage, and sponsor-focused promotional edits.",
      gallery: [img4, img5, img6],
      rawClips: [bg, bg],
      editedClips: [bg],
    },
    {
      title: "Artist Promotional Shoot",
      venue: "Independent Project",
      year: "2024",
      description:
        "Conceptualized and shot cinematic visuals for artist branding and promotional campaign.",
      details:
        "Directed lighting setups, shot slow-motion performance footage, and delivered stylized post-production edits.",
      gallery: [img2, img3, img6],
      rawClips: [video3],
      editedClips: [video3, video3],
    },
  ];

  return (

    
    <div className="bg-black text-white overflow-hidden">

      <Navbar />
      
      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center px-6 md:px-20 border-b border-white/10">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/20 blur-[140px] rounded-full"></div>

        <div className="max-w-5xl relative z-10">
          <p className="text-red-600 tracking-[0.5em] mb-6 text-sm uppercase">
            Portfolio & Selected Projects
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight"
          >
            Live Event Coverage
            <span className="block bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Cinematic Post Production
            </span>
          </motion.h1>

          <p className="mt-8 text-gray-400 max-w-3xl text-lg leading-relaxed">
            I specialize in capturing high-energy live concerts, university fests,
            and artist performances — transforming raw footage into cinematic
            storytelling experiences. From shooting to final delivery, every
            project is crafted with precision and creative intent.
          </p>
        </div>
      </section>

      {events.map((event, index) => (
        <section
          key={index}
          className="px-6 md:px-20 py-28 border-b border-white/10 space-y-16"
        >
          {/* Event Info */}
          <div className="max-w-3xl space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">{event.title}</h2>
            <p className="text-red-600 tracking-wide">
              {event.venue} • {event.year}
            </p>

            <p className="text-gray-400 leading-7">
              {event.description}
            </p>

            <p className="text-gray-500 leading-7">
              {event.details}
            </p>
          </div>

          {/* Gallery */}
          <div>
            <h3 className="text-xl mb-8 uppercase tracking-[0.3em] text-red-600">
              Event Photography
            </h3>

            <div className="grid md:grid-cols-4 gap-6">
              {event.gallery.map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className="overflow-hidden rounded-2xl border border-white/10"
                >
                  <img
                    src={img}
                    alt=""
                    className="object-cover w-full h-[250px] hover:scale-110 transition duration-700"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Raw Clips */}
          <div>
            <h3 className="text-xl mb-8 uppercase tracking-[0.3em] text-red-600">
              Raw Event Clips
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {event.rawClips.map((clip, i) => (
                <video
                  key={i}
                  src={clip}
                  controls
                  className="w-full h-[320px] object-cover rounded-2xl border border-white/10"
                />
              ))}
            </div>
          </div>

          {/* Edited Clips */}
          <div>
            <h3 className="text-xl mb-8 uppercase tracking-[0.3em] text-red-600">
              Final Cinematic Edits
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {event.editedClips.map((clip, i) => (
                <video
                  key={i}
                  src={clip}
                  controls
                  className="w-full h-[320px] object-cover rounded-2xl border border-red-600/30 shadow-lg shadow-red-600/20"
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="px-6 md:px-20 py-32 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent blur-3xl"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let’s Create Something Cinematic
          </h2>

          <p className="text-gray-400 mb-10 leading-relaxed">
            Available for concerts, university events, brand campaigns,
            artist promotions, and professional editing projects.
            Let’s bring your event to life through powerful visuals.
          </p>

          <button className="px-14 py-5 bg-red-600 rounded-full text-white font-semibold tracking-widest hover:bg-red-700 transition duration-300 shadow-lg shadow-red-600/30">
            Book a Project
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
