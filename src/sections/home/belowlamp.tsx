"use client";
import React from "react";

export function BelowLamp() {
  return (
    <section className="bg-gray-900 text-white body-font py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-6 sm:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-500">
          Comprehensive Trading Mastery
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section - Steps */}
          <div className="w-full lg:w-2/5 space-y-8">
            {[
              {
                title: "Technical Aspects",
                description:
                  "Higher Timeframe Analysis, Determining the HTF Bias, Profiling Candles, Identifying Liquidity, Predicting Outcomes, Building a Narrative, Understanding Price Movements, CLS Strategy, Accurately Timing Charts, Integrating Everything into a Logical Framework.",
                iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
              },
              {
                title: "Risk Management",
                description:
                  "Assessing Risk Management Strategies for Prop and Personal Accounts, The Best Trade Management Techniques, Proper Trade Execution.",
                iconPath: "M22 12h-4l-3 9L9 3l-3 9H2",
              },
              {
                title: "Psychology Topics",
                description:
                  "Executing with Discipline and Consistency, Coping with Fear and Greed, Managing Stress Effectively.",
                iconPath: "M12 22V8M5 12H2a10 10 0 0020 0h-3",
              },
              {
                title: "Profitable Trader Habits",
                description:
                  "Effective Journaling (Template Provided), Tracking and Improving Performance, Backtesting Strategies for Success.",
                iconPath: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2",
              },
              {
                title: "Community",
                description:
                  "Lifetime Access to Resources and Support, Exclusive Private Trade Setups from Dave and Team, Open Discussions to Clarify Doubts, Error Correction for Continuous Improvement.",
                iconPath: "M22 11.08V12a10 10 0 11-5.93-9.14",
              },
            ].map((item, index) => (
              <div key={index} className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-700 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10 hover:scale-110 transition-transform duration-200">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d={item.iconPath}></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium text-lg text-indigo-400 mb-2 tracking-wider">
                    {item.title}
                  </h2>
                  <p className="leading-relaxed text-sm sm:text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Section - Video */}
          <div className="w-full lg:w-3/5">
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-xl">
              <iframe
                className="w-full h-full object-cover"
                src="https://www.youtube.com/embed/WY2-Sn4L-XU?si=mj6huj-H3D-MULZg&amp;controls=0"
                title="Trading Mastery Video"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
