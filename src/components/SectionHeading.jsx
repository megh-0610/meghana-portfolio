import { motion } from "framer-motion";

function SectionHeading({ subtitle, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .7 }}
      className="text-center mb-12"
    >
      <p className="uppercase tracking-[6px] text-[#19B7A5] font-semibold">
        {subtitle}
      </p>

      <h2 className="text-5xl font-bold mt-3">
        {title}
      </h2>
    </motion.div>
  );
}

export default SectionHeading;