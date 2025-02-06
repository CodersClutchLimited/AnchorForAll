import Image from 'next/image';

import React from 'react';

const TeamCards = () => {
    return (
        <div className="flex justify-center">
            <div className="mt-10 mb-20 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-[100px]">
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

                {/* card 5 */}
                <div className="w-[350px] h-[370px] rounded-2xl relative shadow-md bg-white">
                    <Image
                        src="https://img.freepik.com/free-photo/handsome-man-smiling-near-water_144627-1678.jpg?uid=R176520851&ga=GA1.1.438080985.1725988205&semt=ais_hybrid"
                        alt="Andrew Bowe"
                        width={300}
                        height={300}
                        className="object-cover rounded-2xl w-full h-full"
                    />
                    <div className="rounded-2xl w-[350px] px-6 -mt-[70px] py-[6%] absolute -ml-7 bg-[#F7D86F]">
                        <h3 className="text-2xl  font-bold text-gray-900">Abbas Dadla</h3>
                        <p className="text-lg text-black">Volunteer</p>
                    </div>
                </div>

                {/* card 6 */}
                <div className="w-[350px] h-[370px] rounded-2xl relative shadow-md bg-white">
                    <Image
                        src="https://img.freepik.com/free-photo/african-female-soldier-jobs-career-portrait_53876-148048.jpg?t=st=1738865289~exp=1738868889~hmac=1fe6a6c4b3dfcc67e1e24079027f7a44bc848afcfbd5e04c6bc7f7551de86086&w=826"
                        alt="Andrew Bowe"
                        width={300}
                        height={300}
                        className="object-cover rounded-2xl w-full h-full"
                    />
                    <div className="rounded-2xl w-[350px] px-6 -mt-[70px] py-[6%] absolute -ml-7 bg-[#F7D86F]">
                        <h3 className="text-2xl  font-bold text-gray-900">John Lincoln</h3>
                        <p className="text-lg text-black">Support Staff</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TeamCards;