"use client";

import { twMerge } from "tailwind-merge";

interface SectionProps {
  elementType?: string;
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  elementType,
  id,
  className,
  children,
}) => {
  const Element = elementType || "div";

  return (
    <Element id={id} className={twMerge("section", className)}>
      {children}
    </Element>
  );
};

export default Section;
