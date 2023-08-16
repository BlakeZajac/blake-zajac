import { createClient, groq } from "next-sanity";

import { Project } from "@/types/project";
import { Page } from "@/types/page";
import clientConfig from "./config/client-config";
import { Service } from "@/types/service";

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      displayOnHomePage,
      "featuredImage": featuredImage.asset->url,
      "homePageImage": homePageImage.asset->url,
      "hoverImage": hoverImage.asset->url,
      stack,
      tagline,
      excerpt,
      content
    }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      displayOnHomePage,
      "featuredImage": featuredImage.asset->url,
      "homePageImage": homePageImage.asset->url,
      "hoverImage": hoverImage.asset->url,
      stack,
      tagline,
      excerpt,
      content,
    }`,
    { slug }
  );
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"] {
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`
  );
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug[0]] {
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug }
  );
}

export async function getServices(): Promise<Service[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "service"] {
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      displayOnHomePage,
      badges,
      content,
    }`
  );
}

export async function getService(slug: string): Promise<Service> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "service" && slug.current == $slug[0]] {
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      displayOnHomePage,
      badges,
      content,
    }`,
    { slug }
  );
}
