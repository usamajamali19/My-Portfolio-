export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'WordPress' | 'Frontend' | 'All';
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'wordpress' | 'tools' | 'other';
  level: number; // percentage
  icon: string; // Lucide icon name
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  description: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Usama Jamali",
    title: "Frontend & WordPress Developer",
    shortDescription: "Frontend & WordPress Developer with hands-on experience in HTML, CSS, Bootstrap, JavaScript (Basic), and WordPress.",
    longDescription: "Frontend & WordPress Developer with hands-on experience in HTML, CSS, Bootstrap, JavaScript (Basic), and WordPress. Skilled in developing custom responsive websites, WordPress websites, landing pages, and e-commerce solutions. Experienced in theme customization, plugin configuration, website maintenance, and modern web development practices. A quick learner with strong problem-solving skills and a passion for creating professional and user-friendly web experiences.",
    phone: "03073093516",
    email: "usamajamali284@gmail.com",
    location: "Karachi",
    linkedin: "https://www.linkedin.com/in/usama-jamali-2681b5347",
    github: "https://github.com/usamajamali19",
    resumeUrl: "#", // placeholder for CV download
    avatar: "",
  },
  
  typingWords: [
    "Frontend Developer",
    "WordPress Developer",
    "Web Designer",
    "Freelancer"
  ],

  skills: [
    { name: "HTML5, CSS3, Bootstrap 5", category: "frontend", level: 95, icon: "FileCode" },
    { name: "JavaScript (Basic)", category: "frontend", level: 75, icon: "Cpu" },
    { name: "Responsive Web Design", category: "frontend", level: 95, icon: "Smartphone" },
    { name: "WordPress Development & Customization", category: "wordpress", level: 95, icon: "Layout" },
    { name: "Elementor & WooCommerce", category: "wordpress", level: 92, icon: "ShoppingBag" },
    { name: "Plugin Installation and Configuration", category: "wordpress", level: 90, icon: "Layers" },
    { name: "Website Maintenance", category: "other", level: 88, icon: "Activity" },
    { name: "SEO Basics", category: "other", level: 80, icon: "Search" },
    { name: "AI Tools", category: "tools", level: 85, icon: "Sparkles" },
    { name: "Problem Solving & Teamwork", category: "tools", level: 90, icon: "Users" }
  ] as Skill[],

  experiences: [] as ExperienceItem[],

  education: [
    {
      degree: "Bachelor of Information Technology",
      institution: "SBBU, SBA",
      period: "",
      description: ""
    },
    {
      degree: "Intermediate",
      institution: "GOVT FGRHS COLLEGE, NAWABSHAH",
      period: "",
      description: ""
    },
    {
      degree: "Matric",
      institution: "The Citizen Foundation (TCF), NAWABSHAH",
      period: "",
      description: ""
    }
  ] as EducationItem[],

  projects: [
    {
      id: "proj-1",
      title: "LevelFit",
      description: "A premium responsive fitness and workout tracking web application.",
      longDescription: "A sleek, highly interactive frontend application designed to help users track workouts, manage fitness plans, and achieve their health goals with a fully responsive interface.",
      category: "Frontend",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Responsive Web Design"],
      liveUrl: "https://s3t9tk.csb.app/public/levelfit.html",
      githubUrl: "https://github.com/usamajamali19",
      featured: true
    },
    {
      id: "proj-2",
      title: "Custom Web Application",
      description: "An interactive, fully responsive modern web application built with clean frontend technologies.",
      longDescription: "An optimized interactive web experience featuring modern responsive elements, high-fidelity typography, and seamless layout animations.",
      category: "Frontend",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      liveUrl: "https://yys3r4.csb.app/",
      githubUrl: "https://github.com/usamajamali19",
      featured: true
    }
  ] as Project[]
};
