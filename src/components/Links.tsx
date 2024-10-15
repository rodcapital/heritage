"use client";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const Links = () => {
  return (
    <div className="flex gap-8">
      {/* map through to add the scroll animation from reactScroll */}
      {linksData.map((l) => (
        <>
          {l.slug !== "contacts" ? (
            <ScrollLink
              className="hover:underline"
              activeClass=""
              to={l.slug}
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={2500}
              // delay={1000}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >
              {l.title}
            </ScrollLink>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <span className="hover:underline">Contacts</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <span>Profile</span>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Billing</span>
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Settings</span>
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Keyboard shortcuts</span>
                    <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </>
      ))}
      <Link href={"/blogs"}>
        <span className="hover:underline">Blogs</span>
      </Link>
    </div>
  );
};

export default Links;

const linksData = [
  {
    title: "About",
    slug: "about",
  },
  {
    title: "Services",
    slug: "services",
  },
  {
    title: "Contacts",
    slug: "contacts",
  },
];
