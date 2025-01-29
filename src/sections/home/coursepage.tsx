import React from 'react';
import { ArrowRight } from 'lucide-react';

const TradingCoursePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black px-4 py-8 sm:p-6 sm:py-12 md:p-8 md:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          {/* Left Content Section */}
          <div className="space-y-4 sm:space-y-6 text-white">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-blue-500/10 px-3 py-1 text-sm sm:px-4 sm:text-base text-blue-400">
                Instruction
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Join and learn profitable 
            {" "}
              <span className="text-[#3b82f6]">trading strategy.</span>
            </h1>

            <ul className="grid gap-3 sm:gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                " 15+ hours of content, just important facts",
                "Unlimited Discord access",
                "30 Days Course Duration",
                "Lifetime Live Trading",
                "New Strategies",
                "Private Trade setups",
                " Fixing errors",
                "Open discussion for clarification any hesitations",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <svg className="h-5 w-5 flex-shrink-0 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Pricing Card Section */}
          <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-blue-800 p-6 sm:p-8 md:p-12 lg:p-16 backdrop-blur-sm my-8 sm:my-12 lg:-my-24">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-medium text-white">course fee</h2>
              <div className="mt-4 text-center">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">$599</span>
                <span className="ml-1 text-xl sm:text-2xl text-white">USD</span>
              </div>

              <button className="group mt-6 sm:mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 sm:px-6 py-3 text-base sm:text-lg font-semibold text-blue-600 transition-all hover:bg-blue-50">
                REGISTER NOW
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>

              <div className="mt-8 sm:mt-12">
                <p className="text-base sm:text-lg text-blue-400">COURSE DURATION</p>
                <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-4">
                  {[
                    { value: "30", label: "DAYS" },
                    { value: "25", label: "LESSONS" },
                    { value: "15", label: "HOURS" },
                  ].map(({ value, label }) => (
                    <div key={label} className="text-center">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                        {value}
                      </div>
                      <div className="mt-1 text-xs sm:text-sm text-gray-400">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingCoursePage;