import ContactForm from "@/components/contactus/ContactForm";
import ContactInfo from "@/components/contactus/ContactInfo";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="w-full bg-[#367978] px-[150px] py-[70px]">
        <p className="text-4xl lg:text-7xl text-white font-bold">Contac us</p>
      </div>
      <div className="flex justify-center items-center  bg-gray-100">
        <ContactInfo />
      </div>
      <div className="bg-gray-100 w-full px-[150px] py-[70px]">
        <ContactForm />
      </div>
    </div>
  );
};

export default page;
