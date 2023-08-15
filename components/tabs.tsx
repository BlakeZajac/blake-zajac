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
import Badge from "./badge";

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
      <Container className="pt-20">
        <RadixTabs
          defaultValue={defaultService}
          orientation="vertical"
          data-aria-orientation="vertical"
          className="flex flex-row"
        >
          <TabsList className="flex flex-1 flex-col bg-transparent items-start h-fit">
            {services.map((service) => (
              <TabsTrigger
                key={service._id}
                value={service.slug}
                className="
                !shadow-none py-8 bg-transparent text-md md:text-[1.25rem] justify-start
                w-full text-grey opacity-50 hover:text-black data-[state=active]:text-black
                data-[state=active]:opacity-100 data-[state=active]:bg-transparent border-b border-black-200"
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
              <div className="max-w-[500px] mx-auto">
                <div className="flex gap-x-2 pb-6">
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
