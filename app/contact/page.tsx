import ContactForm from "@/components/contactus/ContactForm";
import ContactInfo from "@/components/contactus/ContactInfo";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="w-full bg-[#367978] px-[150px] py-[70px]">
        <p className="text-4xl lg:text-7xl text-white font-bold">Contac us</p>
      </div>
      <div className="container bg-gray-100  mx-auto px-4 py-12 lg:flex items-center space-y-8 lg:space-y-0 lg:space-x-6">
        <ContactInfo />
      </div>
      <div className="bg-gray-100  flex items-center">
        <ContactForm />
      </div>
    </div>
  );
};

export default page;
