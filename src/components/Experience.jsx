import caliboLogo from "../assets/images/CALIBO_LOGO.png";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import SectionHeading from "./SectionHeading";


function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-[#08131E] text-[#F7FAFC]"
    >
      <div className="max-w-6xl mx-auto px-6">

        <SectionHeading
          subtitle="Journey"
          title="Professional Experience"
        />

        <div className="relative border-l-2 border-[#1A998F] ml-5">

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="ml-10 mb-16"
          >

            <div className="absolute -left-[15px] bg-[#1A998F] p-2 rounded-full">
              <FaBriefcase className="text-white" />
            </div>

            <div className="bg-[#155665]/40 backdrop-blur-xl rounded-3xl border border-[#1A998F]/20 p-8">

              <div className="flex items-start gap-5">

  <div className="w-20 h-20 rounded-2xl bg-white p-3 flex items-center justify-center shadow-lg">

    <img
      src={caliboLogo}
      alt="Calibo AI Academy"
      className="w-full h-full object-contain"
    />

  </div>

  <div className="flex-1">

    <div className="flex flex-wrap items-center gap-3">

      <h3 className="text-2xl font-bold text-white">
        AI & ML Intern
      </h3>

      <span className="px-3 py-1 rounded-full bg-[#1A998F]/20 text-[#1A998F] text-xs font-semibold">
        Internship
      </span>

    </div>

          <p className="text-[#1A998F] font-semibold mt-2">
            Calibo AI Academy
          </p>

          <p className="text-gray-400 text-sm mt-1">
            DEC 2025 – Present
          </p>

        </div>

      </div>

      <p className="mt-8 leading-8 text-[#C4CFCE]">
        Worked on enterprise AI applications and backend services,
        building AI-powered solutions using FastAPI, Large Language
        Models (LLMs), Docker, Kubernetes, and CI/CD pipelines.
        Contributed to scalable software systems and automation
        workflows in a collaborative development environment.
      </p>

              <div className="flex flex-wrap gap-3 mt-8">

                  {[
                    "FastAPI",
                    "Python",
                    "LLMs",
                    "AI/ML",
                    "Docker",
                    "Kubernetes",
                    "Git",
                    "CI/CD"
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-[#08131E] border border-[#1A998F]/20 text-[#19B7A5] text-sm"
                    >
                      {skill}
                    </span>
                  ))}

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Experience;