"use client";

import Section from "@/components/common/Section";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

interface ProjectHeroProps {
  imageSrc: string;
  title: string;
  excerpt?: string;
  repositoryLink?: string;
  demoLink?: string;
}

const ProjectHero: React.FC<ProjectHeroProps> = ({
  imageSrc,
  title,
  excerpt,
  repositoryLink,
  demoLink,
}) => {
  return (
    <>
      {/* Content Container */}
      <Section className="project-hero bg-black-900">
        <Container spacingXl className="pb-20 md:pb-28">
          <div className="flex flex-col gap-8 md:gap-12 text-black-100">
            {/* Title */}
            <h1 className="heading-2xl">{title}</h1>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/5"></div>

              {/* Excerpt */}
              <div className="md:w-3/5 max-w-[700px]">
                {excerpt && (
                  <p className="text-black-200 md:text-lg md:!leading-[1.5]">
                    {excerpt}
                  </p>
                )}

                {repositoryLink ||
                  (demoLink && (
                    <div className="flex gap-4">
                      <Button />
                      <Button />
                    </div>
                  ))}
              </div>

              <div></div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="project-hero-image">
        {/* Image Container */}
        {imageSrc && (
          <div
            className="w-full h-[40svh] sm:h-[50svh] md:h-[calc(100svh-80px)] bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url('${imageSrc}')` }}
          />
        )}
      </Section>
    </>
  );
};

export default ProjectHero;
