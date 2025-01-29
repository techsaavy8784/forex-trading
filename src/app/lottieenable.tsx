'use client';

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import Lottie with client-side rendering
const LottiePlayer = dynamic(() => import('lottie-react'), {
  ssr: false
});

type LottieAnimationProps = {
  animationData: object;
  className?: string;
  loop?: boolean;
};

export function ClientSideLottie({ 
  animationData, 
  className = "w-full max-w-md" 
}: LottieAnimationProps) {
  return (
    <LottiePlayer
      animationData={animationData}
      loop
      className={className}
    />
  );
}