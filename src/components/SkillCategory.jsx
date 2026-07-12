import { motion } from "framer-motion";

function SkillCategory({ title, skills }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-[#155665]/40 backdrop-blur-xl border border-[#1A998F]/20 rounded-3xl p-7"
    >
      <h3 className="text-2xl font-bold text-white mb-6">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-full bg-[#1A998F]/15 border border-[#1A998F]/30 text-[#C4CFCE] hover:bg-[#1A998F] hover:text-white transition duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default SkillCategory;
