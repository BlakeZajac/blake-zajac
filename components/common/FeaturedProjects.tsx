"use client";

import Section from "@/components/common/Section";
import Container from "@/components/common/Container";

import { useProjects } from "@/app/hooks/useProjects";
import { Project } from "@/types/project";

interface FeaturedProjectsInterface {}

const FeaturedProjects: React.FC<FeaturedProjectsInterface> = () => {
  const projects: Project[] = useProjects();

  return (
    <Section>
      <Container>
        Featured Projects
        {projects.map((project) => (
          <div key={project._id}>{project.name}</div>
        ))}
      </Container>
    </Section>
  );
};

export default FeaturedProjects;
