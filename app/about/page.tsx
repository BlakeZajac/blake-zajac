"use client";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

interface AboutPageProps {}

const AboutPage: React.FC<AboutPageProps> = ({}) => {
  return (
    <Section className="about">
      <Container>About Page</Container>
    </Section>
  );
};

export default AboutPage;
