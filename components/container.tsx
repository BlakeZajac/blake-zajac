"use client";

import { twMerge } from "tailwind-merge";

interface ContainerProps {
  className?: string;
  children?: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return (
    <div
      className={twMerge(
        "w-[90%] md:w-[95%] max-w-[1920px] mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
