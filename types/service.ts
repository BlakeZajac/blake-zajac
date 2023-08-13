import { PortableTextBlock } from "sanity";

export type Service = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  displayOnHomePage: boolean;
  badges: string[];
  content: PortableTextBlock[];
};
