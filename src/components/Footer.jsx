function Footer() {
  return (
    <footer className="py-8 border-t border-[#1A998F]/20 bg-[#102E3C]">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <h2 className="text-xl font-bold text-white">
          R Meghana
        </h2>

        <p className="text-[#C4CFCE] mt-3 md:mt-0">
          © {new Date().getFullYear()} R Meghana. Built with React & Tailwind CSS.
        </p>

      </div>

    </footer>
  );
}

export default Footer;