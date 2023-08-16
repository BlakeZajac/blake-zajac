import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  displayOnHomePage: boolean;
  featuredImage: string;
  homePageImage: string;
  stack: string[];
  content: PortableTextBlock[];
};
