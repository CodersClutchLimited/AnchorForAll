import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

const DoubleSect = () => {
  return (
    <div className="flex flex-row h-[70vh]">
      {/* Side 1 */}
      <div className="w-[55%] bg-[#008162] flex items-center justify-center">
        <div className="max-w-xl p-8">
          <h1 className="text-2xl md:text-2xl font-bold text-white">
            Our Focus Areas
          </h1>
          <p className="text-white font-medium">
            At the core of our mission is cultivating Africa&apos;s next generation
            of leaders. To do this, we devote our programs and resources to key
            areas that will empower youth and lift up communities across the
            continent.
          </p>
          <Accordion type="single" collapsible className="w-full text-white">
            <AccordionItem value="item-1">
              <AccordionTrigger>Religion</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Health</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that match the other
                component&apos;s aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
              National</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Global</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Education</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Side 2 */}
      <div className="w-1/2 flex items-center justify-center">
        <Avatar className="w-full h-full">
          <AvatarImage
            src="https://newafricafoundation.org/wp-content/uploads/2023/11/IMG_0352.jpg"
            className="w-full h-full object-cover"
          />
        </Avatar>
      </div>
    </div>
  );
};

export default DoubleSect;
