import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import LogoSlider from "@/components/Hero/LogoSlider";
import Circle from "@/components/Hero/Cirlcle";
import VideoHero from "@/components/Hero/VideoHero";
// import Carder from "@/components/Hero/Carder";
import MiniCard from "@/components/Hero/MiniCard";
import DoubleSect from "@/components/Hero/DoubleSect";
import Carder from "@/components/Hero/Carder";
import Map from "@/components/Hero/Map";
import Accord from "@/components/Hero/Accords";
import Gallery from "@/components/Hero/Gallery";
import { Testimonials } from "@/components/Hero/Testimonial";
import Formfill from "@/components/Hero/Formfill";

const Home = () => {
  return (
    <>
      <VideoHero />

      <div className="bg-[#345F80] relative p-10 mb-16 -mt-[150px] max-md:ml-3 max-md:mr-3 max-md:mx-auto z-60 md:ml-[150px] space-y-4 max-w-[31rem]">
        <h2 className="font-medium text-white uppercase">Our Mission</h2>
        <p className="text-white">
          Our mission entails disseminating the narrative that Africans are not
          solely reliant on external aid; rather, we aim to underscore the
          paradigm shift wherein Africans are poised to contribute aid to the
          global community.
        </p>
        <Link
          className="font-medium text-white uppercase flex items-center space-x-2"
          href="#"
        >
          Learn More <ArrowRight className="text-white" />
        </Link>
      </div>
      <LogoSlider />
      <Circle />
      <MiniCard />
      <Map />
      <DoubleSect />
      <Carder />
      <div className="mt-[80px] flex items-center justify-center">
        <Link
          className="uppercase flex flex-row text-white px-3 border-b-4  border-pink-600 bg-[#345F80] py-3 font-semibold text-center"
          href=""
        >
          more impactful stories <ArrowRight className="ml-2" />
        </Link>
      </div>
      <Accord />

      <div className="mt-[100] mb-[100] space-y-3 max-w-5xl m-auto">
        <h1 className="scroll-m-20 max-mdtext-2xl text-3xl font-bold tracking-tight lg:text-5xl">
          What Our Beneficiaries are saying
        </h1>
        <p className="font-normal max-w-3xl pb-10">
          The most powerful proof of impact comes from those whose lives have
          been uplifted by our programs. Read real stories of positive change
          from across the world.
        </p>
        <Testimonials/>
      
      </div>
      <Gallery/>
      <Formfill/>
    </>
  );
};

export default Home;
