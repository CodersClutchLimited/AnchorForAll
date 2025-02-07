"use client";
import React, { useRef } from "react";
import Image from "next/image";

const Timeline = () => {
  const years = ["2020", "2021", "2022", "2023", "2024", "2025"];
  const sections = useRef<{ [key: string]: HTMLElement | null }>({});

  const scrollToYear = (year: string) => {
    sections.current[year]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="my-10 flex h-screen mx-10">
      {/* Left Sidebar */}
      <div className="w-[120px] overflow-y-auto border-r border-gray-300">
        <ul className="space-y-2">
          {years.map((year) => (
            <li className="" key={year}>
              <button
                onClick={() => scrollToYear(year)}
                className="text-gray-700 hover:text-black font-medium"
              >
                {year}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-full px-8 overflow-y-auto">
        {years.map((year) => (
          <div
            key={year}
            ref={(el) => {
              if (el) {
                sections.current[year] = el;
              }
            }}
            className="border-b-4 border-black pb-20 mb-16 grid grid-cols-4 gap-6"
          >
            <h2 className="text-8xl font-bold col-span-1 pt-0 border-r border-gray-300">{year}</h2>
            <div className="col-span-3 pl-5">
              {year === "2020" && (
                <div>
                  <h3 className="text-3xl mb-2 font-bold">
                    Starting to Build a More Open World
                  </h3>
                  <div className="w-10 border-2 border-[#05D192] mt-6 mb-4"></div>
                  <p className="text-xl text-gray-900 mb-[6.5%]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium officiis iste architecto? Et rerum iusto, vitae expedita eius nihil molestiae? Cum porro aliquam possimus perspiciatis, ratione voluptatibus aspernatur accusamus dolores.
                  </p>
                  <Image
                    src="https://img.freepik.com/free-photo/diverse-friends-holding-various-icons_53876-30763.jpg?t=st=1738958208~exp=1738961808~hmac=e2cb7cc926c81eb7d97ae533da9c787a3a793c7e4ad397428c189a8dd484da9f&w=1380"
                    alt="2020 Event"
                    width={800}
                    height={500}
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
              )}
              {year === "2021" && (
                <div>
                  <h3 className="text-3xl mb-2 font-bold">Supporting Democracy in China</h3>
                  <div className="w-10 border-2 border-[#05D192] mt-6 mb-4"></div>
                  <p className="text-xl text-gray-900 mb-[6.5%]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione unde voluptatibus dolorum perspiciatis quo nulla saepe officia vel adipisci libero quas, magnam natus, illum nisi perferendis voluptatum, laboriosam laudantium consequatur?</p>
                  <Image
                    src="https://img.freepik.com/free-vector/gradient-people-holding-banners-china-protest-illustration_23-2149991362.jpg?t=st=1738958398~exp=1738961998~hmac=2e73a9c302bedb3201172bbc001f6d6065ca351f3646803070c38c24d84ba094&w=996"
                    alt="2020 Event"
                    width={800}
                    height={500}
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
              )}
              {year === "2022" && (
                <div>
                  <h3 className="text-3xl mb-2 font-bold">Fostering Open Societies in the Former Soviet Bloc</h3>
                  <div className="w-10 border-2 border-[#05D192] mt-6 mb-4"></div>
                  <p className="text-xl text-gray-900 mb-[6.5%]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, eius. Adipisci modi perferendis commodi minus temporibus perspiciatis rerum est distinctio voluptatibus provident unde iure hic deleniti error, similique esse magnam.</p>
                  <Image
                    src="https://img.freepik.com/free-vector/people-clapping-balconies-concept_23-2148508294.jpg?t=st=1738958484~exp=1738962084~hmac=fee6adcd6d07ad691fbcecbd94fd87d7d77a2b102fce3ae4feef2a69fd432767&w=996"
                    alt="2020 Event"
                    width={800}
                    height={500}
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
              )}
              {year === "2023" && (
                <div>
                  <h3 className="text-3xl mb-2 font-bold">Central European University Opens Its Doors</h3>
                  <div className="w-10 border-2 border-[#05D192] mt-6 mb-4"></div>
                  <p className="text-xl text-gray-900 mb-[6.5%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequatur sed enim quasi corrupti accusamus cupiditate quia, rem autem! Consectetur quaerat nemo voluptate explicabo molestias dignissimos error tempore corporis dolor?</p>
                  <Image
                    src="https://img.freepik.com/free-photo/long-shot-smiley-students-chatting_23-2149647060.jpg?t=st=1738958574~exp=1738962174~hmac=fb7a0e953f505198c206481a3e28039afaadcb4b9edc5549f994d811312f9977&w=996"
                    alt="2020 Event"
                    width={800}
                    height={500}
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
              )}
              {year === "2024" && (
                <div>
                  <h3 className="text-3xl mb-2 font-bold">Expanding Access to the Arts</h3>
                  <div className="w-10 border-2 border-[#05D192] mt-6 mb-4"></div>
                  <p className="text-xl text-gray-900 mb-[6.5%]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error ratione tenetur sit, eum temporibus non eius? Perferendis, atque. Perferendis velit vero, doloribus hic commodi distinctio harum architecto explicabo provident aliquid?</p>
                  <Image
                    src="https://img.freepik.com/free-photo/portrait-african-american-man-using-pencil-create-drawing-sketch-attending-artistic-workshop-develop-creative-skills-class-learning-new-contemporary-activity-handheld-shot_482257-37659.jpg?t=st=1738958662~exp=1738962262~hmac=c2d975cce879229f861b6230129b6cf9e48bc9ee42a7e00c64773e0a8abea0ba&w=1060"
                    alt="2020 Event"
                    width={800}
                    height={500}
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
              )}
              {year === "2025" && (
                <div>
                  <h3 className="text-3xl mb-2 font-bold">Funding Research in the Former Soviet Union</h3>
                  <div className="w-10 border-2 border-[#05D192] mt-6 mb-4"></div>
                  <p className="text-xl text-gray-900 mb-[6.5%]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolor aliquam, eos praesentium alias accusantium voluptate vero facere culpa sed ratione officia error saepe, porro consequatur itaque omnis? Aut, aliquid!</p>
                  <Image
                    src="https://img.freepik.com/free-photo/senior-private-agent-working-criminal-report-with-classified-data_482257-103857.jpg?t=st=1738958745~exp=1738962345~hmac=bd8b9a9bd150ba064f4a699541ab1e7b168363a3555756d473029a765748ef88&w=1060"
                    alt="2020 Event"
                    width={800}
                    height={500}
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
              )}

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
