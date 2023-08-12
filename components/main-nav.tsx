"use client";

import * as React from "react";
import Link from "next/link";
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
      <NavigationMenuList>
        <ul className="flex gap-4 w-[200px]">
          {routes.map((route) => (
            <>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href={route.href}
                  className={cn(
                    "",
                    route.active
                      ? "text-black dark:text-white"
                      : "text-muted-foreground"
                  )}
                >
                  {route.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            </>
          ))}
        </ul>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
