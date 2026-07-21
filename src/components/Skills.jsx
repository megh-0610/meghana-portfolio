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
  title="Programming Languages"
  skills={[
    "Python",
    "Java",
    "JavaScript",
    "SQL",
  ]}
/>

<SkillCategory
  title="AI & Machine Learning"
  skills={[
    "Machine Learning",
    "LLMs",
    "RAG",
    "Prompt Engineering",
    "Scikit-learn",
  ]}
/>

<SkillCategory
  title="Backend Development"
  skills={[
    "FastAPI",
    "REST APIs",
    "API Integration",
    "Authentication",
  ]}
/>

<SkillCategory
  title="Frontend Development"
  skills={[
    "React",
    "HTML5",
    "Tailwind CSS",
    "Framer Motion",
  ]}
/>

<SkillCategory
  title="Cloud & DevOps"
  skills={[
    "Docker",
    "Kubernetes",
    "Git",
    "CI/CD",
  ]}
/>

<SkillCategory
  title="Developer Tools"
  skills={[
    "GitHub",
    "VS Code",
    "Postman",
    "Netlify",
  ]}

          />

        </div>

      </div>
    </section>
  );
}

export default Skills;