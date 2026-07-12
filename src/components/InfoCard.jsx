import { motion } from "framer-motion";

function InfoCard({ icon, title, value }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-[#155665]/40 backdrop-blur-xl rounded-2xl border border-[#1A998F]/20 p-6"
    >
      <div className="text-4xl text-[#1A998F] mb-4">
        {icon}
        </div>

      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="text-[#C4CFCE] mt-2">
        {value}
      </p>
    </motion.div>
  );
}

export default InfoCard;