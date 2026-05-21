import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PortfolioCard from "../components/shared/PortfolioCard";
import ImageProp from "../components/shared/ImageProp";
import { projects } from "../data/projects";
import { experiences } from "../data/experience";
import resumePdf from "../assets/document/Noimot_Alabi_Resume_Blue.pdf";

const sections = ["about", "experience", "projects"] as const;
type Section = (typeof sections)[number];

const Home = () => {
  const [activeSection, setActiveSection] = useState<Section>("about");
  const sectionRefs = useRef<Record<Section, HTMLElement | null>>({
    about: null,
    experience: null,
    projects: null,
  });

  const featuredProjects = projects.filter((p) => p.featured);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const el = sectionRefs.current[section];
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section);
          }
        },
        { rootMargin: "-20% 0px -60% 0px" },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToSection = (section: Section) => {
    sectionRefs.current[section]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pt-20 lg:pt-0">
      <div className="lg:flex lg:justify-between lg:gap-4 px-10 lg:px-28 xl:px-32">
        {/* Left Column - Sticky */}
        <div className="lg:sticky lg:top-0 lg:flex lg:flex-col lg:justify-between lg:w-[45%] lg:max-h-screen lg:py-24 py-12">
          <div>
            {/* Hero Info */}
            <div className="mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Noimot Alabi
              </h1>
              <h2 className="text-lg sm:text-xl font-medium mt-3 text-[#007591]">
                Frontend Developer
              </h2>
              <p className="text-[#4A5568] dark:text-[#C2D1D6] mt-4 max-w-[300px] leading-relaxed">
                I build accessible, pixel-perfect experiences for the web.
              </p>
            </div>

            {/* Section Nav - Desktop only */}
            <nav className="hidden lg:flex flex-col gap-y-5">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="flex items-center gap-x-4 group text-left"
                >
                  <span
                    className={`inline-block h-[1px] transition-all duration-300 ${
                      activeSection === section
                        ? "w-16 bg-current"
                        : "w-8 bg-[#596D73] group-hover:w-16 group-hover:bg-current"
                    }`}
                  />
                  <span
                    className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                      activeSection === section
                        ? ""
                        : "text-[#596D73] group-hover:text-current"
                    }`}
                  >
                    {section}
                  </span>
                </button>
              ))}
            </nav>
          </div>

          {/* Social Icons */}
          <div className="flex gap-x-5 items-center mt-16 lg:mt-0">
            <a
              href="https://twitter.com/adooniade"
              target="_blank"
              rel="noreferrer"
            >
              <ImageProp src="/icons/twitter-x.svg" imgClassName="w-5 h-5" />
            </a>
            <a href="mailto:kikkyal@gmail.com" target="_blank" rel="noreferrer">
              <ImageProp src="/icons/mail.svg" imgClassName="w-5 h-5" />
            </a>
            <a
              href="https://www.notion.so/Noimot-Alabi-6396693475fc4e31bc24c92a54a701bb?pvs=4"
              target="_blank"
              rel="noreferrer"
            >
              <ImageProp src="/icons/notion.png" imgClassName="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/noimot-alabi-996227129/"
              target="_blank"
              rel="noreferrer"
            >
              <ImageProp src="/icons/linkedin.svg" imgClassName="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/alabi_neema/"
              target="_blank"
              rel="noreferrer"
            >
              <ImageProp src="/icons/instagram.svg" imgClassName="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Column - Scrollable */}
        <div className="lg:w-[55%] lg:pt-24 pb-24 space-y-20">
          {/* About Section */}
          <section
            id="about"
            ref={(el) => {
              sectionRefs.current.about = el;
            }}
          >
            <p className="text-[#4A5568] dark:text-[#C2D1D6] leading-7">
              I'm a dedicated Frontend Developer with experience crafting
              dynamic interfaces for various applications, including real
              estate, logistics, e-commerce, and gig marketplace. Proficient in
              HTML, CSS, JavaScript, React, Next.js, Nuxt.js, Vite, Tailwind
              CSS, Node.js, and TypeScript. I'm passionate about building
              accessible, user-friendly, and pixel-perfect applications, open
              source contributions, continuous learning and mentoring.
            </p>
            <p className="text-[#4A5568] dark:text-[#C2D1D6] leading-7 mt-4">
              I build exceptional applications by focusing on user experience,
              accessibility, and aesthetics, with a deep understanding of the
              fundamental requirements for the product.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-x-1 mt-6 text-[#007591] hover:text-[#8E07CD] transition duration-300 font-medium group"
            >
              View more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-1"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </section>

          {/* Experience Section */}
          <section
            id="experience"
            ref={(el) => {
              sectionRefs.current.experience = el;
            }}
          >
            <div className="space-y-10">
              {experiences.map((exp) => (
                <div
                  key={`${exp.company}-${exp.period}`}
                  className="group relative grid sm:grid-cols-[140px_1fr] gap-x-6 gap-y-1 p-4 -mx-4 rounded-lg transition-colors duration-200 hover:bg-black/5 dark:hover:bg-white/5"
                >
                  <p className="text-xs font-medium text-[#596D73] uppercase tracking-wide pt-1 whitespace-nowrap">
                    {exp.period}
                  </p>
                  <div>
                    <h3 className="font-medium leading-snug">
                      {exp.role} &middot;{" "}
                      <span className="text-[#007591]">{exp.company}</span>
                    </h3>
                    <p className="text-[#4A5568] dark:text-[#C2D1D6] text-sm leading-relaxed mt-2">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs rounded-full bg-[#007591]/10 text-[#007591] font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <a
              href={resumePdf}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-x-2 mt-10 font-medium text-[#007591] hover:text-[#8E07CD] transition duration-300 group"
            >
              View full résumé
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </section>

          {/* Projects Section */}
          <section
            id="projects"
            ref={(el) => {
              sectionRefs.current.projects = el;
            }}
          >
            <div className="grid gap-7">
              {featuredProjects.map((project) => (
                <div className="rounded-md" key={project.name}>
                  <PortfolioCard
                    paragraph={project.paragraph}
                    name={project.name}
                    bgImage={project.bgImage}
                    link={project.link}
                    skills={project.skills}
                  />
                </div>
              ))}
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-x-1 mt-8 font-medium text-[#007591] hover:text-[#8E07CD] transition duration-300 group"
            >
              View all projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-1"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </section>

          {/* Footer Note */}
          <p className="text-sm text-[#596D73] pt-8 leading-relaxed">
            Inspired by{" "}
            <a
              href="https://brittanychiang.com"
              target="_blank"
              rel="noreferrer"
              className="text-[#007591] hover:text-[#8E07CD] transition duration-300"
            >
              Brittany Chiang's and adhamdannaway's portfolios
            </a>
            , with some pages designed in Stitch. Built with{" "}
            <span className="text-[#007591]">React</span> and{" "}
            <span className="text-[#007591]">Tailwind CSS</span>, deployed on{" "}
            <span className="text-[#007591]">Vercel</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
