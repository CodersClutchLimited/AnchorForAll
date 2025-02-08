"use client";
import React, { useState } from "react";

const newsItems = [
  {
    date: "December 4, 2018",
    title: "Open Society Names New Head of Fellowship Program",
    region: "africa",
    year: "2018",
  },
  {
    date: "November 27, 2018",
    title: "Open Society Foundations Celebrate 25 Years in South Africa",
    region: "africa",
    year: "2018",
  },
  {
    date: "November 26, 2018",
    title: "The Open Society Foundation in Turkey Ceases Its Operations",
    region: "europe",
    year: "2018",
  },
  {
    date: "October 15, 2018",
    title: "Open Society Announces New Human Rights Initiative",
    region: "usa",
    year: "2018",
  },
  {
    date: "September 10, 2018",
    title: "Open Society Grants Support Global Education Programs",
    region: "asia-pacific",
    year: "2018",
  },
];

const NewsFilter = () => {
  const [region, setRegion] = useState("all");
  const [year, setYear] = useState("all");

  const filteredNews = newsItems.filter(
    (item) =>
      (region === "all" || item.region === region) &&
      (year === "all" || item.year === year)
  );

  return (
    <div className="min-h-screen">
      <div className="">
        <div className="flex justify-between items-center border-b border-b-gray-200 pb-6 mb-8">
          <h1 className="text-2xl font-bold text-gray-800">News Items</h1>
          <div className="flex gap-4">
            <select
              className="p-2 border rounded-lg text-sm text-gray-700 bg-white shadow-sm"
              onChange={(e) => setRegion(e.target.value)}
            >
              <option value="all">All Regions</option>
              <option value="africa">Africa</option>
              <option value="europe">Europe</option>
              <option value="usa">United States</option>
              <option value="asia-pacific">Asia Pacific</option>
            </select>
            <select
              className="p-2 border rounded-lg text-sm text-gray-700 bg-white shadow-sm"
              onChange={(e) => setYear(e.target.value)}
            >
              <option value="all">All Years</option>
              <option value="2018">2018</option>
            </select>
          </div>
        </div>
        <div className="bg-white">
          <div className="space-y-6">
            {filteredNews.map((item, index) => (
              <div
                key={index}
                className="border-b border-b-gray-200 pb-8 flex flex-row justify-between"
              >
                <div className="space-y-1">
                  <p className="font-semibold">PRESS RELEASE</p>
                  <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                </div>
                <div className="text-lg text-start font-semibold text-black  transition-colors cursor-pointer">
                  {item.title}
                </div>
                <p className="font-normal text-black max-w-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Deserunt voluptatibus et repellat saepe soluta nisi
                  reprehenderit commodi ullam. Incidunt magnam earum iusto
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFilter;
