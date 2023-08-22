"use client";

import Container from "@/components/common/container";
import Section from "@/components/common/section";

interface AboutPageProps {}

const AboutPage: React.FC<AboutPageProps> = ({}) => {
  return (
    <Section className="about">
      <Container>About Page</Container>
    </Section>
  );
};

export default AboutPage;
