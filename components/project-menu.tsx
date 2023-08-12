"use client";

import { Project } from "@/types/project";
import { MoreHorizontal, X } from "lucide-react";
import { useState } from "react";
import Container from "./container";

interface ProjectMenuProps {
  projects: Project[];
}

const ProjectMenu: React.FC<ProjectMenuProps> = ({ projects }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prevState) => !prevState);
  };

  const Icon = menuVisible ? X : MoreHorizontal;

  return (
    <div>
      <Icon
        className="cursor-pointer z-20 text-black-500 hover:text-black transition"
        onClick={toggleMenu}
        size={24}
      />

      {menuVisible && (
        <div className="!fixed w-full h-full left-0 top-0 bg-white z-10">
          <Container className="py-8">
            <div className="flex items-start gap-x-12 pb-8 uppercase text-[12px] font-medium leading-4">
              <div className="block bg-black w-[6px] h-[6px] rounded-full top-[4px]"></div>

              <div className="flex flex-col">
                <p>({projects.length}) Recent Projects</p>
                <p>© Blake Zajac</p>
              </div>

              <p className="max-w-[300px]">
                A collection of full stack web development and UX design
                initiatives by Blake Zajac
              </p>
            </div>

            <div>
              {projects.map((project) => (
                <div key={project._id}>{project.name}</div>
              ))}
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};

export default ProjectMenu;
