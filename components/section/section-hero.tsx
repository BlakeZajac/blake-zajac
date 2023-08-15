"use client";

import Image from "next/image";

import Section from "@/components/section";
import Badge from "@/components/badge";
import Container from "../container";

import heroAccent from "../../public/img/global/icons/icon-accent.svg";
import badgeImage from "../../public/img/global/icons/icon-aus.svg";

interface HeroProps {
  heroImage?: any;
  headingBeforeText?: string;
  headingAfterText?: string;
}

const Hero: React.FC<HeroProps> = ({
  heroImage,
  headingBeforeText,
  headingAfterText,
}) => {
  return (
    <Section className="hero">
      <Container className="pt-20">
        <div className="pb-8">
          <h1 className="heading-xl">
            {headingBeforeText}
            <div className="inline-block">
              <Image
                src={heroImage}
                alt="Headshot"
                className="mx-4 w-[100px] h-[100px] border border-black rounded-full"
              />
              <Image
                src={heroAccent}
                alt=""
                className="!absolute top-[-1.5rem] left-0 h-[2rem]"
              />
            </div>
            {headingAfterText}
          </h1>
        </div>

        <div className="flex gap-x-4">
          <Badge dotColor="bg-green" text="Open to remote work" />
          <Badge image={badgeImage} text="Newcastle, Australia" />
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
