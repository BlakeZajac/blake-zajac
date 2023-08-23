"use client";

import Image from "next/image";
import Container from "../common/Container";
import Section from "../common/Section";

interface ProjectImagesProps {
  imageOrientation?: "portrait" | "landscape";
  imageOne: string;
  imageOneAlt?: string;
  imageTwo?: string;
  imageTwoAlt?: string;
}

const ProjectImages: React.FC<ProjectImagesProps> = ({
  imageOrientation = "landscape",
  imageOne,
  imageOneAlt = "",
  imageTwo,
  imageTwoAlt = "",
}) => {
  return (
    <Section>
      <Container
        spacingXl
        className={`flex ${
          imageOrientation === "landscape" ? "flex-col" : "flex-row"
        }`}
      >
        {imageOne && (
          <div className="md:w-2/5">
            <Image
              src={imageOne}
              alt={imageOneAlt}
              fill
              className="!relative"
              loading="lazy"
            />
          </div>
        )}

        {imageTwo && (
          <div className="md:w-3/5">
            <Image
              src={imageTwo}
              alt={imageTwoAlt}
              fill
              className="!relative"
              loading="lazy"
            />
          </div>
        )}
      </Container>
    </Section>
  );
};

export default ProjectImages;
