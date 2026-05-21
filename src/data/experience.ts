export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    role: "Software Engineer (Frontend)",
    company: "RESE",
    period: "Jan 2022 — Present",
    description:
      "Contributed to building a secure and efficient digital platform for real estate investments. Developed user interfaces for the Storefront, admin dashboard, and RESE website, ensuring a seamless experience for banks, developers, and users.",
    skills: ["GitHub", "Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    role: "Software Engineer (Frontend)",
    company: "Faramove",
    period: "Feb 2023 — Nov 2025",
    description:
      "Collaborated with the team on four projects: Roppi, Kary, Box, and Flowly. Built and improved admin and merchant dashboards, delivering features for store management, orders, and payments.",
    skills: ["Tailwind CSS", "Zustand", "React", "TypeScript"],
  },
  {
    role: "Software Engineer (Frontend)",
    company: "Solv",
    period: "Apr 2025 — Sep 2025",
    description:
      "Contributed to the development of the admin and workers dashboards, enhancing the platform that connects workers with paid gigs in the entertainment industry.",
    skills: ["React.js", "Vite", "TypeScript", "Tailwind CSS"],
  },
  {
    role: "Software Engineer (Frontend) & Content Contributor",
    company: "Audiopedia (Open Source for Equality)",
    period: "Oct 2022 — Nov 2022",
    description:
      "Participated in the She Code Africa Hackfest. Contributed to the Audiopedia open-source platform, converting designs into accessible web interfaces using HTML, CSS, and JavaScript.",
    skills: ["GitHub", "HTML", "CSS", "JavaScript"],
  },
];
