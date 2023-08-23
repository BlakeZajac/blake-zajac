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
      <Container
        spacingLg
        className="flex flex-col md:flex-row gap-12 md:gap-0"
      >
        <div className="md:w-2/5 text-black-600">
          <ul>
            {stack.map((stackItem, index) => (
              <li key={index}>{stackItem}</li>
            ))}
          </ul>
        </div>

        <div className="md:w-3/5 text-black-600 md:text-lg md:!leading[1.5] max-w-[700px]">
          <PortableText value={projectContent} />
        </div>
      </Container>
    </Section>
  );
};

export default ProjectContent;
