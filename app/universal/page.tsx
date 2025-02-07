import { Search } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaUser } from "react-icons/fa";

const page = () => {
  return (
    <div>
      <div className="flex flex-row space-x-2">
        <Link
          href="/"
          className="p-4 flex items-center justify-center rounded-full bg-[#E92751]"
        >
          <Search className="text-white" />
        </Link>
        <Link
          href="/"
          className="p-5 flex items-center justify-center rounded-full bg-[#005075]"
        >
          <FaUser className="text-white" />
        </Link>
      </div>
    </div>
  );
};

export default page;
