"use client";

import Section from "@/components/common/Section";
import Container from "@/components/common/Container";

interface ProjectHeroProps {
  imageSrc: string;
  title: string;
  excerpt?: string;
  stacks: [];
}

const ProjectHero: React.FC<ProjectHeroProps> = ({
  imageSrc,
  title,
  excerpt,
  stack,
}) => {
  return (
    <Section>
      {imageSrc && (
        <div
          className="w-full h-[100svh] bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `${imageSrc}`, backgroundColor: "red" }}
        />
      )}

      {/* Content Container */}
      <Container spacingSm className="pb-20">
        <div className="flex flex-col gap-12">
          {/* Title */}
          <h1 className="heading-xl">{title}</h1>

          <div className="flex">
            {/* Stack */}
            <div className="md:w-2/5"></div>

            {/* Excerpt */}
            <div className="md:w-3/5">
              {excerpt && (
                <p className="text-black-600 md:text-lg">{excerpt}</p>
              )}
            </div>

            <div></div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ProjectHero;
