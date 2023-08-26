"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Section from "./Section";
import Container from "./Container";
import CustomMarquee from "./Marquee";
import Image from "next/image";

interface ClientsProps {
  title?: string;
}

export const clients = [
  {
    name: "ANSTO",
    image: "/img/clients/logo-ansto.svg",
    url: "https://ansto.gov.au",
  },

  {
    name: "Bodyfit",
    image: "/img/clients/logo-bodyfit.svg",
    url: "https://bodyfit.com.au",
  },

  {
    name: "Ocean & Earth",
    image: "/img/clients/logo-ocean-earth.svg",
    url: "https://oceanearth.com.au",
  },

  {
    name: "SOILCO",
    image: "/img/clients/logo-soilco.svg",
    url: "https://soilco.com.au",
  },
];

const Clients: React.FC<ClientsProps> = ({ title }) => {
  const router = useRouter();

  return (
    <>
      <Section className="clients">
        <Container spacingLg>
          <div className="pb-4 md:pb-8">
            <p className="text-uppercase">{title}</p>
          </div>
        </Container>
      </Section>

      <CustomMarquee>
        {clients.map((client) => (
          <Image
            key={client.name}
            src={client.image}
            alt={`${client.name} Logo`}
            width={30}
            height={30}
          />
        ))}
      </CustomMarquee>
    </>
  );
};

export default Clients;
