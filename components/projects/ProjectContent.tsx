import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "sanity";

interface ProjectContentProps {
  content: PortableTextBlock[];
  stack?: string[];
  customHeading?: boolean;
  emptyDiv?: boolean;
}

const ProjectContent: React.FC<ProjectContentProps> = ({
  content,
  stack = [],
  customHeading,
  emptyDiv,
}) => {
  return (
    <Section className="project-content">
      <Container
        spacingXl
        className="flex flex-col md:flex-row gap-20 md:gap-8"
      >
        <div
          className={`flex flex-col gap-6 md:w-2/5 text-black-600 ${
            emptyDiv ? "hidden lg:flex" : ""
          }`}
        >
          {customHeading && <p className="text-uppercase text-black">Stack</p>}

          <ul className="flex flex-col gap-1">
            {stack.map((stackItem, index) => (
              <li key={index}>{stackItem}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col md:w-3/5 text-black-600 md:text-lg md:!leading[1.5] max-w-[700px]">
          {customHeading && (
            <p className="text-uppercase text-black !pb-6">Information</p>
          )}
          <PortableText value={content} />
        </div>
      </Container>
    </Section>
  );
};

export default ProjectContent;
