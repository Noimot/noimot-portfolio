import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Animate = ({ children, type, className }: { children: React.ReactNode; type: string, className?: string }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return <div data-aos={type} className={className}>{children}</div>;
};

export default Animate;
