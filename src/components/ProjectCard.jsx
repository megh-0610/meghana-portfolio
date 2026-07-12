import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({
  title,
  image,
  description,
  tech,
  github,
  live,
  featured = false,
}) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className={`rounded-3xl overflow-hidden border backdrop-blur-xl transition-all duration-300
      ${
        featured
          ? "border-[#1A998F] bg-[#155665]/50 shadow-[0_0_30px_rgba(26,153,143,0.2)]"
          : "border-[#1A998F]/20 bg-[#155665]/30"
      }`}
    >
      {featured && (
        <span className="absolute mt-5 ml-5 px-3 py-1 rounded-full bg-[#1A998F] text-white text-xs font-semibold z-10">
          ⭐ Featured
        </span>
      )}

      {/* Project Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-contain bg-[#0B1F2A] p-4 transition duration-500 hover:scale-105"
        />
      </div>

      <div className="p-8">

        <h3 className="text-2xl font-bold text-white mb-4">
          {title}
        </h3>

        <p className="text-[#C4CFCE] leading-7">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1 rounded-full bg-[#1A998F]/20 border border-[#1A998F]/20 text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-5 mt-8">

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[#1A998F] hover:text-white transition"
          >
            <FaGithub />
            GitHub
          </a>

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-[#1A998F] hover:text-white transition"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          )}

        </div>

      </div>

    </motion.div>
  );
}

export default ProjectCard;