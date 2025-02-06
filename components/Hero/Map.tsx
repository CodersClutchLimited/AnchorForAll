'use client';

import React from 'react';
import Image from 'next/image';

const Map = () => {
    const countries = [
        { name: 'USA', left: '18%', top: '30%', flag: 'https://flagcdn.com/w320/us.png' },
        { name: 'GHANA', left: '47%', top: '52%', flag: 'https://flagcdn.com/w320/gh.png' },
        { name: 'NIGERIA', left: '49%', top: '50%', flag: 'https://flagcdn.com/w320/ng.png' },
        { name: 'KENYA', left: '56%', top: '55%', flag: 'https://flagcdn.com/w320/ke.png' },
        { name: 'TURKEY', left: '60%', top: '30%', flag: 'https://flagcdn.com/w320/tr.png' },
        { name: 'INDIA', left: '63%', top: '45%', flag: 'https://flagcdn.com/w320/in.png' },
        { name: 'CHINA', left: '70%', top: '33%', flag: 'https://flagcdn.com/w320/cn.png' },
    ];

    return (
        <div className="mt-10 mb-10">
            <div className='flex items-center flex-col justify-center'>
                <h2 className="mb-2 text-gray-900 text-2xl md:text-4xl font-semibold">Countries Impacted</h2>
                <p className='mb-4 text-base md:text-lg text-gray-700'>Over the past decade, our projects and activities have positively impacted numerous nations.</p>
            </div>
            <div className="relative">
                <Image
                    src="https://newafricafoundation.org/wp-content/uploads/2023/10/Asset-2.svg"
                    alt="World Map"
                    width={1000} 
                    height={500} 
                    className="w-full h-auto"
                    priority
                />

                {countries.map((country, index) => (
                    <div
                        key={index}
                        className="absolute"
                        style={{ left: country.left, top: country.top }}
                    >
                        <div className="group relative">
                            <div className='animate-pulse bg-gray-100 bg-opacity-55 p-4 rounded-lg'>
                                <div className="w-3 h-3 rounded-full bg-[#CFA22B]"></div>
                            </div>

                            <div className="flex items-center absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded px-7 py-3 bg-white">
                                <Image
                                    src={country.flag}
                                    alt={`${country.name} flag`}
                                    width={16} 
                                    height={16} 
                                    className="w-4 h-4 mr-2"
                                />
                                <div className="text-gray-800 text-xs pr-4">{country.name}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Map;