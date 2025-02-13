import React from 'react'
import Image from 'next/image'

const Circle = () => {
    return (
        <div className="bg-white text-center py-12 mt-[10%]">
            <div className="">
                <div className="bg-[#367978] text-white font-semibold py-3 px-10 inline-block rounded-md mb-6">
                    2024: FOCUS AREAS
                </div>
                <h2 className="text-2xl md:text-5xl font-bold text-[#345F80] mb-3">
                    Shaping a brighter tomorrow through
                </h2>
                <h2 className="mt-2 text-2xl md:text-5xl font-bold text-[#345F80] mb-5">
                    empowerment & Climate Action.
                </h2>

                <p className="text-gray-600 mb-10 text-lg">
                    Dedicated to addressing socio-economic, climate and environmental issues hence making vast <br />
                    impact across the African continent.
                </p>
                <div className="flex flex-wrap gap-[50px] justify-center">
                    <div className="flex flex-col items-center">
                        <div className="rounded-full p-10 mb-4 border-2 hover:bg-[#345F80] border-[#0073A8] transition duration-500">
                            <Image
                                src="https://cdn-icons-png.flaticon.com/128/16683/16683906.png"
                                alt="Seamless Adoption"
                                width={48}
                                height={48}
                            />
                        </div>
                        <p className="text-2xl font-semibold text-[#345F80] whitespace-nowrap">Seamless Adoption</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="rounded-full p-10 mb-4 border-2 hover:bg-[#345F80] border-[#0073A8] transition duration-500">
                            <Image
                                src="https://cdn-icons-png.flaticon.com/128/502/502854.png"
                                alt="Climate & Energy"
                                width={48}
                                height={48}
                            />
                        </div>
                        <p className="text-2xl font-semibold text-[#345F80] whitespace-nowrap">Climate & Energy</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="rounded-full p-10 mb-4 border-2 hover:bg-[#345F80] border-[#0073A8] transition duration-500">
                            <Image
                                src="https://cdn-icons-png.flaticon.com/128/2702/2702134.png"
                                alt="Quality Education"
                                width={48}
                                height={48}
                            />
                        </div>
                        <p className="text-2xl font-semibold text-[#345F80] whitespace-nowrap">Quality Education</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="rounded-full p-10 mb-4 border-2 hover:bg-[#345F80] border-[#0073A8] transition duration-500">
                            <Image
                                src="https://cdn-icons-png.flaticon.com/128/4419/4419981.png"
                                alt="Quality Healthcare"
                                width={48}
                                height={48}
                            />
                        </div>
                        <p className="text-2xl font-semibold text-[#345F80] whitespace-nowrap">Quality Healthcare</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Circle
