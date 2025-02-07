import BoardBanner from "@/components/About/BoardBanner";
import LogoCarousel from "@/components/About/LogoCarousel";
import TeamCards from "@/components/About/TeamCards";
import TwoSection from "@/components/About/TwoSection";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="p-6 pb-10  border-b-2 border-t-2 pt-20 ">
        <div className="space-y-8 max-w-4xl">
          <h1 className="font-bold text-6xl max-md:text-4xl tracking-[-0.14rem]">
            LEADERSHIP
          </h1>
          <p className="text-2xl max-md:text-base font-normal text-black">
            The Open Society leadership team works alongside our staff,
            partners, and grantees to help promote the values of justice,
            equity, democracy and human rights. Our senior management represents
            the needs and concerns of the network, from organization and
            oversight to strategy and impact.
          </p>
        </div>
      </div>
      <TeamCards />
      <TwoSection />
      <LogoCarousel />
    </div>
  );
};

export default page;
