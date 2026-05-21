import React, { useRef, useEffect, useCallback } from "react";
import AboutDetail from "../shared/AboutDetail";
import { StarIcon } from "../shared/Star";
import Animate from "../shared/Animate";

const galleryImages = [
  "/about-images/sca.jpg",
  "/about-images/T4D.jpg",
  "/about-images/namlas.jpg",
  "/about-images/sca22.jpg",
  "/about-images/T4D_0345.jpg",
  "/about-images/namlas2.jpg",
  "/about-images/sca2022.jpg",
  "/about-images/T4D_0349.jpg",
];

const stories = [
  {
    title: "SCA Hackfest 2022",
    images: ["/about-images/sca.jpg", "/about-images/sca22.jpg", "/about-images/sca2022.jpg"],
    description:
      'I had the opportunity to participate in the She Code Africa Hackfest in collaboration with "Open Source for Equality." Alongside two talented UI/UX designers and a developer, I contributed to the Audiopedia open-source platform by working on content focused on child upbringing and positive behavioral development for children. Our team was the second runner-up.',
  },
  {
    title: "Tech4Dev Alumni Talk",
    images: ["/about-images/T4D.jpg", "/about-images/T4D_0345.jpg", "/about-images/T4D_0349.jpg"],
    description:
      "Tech4Dev invited some of their alumni to speak to young secondary school girls about tech inclusivity — encouraging them to explore careers in technology and breaking stereotypes around women in STEM.",
  },
  {
    title: "LASU Law Panel",
    images: ["/about-images/namlas.jpg", "/about-images/namlas2.jpg"],
    description:
      "I was invited as a panelist at LASU Law Students' forum to speak to women about leveraging technology — encouraging them to embrace tech skills and not limit themselves to traditional career paths.",
  },
];

const ImageSlider = ({ images, alt, interval = 3000 }: { images: string[]; alt?: string; interval?: number }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);

  const scrollNext = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const children = container.children;
    if (!children.length) return;

    indexRef.current = (indexRef.current + 1) % children.length;
    const child = children[indexRef.current] as HTMLElement;
    container.scrollTo({ left: child.offsetLeft - container.offsetLeft, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const id = setInterval(scrollNext, interval);
    return () => clearInterval(id);
  }, [scrollNext, interval]);

  return (
    <div
      ref={scrollRef}
      className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2 -mx-2 px-2"
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="flex-shrink-0 w-[250px] h-[180px] snap-center overflow-hidden rounded-xl"
        >
          <img
            src={src}
            alt={alt || ""}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      ))}
    </div>
  );
};

