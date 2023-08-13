"use client";

import { Service } from "@/types/service";
import Section from "@/components/section";
import Container from "@/components/container";

interface TabsProps {
  services: Service[];
}

const Tabs: React.FC<TabsProps> = ({ services }) => {
  return (
    <Section className="tabs">
      <Container>
        <div>
          {services.length}
          {services.map((service) => (
            <div key={service._id}>{service.name}</div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Tabs;
