# CLAUDE.md

# Meghana Portfolio – Development Guide

This document defines the architecture, design principles, coding standards, and modification rules for the portfolio project. Any future changes must follow these guidelines to preserve consistency, maintainability, and visual quality.

---

# Project Objective

Develop a premium, modern, and highly interactive portfolio website that showcases Meghana's expertise in Artificial Intelligence, Machine Learning, Backend Development, Quantum Computing, Research, and Leadership. The portfolio should be visually impressive while maintaining excellent performance and responsiveness.

The website should feel professional enough for recruiters, research labs, hackathons, internships, and IEEE paper submissions.

---

# Tech Stack

## Frontend

- React
- Vite
- JavaScript (ES6+)
- Tailwind CSS
- Framer Motion
- React Icons
- React Router DOM

---

## Styling & UI

- Tailwind CSS
- Glassmorphism UI
- CSS Variables
- Responsive Grid Layout
- Custom Animations
- Gradient Effects
- Dark Theme

---

## Development Tools

- ESLint
- Prettier
- npm
- Git
- GitHub
- Netlify

---

## Design

- Mobile First Design
- Responsive Layout
- Component Based Architecture
- Reusable UI Components
- Smooth Scroll Navigation

---

# Project Structure

```
meghana-portfolio/
│
├── CLAUDE.md
├── README.md
├── package.json
├── vite.config.js
├── jsconfig.json
├── index.html
│
├── public/
│   ├── resume.pdf
│   ├── favicon.ico
│   └── assets
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   ├── data/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
└── images/
```

---

# Folder Responsibilities

## assets/

Contains

- Hero image
- Profile photo
- Project screenshots
- Background graphics
- Logos

---

## data/

Single source of truth for all dynamic content.

Contains

- Personal Information
- Skills
- Projects
- Experience
- Certifications
- Publications
- Leadership
- Contact Information
- Social Links

---

## components/

Contains reusable UI components such as

- Navbar
- Hero
- About
- Skills
- Experience
- Projects
- Certifications
- Leadership
- Contact
- Footer
- Buttons
- Cards
- Timeline
- SectionTitle

Every component should remain modular and reusable.

---

## hooks/

Contains reusable custom hooks.

Examples

- useScrollAnimation
- useTheme
- useTypingAnimation

---

## utils/

Contains helper functions.

Examples

- Animation utilities
- Formatting functions
- Scroll helpers

---

## styles/

Contains

- Tailwind customization
- Theme variables
- Typography styles

---

# Portfolio Sections

The order of sections should remain:

1. Hero
2. About
3. Technical Skills
4. Experience
5. Projects
6. Research & Publications
7. Leadership & Extracurricular Activities
8. Certifications
9. Contact
10. Footer

---

# About Section

The About section should introduce:

- AI & ML Engineering student
- Backend Developer
- AI Research Enthusiast
- Quantum Computing Enthusiast
- IEEE Research Aspirant
- Problem Solver
- Passion for building scalable AI systems

The content should feel professional rather than generic.

---

# Leadership & Extracurricular Activities

Create a dedicated section instead of adding everything inside Experience.

This section should highlight leadership, discipline, teamwork, and community involvement.

Include:

## National Cadet Corps (NCC)

Display as one of the major leadership experiences.

Suggested content:

**National Cadet Corps (NCC)**

- Active NCC Cadet
- Developed leadership and decision-making skills
- Participated in drills, camps, and training activities
- Worked in disciplined team environments
- Improved communication and coordination
- Strengthened responsibility, time management, and resilience

Display using a professional timeline or achievement card.

---

# Skills Section

Categorize the skills instead of showing one large list.

## Programming Languages

- Python
- Java
- JavaScript
- SQL
- C

---

## AI / Machine Learning

- Machine Learning
- Deep Learning
- NLP
- LLMs
- RAG
- Prompt Engineering
- Scikit-Learn
- Pandas
- NumPy

---

## Backend Development

- FastAPI
- REST APIs
- Authentication
- API Integration

---

## Frontend Development

- React
- HTML5
- CSS3
- Tailwind CSS
- Framer Motion

---

## Databases

- MySQL
- SQLite

---

## Quantum Computing

- Qiskit
- IBM Quantum Runtime

---

## Developer Tools

- Git
- GitHub
- VS Code
- Postman
- Netlify

---

## Research

- IEEE Paper Writing
- Literature Review
- Research Methodology
- AI System Design

---

# Projects

Every project card should include

- Project Name
- Short Description
- Technologies Used
- GitHub Link
- Live Demo
- Key Features
- Challenges Solved

Display technology badges.

---

# Experience

Each experience should display

- Company
- Role
- Duration
- Responsibilities
- Technologies Used
- Major Contributions

Use timeline design.

---

# Certifications

Each certification should include

- Certificate Name
- Organization
- Completion Date
- Credential Link

---

# Contact

Include

- Email
- LinkedIn
- GitHub
- Resume Download
- Location

Use clean modern cards.

---

# Design Guidelines

Maintain:

- Glassmorphism
- Smooth animations
- Gradient accents
- Modern cards
- Rounded corners
- Soft shadows

Avoid clutter.

---

# Color Palette

Primary

- Purple (#6D28D9)

Secondary

- Indigo (#4F46E5)

Accent

- Cyan (#06B6D4)

Background

- #0A0A1C

Surface

- #111827

Text

- White

Muted Text

- Gray

---

# Animations

Use Framer Motion for

- Hero entry
- Scroll reveal
- Timeline animations
- Card hover
- Section transitions
- Navbar transitions

Animations should remain smooth and lightweight.

---

# Performance

Maintain

- Lazy Loading
- Code Splitting
- Optimized Images
- Responsive Images
- Minimal Bundle Size

---

# SEO

Maintain

- Meta Tags
- Open Graph Tags
- Structured Headings
- Accessible Images
- Semantic HTML

---

# Development Rules

## DO

- Keep components reusable.
- Maintain existing architecture.
- Preserve animations.
- Use Tailwind CSS utilities.
- Keep code modular.
- Follow current folder structure.
- Use consistent spacing and typography.
- Maintain responsive behavior.

---

## DO NOT

- Rewrite the project architecture.
- Remove animations.
- Break component hierarchy.
- Replace Tailwind with plain CSS.
- Introduce unnecessary libraries.
- Duplicate components.
- Change the established color palette.

---

# Future Enhancements

The architecture should support future additions such as

- Research Publications
- IEEE Papers
- Blogs
- Technical Articles
- Achievements
- Hackathons
- Open Source Contributions
- Competitive Programming
- AI Demonstrations
- Interactive Project Showcases
- Downloadable Resume
- Visitor Analytics

---

# Overall Goal

The final portfolio should represent an AI & Machine Learning Engineer with strong software development skills, research interests, leadership through NCC, backend expertise, and modern frontend capabilities. It should be visually polished, recruiter-friendly, and scalable for future additions while preserving the current architecture and design philosophy.