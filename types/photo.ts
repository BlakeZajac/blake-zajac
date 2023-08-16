import { PortableTextBlock } from "sanity";

export type Photo = {
  _id: string;
  _createdAt: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  hoverImage: string;
  content: PortableTextBlock[];
};
