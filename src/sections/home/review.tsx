"use client";

import React from "react";
import { InfiniteMovingCards } from "../../components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-gradient-to-br from-gray-900 to-black items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "This course completely transformed the way I trade. The two easy entry models and the logical framework helped me predict market outcomes with precision. Within just three months, I started seeing consistent profits, and I’ve never looked back. David’s strategies are simple, but they truly work!",
    name: "Emma R.",
    title: "Forex Trader",
  },
  {
    quote:
      "I struggled with discipline and managing fear in trading before joining this course. The psychology topics and risk management techniques taught by David were game-changers for me. Now, I’m trading with confidence and consistency, and my account has grown by 25% in the last two months.",
    name: "Michael T.",
    title: "Crypto Trader",
  },
  {
    quote:
      "The CLS strategy and how to profile candles were absolute eye-openers for me. David’s detailed explanations and personal support through the community made learning easy. Thanks to his mentorship, I now trade with a clear plan and have achieved profitability after four months.",
    name: "Sarah L.",
    title: "Day Trader",
  },
  {
    quote:
      "David’s course is worth every penny. The higher timeframe analysis and key levels have given me a new perspective on trading. I’ve doubled my demo account profits in just a few weeks and am now seeing real results in my live account. The private trade setups are an added bonus!",
    name: "James K.",
    title: "Swing Trader",
  },
  {
    quote:
      "I joined the course to refine my trading skills for prop trading, and it exceeded all my expectations. The risk management techniques and backtesting tips made a huge difference. I’ve now passed a funded account challenge and am earning consistently. Thank you, David, for such an amazing course!",
    name: "Olivia M.",
    title: "Prop Firm Trader",
  },
];
