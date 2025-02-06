"use client";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import React, { useState } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { FaIcons } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Avatar>
            <AvatarImage
              src="https://anchorforallfoundation.org/wp-content/uploads/2024/07/ANCHOR-LANDSCAPE-2048x819.png"
              className="h-[80px]"
              alt="Flowbite Logo"
            />
          </Avatar>
        </Link>
        <div className="flex items-center lg:order-2 space-x-1 lg:space-x-2 rtl:space-x-reverse">
          <Link
            href="#"
            className="border-2 border-[#345F80] text-[#345F80] font-medium rounded-lg text-sm px-4 py-2 lg:px-5 lg:py-2.5"
          >
            Join Us
          </Link>
          <Link
            href="#"
            className="border-2 border-[#DB2777] text-[#DB2777] font-medium rounded-lg text-sm px-4 py-2 lg:px-5 lg:py-2.5"
          >
            Donate Now
          </Link>
          <button
            onClick={handleMenuToggle}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          id="mega-menu"
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full lg:flex lg:w-auto lg:order-1`}
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:mt-0 rtl:space-x-reverse">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-gray-900 hover:text-[#345F80] transition duration-300 dark:text-white"
              >
                Home
              </Link>
            </li>
            {/* <li><Link href="/about-us" className="block py-2 px-3 text-gray-900 hover:text-[#345F80] transition duration-300 dark:text-white">About Us</Link></li> */}
            <li>
              <NavigationMenu>
                <NavigationMenuItem className="mt-[0.2rem]">
                  <Link href="/about-us" >
                  <NavigationMenuTrigger >
                    Getting started
                  </NavigationMenuTrigger>

                  </Link>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 bg-white rounded-xl p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] z-60">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <FaIcons className="h-6 w-6" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              shadcn/ui
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Beautifully designed components built with Radix
                              UI and Tailwind CSS.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/docs" title="Introduction">
                        Re-usable components built using Radix UI and Tailwind
                        CSS.
                      </ListItem>
                      <ListItem href="/docs/installation" title="Installation">
                        How to install dependencies and structure your app.
                      </ListItem>
                      <ListItem
                        href="/docs/primitives/typography"
                        title="Typography"
                      >
                        Styles for headings, paragraphs, lists...etc
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>{" "}
              </NavigationMenu>
            </li>
            <li>
              <Link
                href="/focused-area"
                className="block py-2 px-3 text-gray-900 hover:text-[#345F80] transition duration-300 dark:text-white"
              >
                Focus Areas
              </Link>
            </li>
            <li>
              <Link
                href="/our-projects"
                className="block py-2 px-3 text-gray-900 hover:text-[#345F80] transition duration-300 dark:text-white"
              >
                Our Projects
              </Link>
            </li>
            <li>
              <Link
                href="/FAQS"
                className="block py-2 px-3 text-gray-900 hover:text-[#345F80] transition duration-300 dark:text-white"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                href="/Gallery"
                className="block py-2 px-3 text-gray-900 hover:text-[#345F80] transition duration-300 dark:text-white"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="block py-2 px-3 text-gray-900 hover:text-[#345F80] transition duration-300 dark:text-white"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
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
