"use client";

import { useEffect, useState } from "react";

import Section from "@/components/common/Section";
import Container from "@/components/common/Container";

import { Service } from "@/types/service";
import { useServices } from "@/hooks/useServices";

import {
  Tabs as RadixTabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { PortableText } from "@portabletext/react";
import Badge from "./Badge";

const Tabs = () => {
  const services: Service[] = useServices();
  const [defaultService, setDefaultService] = useState("");

  useEffect(() => {
    if (services.length > 0) {
      setDefaultService(services[0].slug);
    }
  }, [services]);

  return (
    <Section className="tabs">
      <Container spacingLg>
        <div className="pb-4 md:pb-8">
          <p className="text-uppercase">What I do</p>
        </div>

        <RadixTabs
          defaultValue="user-research"
          orientation="vertical"
          data-aria-orientation="vertical"
          className="flex flex-col md:flex-row gap-8 md:gap-16"
        >
          <TabsList className="flex flex-1 flex-col bg-transparent items-start h-fit p-0">
            {services.map((service) => (
              <TabsTrigger
                key={service._id}
                value={service.slug}
                className="
                !shadow-none px-0 py:2 md:py-4 bg-transparent text-2xl md:text-4xl justify-start
                w-full text-grey opacity-50 hover:text-black data-[state=active]:text-black
                data-[state=active]:opacity-100 data-[state=active]:bg-transparent"
              >
                {service.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((service) => (
            <TabsContent
              key={service._id}
              value={service.slug}
              className="flex-1"
            >
              <div className="md:max-w-[500px] mx-auto">
                <div className="flex flex-col sm:flex-row gap-2 pb-6">
                  {service.badges.map((badge, index) => (
                    <Badge key={index} text={badge} />
                  ))}
                </div>

                <PortableText value={service.content} />
              </div>
            </TabsContent>
          ))}
        </RadixTabs>
      </Container>
    </Section>
  );
};

export default Tabs;
