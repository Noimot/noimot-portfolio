export interface Project {
  name: string;
  paragraph: string;
  bgImage: string;
  link?: string;
  featured?: boolean;
  skills: string[];
}

export const projects: Project[] = [
  {
    name: "Rese",
    paragraph:
      "RESE provides digital infrastructure to enable real estate investment and sales transactions",
    bgImage: "bg-rese",
    link: "https://rese.africa/",
    featured: true,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Rese Storefront",
    paragraph:
      "RESE storefront where storefront owners list properties and enable real estate investment and transactions",
    bgImage: "bg-rese-storefront",
    link: "http://dlight.dev.rese.africa/",
    skills: ["React", "Next.js", "TypeScript"],
  },
  {
    name: "Roppi",
    paragraph:
      "Your one-stop shop is now at your fingertips. Beauty stores. Radiance at it's peak with a tap. Restaurant. Your favourite food, delivered fast.",
    bgImage: "bg-roppi",
    link: "https://admin.roppi.co/login",
    featured: true,
    skills: ["React", "Tailwind CSS", "Zustand", "TypeScript"],
  },
  {
    name: "Rese Admin",
    paragraph:
      "The admin dashboard provides a comprehensive view of all storefront owner activities, including storefront operations, offer management, settings, and storefront configuration",
    bgImage: "bg-rese-admin",
    link: "http://dlight.admin.dev.rese.africa/auth/login",
    skills: ["React", "Next.js", "TypeScript"],
  },
  {
    name: "Thembani",
    paragraph:
      "The Thembani app is a bilingual loan application, written in: Portuguese and English",
    bgImage: "bg-thembani",
    link: "https://thembani.netlify.app/login",
    skills: ["React", "Tailwind CSS", "TypeScript"],
  },
  {
    name: "Recipe App",
    paragraph:
      "The app includes a search functionality to easily find recipes, and it leverages MongoDB Atlas for efficient data management, ensuring the system is scalable and secure.",
    bgImage: "bg-recipe-app",
    link: "https://recipe-app-henna-theta.vercel.app/",
    skills: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    name: "Portfolio",
    paragraph: "Portfolio",
    bgImage: "bg-alim",
    link: "https://alims-portfolio.vercel.app/",
    skills: ["React", "Tailwind CSS"],
  },
  {
    name: "Pandamedical Chat",
    paragraph:
      "The PandaMedical app enables patients to schedule appointments with doctors and facilitates seamless communication between healthcare providers and patients.",
    bgImage: "bg-pandamedical",
    skills: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Solv Admin",
    paragraph:
      "The admin dashboard for managing workers, gigs, and platform operations in the entertainment industry.",
    bgImage: "bg-solv-admin",
    link: "https://admin.trysolv.com/login",
    skills: ["React", "Vite", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Solv Worker",
    paragraph:
      "A platform that connects workers with paid gigs in the entertainment industry.",
    bgImage: "bg-solv-worker",
    link: "https://solvers.trysolv.com/",
    skills: ["React", "Vite", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Miatech",
    paragraph:
      "Empowering businesses with innovative, scalable, and user-friendly software solutions tailored to thrive in a digital world",
    bgImage: "bg-miatech",
    link: "https://miatech.com.ng/",
    featured: true,
    skills: ["React", "Tailwind CSS", "TypeScript"],
  },
];
