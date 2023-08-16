"use client";

import { Project } from "@/types/project";
import { MoreHorizontal, X } from "lucide-react";
import { useState } from "react";
import Container from "./container";
import { useProjects } from "@/hooks/useProjects";

const ProjectMenu: React.FC = () => {
  const projects: Project[] = useProjects();

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prevState) => !prevState);
  };

  const Icon = menuVisible ? X : MoreHorizontal;

  return (
    <>
      <Icon
        className="cursor-pointer z-20 text-black-500 hover:text-black transition"
        onClick={toggleMenu}
        size={24}
      />

      {menuVisible && (
        <div className="!fixed w-[100svw] h-[100svh] left-0 top-0 bg-white z-10">
          <Container className="py-8">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8 md:gap-12 pb-8 uppercase text-[12px] font-medium leading-4">
              <div className="hidden sm:block bg-black w-[6px] h-[6px] rounded-full top-[4px]"></div>

              <div className="flex flex-col">
                <p className="!pb-0">({projects.length}) Recent Projects</p>
                <p>© Blake Zajac</p>
              </div>

              <p className="max-w-[300px]">
                A collection of full stack web development and UX design
                initiatives by Blake Zajac
              </p>
            </div>

            <div className="flex gap-x-4">
              {projects.map((project) => (
                <div key={project._id} className="flex-1">
                  <div>{project.name && <h2>{project.name}</h2>}</div>
                  {project.excerpt && <p>{project.excerpt}</p>}
                </div>
              ))}
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default ProjectMenu;
