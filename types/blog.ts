import { PortableTextBlock } from "sanity";

export type Blog = {
  _id: string;
  _createdAt: string;
  title: string;
  slug: string;
  excerpt: string;
  categories: string[];
  featuredImage: string;
  hoverImage: string;
  content: PortableTextBlock[];
};
