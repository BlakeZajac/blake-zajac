import { getProject } from "@/sanity/sanity-utils";

import Container from "@/components/common/Container";
import Hero from "@/components/common/Hero";
import Section from "@/components/common/Section";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectContent from "@/components/projects/ProjectContent";

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

      <ProjectContent projectContent={project.content} stack={project.stack} />
    </>
  );
}
