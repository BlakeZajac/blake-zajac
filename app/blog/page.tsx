"use client";

import Container from "@/components/container";
import Section from "@/components/section";

interface BlogPageProps {}

const BlogPage: React.FC<BlogPageProps> = () => {
  return (
    <Section className="blog">
      <Container>Blog Page</Container>
    </Section>
  );
};

export default BlogPage;
