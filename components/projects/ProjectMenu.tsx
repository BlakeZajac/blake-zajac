"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useProjects } from "@/hooks/useProjects";
import { Project } from "@/types/project";
import Container from "@/components/common/Container";
import { MoreHorizontal, X } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import "swiper/css";

const ProjectMenu: React.FC = () => {
  const router = useRouter();
  const projects: Project[] = useProjects();

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prevState) => !prevState);
  };

  const ProjectMenuIcon = menuVisible ? X : MoreHorizontal;
  const transitionClasses = `transition-all hover:transition-all duration-300 hover:duration-300
    ease-[cubic-bezier(0.95,0.05,0.795,0.035)]`;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key == "Escape") {
        setMenuVisible(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <ProjectMenuIcon
        className="cursor-pointer z-20 text-black-500 hover:text-black transition-all"
        onClick={toggleMenu}
        size={24}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            toggleMenu();
          }
        }}
        tabIndex={0}
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

            <Swiper
              modules={[FreeMode, Mousewheel]}
              spaceBetween={8}
              freeMode
              mousewheel
              breakpoints={{
                1124: {
                  slidesPerView: 3,
                },

                767: {
                  slidesPerView: 2,
                },

                479: {
                  slidesPerView: 1,
                },
              }}
              className="!pr-20"
            >
              {projects.map((project, index) => (
                <SwiperSlide
                  key={project._id}
                  className="!flex gap-2 cursor-pointer"
                  onClick={() => {
                    router.push(`/projects/${project.slug}`); // Load single project
                    setMenuVisible(false); // Then close the projects menu
                  }}
                >
                  <div className="flex flex-col gap-4 items-center">
                    <div className="block h-[600px] sm:h-[700px] w-[1px] bg-black/20"></div>
                    <p className="text-uppercase">0{index + 1}</p>
                  </div>

                  <div
                    className={`group flex flex-col gap-4 w-full h-full ${transitionClasses}`}
                  >
                    <div
                      className={`w-full aspect-square overflow-hidden rounded-xl ${transitionClasses}`}
                    >
                      <div
                        className={`w-full aspect-square bg-black-200 scale-110 group-hover:scale-100 bg-center bg-cover bg-no-repeat ${transitionClasses}`}
                        style={{
                          backgroundImage: `url('${project.featuredImage}')`,
                        }}
                      ></div>
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

                        {project.excerpt ? (
                          <div
                            className={`opacity-0 group-hover:opacity-100 flex flex-col gap-4 items-start ${transitionClasses}`}
                          >
                            <p className="text-black-600 text-[15px]">
                              {project.excerpt}
                            </p>
                          </div>
                        ) : (
                          <div
                            className={`opacity-0 group-hover:opacity-100 flex flex-col gap-4 items-start ${transitionClasses}`}
                          >
                            <p className="text-black-600 text-[15px]">
                              Coming soon.
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>
        </div>
      )}
    </>
  );
};

export default ProjectMenu;
