'use client';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
// import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  // const [menuOpen, setMenuOpen] = useState(false);

  // const handleMenuToggle = () => {
  //   setMenuOpen(!menuOpen);
  // };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        <Link href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
        <Avatar>
          <AvatarImage src="https://anchorforallfoundation.org/wp-content/uploads/2024/07/ANCHOR-LANDSCAPE-2048x819.png" className="h-[80px]" alt="Flowbite Logo" />
        </Avatar>
        </Link>
        <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
          <Link href="#" className="border-2 border-[#345F80] text-[#345F80] font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 ">Join Us</Link>
          <Link href="#" className="border-2 border-[#DB2777] text-[#DB2777] font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 ">Donate Now</Link>
          <button data-collapse-toggle="mega-menu" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div id="mega-menu" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
            <li>
              <Link href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100  md:border-0 hover:text-[#345F80] transition duration-300 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</Link>
            </li>
            <li>
              <Link href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100  md:border-0 hover:text-[#345F80] transition duration-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">About Us</Link>
            </li>
            <li>
              <Link href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100  md:border-0 hover:text-[#345F80] transition duration-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Focus Areas</Link>
            </li>
            <li>
              <Link href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100  md:border-0 hover:text-[#345F80] transition duration-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Our Projects</Link>
            </li>
            <li>
              <Link href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100  md:border-0 hover:text-[#345F80] transition duration-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">FAQs</Link>
            </li>
            <li>
              <Link href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100  md:border-0 hover:text-[#345F80] transition duration-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Gallery</Link>
            </li>
            <li>
              <Link href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100  md:border-0 hover:text-[#345F80] transition duration-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
