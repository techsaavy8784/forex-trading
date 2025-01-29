"use client";
import React from "react";
import { IconMessageCircle, IconStar, IconBook } from "@tabler/icons-react";

export function Card() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-5xl text-white font-bold mb-4">
          Your Path to Profitable Trading Starts Here
        </h1>
        <p className="text-xl font-light text-blue-500 max-w-4xl mx-auto">
          Discover what makes our course, community, and strategies the ultimate
          choice for traders of all levels.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Card 1: About Discord */}
        <div className="relative rounded-[22px] p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 shadow-lg">
          <div className="rounded-[22px] bg-white dark:bg-zinc-900 p-8 hover:shadow-2xl transition-shadow duration-300 min-h-full">
            <IconMessageCircle
              size={48}
              className="text-blue-500 mx-auto mb-6"
            />
            <h2 className="text-xl font-semibold text-center text-black dark:text-neutral-200 mb-4">
              What Is the Course
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center leading-relaxed">
              Our course is a comprehensive trading program designed to teach
              you proven strategies that work in real markets. Whether you&apos;re
              new to trading or looking to refine your skills, this course
              provides clear, actionable steps to help you become a confident
              and profitable trader. With 15+ hours of focused content, 20
              structured lessons, and lifetime access to resources, we equip
              you with everything you need to succeed in forex, crypto, and
              beyond.
            </p>
          </div>
        </div>

        {/* Card 2: What is Special */}
        <div className="relative rounded-[22px] p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 shadow-lg">
          <div className="rounded-[22px] bg-white dark:bg-zinc-900 p-8 hover:shadow-2xl transition-shadow duration-300 min-h-full">
            <IconStar size={48} className="text-purple-500 mx-auto mb-6" />
            <h2 className="text-xl font-semibold text-center text-black dark:text-neutral-200 mb-4">
              Why Our Community?
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center leading-relaxed">
              Trading can be challenging, but you don&apos;t have to do it alone. By
              joining our community of over 3,000 traders, you gain access to: ●
              Daily market updates and exclusive trade setups. ● Personal
              coaching, webinars, and trade breakdowns. ● Open discussions to
              clarify doubts and fix errors. Our supportive environment ensures
              that you&apos;re constantly learning, improving, and staying ahead in
              the market.
            </p>
          </div>
        </div>

        {/* Card 3: About the Course */}
        <div className="relative rounded-[22px] p-[2px] bg-gradient-to-r from-green-500 via-teal-500 to-green-500 shadow-lg">
          <div className="rounded-[22px] bg-white dark:bg-zinc-900 p-8 hover:shadow-2xl transition-shadow duration-300 min-h-full">
            <IconBook size={48} className="text-green-500 mx-auto mb-6" />
            <h2 className="text-xl font-semibold text-center text-black dark:text-neutral-200 mb-4">
              Why Is This Special?
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center leading-relaxed">
              This isn&apos;t just another trading course. It&apos;s a complete learning
              and support system led by a professional trader with over a decade
              of experience. What makes us stand out: ● Proven Strategies:
              Simple, effective methods that have helped over 200 traders
              achieve long-term profitability. ● Tailored Approach: Focused on
              what truly matters, without wasting your time on unnecessary
              theories. ● Lifetime Value: With lifetime live trading sessions,
              ongoing support, and regular updates, this course grows with you.
              This program doesn&apos;t just teach you how to trade—it builds the
              foundation for a sustainable, profitable trading journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
