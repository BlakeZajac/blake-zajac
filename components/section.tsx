"use client";

import { twMerge } from "tailwind-merge";

interface SectionProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className, children }) => {
  const Element = elementType || "div";

  return (
    <Section id={id} className={twMerge("section", className)}>
      {children}
    </Section>
  );
};

export default Section;
