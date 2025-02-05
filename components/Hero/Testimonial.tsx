import Image from "next/image";
import React from "react";

const testimonials = [
  {
    text: "When the ground shook and homes crumbled in our village during the devastating Turkey earthquake, lives were turned upside down in an instant. Desperate for aid, we felt utterly helpless – until the New Africa Foundation arrived. They helped set up shelters, organize food and water, and provide emergency care.",
    name: "Yousef",
    role: "Village Leader Diyarbakir Province, Turkey",
    flag: "https://newafricafoundation.org/wp-content/uploads/2023/11/Roundel_flag_of_Turkey.svg",
  },
  {
    text: "When my wife had complications after the birth of our conjoined newborns, we depleted our meager savings just getting to the hospital. With surgery urgently needed, the staggering costs left me desperate to help them. Through its special healthcare fund, the New Africa Foundation kindly paid for the full surgery!",
    name: "Kwesi",
    role: "Father, Conjoined Twins, Ghana",
    flag: "https://newafricafoundation.org/wp-content/uploads/2023/10/Container-1.png",
  },
];

export function Testimonials() {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-[#cde3db] p-4 rounded-lg w-full">
          <p className="text-gray-800 font-medium">{testimonial.text}</p>
          <div className="flex items-center gap-3 mt-4">
            <Image
              src={testimonial.flag}
              alt={`${testimonial.name} flag`}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-bold text-black">{testimonial.name}</p>
              <p className="text-gray-600 text-sm">{testimonial.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
