import React from 'react'
import { ArrowRight, CirclePlayIcon } from "lucide-react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";
import { AlertDialogOverlay } from "@radix-ui/react-alert-dialog";

const VideoHero = () => {
  return (
    <div className="relative w-full h-[95vh] overflow-hidden mb-10">
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      src="/empower.mp4"
      autoPlay
      loop
      muted
    />
    <div className="absolute pl-10 md:pl-[150px] inset-0 flex justify-center flex-col bg-black bg-opacity-50 space-y-6">
      <h1 className="text-white  text-3xl md:text-6xl font-bold">
        Empowering <span className="text-[#17E1B0]">Nations.</span> <br />{" "}
        Changing <span className="text-[#17E1B0]">Lives.</span>
      </h1>
      <div className="flex flex-row space-x-8">
        <Link
          className="px-5 max-md:px-2 max-md:py-2 flex py-3 bg-white font-medium max-md:text-base text-lg uppercase flex-row border-b-4 border-[#DB2777]"
          href="#"
        >
          learn more{" "}
          <ArrowRight className="ml-2 flex items-center justify-center" />{" "}
        </Link>
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
  </div>
)
}

export default VideoHero
