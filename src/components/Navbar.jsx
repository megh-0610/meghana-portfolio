import { useState, useEffect } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Projects", id: "projects" },
  { name: "Tech Stack", id: "skills" },
  { name: "Journey", id: "experience" },
  { name: "About", id: "about" },
  { name: "Contact", id: "contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08131E]/85 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl font-extrabold tracking-[0.2em] text-white"
        >
          <span className="text-[#19B7A5]">&lt;</span>
          RM
          <span className="text-[#19B7A5]">/&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">

          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-[#C4CFCE] hover:text-[#19B7A5] transition duration-300 font-medium"
            >
              {item.name}
            </a>
          ))}

          <a
            href="/resume.pdf"
            download
            className="px-5 py-2.5 rounded-xl bg-[#19B7A5] text-[#08131E] font-semibold hover:bg-[#33E0C7] transition duration-300 hover:scale-105"
          >
            Resume
          </a>

        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#102838] border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-6 gap-5">

              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className="text-[#C4CFCE] hover:text-[#19B7A5] transition text-lg"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="/resume.pdf"
                download
                className="mt-2 text-center py-3 rounded-xl bg-[#19B7A5] text-[#08131E] font-semibold"
              >
                Download Resume
              </a>

            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </header>
  );
}

export default Navbar;