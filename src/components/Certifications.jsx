import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const certifications = [
  "Google Cloud Skill Boost - Cyber Security",
  "IBM - Generative AI in Action",
  "NPTEL - IOT and Embedded Systems",
  "NPTEL - Cyber Security and its privacy",
  "NPTEL - practical high performance computing",
  "Infosys Springboard - BASICS OF PYTHON",
  "Infosys Springboard - INTRODUCTION TO ARTIFICIAL INTELLIGENCE",
  "AWS Forage - Solution Architecture Job Simulation",
];

function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-[#08131E] text-[#F7FAFC]">
      <div className="max-w-6xl mx-auto px-6">

        <SectionHeading
          subtitle="Achievements"
          title="Certifications"
        />

        <div className="grid md:grid-cols-2 gap-6">

          {certifications.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#155665]/40 backdrop-blur-xl border border-[#1A998F]/20 rounded-3xl p-6 flex gap-5 items-center"
            >
              <FaCertificate className="text-4xl text-[#1A998F]" />

              <h3 className="text-white text-lg font-semibold">
                {item}
              </h3>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;