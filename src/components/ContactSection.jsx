import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Linkedin, ArrowRight } from "lucide-react";
import Navbar from "./Navbar";

export default function ContactSection() {
  return (
    <section className="relative px-6 md:px-20 py-32 bg-black text-white overflow-hidden">
      <Navbar />

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.08),transparent_60%)]"></div>
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-600/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-500/20 blur-[150px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <p className="text-red-500 uppercase tracking-widest text-sm mb-4">
            Let’s Connect
          </p>
          <h2 className="text-4xl md:text-6xl font-bold">
            Start Your Project
          </h2>
          <div className="w-24 h-[2px] bg-red-500 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-24 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-12">

            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-gray-300">
                Currently Available for Projects
              </span>
            </div>

            <div className="space-y-8">

              <div className="flex gap-6 items-start group">
                <Phone className="text-red-500 w-7 h-7 group-hover:scale-110 transition" />
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-lg font-semibold">+91 8887-586830</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <Mail className="text-red-500 w-7 h-7 group-hover:scale-110 transition" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-lg font-semibold">hello@reallygreatsite.com</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <MapPin className="text-red-500 w-7 h-7 group-hover:scale-110 transition" />
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-lg font-semibold">Noida / Delhi / Gurgaon</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-gray-400 text-sm mb-6">Follow Me</p>
              <div className="flex gap-6">
                <Instagram className="hover:text-red-500 cursor-pointer transition" />
                <Linkedin className="hover:text-red-500 cursor-pointer transition" />
              </div>
            </div>

          </div>

          {/* RIGHT SIDE – FORM */}
          <motion.form
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="bg-white/5 backdrop-blur-2xl border border-white/10 p-12 rounded-3xl space-y-8 shadow-2xl"
          >

            {/* Name */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full bg-transparent border border-white/10 focus:border-red-500 focus:shadow-lg focus:shadow-red-500/20 rounded-lg px-4 py-3 outline-none transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full bg-transparent border border-white/10 focus:border-red-500 focus:shadow-lg focus:shadow-red-500/20 rounded-lg px-4 py-3 outline-none transition"
              />
            </div>

            {/* Timeline */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Timeline
              </label>
              <select className="w-full bg-black border border-white/10 focus:border-red-500 rounded-lg px-4 py-3 outline-none transition">
                <option>1-2 Weeks</option>
                <option>1 Month</option>
                <option>2-3 Months</option>
                <option>Flexible</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Project Details
              </label>
              <textarea
                rows="4"
                className="w-full bg-transparent border border-white/10 focus:border-red-500 focus:shadow-lg focus:shadow-red-500/20 rounded-lg px-4 py-3 outline-none transition resize-none"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-semibold bg-gradient-to-r from-red-600 to-red-500 hover:scale-[1.02] transition duration-300 shadow-lg shadow-red-600/30"
            >
              Send Proposal
              <ArrowRight size={18} />
            </button>

          </motion.form>

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-32 border-t border-white/10 pt-12">
          <p className="text-gray-400">
            Prefer direct conversation?
          </p>
          <p className="text-red-500 font-semibold mt-2">
            hello@reallygreatsite.com
          </p>
        </div>

      </div>
    </section>
  );
}
