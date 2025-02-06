import Head from "next/head";
import Image from "next/image";

const Grids = () => {
  const images = [
    {
      src: "https://img.freepik.com/free-photo/volunteers-holding-boxes-containing-donations-charity_23-2149230563.jpg?ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
      alt: "Food distribution",
    },
    {
      src: "https://img.freepik.com/free-photo/volunteers-preparing-boxes-with-food-donations-using-tablet_23-2148732714.jpg?ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
      alt: "Community gathering",
    },
    {
      src: "https://newafricafoundation.org/wp-content/uploads/2023/11/EidDonation_FreedomMovement_GrahlPhotography84.jpg",
      alt: "Community gathering",
    },
    {
      src: "https://img.freepik.com/free-photo/volunteer-collecting-donation-box-from-another-volunteer_23-2149230540.jpg?ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
      alt: "Community gathering",
    },
    {
      src: "https://img.freepik.com/free-photo/guy-girl-with-check-boxes-volunteers-masks-with-laptop-boxes-with-humanitarian-aid_1157-46595.jpg?ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
      alt: "Community gathering",
    },
    // repeat same thing but the src should be empty create 5 of them
    {
      src: "https://img.freepik.com/free-photo/medium-shot-men-helping-social-cause_23-2149142839.jpg?ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
      alt: "",
    },
    {
      src: "https://img.freepik.com/free-photo/smiley-male-volunteer-holding-food-donations_23-2148732651.jpg?ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
      alt: "",
    },
    {
      src: "https://img.freepik.com/free-photo/people-holding-food-donations-close-up_23-2149196122.jpg?ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
      alt: "",
    },
    {
      src: "https://img.freepik.com/free-photo/father-son-spending-time-together_23-2148943161.jpg?ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
      alt: "",
    },
    {
      src: "https://img.freepik.com/free-photo/guy-girl-with-check-boxes-volunteers-masks-with-laptop-boxes-with-humanitarian-aid_1157-46591.jpg?ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
      alt: "",
    },

    {
      src: "https://img.freepik.com/free-photo/people-getting-street-food_23-2149004327.jpg?ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
      alt: "",
    },
    {
      src: "https://img.freepik.com/free-photo/volunteer-helping-with-donation-box_23-2149230505.jpg?ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
      alt: "",
    },

    // Add more images as needed
  ];

  return (
    <div>
      <Head>
        <title>Community Collage</title>
      </Head>

      <main className="flex flex-col items-center justify-center py-6 m-auto">
        <div className="grid max-w-7xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="">
              <Image
                src={image.src}
                alt={image.alt}
                className="rounded-lg border border-gray-300"
                width={200}
                height={100}
                layout="responsive"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
export default Grids;
