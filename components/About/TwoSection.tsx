import Image from "next/image";
import React from "react";
import { FaGooglePlay } from "react-icons/fa";

const TwoSection = () => {
  return (
    <div className="flex mt-[40px] flex-col md:flex-row items-center h-[70vh] max-md:mb-[500px]">
      {/* Left Content - 1/2 Width */}
      <div className="w-full h-full md:w-1/2 bg-gray-100 p-20 md:pl-[9.5rem] flex items-center justify-center">
        <div>
          <h3 className="text-lg text-gray-600">
            Want to participate in decision making?
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-2">
            Apply to join our board of directors.
          </h2>
          <p className="text-gray-500 mt-4">
            The process of becoming a board member is simple and convenient,
            kindly submit your credentials for review.
          </p>
          <button className="mt-6 bg-yellow-400 text-black font-bold py-3 px-6 rounded shadow-md hover:bg-yellow-500">
            REQUEST MEMBERSHIP NOW
          </button>
        </div>
      </div>

      {/* Right Image & Video Button - 1/2 Width */}
      <div className="w-full md:w-1/2 h-full relative">
        <Image
          src="https://img.freepik.com/free-photo/group-happy-african-volunteers-put-hands-hands-park-africa-volunteering-charity-people-ecology-concept_627829-13621.jpg?ga=GA1.1.1411535131.1738618804&semt=ais_hybrid"
          alt="Volunteers"
          width={600}
          height={400}
          className="object-cover w-full h-full"
        />
        <div className="absolute space-y-1 inset-0 flex flex-col items-center justify-center text-white bg-black/30">
          <button className="bg-white text-black font-bold p-8 rounded-full  shadow-md animate-pulse">
            <FaGooglePlay className="text-yellow-500" />
          </button>
          <h3 className="text-xl">Watch This Video</h3>
          <h2 className="text-3xl font-bold uppercase">Play it</h2>
        </div>
      </div>
    </div>
  );
};

export default TwoSection;
