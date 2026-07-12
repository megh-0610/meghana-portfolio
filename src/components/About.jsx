import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaBrain,
  FaRobot,
  FaServer,
  FaAtom,
  FaMapMarkerAlt,
} from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const highlights = [
  {
    icon: <FaBrain />,
    title: "Artificial Intelligence",
    desc: "Building intelligent systems using Machine Learning and LLMs.",
  },
  {
    icon: <FaRobot />,
    title: "AI Agents",
    desc: "Developing autonomous AI agents and workflow automation.",
  },
  {
    icon: <FaServer />,
    title: "Backend Engineering",
    desc: "Scalable REST APIs using FastAPI and Python.",
  },
  {
    icon: <FaAtom />,
    title: "Quantum Computing",
    desc: "Exploring quantum algorithms using IBM Qiskit.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="py-28 bg-[#08131E] text-[#F7FAFC]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          subtitle="About Me"
          title="Building AI That Solves Real Problems"
        />

        <div className="grid lg:grid-cols-2 gap-14 mt-16 items-center">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <h3 className="text-4xl font-bold leading-tight mb-6">
              Final-Year AI & ML Student
            </h3>

            <p className="text-lg leading-9 text-gray-300">
              I'm passionate about building AI-powered applications that solve
              real-world problems. My interests include Large Language Models,
              AI Agents, Backend Development, Cloud Technologies, and Quantum
              Computing.
            </p>

            <p className="text-lg leading-9 text-gray-300 mt-6">
              During my internship at Calibo AI Academy, I worked on FastAPI,
              Docker, Kubernetes, enterprise AI applications, and intelligent
              automation systems.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-10">

              <div className="glass-card p-5">
                <FaUserGraduate className="text-3xl text-[#19B7A5] mb-3" />

                <h4 className="font-semibold text-lg">
                  Education
                </h4>

                <p className="text-gray-400 mt-2">
                  B.Tech CSE (AI & ML)
                </p>
              </div>

              <div className="glass-card p-5">
                <FaMapMarkerAlt className="text-3xl text-[#19B7A5] mb-3" />

                <h4 className="font-semibold text-lg">
                  Location
                </h4>

                <p className="text-gray-400 mt-2">
                  Andhra Pradesh, India
                </p>
              </div>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="grid gap-6"
          >

            {highlights.map((item, index) => (

              <div
                key={index}
                className="glass-card p-6 hover:border-[#102E3C] transition duration-300"
              >

                <div className="flex gap-5">

                  <div className="text-3xl text-[#19B7A5]">
                    {item.icon}
                  </div>

                  <div>

                    <h3 className="text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 mt-2 leading-7">
                      {item.desc}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;