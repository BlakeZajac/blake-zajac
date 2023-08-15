import { useState, useEffect } from "react";
import { getServices } from "@/sanity/sanity-utils";
import { Service } from "@/types/service";

export function useServices() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    async function fetchServices() {
      const servicesData = await getServices();
      console.log("Fetched services data:", servicesData);
      setServices(servicesData);
    }

    fetchServices();
  }, []);

  return services;
}
