"use client";

import Image from "next/image";

import Section from "@/components/common/Section";
import Badge from "@/components/common/Badge";
import Container from "./Container";

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
      <Container spacingLg>
        <div className="pb-8">
          <h1 className="heading-xl">
            <span className="mr-2 sm:m-0">{headingBeforeText}</span>
            <div className="inline-block">
              {heroImage && (
                <>
                  <Image
                    src={heroImage}
                    alt="Headshot"
                    className="hidden sm:block mx-2 md:mx-4 w-[64px] md:w-[100px] h-[64px] md:h-[100px] border border-black rounded-full"
                    loading="lazy"
                  />

                  <Image
                    src={heroAccent}
                    alt=""
                    className="!absolute hidden sm:block top-[-1rem] md:top-[-1.5rem] left-[-1rem] md:left-0 h-[1.5rem] md:h-[2rem]"
                    loading="lazy"
                  />
                </>
              )}
            </div>
            <span>{headingAfterText}</span>
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <Badge dotColor="bg-green" text="Open to remote work" />
          <Badge image={badgeImage} text="Newcastle, Australia" />
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
