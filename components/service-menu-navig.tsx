"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];
interface ServiceProps {
  className?: string;
}

export const ServicesMenu: React.FC<ServiceProps> = ({ className }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-sans flex text-xl bg-gray-900 text-white hover:bg-white hover:text-gray-900  font-bold ">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul
              className={`grid md:grid-cols-2 gap-3 w-[200px] p-6 md:w-[800px] lg:w-[900px], ${className}`}
            >
              <Link
                href="/services/loss-prevention"
                className="flex  text-left  text-sm text-black font-bold hover:text-red-600"
              >
                Loss Prevention
              </Link>{" "}
              <Link
                href="/services/concierge-security-services"
                className="flex  text-left text-sm text-black font-bold hover:text-red-600"
              >
                Concierge Security Services
              </Link>{" "}
              <Link
                href="/services/commercial-high-rise-security"
                className="flex  text-left text-sm text-black font-bold hover:text-red-600"
              >
                Commercial High-Rise Security
              </Link>{" "}
              <Link
                href="/services/construction-sitesecurity"
                className="flex  text-left text-sm text-black font-bold hover:text-red-600"
              >
                Construction Site Security
              </Link>{" "}
              <Link
                href="/services/fire-watch-security"
                className="flex  text-left text-sm text-black font-bold hover:text-red-600"
              >
                Fire Watch Security
              </Link>{" "}
              <Link
                href="/services/mobile-control"
                className="flex  text-left text-sm text-black font-bold hover:text-red-600"
              >
                Mobile Patrol
              </Link>{" "}
              <Link
                href="/services/access-control-security"
                className="flex  text-left text-sm text-black font-bold hover:text-red-600"
              >
                Access Control Security
              </Link>{" "}
              <Link
                href="/services/cctv-security-camera-installation"
                className="flex  text-left text-sm text-black font-bold hover:text-red-600"
              >
                CCTV Security Camera Installation
              </Link>{" "}
              <Link
                href="/services/it-security"
                className="flex  text-left  text-sm text-black font-bold hover:text-red-600"
              >
                IT Security
              </Link>{" "}
              <Link
                href="tel:+1 (514) 560‑5863"
                className="flex  text-left text-sm text-black font-bold hover:text-red-600"
              >
                Private Investigation & Surveillance Services
              </Link>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
