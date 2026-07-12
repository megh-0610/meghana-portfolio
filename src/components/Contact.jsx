import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import SectionHeading from "./SectionHeading";

function Contact() {
  return (
    <section id="contact" className="py-24 bg-[[#08131E] text-[#F7FAFC]">

      <div className="max-w-4xl mx-auto px-6 text-center">

        <SectionHeading
          subtitle="Let's Connect"
          title="Get In Touch"
        />

        <p className="text-lg text-[#C4CFCE] max-w-2xl mx-auto leading-8">
          I'm currently looking for AI, Machine Learning, Backend, and Software Engineering opportunities.
          Feel free to reach out if you'd like to collaborate or discuss exciting projects.
        </p>

        <div className="flex justify-center gap-8 mt-12 text-3xl">

         <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=meghanaravikumar17@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-[#19B7A5] text-black font-semibold hover:scale-050 transition"
          >
            Send Email
          </a>
          
          <a
            href="https://github.com/megh-0610"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#1A998F] transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/r-meghana-83983930b"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#1A998F] transition"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;