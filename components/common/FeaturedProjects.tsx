"use client";

import { useRouter } from "next/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";

import "swiper/css";

import Section from "@/components/common/Section";
import Container from "@/components/common/Container";

import { useProjects } from "@/hooks/useProjects";
import { Project } from "@/types/project";

interface FeaturedProjectsInterface {}

const FeaturedProjects: React.FC<FeaturedProjectsInterface> = () => {
  const projects: Project[] = useProjects();
  const router = useRouter();

  const transitionClasses = `transition-all hover:transition-all duration-300 hover:duration-300
    ease-[cubic-bezier(0.95,0.05,0.795,0.035)]`;

  return (
    <Section>
      <Container spacingLg className="!w-full pl-[5%] md:pl-[2.5%]">
        <Swiper
          modules={[FreeMode, Mousewheel]}
          spaceBetween={32}
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
              className="group !flex flex-col gap-2 cursor-pointer"
              onClick={() => router.push(`/projects/${project.slug}`)}
            >
              <div
                className={`rounded-xl overflow-hidden
                ${
                  index % 3 === 0
                    ? "aspect-square"
                    : index % 2 === 0
                    ? "aspect-[6/4]"
                    : "aspect-[4/3]"
                }`}
              >
                <div
                  className={`w-full h-full scale-105 group-hover:scale-100
                  bg-black-200 bg-cover bg-center bg-no-repeat ${transitionClasses}`}
                  style={{ backgroundImage: `url(${project.featuredImage})` }}
                />
              </div>

              <div
                className={`flex flex-col gap-2 px-4 py-8 bg-light rounded-xl mt-0 group-hover:-mt-[5rem] ${transitionClasses}`}
              >
                <h2 className="text-uppercase !text-[1.125rem]">
                  {project.name}
                </h2>
                <p className="text-black-600 text-[15px]">{project.excerpt}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Section>
  );
};

export default FeaturedProjects;
