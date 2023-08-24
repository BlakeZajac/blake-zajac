import { getProject } from "@/sanity/sanity-utils";

import ProjectHero from "@/components/projects/ProjectHero";
import ProjectContent from "@/components/projects/ProjectContent";
import ProjectImages from "@/components/projects/ProjectImages";

type Props = {
  params: {
    project: string;
  };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <>
      <ProjectHero
        imageSrc={project.featuredImage}
        title={project.name}
        excerpt={project.excerpt}
      />

      {project.content && (
        <ProjectContent
          customHeading
          content={project.content}
          stack={project.stack}
        />
      )}

      {project.mockupImageOne && project.mockupImageTwo && (
        <ProjectImages
          imageOrientation="portrait"
          imageOne={project.mockupImageOne}
          imageTwo={project.mockupImageTwo}
        />
      )}

      {project.headingWithTextOne && (
        <ProjectContent emptyDiv content={project.headingWithTextOne} />
      )}

      {project.mockupImageThree || project.mockupImageFour ? (
        <ProjectImages
          imageOrientation="landscape"
          imageOne={project.mockupImageThree}
          imageTwo={project.mockupImageFour}
        />
      ) : null}

      {project.headingWithTextTwo && (
        <ProjectContent emptyDiv content={project.headingWithTextTwo} />
      )}

      {project.mockupImageFive || project.mockupImageSix ? (
        <ProjectImages
          imageOrientation="landscape"
          imageOne={project.mockupImageFive}
          imageTwo={project.mockupImageSix}
        />
      ) : null}
    </>
  );
}

// 