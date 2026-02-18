import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-widest text-white">
          YUG <span className="text-red-600">GUPTA</span>
        </h1>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-10 text-sm tracking-widest uppercase">
          <Link
            to="/"
            className="hover:text-red-600 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-red-600 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/work"
            className="hover:text-red-600 transition duration-300"
          >
            Work
          </Link>
          <Link
            to="/contact"
            className="hover:text-red-600 transition duration-300"
          >
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <button className="hidden md:block px-6 py-2 border border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition duration-300">
          Hire Me
        </button>
      </div>
    </motion.nav>
  );
}