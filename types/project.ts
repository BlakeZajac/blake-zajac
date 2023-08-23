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
  repositoryLink: string;
  demoLink: string;
  content: PortableTextBlock[];
  mockupImageOne: string;
  mockupImageTwo: string;
  headingWithTextOne: PortableTextBlock[];
  mockupImageThree: string;
  mockupImageFour: string;
  headingWithTextTwo: PortableTextBlock[];
  mockupImageFive: string;
  mockupImageSix: string;
};
