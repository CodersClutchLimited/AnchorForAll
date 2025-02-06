import BoardBanner from "@/components/About/BoardBanner";
import LogoCarousel from "@/components/About/LogoCarousel";
import TeamCards from "@/components/About/TeamCards";
import TwoSection from "@/components/About/TwoSection";
import React from "react";

const page = () => {
  return (
    <div>
      <BoardBanner />
      <TeamCards />
      <TwoSection />
      <LogoCarousel />
    </div>
  );
};

export default page;
