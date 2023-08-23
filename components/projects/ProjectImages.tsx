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
  imageOrientation = "",
  imageOne,
  imageOneAlt = "",
  imageTwo,
  imageTwoAlt = "",
}) => {
  return (
    <Section className="project-images">
      <Container
        spacing2xl
        className={`flex gap-8 ${
          imageOrientation === "landscape"
            ? "flex-col"
            : "flex-col lg:flex-row items-start lg:mt-32"
        }`}
      >
        {imageOne && (
          <div
            className={`overflow-hidden rounded-xl 
            ${
              imageOrientation === "landscape"
                ? "w-full lg:w-11/12"
                : "w-full lg:w-2/5 lg:-mt-32"
            }`}
          >
            <Image
              src={imageOne}
              alt={imageOneAlt}
              fill
              className="!relative object-cover w-full"
              loading="lazy"
            />
          </div>
        )}

        {imageTwo && (
          <div
            className={`overflow-hidden rounded-xl
            ${
              imageOrientation === "landscape"
                ? "w-full lg:w-11/12 ml-auto"
                : "w-fill lg:3/5"
            }`}
          >
            <Image
              src={imageTwo}
              alt={imageTwoAlt}
              fill
              className="!relative object-cover w-full"
              loading="lazy"
            />
          </div>
        )}
      </Container>
    </Section>
  );
};

export default ProjectImages;
