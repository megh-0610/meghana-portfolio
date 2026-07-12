import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

import quantumImg from "../assets/images/quantum.png";
import autoPptImg from "../assets/images/auto_ppt_generator.png";
import zeroRiskImg from "../assets/images/zero_risk_riders.png";

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-[[#08131E] text-[#F7FAFC]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          subtitle="Portfolio"
          title="Featured Projects"
        />

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Quantum Dashboard */}
          <ProjectCard
            title="Quantum Dashboard"
            image={quantumImg}
            description="A full-stack quantum job tracking dashboard built with FastAPI, Qiskit, and IBM Quantum Runtime. Users can monitor quantum jobs, visualize execution status, and interact with quantum services through a modern web interface."
            tech={[
              "FastAPI",
              "Qiskit",
              "IBM Quantum",
              "HTML",
              "CSS",
            ]}
            github="https://github.com/megh-0610/Quantum_dashboard"
            live="https://rainbow-truffle-cb4852.netlify.app"
            
          />

          {/* Auto PPT Agent */}
          <ProjectCard
            title="Auto PPT Agent"
            image={autoPptImg}
            description="An AI-powered agent that automatically generates professional PowerPoint presentations from user prompts using LLM workflows and automation."
            tech={[
              "Python",
              "LLM",
              "Automation",
            ]}
            github="https://github.com/megh-0610/auto_ppt_generator"
          />

          {/* Zero Risk Riders */}
          <ProjectCard
            title="Zero Risk Riders"
            image={zeroRiskImg}
            description="An intelligent road safety platform focused on rider awareness and accident prevention using AI and modern software technologies."
            tech={[
              "Python",
              "AI",
              "Machine Learning",
            ]}
            github="https://github.com/megh-0610/alcohol_detection"
          />

        </div>

      </div>
    </section>
  );
}

export default Projects;