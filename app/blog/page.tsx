"use client";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

interface BlogPageProps {}

const BlogPage: React.FC<BlogPageProps> = () => {
  return (
    <Section className="blog">
      <Container>Blog Page</Container>
    </Section>
  );
};

export default BlogPage;
