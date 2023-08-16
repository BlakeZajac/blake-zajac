import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  displayOnHomePage: boolean;
  featuredImage: string;
  homePageImage: string;
  hoverImage: string;
  stack: string[];
  tagline: string;
  excerpt: string;
  content: PortableTextBlock[];
};
