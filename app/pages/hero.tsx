'use client';

import React from "react";
import { ArrowBigRightDash, Medal, RocketIcon, Star } from "lucide-react";
import { ClientSideLottie } from '../lottieenable';
import { Spotlight } from "@/components/ui/Spotlight";
import { motion } from "framer-motion";
import AnimationData from 'lottie-web';

type SpotlightProps = {
  animationData?: typeof AnimationData;
  fallbackImage?: string;
};

export function SpotlightPreview({
  animationData,
  fallbackImage = "https://images.pexels.com/photos/6770775/pexels-photo-6770775.jpeg?auto=compress&cs=tinysrgb&w=600"
}: SpotlightProps) {
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const spanVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { delay: 0.4, duration: 0.8 } },
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen w-full overflow-hidden p-4 pt-[70px]">
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-1/2 w-96 h-96 bg-blue-500/30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-indigo-600/30 blur-3xl rounded-full"></div>
      </div>

      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6 md:space-y-8">
          
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-lg"
            variants={textVariant}
            initial="hidden"
            animate="visible"
          >
            Master the World of 
            <motion.span
              className="block text-blue-400"
              variants={spanVariant}
              initial="hidden"
              animate="visible"
            >
              Trading
            </motion.span>
            <RocketIcon className="inline ml-2 md:ml-3 text-blue-400 drop-shadow-lg" size={24} />
          </motion.h1>

          <motion.p
            className="text-sm md:text-base lg:text-lg text-gray-300 drop-shadow-md"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            Join Trading Hunters to access top-tier educational resources,
            connect with a vibrant community, and elevate your trading skills to
            new heights.
          </motion.p>

          <motion.button
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-colors flex items-center justify-center shadow-lg hover:shadow-blue-500/50"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            Join Now <ArrowBigRightDash className="ml-2" />
          </motion.button>

          <motion.div
            className="flex flex-col md:flex-row gap-6 justify-center md:justify-start mt-8 text-gray-300 drop-shadow-md"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
          >
            <div className="flex items-center space-x-3">
              <Star className="text-yellow-400 drop-shadow-lg" size={28} />
              <span className="text-lg md:text-xl font-semibold">4.9 Reviews</span>
            </div>
            <div className="hidden md:block border-r border-gray-600 h-8"></div>
            <div className="flex items-center space-x-3">
              <Medal className="text-yellow-400 drop-shadow-lg" size={28} />
              <span className="text-lg md:text-xl font-semibold">2000+ Learners</span>
            </div>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 relative flex items-center justify-center">
          {animationData ? (
            <ClientSideLottie
              animationData={animationData}
              className="w-full max-w-xl shadow-xl shadow-blue-500/50 rounded-lg"
            />
          ) : (
            <img
              src={fallbackImage}
              alt="Trading Illustration"
              className="w-full max-w-xl rounded-lg object-cover shadow-xl shadow-blue-500/50"
            />
          )}

          {/* Glassmorphism Overlay */}
          <div className="absolute md:-right-10 lg:-right-20 bottom-0 md:bottom-auto md:top-1/2 md:transform md:-translate-y-1/2 p-4 md:p-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl shadow-lg text-white z-20 w-full md:w-72">
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
              Trading Masterclass
            </h3>
            <ul className="text-xs md:text-sm space-y-1 md:space-y-2">
              <li>• Professional Strategies</li>
              <li>• Risk Management Techniques</li>
              <li>• Live Market Analysis</li>
              <li>• Interactive Learning</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
