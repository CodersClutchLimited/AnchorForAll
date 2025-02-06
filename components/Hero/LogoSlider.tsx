"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Avatar, AvatarImage } from "@/components/ui/avatar"; // ✅ Correct import

const logos = [
  { src: "/one.png", href: "#" },
  { src: "/two.png", href: "#" },
  { src: "/three.png", href: "#" },
  { src: "/four.png", href: "#" },
  { src: "/five.png", href: "#" },
  { src: "/six.png", href: "#" },
];

const LogoSlider = () => {
  return (
    <div className="relative max-md:top-6 md:-mt-[90px]">
      <div className="absolute bottom-0 md:left-[40%] w-full pt-[30px] pb-[30px] overflow-hidden whitespace-nowrap z-[-1]">
        <motion.div
          className="flex space-x-8"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <Link key={index} href={logo.href} className="flex items-center md:justify-center">
              <Avatar className="rounded-none w-24">
                <AvatarImage src={logo.src} />
              </Avatar>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoSlider;
