import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#008162] text-white mt-10 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Left Section - Logo & Text */}
        <div className="max-w-[1100px] m-auto">
          <Image
            src="https://anchorforallfoundation.org/wp-content/uploads/2024/07/ANCHOR-LANDSCAPE-2048x819.png"
            alt="New Africa Foundation"
            width={180}
            height={60}
          />
          <div className="md:flex border-t mt-6 border-white/30 border-b gap-6  pb-16 pt-8">
            <p className="mt-8 leading-relaxed max-md:pb-4 ">
              The New Africa Foundation is an entity focused on addressing
              challenges in Africa. Our mission goes beyond typical charitable
              activities such as distributing food. We strive to bridge
              religious, societal, racial, and interpersonal gaps. Our
              multifaceted approach not only brings smiles to people&apos;s faces but
              also actively works towards fostering unity and understanding.
            </p>
            {/* Right Section - Quick Links & Social Icons */}
            <div className="flex flex-col whitespace-nowrap">
              <h3 className="text-lg font-semibold">Quick links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="about-us" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="our-projects" className="hover:underline">
                    Our Projects
                  </Link>
                </li>
                <li>
                  <Link href="contact-us" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
              {/* Social Icons */}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright */}

      <div className=" flex justify-between max-md:flex-col max-md:space-y-6 mt-8 pt-4 md:pl-10 max-w-[1200] text-sm mx-auto">
        <p>Copyright 2023. New Africa Foundation. All Rights Reserved</p>
        <div className="flex space-x-4 text-xl">
          <Link href="#">
            <FaTwitter />
          </Link>
          <Link href="#">
            <FaFacebookF />
          </Link>
          <Link href="#">
            <FaInstagram />
          </Link>
          <Link href="#">
            <FaYoutube />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
