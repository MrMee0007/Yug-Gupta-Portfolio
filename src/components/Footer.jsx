import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white px-6 md:px-20 pt-28 pb-10 overflow-hidden">

      {/* Subtle Red Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-16 pb-16 border-b border-white/10">

          {/* Brand */}
          <div className="md:col-span-2">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold"
            >
               Yug Gupta
              <span className="block text-red-500 mt-2">
                Creative Cinematographer <br /> Video Editor <br />Graphic Designer
              </span>
            </motion.h2>

            <p className="text-gray-400 mt-6 max-w-md leading-relaxed">
              Building bold digital experiences with cinematic aesthetics
              and strategic precision. Let’s create something unforgettable.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Navigation</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-red-500 cursor-pointer transition">Home</li>
              <li className="hover:text-red-500 cursor-pointer transition">Work</li>
              <li className="hover:text-red-500 cursor-pointer transition">Hire Me</li>
              <li className="hover:text-red-500 cursor-pointer transition">Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-3">
                <Mail size={16} />
                <span>hello@reallygreatsite.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} />
                <span>+91 8887-586830</span>
              </div>
            </div>
          </div>

        </div>

        {/* Newsletter Section */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8">

          <div>
            <h3 className="text-xl font-semibold">
              Stay Updated
            </h3>
            <p className="text-gray-400 mt-2 text-sm">
              Get insights, updates & creative drops.
            </p>
          </div>

          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-white/5 border border-white/10 focus:border-red-500 px-4 py-3 rounded-l-xl outline-none w-full md:w-64"
            />
            <button className="bg-gradient-to-r from-red-600 to-red-500 px-6 rounded-r-xl font-semibold hover:opacity-90 transition">
              Subscribe
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-500 text-sm">

          <p>
            © {new Date().getFullYear()} Mohd Meezan. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Instagram className="hover:text-red-500 cursor-pointer transition" />
            <Linkedin className="hover:text-red-500 cursor-pointer transition" />
          </div>

        </div>

      </div>
    </footer>
  );
}
