import { getProject } from "@/sanity/sanity-utils";

type Props = {
  params: {
    project: string;
  };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div>
      {project.name && <div>Project name: {project.name}</div>}

      {project.slug && <div>Project slug: {project.slug}</div>}

      {project.displayOnHomePage && (
        <div>Project displayOnHomePage: {project.displayOnHomePage}</div>
      )}

      {project.featuredImage && (
        <div>Project featuredImage: {project.featuredImage}</div>
      )}

      {project.stack && <div>Project stack: {project.stack}</div>}

      {project.excerpt && <div>Project excerpt: {project.excerpt}</div>}

      {project.repositoryLink && (
        <div>Project repositoryLink: {project.repositoryLink}</div>
      )}

      {project.demoLink && <div>Project demoLink: {project.demoLink}</div>}

      {/* {project.content && <div>Project content: {project.content}</div>} */}
    </div>
  );
}
