"use client";

import { useEffect, useState } from "react";

import Section from "@/components/section";
import Container from "@/components/container";

import { Service } from "@/types/service";
import { useServices } from "@/hooks/useServices";

import {
  Tabs as RadixTabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { PortableText } from "@portabletext/react";

const Tabs = () => {
  const services: Service[] = useServices();
  const defaultService = services.length > 0 ? services[0].slug : "";

  return (
    <Section className="tabs">
      <Container>
        <RadixTabs defaultValue={defaultService}>
          <TabsList>
            {services.map((service) => (
              <TabsTrigger key={service._id} value={service.slug}>
                {service.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((service) => (
            <TabsContent key={service._id} value={service.slug}>
              <PortableText value={service.content} />
            </TabsContent>
          ))}
        </RadixTabs>
      </Container>
    </Section>
  );
};

export default Tabs;
