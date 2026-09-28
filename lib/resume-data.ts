export interface ResumeData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website?: string;
  socials: {
    github: string;
    linkedin: string;
    instagram?: string;
  };
  summary: string;
  experience: WorkExperience[];
  education: Education[];
  certifications: string[];
  skills: string[];
  languages: string[];
}

export interface WorkExperience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export const resumeData: ResumeData = {
  name: "Syed Qasim Ali",
  title: "Full-Stack Developer",
  email: "syedqasim963@gmail.com",
  phone: "+92 XXX XXXXXXX",
  location: "Pakistan",
  socials: {
    github: "https://github.com/s-q-ali",
    linkedin: "https://linkedin.com/in/s-qasim-ali",
    instagram: "https://www.instagram.com/syedqasim963",
  },
  summary:
    "Full-stack developer specializing in React, Next.js, Node.js, and AI media tooling. Passionate about building scalable web applications and automating video workflows.",
  experience: [
    {
      role: "Associate Software Developer",
      company: "Current",
      period: "2024 — Present",
      highlights: [
        "Full-stack development with React, Next.js, and Node.js",
        "Building AI media tools and video workflow automation",
        "API design and integration",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Freelance",
      period: "2022 — 2024",
      highlights: [
        "Built responsive web applications with React",
        "Integrated REST APIs and optimized performance",
        "Collaborated with clients on UI/UX design",
      ],
    },
  ],
  education: [
    {
      degree: "BS Computer Science",
      institution: "University",
      period: "2020 — 2024",
      details: "Focus on software engineering and web technologies",
    },
  ],
  certifications: [
    "Add your certifications here",
    "e.g., AWS Cloud Practitioner, Meta Frontend Developer",
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Python",
    "PHP",
    "Tailwind CSS",
    "Git",
    "Docker",
    "REST APIs",
    "AI Media Tools",
    "MCP",
  ],
  languages: ["English", "Urdu"],
};
