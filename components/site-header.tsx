"use client";

import Container from "@/components/container";
import Section from "@/components/section";
import { MainNav } from "@/components/main-nav";
import Image from "next/image";

import logo from "../public/img/logo/logo-mono.svg";
import Link from "next/link";

const SiteHeader = () => {
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

          <div>Btn</div>
        </div>
      </Container>
    </Section>
  );
};

export default SiteHeader;
