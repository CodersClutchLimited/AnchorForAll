import Gallery from "@/components/Hero/Gallery";
import Grids from "@/components/Universal/Grids";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="w-full bg-[#367978] px-[150px] py-[70px] mb-24">
        <p className="text-4xl lg:text-7xl text-white font-bold">Our Gallery</p>
      </div>
      <Grids/>

      <Gallery/>
    </div>
  );
};

export default page;
