import { Project } from "@/types/project";
import { createClient, groq } from "next-sanity";

export const getProjects = async (): Promise<Project[]> => {
  const client = createClient({
    projectId: "yc11r158",
    dataset: "production",
    apiVersion: "2023-08-12",
    useCdn: true,
  });

  return client.fetch(groq`*[_type == "project"] {
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    url,
    content    
  }`);
};
