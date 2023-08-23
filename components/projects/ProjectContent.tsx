"use client";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "sanity";

interface ProjectContentProps {
  projectContent: PortableTextBlock[];
}

const ProjectContent: React.FC<ProjectContentProps> = ({ projectContent }) => {
  return (
    <Section>
      <Container>
        <PortableText value={projectContent} />
      </Container>
    </Section>
  );
};

export default ProjectContent;
