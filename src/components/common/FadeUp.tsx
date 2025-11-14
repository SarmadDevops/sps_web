import React, { useEffect } from "react";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";

interface Props {
  children: React.ReactNode;
  duration?: number; 
  delay?: number;   
  className?: string;
}

const FadeUpAOS: React.FC<Props> = ({
  children,
  duration = 2500,
  delay = 0,
  className = "",
}) => {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration={duration}
      data-aos-delay={delay}
      className={className}
    >
      {children}
    </div>
  );
};

export default FadeUpAOS;
