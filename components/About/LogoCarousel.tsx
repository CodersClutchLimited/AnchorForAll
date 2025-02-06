import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage } from "../ui/avatar";

const logos = [
  {
    src: "https://anchorforallfoundation.org/wp-content/uploads/2020/10/pmr-logo-1.png",
    alt: "Logo 1",
  },
  {
    src: "https://anchorforallfoundation.org/wp-content/uploads/2020/10/pmr-logo-2.png",
    alt: "Logo 2",
  },
  {
    src: "https://anchorforallfoundation.org/wp-content/uploads/2020/10/pmr-logo-3.png",
    alt: "Logo 3",
  },
  {
    src: "https://anchorforallfoundation.org/wp-content/uploads/2020/10/pmr-logo-4.png",
    alt: "Logo 4",
  },
  {
    src: "https://anchorforallfoundation.org/wp-content/uploads/2021/06/pmr-logo-5-1.png",
    alt: "Logo 5",
  },
  {
    src: "https://alonethemes.com/wp-content/uploads/2021/06/pmr-logo.png",
    alt: "Logo 6",
  },
];

const LogoCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full m-auto max-w-5xl"
    >
      <h1 className="text-3xl text-blue-950 font-bold text-center mt-[70px] pb-12">
        OUR NETWORK
      </h1>
      <CarouselContent>
        {logos.map((item, index) => (
          <CarouselItem
            key={index}
            className="sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
          >
            <div className="p-1">
              <Card className="shadow-none rounded-none border-none">
                <CardContent className="flex items-center justify-center">
                  <Avatar className="h-24 w-32 rounded-none">
                    <AvatarImage src={item.src} alt={item.alt} />
                  </Avatar>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-blue-950 mt-6 border-none p-6 bg-[#FFEE00] opacity-100 rounded-full hover:bg-[#FFEE00]" />
      <CarouselNext className="text-blue-950 mt-6 border-none p-6 bg-[#FFEE00] opacity-100 rounded-full hover:bg-[#FFEE00]" />
    </Carousel>
  );
};

export default LogoCarousel;