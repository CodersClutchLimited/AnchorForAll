"use client"; // Mark this as a client component

import { useState } from "react";
import { deleteFile } from "@/app/actions";
import { groupFilesByType } from "@/app/utils";
import Image from "next/image";

const List = ({ files }: { files: string[] }) => {
    const [titleFilter, setTitleFilter] = useState("");
    const [dateFilter, setDateFilter] = useState("");

    // Filter files based on title and date
    const filteredFiles = files.filter((file) => {
        const fileName = file.substring(file.indexOf("-") + 1);
        const fileTimestamp = parseInt(file.split("-")[0]);
        const fileDate = new Date(fileTimestamp);

        // Normalize the file date to YYYY-MM-DD format
        const fileDateString = fileDate.toISOString().split("T")[0];

        // Normalize the filter date to YYYY-MM-DD format
        const filterDateString = dateFilter ? new Date(dateFilter).toISOString().split("T")[0] : "";

        // Make the title search case-insensitive
        const matchesTitle = titleFilter
            ? fileName.toLowerCase().includes(titleFilter.toLowerCase())
            : true;
        const matchesDate = dateFilter ? fileDateString === filterDateString : true;

        return matchesTitle && matchesDate;
    });

    const groupedFiles = groupFilesByType(filteredFiles);

    const handleDelete = async (fileName: string) => {
        await deleteFile(fileName);
    };

    return (
        <>
            <div className="mx-10">
                <h1 className="uppercase mb-5 font-bold text-[3.5rem] max-md:text-4xl tracking-[-0.14rem]">
                    OUR REPORTS
                </h1>

                {/* Filter Inputs */}
                <div className="mb-8 space-x-5">
                    <input
                        type="text"
                        placeholder="Filter by title"
                        value={titleFilter}
                        onChange={(e) => setTitleFilter(e.target.value)}
                        className="p-2 border border-gray-300 rounded-xl"
                    />
                    <input
                        type="date"
                        placeholder="Filter by date"
                        value={dateFilter}
                        onChange={(e) => setDateFilter(e.target.value)}
                        className="ml-2 p-2 border border-gray-300 rounded-xl"
                    />
                </div>

                {/* Render files */}
                {Object.entries(groupedFiles).map(([type, typeFiles]) => (
                    <div key={type} className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 capitalize text-[#005075]">
                            {type} Files
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {typeFiles.map((file) => (
                                <div
                                    key={file}
                                    className="bg-[#05D192] cursor-pointer p-4 rounded-xl shadow-md transition-transform duration-300 hover:-translate-y-2"
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-[#023047] truncate">
                                                {file.substring(file.indexOf("-") + 1)}
                                            </p>
                                            <p className="text-xs text-[#fff]">
                                                {new Date(
                                                    parseInt(file.split("-")[0])
                                                ).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>

                                    {type === "image" && (
                                        <div className="relative aspect-video bg-[#1e1f29] rounded-md">
                                            <Image
                                                src={`/api/download/${file}`}
                                                alt={file}
                                                fill
                                                className="rounded-md object-contain"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        </div>
                                    )}
                                    {type === "video" && (
                                        <video
                                            className="w-full rounded-md bg-[#1e1f29]"
                                            controls
                                            src={`/api/download/${file}`}
                                        />
                                    )}
                                    {type === "audio" && (
                                        <audio
                                            className="w-full mt-3"
                                            controls
                                            src={`/api/download/${file}`}
                                            preload="none"
                                        />
                                    )}
                                    {(type === "document" || type === "other") && (
                                        <div className="mt-2">
                                            <a
                                                href={`/api/download/${file}`}
                                                className="text-[#023047] font-semibold hover:text-[#0077B6] text-sm"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Download File
                                            </a>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {files.length === 0 && (
                    <div className="rounded-xl text-center py-12  border border-gray-300">
                        <p className="text-[#005075] font-semibold text-lg">No files uploaded yet</p>
                    </div>
                )}
            </div>
        </>
    );
};

export { List };