"use client"
import React, { useRef } from "react";

const TabOffice = () => {
  const sections = {
    africa: useRef(null),
    europe: useRef(null),
    latinAmerica: useRef(null),
    middleEast: useRef(null),
    usa: useRef(null),
  };

  const scrollToSection = (section) => {
    sections[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 p-4 font-bold text-lg bg-white sticky top-0 h-screen overflow-y-auto">
        <ul className="space-y-4">
          <li className="cursor-pointer" onClick={() => scrollToSection("africa")}>AFRICA</li>
          <li className="cursor-pointer" onClick={() => scrollToSection("europe")}>EUROPE AND CENTRAL ASIA</li>
          <li className="cursor-pointer" onClick={() => scrollToSection("latinAmerica")}>LATIN AMERICA AND THE CARIBBEAN</li>
          <li className="cursor-pointer" onClick={() => scrollToSection("middleEast")}>MIDDLE EAST AND NORTH AFRICA</li>
          <li className="cursor-pointer" onClick={() => scrollToSection("usa")}>UNITED STATES</li>
        </ul>
      </div>

      {/* Content Area */}
      <div className="w-3/4 overflow-y-auto p-8 h-screen flex flex-col space-y-12">
        <section ref={sections.africa} className="border-b pb-8">
          <h2 className="text-3xl font-bold">AFRICA</h2>
          <div className="grid grid-cols-2 gap-8 mt-6">
            <div>
              <p className="text-gray-500">Kenya</p>
              <h3 className="text-xl font-bold">Nairobi</h3>
              <p>Open Society–Africa</p>
              <p>Merchant Square, 2nd Floor, Riverside Drive, P.O. Box 2193</p>
              <p>Nairobi, 00202, Kenya</p>
            </div>
            <div>
              <p className="text-gray-500">Senegal</p>
              <h3 className="text-xl font-bold">Dakar</h3>
              <p>Open Society–Africa</p>
              <p>Stèle Mermoz, Rue El Hadj Ibrahima Niasse</p>
              <p>Dakar, MZ 83 X MZ 100, Senegal</p>
            </div>
            <div>
              <p className="text-gray-500">South Africa</p>
              <h3 className="text-xl font-bold">Johannesburg</h3>
              <p>Open Society–Africa</p>
              <p>1 Hood Avenue / 148 Jan Smuts, Rosebank</p>
              <p>Johannesburg, GP 2196, South Africa</p>
              <p>T. +27-011-587-5000</p>
              <p>F. +27-011-587-5099</p>
            </div>
          </div>
        </section>

        <section ref={sections.europe} className="border-b pb-8">
          <h2 className="text-3xl font-bold">EUROPE AND CENTRAL ASIA</h2>
          {/* Add content here */}
        </section>

        <section ref={sections.latinAmerica} className="border-b pb-8">
          <h2 className="text-3xl font-bold">LATIN AMERICA AND THE CARIBBEAN</h2>
          {/* Add content here */}
        </section>

        <section ref={sections.middleEast} className="border-b pb-8">
          <h2 className="text-3xl font-bold">MIDDLE EAST AND NORTH AFRICA</h2>
          {/* Add content here */}
        </section>

        <section ref={sections.usa} className="pb-8">
          <h2 className="text-3xl font-bold">UNITED STATES</h2>
          {/* Add content here */}
        </section>
      </div>
    </div>
  );
};

export default TabOffice;