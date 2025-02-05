"use client"

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const videos = [
    { id: 1, title: 'Mepe Donation', url: '', duration: '1:10', thumbnail: 'https://img.youtube.com/vi/yDU6PaHMOrQ/maxresdefault.jpg' },
    { id: 2, title: 'The Philanthropist', url: '', duration: '4:04', thumbnail: 'https://img.youtube.com/vi/o37tS_bb6Qk/maxresdefault.jpg' },
    { id: 3, title: 'Only If We Can Give And Not Only...', url: '', duration: '2:21', thumbnail: 'https://img.youtube.com/vi/7LqxdI5NOC4/maxresdefault.jpg' },
    { id: 4, title: 'Welcome To The New Africa...', url: '', duration: '3:11', thumbnail: 'https://img.youtube.com/vi/8m-F3zcg3-g/maxresdefault.jpg' },
];

const Gallery = () => {
    const [selectedVideo, setSelectedVideo] = useState(videos[0]);

    return (
        <div className='bg-[#000000] mt-10 px-[10%] pb-[5%]'>
            <div className='mb-10'>
                <h2 className='pt-20 text-4xl font-bold text-white mb-3'>Media</h2>
                <p className='pt-3 mb-3 text-white text-lg'>
                    Experience the transformative power of Africa through a captivating collection of audio-visuals showcasing various initiatives
                </p>
                <Link href='' className='flex flex-row gap-2 pt-5 font-semibold text-sm text-[#CEA12B]'>
                    SEE MORE VIDEOS <ArrowRight className='w-5 h-5' />
                </Link>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {/* Larger Video Player Column */}
                <div className='md:col-span-2'>
                    <div className='relative'>
                        <video controls className='w-full h-[400px] rounded-lg'>
                            <source src={selectedVideo.url} type='video/mp4' />
                            Your browser does not support the video tag.
                        </video>
                        <div className='absolute top-2 left-2 text-white text-lg font-bold'>
                            {selectedVideo.title}
                        </div>
                        <button className='absolute top-2 right-2 bg-gray-800 text-white px-3 py-1 rounded'>Share</button>
                    </div>
                </div>

                {/* Video List Column */}
                <div className='col-span-1 bg-gray-900 p-4 rounded-lg'>
                    <div className="flex justify-between flex-row">
                        <h3 className='text-lg font-bold text-[#CEA12B] mb-3'>Video Gallery</h3>
                        <p className='text-sm text-gray-400 mb-4'>{videos.length} Videos</p>
                    </div>
                    <div className='flex flex-col'>
                        {videos.map((video) => (
                            <div
                                key={video.id}
                                className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer ${selectedVideo.id === video.id ? 'bg-gray-800' : 'hover:bg-gray-700'
                                    } transition`}
                                onClick={() => setSelectedVideo(video)}
                            >
                                <Image src={video.thumbnail} alt={video.title} width={70} height={70} className='rounded' />
                                <div className='flex-ro'>
                                    <p className='text-white text-sm font-semibold truncate'>{video.title}</p>
                                    <p className='text-gray-400 text-xs'>{video.duration}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
