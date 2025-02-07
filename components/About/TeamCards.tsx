import Image from 'next/image';

import React from 'react';

const TeamCards = () => {
    return (
        <>
        <div className="flex justify-center px-[4%] border-b-2 pb-8">
            <div className="my-[80px]  grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-[100px]">
                {/* Card 1 */}
                <div className="w-[350px] h-[370px] rounded-2xl relative shadow-md bg-white">
                    <Image
                        src="https://img.freepik.com/free-photo/serious-young-african-man-standing-isolated_171337-9633.jpg?uid=R176520851&ga=GA1.1.438080985.1725988205&semt=ais_hybrid"
                        alt="Andrew Bowe"
                        width={300}
                        height={300}
                        className="object-cover rounded-2xl w-full h-full"
                    />
                    <div className="rounded-2xl w-[350px] px-6 -mt-[70px] py-[6%] absolute -ml-7 bg-[#F7D86F]">
                        <h3 className="text-2xl  font-bold text-gray-900">Andrew Bowe</h3>
                        <p className="text-lg text-black">Support Staff</p>
                    </div>
                </div>

                {/* card 2 */}
                <div className="w-[350px] h-[370px] rounded-2xl relative shadow-md bg-white">
                    <Image
                        src="https://img.freepik.com/free-photo/worldface-american-man-white-background_53876-31194.jpg?uid=R176520851&ga=GA1.1.438080985.1725988205&semt=ais_hybrid"
                        alt="Andrew Bowe"
                        width={300}
                        height={300}
                        className="object-cover rounded-2xl w-full h-full"
                    />
                    <div className="rounded-2xl w-[350px] px-6 -mt-[70px] py-[6%] absolute -ml-7 bg-[#F7D86F]">
                        <h3 className="text-2xl  font-bold text-gray-900">Carla Culos</h3>
                        <p className="text-lg text-black">Volunteer</p>
                    </div>
                </div>

                {/* card 3 */}
                <div className="w-[350px] h-[370px] rounded-2xl relative shadow-md bg-white">
                    <Image
                        src="https://img.freepik.com/premium-photo/portrait-african-american-woman_93675-18412.jpg?uid=R176520851&ga=GA1.1.438080985.1725988205&semt=ais_hybrid"
                        alt="Andrew Bowe"
                        width={300}
                        height={300}
                        className="object-cover rounded-2xl w-full h-full"
                    />
                    <div className="rounded-2xl w-[350px] px-6 -mt-[70px] py-[6%] absolute -ml-7 bg-[#F7D86F]">
                        <h3 className="text-2xl  font-bold text-gray-900">Alisha Mahen</h3>
                        <p className="text-lg text-black">Volunteer</p>
                    </div>
                </div>

                {/* card 4 */}
                <div className="w-[350px] h-[370px] rounded-2xl relative shadow-md bg-white">
                    <Image
                        src="https://img.freepik.com/premium-photo/photo-portrait-beautiful-female-doctor-capturing-professionalism-compassion_1204564-154853.jpg?uid=R176520851&ga=GA1.1.438080985.1725988205&semt=ais_hybrid"
                        alt="Andrew Bowe"
                        width={300}
                        height={300}
                        className="object-cover rounded-2xl w-full h-full"
                    />
                    <div className="rounded-2xl w-[350px] px-6 -mt-[70px] py-[6%] absolute -ml-7 bg-[#F7D86F]">
                        <h3 className="text-2xl  font-bold text-gray-900">Alexandra Trab</h3>
                        <p className="text-lg text-black">Support Staff</p>
                    </div>
                </div>

            </div>

        </div>


        {/* NEXT CARDS SECTIONS */}
        <div className="flex justify-center px-[4%] border-b-2 pb-8">
            <div className="my-[80px]  grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-[100px]">
                {/* Card 1 */}
                <div className="w-[350px] h-[370px] rounded-2xl relative shadow-md bg-white">
                    <Image
                        src="https://img.freepik.com/free-photo/young-black-woman-with-afro-hair-laughing-enjoying_150588-161.jpg?ga=GA1.1.1411535131.1738618804&semt=ais_hybrid"
                        alt="Andrew Bowe"
                        width={300}
                        height={300}
                        className="object-cover rounded-2xl w-full h-full"
                    />
                    <div className="rounded-2xl w-[350px] px-6 -mt-[70px] py-[6%] absolute -ml-7 bg-[#F7D86F]">
                        <h3 className="text-2xl  font-bold text-gray-900">Emma Lowe</h3>
                        <p className="text-lg text-black">Support Staff</p>
                    </div>
                </div>

                {/* card 2 */}
                <div className="w-[350px] h-[370px] rounded-2xl relative shadow-md bg-white">
                    <Image
                        src="https://img.freepik.com/free-photo/surprised-young-caucasian-male-gardener-wearing-gardening-hat-pretends-taking-selfie-isolated-green-wall-with-copy-space_141793-107972.jpg?ga=GA1.1.1411535131.1738618804&semt=ais_hybrid"
                        alt="Andrew Bowe"
                        width={300}
                        height={300}
                        className="object-cover rounded-2xl w-full h-full"
                    />
                    <div className="rounded-2xl w-[350px] px-6 -mt-[70px] py-[6%] absolute -ml-7 bg-[#F7D86F]">
                        <h3 className="text-2xl  font-bold text-gray-900">Javis Rhea</h3>
                        <p className="text-lg text-black">Volunteer</p>
                    </div>
                </div>

                {/* card 3 */}
                <div className="w-[350px] h-[370px] rounded-2xl relative shadow-md bg-white">
                    <Image
                        src="https://img.freepik.com/free-photo/pleased-young-gardener-girl-wearing-uniform-hat-looking-front-stretching-out-hand-towards-front-isolated-green-wall_141793-110125.jpg?ga=GA1.1.1411535131.1738618804&semt=ais_hybrid"
                        alt="Andrew Bowe"
                        width={300}
                        height={300}
                        className="object-cover rounded-2xl w-full h-full"
                    />
                    <div className="rounded-2xl w-[350px] px-6 -mt-[70px] py-[6%] absolute -ml-7 bg-[#F7D86F]">
                        <h3 className="text-2xl  font-bold text-gray-900">Santiago Mohan</h3>
                        <p className="text-lg text-black">Volunteer</p>
                    </div>
                </div>

                {/* card 4 */}
                <div className="w-[350px] h-[370px] rounded-2xl relative shadow-md bg-white">
                    <Image
                        src="https://img.freepik.com/free-photo/close-up-photo-blissful-african-male-model-with-dark-eyes-standing-blur-nature-outdoor-portrait-stylish-guy-black-hat-headphones-walking-street_197531-21897.jpg?ga=GA1.1.1411535131.1738618804&semt=ais_hybrid"
                        alt="Andrew Bowe"
                        width={300}
                        height={300}
                        className="object-cover rounded-2xl w-full h-full"
                    />
                    <div className="rounded-2xl w-[350px] px-6 -mt-[70px] py-[6%] absolute -ml-7 bg-[#F7D86F]">
                        <h3 className="text-2xl  font-bold text-gray-900">Abdul Mbowe</h3>
                        <p className="text-lg text-black">Support Staff</p>
                    </div>
                </div>

            </div>

        </div>



        </>

    );
};

export default TeamCards;