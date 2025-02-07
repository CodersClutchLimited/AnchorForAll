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
import { FaIcons, FaUser } from "react-icons/fa";
import { Search } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-2xl mx-auto p-4">
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
          href="/"
          className="p-3 flex items-center justify-center rounded-full bg-[#E92751]"
        >
          <Search className="text-white" size={19} />
        </Link>
        <Link
          href="/"
          className="p-3 flex items-center justify-center rounded-full bg-[#005075]"
        >
          <FaUser className="text-white" size={19} />
        </Link>
          <Link
            href="#"
            className="border-2 border-[#345F80] text-[#345F80] font-medium rounded-lg text-sm px-4 py-2 lg:px-5 lg:py-2.5"
          >
            Get Aid
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
          className={`${menuOpen ? "block" : "hidden"
            } w-full lg:flex lg:w-auto lg:order-1`}
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:mt-0 rtl:space-x-reverse">
            <li>
              <Link
                href="/"
                className="text-[.9rem] -mt-[1.6px] text-[#345F80] font-semibold uppercase block py-2 px-3 hover:text-[#DB2777] transition duration-300 dark:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <NavigationMenu>
                <NavigationMenuItem className="">
                  <Link className="hover:text-[#DB2777] transition duration-300" href="/" >
                    <NavigationMenuTrigger className="text-[.9rem] text-[#345F80] font-semibold uppercase" >
                      About Us
                    </NavigationMenuTrigger>

                  </Link>
                  <NavigationMenuContent className="border-t-4 border-[#DB2777]">
                    <ul className="grid text-gray-700 bg-white rounded-xl p-4 md:w-[200px] lg:w-[200px]  z-60">
                      <ListItem href="/docs" className="hover:text-[#DB2777] transition duration-300">
                        <span className="text-[.9rem]">Who we are</span>
                      </ListItem>
                      <ListItem href="/our-leadership" className="hover:text-[#DB2777] transition duration-300">
                        <span className="text-[.9rem]">Our Leadership</span>
                      </ListItem>
                      <ListItem href="/our-board-of-directors" className="hover:text-[#DB2777] transition duration-300">
                        <span className="text-[.9rem]">Our Board of Directors</span>
                      </ListItem>
                      <ListItem href="/our-offices" className="hover:text-[#DB2777] transition duration-300">
                        <span className="text-[.9rem]">Our Leadership</span>
                      </ListItem>

                      <ListItem href="/docs" className="hover:text-[#DB2777] transition duration-300">
                        <span className="text-[.9rem]">Volunteers</span>
                      </ListItem>

                      <ListItem href="/docs" className="hover:text-[#DB2777] transition duration-300">
                        <span className="text-[.9rem]">AFAF Network</span>
                      </ListItem>

                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>{" "}
              </NavigationMenu>
            </li>
            <li>
              <NavigationMenu>
                <NavigationMenuItem className="">
                  <Link className="hover:text-[#DB2777] transition duration-300" href="/about-us" >
                    <NavigationMenuTrigger className="text-[.9rem] text-[#345F80] font-semibold  uppercase" >
                      intervention areas
                    </NavigationMenuTrigger>

                  </Link>
                  <NavigationMenuContent className="border-t-4 border-[#DB2777]">
                    <ul className="grid text-gray-700 bg-white rounded-xl p-4 md:w-[400px] lg:w-[400px]  z-60">
                      <ListItem href="/docs" className="hover:text-[#DB2777] transition duration-300">
                        <span className="text-[.9rem]">Zero Hunger</span>
                      </ListItem>
                      <ListItem href="/docs" className="hover:text-[#DB2777] transition duration-300">
                        <span className="text-[.9rem]">Climate & Environment</span>
                      </ListItem>

                      <ListItem href="/docs" className="hover:text-[#DB2777] transition duration-300">
                        <span className="text-[.9rem]">Clean Renewable Energy</span>
                      </ListItem>

                      <ListItem href="/docs" className="hover:text-[#DB2777] transition duration-300">
                        <span className="text-[.9rem]">Quality Education</span>
                      </ListItem>
                      <ListItem href="/docs" className="hover:text-[#DB2777] transition duration-300">
                        <span className="text-[.9rem]">Skills Development</span>
                      </ListItem>
                      <ListItem href="/docs" className="hover:text-[#DB2777] transition duration-300">
                        <span className="text-[.9rem]">Quality Healthcare</span>
                      </ListItem>
                      <ListItem href="/docs" className="hover:text-[#DB2777] transition duration-300">
                        <span className="text-[.9rem]">Clean Water & Infrastructure</span>
                      </ListItem>
                      <ListItem href="/docs" className="hover:text-[#DB2777] transition duration-300">
                        <span className="text-[.9rem]">Zero Drugs & Mental Health</span>
                      </ListItem>
                      <ListItem href="/docs" className="hover:text-[#DB2777] transition duration-300">
                        <span className="text-[.9rem]">Women - Children Empowerment & Advocacy</span>
                      </ListItem>

                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>{" "}
              </NavigationMenu>
            </li>
            <li>
              <Link
                href="/"
                className="text-[.9rem] text-[#345F80] font-semibold uppercase block py-2 px-3  hover:text-[#DB2777] transition duration-300 dark:text-white"
              >
              successful projects
              </Link>
            </li>
            <li>
              <NavigationMenu>
                <NavigationMenuItem className="">
                  <Link className="hover:text-[#DB2777] transition duration-300" href="/about-us" >
                    <NavigationMenuTrigger className="text-[.9rem] text-[#345F80] font-semibold uppercase " >
                      Subsidiaries
                    </NavigationMenuTrigger>

                  </Link>
                  <NavigationMenuContent className="border-t-4 border-[#DB2777]">
                    <ul className="grid text-gray-700 bg-white rounded-xl p-4 md:w-[200px] lg:w-[200px]  z-60">
                      <ListItem href="/docs" className="hover:text-[#DB2777] transition duration-300">
                        <span className="text-[.9rem]">STEM Gambia</span>
                      </ListItem>
                      <ListItem href="/docs" className="hover:text-[#DB2777] transition duration-300">
                        <span className="text-[.9rem]">GAM Shelter</span>
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>{" "}
              </NavigationMenu>
            </li>
            <li>
              <Link
                href="/"
                className="text-[.9rem] text-[#345F80] font-semibold uppercase block py-2 px-3 hover:text-[#DB2777] transition duration-300 dark:text-white"
              >
              Reports
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-[.9rem] text-[#345F80] font-semibold uppercase block py-2 px-3 hover:text-[#DB2777] transition duration-300 dark:text-white"
              >
              connect
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
