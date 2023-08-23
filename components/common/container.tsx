"use client";

import { twMerge } from "tailwind-merge";

interface ContainerProps {
  className?: string;
  children?: React.ReactNode;
  spacingSm?: boolean;
  spacingMd?: boolean;
  spacingLg?: boolean;
  spacingXl?: boolean;
  spacing2xl?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  className,
  children,
  spacingSm,
  spacingMd,
  spacingLg,
  spacingXl,
  spacing2xl,
}) => {
  return (
    <div
      className={twMerge(
        `w-[90%] md:w-[95%] max-w-[1920px] mx-auto
        ${spacingSm ? "pt-8 md:pt-16" : ""}
        ${spacingMd ? "pt-12 md:pt-20" : ""}
        ${spacingLg ? "pt-16 md:pt-24" : ""}
        ${spacingXl ? "pt-20 md:pt-28" : ""}
        ${spacing2xl ? "pt-24 md:pt-32" : ""}`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
