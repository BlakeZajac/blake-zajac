"use client";

import Image from "next/image";
import Link from "next/link";

import Section from "@/components/common/Section";
import Container from "@/components/common/Container";
import { MainNav } from "@/components/navbar/MainNav";
import ProjectMenu from "@/components/projects/ProjectMenu";

import logo from "../../public/img/logo/logo-mono.svg";

const SiteHeader = () => {
  return (
    <Section
      elementType="header"
      className="site-header bg-white/80 !sticky top-0 z-10 backdrop-blur-md"
    >
      <Container className="py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="w-fit h-fit">
            <Image
              src={logo}
              alt="Logo"
              className="w-auto h-[32px]"
              loading="lazy"
            />
          </Link>

          <MainNav />

          <ProjectMenu />
        </div>
      </Container>
    </Section>
  );
};

export default SiteHeader;
