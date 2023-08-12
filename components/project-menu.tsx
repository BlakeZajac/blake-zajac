"use client";

import { Project } from "@/types/project";
import { MoreHorizontal, XCircle } from "lucide-react";
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

  const Icon = menuVisible ? XCircle : MoreHorizontal;

  return (
    <div>
      <Icon className="cursor-pointer" onClick={toggleMenu} />

      {menuVisible && (
        <div className="!fixed w-[100vw] left-0 top-[80px] bg-white border border-t">
          <Container className="py-4">
            <div></div>

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
