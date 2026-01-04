// data/projects.ts
export type Project = {
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
  };
  
  export const projects: Project[] = [
    {
      title: "QuantumGuard: Quantum Readiness Analyzer",
      description: "A modern platform that helps you prepare for the post-quantum world: scan files, analyze URLs, and learn how quantum computing impacts security.",
      image: "/projects/quantumguard.png",
      tags: ["Python", "TypeScript", "Docker", "AWS"],
      link: "http://52.15.239.144/"
    },
    {
      title: "Preply: Your Personalized Interview Prep Companion",
      description: "A gamified technical interview preparation platform that helps people interested in tech roles (e.g. Software Engineering) create personalized study plans and stay motivated through their interview prep journey.",
      image: "/projects/preply.png",
      tags: ["Ruby on Rails", "PostgreSQL"],
      link: "https://preply-app-ebdbd7771f17.herokuapp.com/"
    },
    {
      title: "Lead Generation AI Assistant",
      description: "An AI-powered sales lead generation system that automates research, identifies target companies, and generates personalized outreach messages.",
      image: "/projects/tedlar.png",
      tags: ["Python", "AI Agents", "Prompt Engineering", "Perplexity API"],
      link: "https://github.com/Jason2657/DuPontTedlar_AI_Assistant"
    },
    {
      title: "VERSA (LAHacks 2024)",
      description: "An AI-powered research tool that evaluates scientific papers using advanced metrics, helping researchers identify reliable and reproducible studies.",
      image: "/projects/VERSA-LAHacks.jpeg",
      tags: ["Python", "React", "Flask", "Gemini API"],
      link: "https://devpost.com/software/versa-versatile-evaluation-research-synthesis-assistant"
    },
    {
      title: "Personal Website",
      description: "A personal portfolio website built to showcase my projects and learn modern web development fundamentals.",
      image: "/projects/personal-website.png",
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      link: "https://github.com/Jason2657/portfolio-website"
    },
    {
      title: "Reprobot (YaleHacks 2024)",
      description: "An AI chatbot that interprets everyday health descriptions into precise medical terminology, helping bridge the communication gap between patients and healthcare providers.",
      image: "/projects/reprobot.png",
      tags: ["Python", "React", "Hugging Face", "OpenAI API"],
      link: "https://devpost.com/software/repro-health-companion-bot"
    },
  ];