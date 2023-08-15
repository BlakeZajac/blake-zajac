"use client";

import Section from "@/components/section";
import Container from "@/components/container";

import { useProjects } from "@/hooks/useProjects";
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
