import React from "react";
import Image from "next/image";
import Link from "next/link";

const Carder = () => {
  return (
    <div className=" mt-[50px]">
      <div className="flex items-center flex-col justify-center  mt-[50px]">
        <h2 className="mb-2 text-gray-900 text-4xl font-semibold">Projects</h2>
        <p className="mb-4 text-lg text-gray-700 max-w-4xl text-center">
          Since our inception, we have implemented targeted programs across
          healthcare, education, economic empowerment and more to uplift
          disadvantaged youth and communities across Africa and the world.{" "}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mt-[50px] m-auto">
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <Image
            src="https://anchorforallfoundation.org/wp-content/uploads/2024/08/pexels-lagosfoodbank-9968379.jpg"
            alt="Image 1"
            width={500}
            height={300}
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="py-10 px-4">
            <h2 className="text-xl font-semibold mt-4">
              The Convention – Igniting The Voices Of Africa
            </h2>
            <p className="text-gray-600 mt-2">
              The Convention is sponsored by the New Africa Foundation. This
              event is scheduled to take place on the 7th of January 2024 at the
              Kwame Nkrumah Independence Square, coinciding with Ghana’s
              inauguration day.
            </p>
            <Link
              href="/next-link1"
              className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md overflow-hidden ">
          <Image
            src="https://anchorforallfoundation.org/wp-content/uploads/2024/08/pexels-barik5ive-3355696-5049538.jpg"
            alt="Image 2"
            width={500}
            height={300}
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="py-10 px-4">
            <h2 className="text-xl font-semibold mt-4">
              The University Challenge – Entrepreneurship, Leadership, Wealth
              Creation
            </h2>
            <p className="text-gray-600 mt-2">
              The University Challenge envisions a transformative departure from
              the conventional approach of obtaining degrees solely for
              job-seeking purposes - a pursuit that is often limited by the
              scarcity of job opportunities in a given economy or country.
            </p>
            <Link
              href="/next-link2"
              className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md overflow-hidden ">
          <Image
            src="https://anchorforallfoundation.org/wp-content/uploads/2024/08/pexels-barik5ive-3355696-5049538.jpg"
            alt="Image 3"
            width={500}
            height={300}
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="py-10 px-4">
            <h2 className="text-xl font-semibold mt-4">Interfaith Harmony </h2>
            <p className="text-gray-600 mt-2">
              Crossing barriers and fostering harmony, the Foundation became a
              bridge between Christians and Muslims, proving that unity can
              prevail in diversity.{" "}
            </p>
            <Link
              href="/next-link3"
              className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md overflow-hidden ">
          <Image
            src="https://anchorforallfoundation.org/wp-content/uploads/2024/08/pexels-barik5ive-3355696-5049538.jpg"
            alt="Image 4"
            width={500}
            height={300}
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="py-10 px-4">
            <h2 className="text-xl font-semibold mt-4">COVID-19 Response </h2>
            <p className="text-gray-600 mt-2">
              During the COVID-19 pandemic and Ghana&apos;s lockdown, the New Africa
              Foundation was swift in action.{" "}
            </p>
            <Link
              href="/next-link4"
              className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carder;