import React from 'react';
import { CirclePlayIcon } from "lucide-react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import { AlertDialogOverlay } from "@radix-ui/react-alert-dialog";

const MiniCard = () => {
  return (
    <div className="relative mt-[80px] w-full h-[70vh] overflow-hidden">
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://newafricafoundation.org/wp-content/uploads/2023/10/2020-10-29.jpg"
        alt="Empowering Nations"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute pl-10 md:pl-[150px] inset-0 flex items-center flex-row bg-black bg-opacity-50 ">
        <h1 className="text-white text-3xl md:text-6xl font-bold">
          Empowering <span className="text-[#17E1B0]">Nations.</span> <br />
          Changing <span className="text-[#17E1B0]">Lives.</span>
        </h1>
        <div className="flex justify-center pl-[320px] items-center space-x-8">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <div className="bg-[#DB2777] p-8 rounded-full animate-pulse cursor-pointer">
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
          </AlertDialog>
        </div>
      </div>
    </div>
  );
};

export default MiniCard;