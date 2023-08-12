"use client";

import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className, children }) => {
  return (
    <Section id={id} className={cn("section", className)}>
      {children}
    </Section>
  );
};

export default Section;
