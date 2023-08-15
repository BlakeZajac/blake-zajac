import React from "react";
import Marquee from "react-fast-marquee";
import Section from "./section";
import Container from "./container";
import { twMerge } from "tailwind-merge";

interface MarqueeProps {
  className?: string;
  children?: React.ReactNode;
  dupeAndReverse?: boolean;
}

const CustomMarquee: React.FC<MarqueeProps> = ({
  className,
  children,
  dupeAndReverse,
}) => {
  const marqueeClasses = "overflow-hidden items-center";
  const marqueeSpeed = 50;
  const marqueeProps = {
    autoFill: true,
    className: twMerge(marqueeClasses, className),
    speed: marqueeSpeed,
  };

  return (
    <Section className="marquee">
      <Container className="!w-full flex flex-col gap-2 md:gap-3 pt-12 md:pt-20">
        <Marquee {...marqueeProps}>{children}</Marquee>

        {dupeAndReverse && (
          <Marquee {...marqueeProps} direction="right" speed={marqueeSpeed / 2}>
            {children}
          </Marquee>
        )}
      </Container>
    </Section>
  );
};

export default CustomMarquee;
