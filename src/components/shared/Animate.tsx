import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Animate = ({ children, type, className, delay }: { children: React.ReactNode; type: string; className?: string; delay?: number }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return <div data-aos={type} data-aos-delay={delay} className={className}>{children}</div>;
};

export default Animate;
