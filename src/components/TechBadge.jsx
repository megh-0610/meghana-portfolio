import { motion } from "framer-motion";

function TechBadge({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="px-4 py-2 rounded-full bg-[#155665]/80 backdrop-blur-md border border-[#1A998F]/40 text-[#C4CFCE] text-sm font-medium shadow-lg"
    >
      {children}
    </motion.div>
  );
}

export default TechBadge;