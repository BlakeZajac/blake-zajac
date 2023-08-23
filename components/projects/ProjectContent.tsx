// ProjectContent.tsx

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "sanity";

interface ProjectContentProps {
  projectContent: PortableTextBlock[];
  stack: string[];
}

const ProjectContent: React.FC<ProjectContentProps> = ({
  projectContent,
  stack,
}) => {
  return (
    <Section>
      <Container spacingLg className="md:flex">
        <div className="w-3/5">
          <ul>
            {stack.map((stackItem, index) => (
              <li key={index}>{stackItem}</li>
            ))}
          </ul>
        </div>

        <div className="w-2/5 md:text-lg md:!leading-[1.6] text-black-600">
          <PortableText value={projectContent} />
        </div>
      </Container>
    </Section>
  );
};

export default ProjectContent;
