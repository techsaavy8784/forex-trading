"use client";
import React from "react";
import Image from "next/image";
import mentor from "../../public/mentor.jpg";

const content = [
  {
    title: "About David, the Founder and Your Trading Mentor",
    description: (
      <ul className="list-disc pl-6 space-y-2 text-gray-200 text-base md:text-lg">
        <li>
          David is a professional trader with over 15 years of experience in the markets.
        </li>
        <li>
          Winner of multiple trading competitions, including Forex Factory 2019 and Darwinex.
        </li>
        <li>
          Full-time trader for more than 10 years.
        </li>
        <li>
          Worked with various trading brokers, platforms, and proprietary trading firms.
        </li>
        <li>
          Has successfully helped over 200 traders achieve profitability in the markets.
        </li>
      </ul>
    ),
    content: (
      <div className="flex justify-center items-center w-full">
        <Image
          src={mentor}
          width={600}
          height={600}
          className="rounded-3xl object-cover shadow-lg"
          alt="David - Trading Mentor"
          priority
        />
      </div>
    ),
  },
];

export function About() {
  return (
    <div className="p-6 lg:p-12 flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {content[0].title}
          </h2>
          {content[0].description}
        </div>

        {/* Image Content */}
        <div className="w-full md:w-1/2 flex justify-center">
          {content[0].content}
        </div>
      </div>
    </div>
  );
}
