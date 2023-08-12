"use client";

import Container from "@/components/container";
import Section from "@/components/section";
import { MainNav } from "@/components/main-nav";
import ProjectMenu from "@/components/project-menu";
import Image from "next/image";

import logo from "../public/img/logo/logo-mono.svg";
import Link from "next/link";
import { getProjects } from "@/sanity/sanity-utils";
import { useEffect, useState } from "react";
import { Project } from "@/types/project";

const SiteHeader = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const projectsData = await getProjects();
      setProjects(projectsData);
    }

    fetchProjects();
  }, []);

  return (
    <Section
      elementType="header"
      className="site-header bg-white !sticky top-0 z-10"
    >
      <Container className="py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="w-fit h-fit">
            <Image src={logo} alt="Logo" className="w-auto h-[32px]" />
          </Link>

          <MainNav />

          <ProjectMenu projects={projects} />
        </div>
      </Container>
    </Section>
  );
};

// Fetch projects outside the component
export async function getProps() {
  const projects = await getProjects();

  return { projects };
}

export default SiteHeader;
