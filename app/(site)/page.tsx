import { ModeToggle } from "@/components/theme-toggle";
import { getProjects } from "@/sanity/sanity-utils";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <ModeToggle />

      {projects.map((project) => (
        <div key={project._id} className="bg-red-100">
          {project.name}
        </div>
      ))}
    </div>
  );
}