const About = () => {
  return (
    <main
      className="mx-10 lg:mx-28 xl:mx-[150px] relative mt-20 z-10"
      id="about"
    >
      <div className="flex items-center gap-x-2 pb-1">
        <StarIcon color="#007591" />
        <p className="text-[#007591] leading-5 text-base font-bold">About</p>
        <StarIcon color="#007591" />
      </div>
      <h1 className="text-[#1A1A2E] dark:text-white font-bold tracking-[0.2px] leading-12 text-4xl uppercase pb-8">
        get to know me
      </h1>

      {/* Intro */}
      <Animate type="fade-up">
        <section className="space-y-5 max-w-3xl">
          <p className="text-[#4A5568] dark:text-[#C2D1D6] leading-8">
            I'm a Computer Science graduate whose journey into software
            development began during NYSC in 2017. What started as curiosity
            quickly became a passion — and I haven't looked back since.
          </p>
          <p className="text-[#4A5568] dark:text-[#C2D1D6] leading-8">
            Today, I'm a Frontend Developer who has worked across{" "}
            <span className="text-[#1A1A2E] dark:text-white font-medium">real estate</span>,{" "}
            <span className="text-[#1A1A2E] dark:text-white font-medium">logistics</span>,{" "}
            <span className="text-[#1A1A2E] dark:text-white font-medium">e-commerce</span>, and{" "}
            <span className="text-[#1A1A2E] dark:text-white font-medium">gig marketplace</span>{" "}
            platforms, building accessible, user-friendly applications with
            React, Next.js, Vite, Nuxt.js, Tailwind CSS, TypeScript, Node.js,
            and MongoDB.
          </p>
          <p className="text-[#4A5568] dark:text-[#C2D1D6] leading-8">
            Beyond building products, I'm passionate about giving back. I
            mentored aspiring developers at{" "}
            <span className="text-[#1A1A2E] dark:text-white font-medium">WebFALA Digital Limited</span>{" "}
            (2023–2024) and volunteered to teach JavaScript fundamentals at{" "}
            <span className="text-[#1A1A2E] dark:text-white font-medium">Codevixens</span> in
            2024. In the same year, I co-founded{" "}
            <span className="text-[#1A1A2E] dark:text-white font-medium">Open Nest Africa</span>{" "}
            alongside three amazing women after we collaborated during the
            "SCA x Made in Nigeria" Hacktoberfest contribution.
          </p>
        </section>
      </Animate>

      <hr className="mt-10 border-[#D1D9DE] dark:border-[#2b2c2c]" />

      <Animate type="fade-up" delay={100}>
        <div className="mt-10">
          <ImageSlider images={galleryImages} alt="About gallery" />
        </div>
      </Animate>

      <hr className="mt-10 border-[#D1D9DE] dark:border-[#2b2c2c]" />

      <div className="mt-16 space-y-20">
        {stories.map((story, index) => (
          <Animate type="fade-up" delay={index * 150} key={story.title}>
            <div
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center`}
            >
              {/* Image Slider */}
              <div className="lg:w-[55%] w-full">
                <ImageSlider images={story.images} alt={story.title} />
              </div>

              {/* Text */}
              <div className="lg:w-[45%] w-full space-y-4">
                <h3 className="text-[#1A1A2E] dark:text-white text-2xl font-bold">
                  {story.title}
                </h3>
                <p className="text-[#4A5568] dark:text-[#C2D1D6] leading-7 text-sm">
                  {story.description}
                </p>
              </div>
            </div>
          </Animate>
        ))}
      </div>

      <Animate type="fade-up" delay={300}>
        <section className="mt-16 px-4 sm:px-10 py-7 rounded-xl border border-solid border-[#D1D9DE] dark:border-[#596D73] bg-[#FFFFFF] dark:bg-[#030E12]">
          <h2 className="text-[#1A1A2E] dark:text-white tracking-[0.12px] leading-8 font-bold text-2xl capitalize pb-6">
            Expertise
          </h2>
          <div className="md:space-y-10 space-y-4">
            <div className="flex gap-y-4 flex-col md:gap-x-2 md:flex-row">
              <AboutDetail text="Developing user-friendly and responsive web applications using HTML, CSS, JavaScript, React, Typescript, SASS, etc." />
              <AboutDetail text="Collaborating with UX/UI designers to ensure the design and functionality of the web application meet user needs." />
              <AboutDetail text="Writing clean and efficient code that adheres to industry standards and best practices." />
            </div>
            <div className="flex md:px-20 gap-y-4 flex-col md:gap-x-2 md:flex-row">
              <AboutDetail text="Converting designs into precise, accessible, and responsive web applications." />
              <AboutDetail text="Testing the web application to ensure compatibility across devices and browsers." />
            </div>
            <div className="flex gap-y-4 flex-col md:gap-x-2 md:flex-row">
              <AboutDetail text="Maintaining and updating the web application to ensure it remains current and functional." />
              <AboutDetail text="Staying up-to-date with emerging trends and technologies in frontend development." />
              <AboutDetail text="Open source enthusiast" />
            </div>
          </div>
        </section>
      </Animate>
    </main>
  );
};

export default About;
