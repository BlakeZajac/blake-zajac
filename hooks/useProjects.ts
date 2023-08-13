import { useState, useEffect } from "react";
import { getProjects } from "@/sanity/sanity-utils";
import { Project } from "@/types/project";

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const projectsData = await getProjects();
      // console.log("Fetched projects data:", projectsData);
      setProjects(projectsData);
    }

    fetchProjects;
  }, []);

  return projects;
}
