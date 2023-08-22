"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function MainNav() {
  const pathname = usePathname();

  const routes: { href: string; label: string; active: boolean }[] = [
    {
      href: "/projects",
      label: "Projects",
      active: pathname === "/projects",
    },

    {
      href: "/about",
      label: "About",
      active: pathname === "/about",
    },

    {
      href: "/blog",
      label: "Blog",
      active: pathname === "/blog",
    },

    {
      href: "/photo",
      label: "Photo",
      active: pathname === "/photo",
    },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-12">
        {routes.map((route) => (
          <NavigationMenuItem key={route.href}>
            <NavigationMenuLink
              href={route.href}
              className={cn(
                "text-sm uppercase py-1",
                route.active ? "border-b border-black" : null
              )}
            >
              {route.label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
