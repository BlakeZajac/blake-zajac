"use client";

import Container from "@/components/container";
import Section from "@/components/section";

interface AboutPageProps {}

const AboutPage: React.FC<AboutPageProps> = ({}) => {
  return (
    <Section className="about">
      <Container>About Page</Container>
    </Section>
  );
};

export default AboutPage;
