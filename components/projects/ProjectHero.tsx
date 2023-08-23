"use client";

import Section from "@/components/common/Section";
import Container from "@/components/common/Container";

interface ProjectHeroProps {
  imageSrc: string;
  title: string;
  excerpt?: string;
}

const ProjectHero: React.FC<ProjectHeroProps> = ({
  imageSrc,
  title,
  excerpt,
}) => {
  return (
    <>
      {/* Content Container */}
      <Section className="bg-black-900">
        <Container spacingLg className="pb-16 md:pb-24">
          <div className="flex flex-col gap-12 text-black-100">
            {/* Title */}
            <h1 className="heading-2xl">{title}</h1>

            <div className="flex">
              {/* Stack */}
              <div className="md:w-1/2"></div>

              {/* Excerpt */}
              <div className="md:w-1/2">
                {excerpt && (
                  <p className="text-black-200 md:text-xl !leading-[1.6]">
                    {excerpt}
                  </p>
                )}
              </div>

              <div></div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        {/* Image Container */}
        {imageSrc && (
          <div
            className="w-full h-[calc(100svh-80px)] bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url('${imageSrc}')` }}
          />
        )}
      </Section>
    </>
  );
};

export default ProjectHero;
