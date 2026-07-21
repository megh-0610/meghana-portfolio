import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

import heroImage from "../assets/hero.png";
import resume from "../assets/resume/R_Meghana_Resume.pdf";



function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-24 bg-[#08131E] text-white"
    >
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[0.35em] text-[#19B7A5] font-semibold text-sm">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-none mt-5">
              R Meghana
            </h1>

            <h2 className="mt-6 text-xl md:text-2xl font-semibold text-[#19B7A5] leading-relaxed">
              AI Engineer • Backend Developer <br />
              Building Intelligent Applications
            </h2>

            <p className="mt-8 text-lg leading-8 text-[#B9C7D3] max-w-xl">
              Building intelligent AI-powered applications using FastAPI,
              LLMs, cloud technologies, and quantum computing to solve
              real-world problems.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-5">

              <a
                href="#projects"
                className="px-7 py-3 rounded-xl bg-[#19B7A5] text-[#08131E] font-semibold hover:bg-[#33E0C7] hover:-translate-y-1 transition-all"
              >
                Explore Projects
              </a>

              <a
                href={resume}
                download
                className="px-7 py-3 rounded-xl border border-[#19B7A5] text-white hover:bg-[#19B7A5] hover:text-[#08131E] hover:-translate-y-1 transition-all"
              >
                Download Resume
              </a>

            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-8 mt-10">

              <a
                href="https://github.com/megh-0610"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#B9C7D3] hover:text-[#19B7A5] transition"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/r-meghana-83983930b"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#B9C7D3] hover:text-[#19B7A5] transition"
              >
                <FaLinkedin />
                LinkedIn
              </a>

              <a
                href="mailto:meghanaravikumar17@gmail.com"
                className="flex items-center gap-2 text-[#B9C7D3] hover:text-[#19B7A5] transition"
              >
                <FiMail />
                Email
              </a>

            </div>

            {/* Statistics */}

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-14">

              <div>
                <h3 className="text-3xl font-bold text-[#19B7A5]">3+</h3>
                <p className="text-sm text-[#B9C7D3] mt-2">
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#19B7A5]">1</h3>
                <p className="text-sm text-[#B9C7D3] mt-2">
                  Internship
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#19B7A5]">10+</h3>
                <p className="text-sm text-[#B9C7D3] mt-2">
                  Technologies
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#19B7A5]">2027</h3>
                <p className="text-sm text-[#B9C7D3] mt-2">
                  Graduate
                </p>
              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >

            <div className="bg-[#102838] border border-white/10 rounded-3xl p-8 shadow-2xl w-full max-w-md">

              <img
                src={heroImage}
                alt="Meghana"
                className="w-full h-[380px] object-cover rounded-2xl"
              />

              <div className="mt-6 space-y-4">

  <div>
    <h3 className="text-3xl font-bold text-white">
      R Meghana
    </h3>

    <p className="text-[#19B7A5] font-medium mt-1">
      Where Artificial Intelligence Meets Software Engineering.
    </p>
  </div>

  <div className="space-y-2 text-[#B9C7D3] text-sm">

    <div className="flex justify-between items-center border-b border-white/10 pb-2">
      <div>
        <p className="font-semibold text-white">🎓 B.Tech (AI & ML)</p>
        <p>DIET • Final Year</p>
      </div>
      <span className="text-[#19B7A5] font-semibold">
        8.8 CGPA
      </span>
    </div>

    <div className="flex justify-between items-center border-b border-white/10 pb-2">
      <div>
        <p className="font-semibold text-white">📘 Diploma</p>
        <p>Intermediate</p>
      </div>
      <span className="text-[#19B7A5] font-semibold">
        83%
      </span>
    </div>

    <div className="flex justify-between items-center">
      <div>
        <p className="font-semibold text-white">📖 SSC</p>
        <p>Central Board of Secondary Education</p>
      </div>
      <span className="text-[#19B7A5] font-semibold">
        80%
      </span>
    </div>

  </div>

  <div className="pt-3 border-t border-white/10 text-sm">
    <p className="text-green-400 font-medium">
      🟢 Open to Software Engineering & AI/ML Opportunities
    </p>
    <p className="text-[#B9C7D3] mt-1">
      📍 Andhra Pradesh, India
    </p>
  </div>
  

</div>

              

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Hero;