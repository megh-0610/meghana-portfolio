import SectionHeading from "./SectionHeading";
import SkillCategory from "./SkillCategory";

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-[#08131E] text-[#F7FAFC]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          subtitle="Technologies"
          title="Tech Stack"
        />

        <div className="grid lg:grid-cols-2 gap-8">

          <SkillCategory
            title="AI & Machine Learning"
            skills={[
              "Python",
              "TensorFlow",
              "PyTorch",
              "LLMs",
              "RAG",
            ]}
          />

          <SkillCategory
            title="Backend Development"
            skills={[
              "FastAPI",
              "Flask",
              "REST APIs",
              "SQL",
            ]}
          />

          <SkillCategory
            title="Cloud & DevOps"
            skills={[
              "Docker",
              "Kubernetes",
              "Git",
              "Jenkins",
            ]}
          />

          <SkillCategory
            title="Quantum Computing"
            skills={[
              "Qiskit",
              "IBM Quantum",
            ]}
          />

        </div>

      </div>
    </section>
  );
}

export default Skills;