"use client";

import { Project } from "@/types/project";
import { MoreHorizontal, X } from "lucide-react";
import { useState } from "react";
import Container from "./container";
import { useProjects } from "@/hooks/useProjects";
import Image from "next/image";

const ProjectMenu: React.FC = () => {
  const projects: Project[] = useProjects();

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prevState) => !prevState);
  };

  const Icon = menuVisible ? X : MoreHorizontal;
  const transitionClasses = `transition-all hover:transition-all duration-300 hover:duration-300
    ease-[cubic-bezier(0.95,0.05,0.795,0.035)] hover:ease-[cubic-bezier(0.95,0.05,0.795,0.035)]`;

  return (
    <>
      <Icon
        className="cursor-pointer z-20 text-black-500 hover:text-black transition-all"
        onClick={toggleMenu}
        size={24}
      />

      {menuVisible && (
        <div className="!fixed w-[100svw] h-[100svh] left-0 top-0 bg-white z-10">
          <Container className="py-8">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8 md:gap-12 pb-8 text-uppercase">
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

            <div className="flex gap-x-2">
              {projects.map((project, index) => (
                <div
                  key={project._id}
                  className="flex flex-1 gap-2 cursor-pointer"
                >
                  <div className="flex flex-col gap-4 items-center">
                    <div className="block h-[700px] w-[1px] bg-black/20"></div>
                    <p className="text-uppercase">0{index + 1}</p>
                  </div>

                  <div
                    className={`group flex flex-col gap-8 w-full h-full ${transitionClasses}`}
                  >
                    <div className="w-full aspect-square bg-black-200 rounded-xl overflow-hidden">
                      <Image src="" alt="" />
                    </div>

                    {project.name && (
                      <div
                        className={`flex flex-col gap-4 px-4 py-8 rounded-xl bg-white mt-0 group-hover:mt-[-5rem] ${transitionClasses}`}
                      >
                        <div className="flex flex-col gap-2">
                          <h2 className="text-uppercase !text-[1.125rem]">
                            {project.name}
                          </h2>

                          {project.tagline && (
                            <p className="text-uppercase">{project.tagline}</p>
                          )}
                        </div>

                        {project.excerpt && (
                          <div
                            className={`opacity-0 group-hover:opacity-100 ${transitionClasses}`}
                          >
                            <p className="text-black-700">{project.excerpt}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
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
