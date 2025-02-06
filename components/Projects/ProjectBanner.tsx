import React from 'react'
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogOverlay,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog";
import {CirclePlayIcon } from "lucide-react";
  

const ProjectBanner = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 w-full bg-[#367978] px-[150px] py-[65px]'>
            <div className="cols-1 py-3 border-r-2 border-gray-50">
                <p className='text-4xl lg:text-7xl text-white font-bold'>Our Projects</p>
            </div>
            <div className="flex gap-5 py-3">
                <p className='px-10 max-w-md text-white'>Since our inception, we have implemented targeted programs across healthcare, education, economic empowerment and more to uplift disadvantaged youth and communities across Africa and the world.</p>
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <div className="m-auto bg-[#DB2777] p-2 rounded-full animate-pulse">
                            <CirclePlayIcon size={38} className="text-white" />
                        </div>
                    </AlertDialogTrigger>
                    <AlertDialogOverlay>
                        <AlertDialogContent className="max-w-2xl p-4 bg-[#17E1B0] rounded-xl  md:rounded-xl">
                            <video controls className="w-full rounded-lg">
                                <source src="/your-video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <AlertDialogFooter>
                                <AlertDialogCancel className="text-white bg-[#D1A42C] hover:text-white hover:bg-gray-800 rounded-xl">
                                    Close
                                </AlertDialogCancel>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialogOverlay>
                </AlertDialog>{" "}

            </div>
        </div>
    )
}

export default ProjectBanner