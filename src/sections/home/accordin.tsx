"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Accordion() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      question: "What if I know nothing about trading?",
      answer:
        "No worries! You don’t need any prior experience to begin your journey with us. Many beginners who have completed this course have started trading profitably and confidently.",
    },
    {
      question: "How do I start, and what is needed?",
      answer:
        "Simply press the “Join” button available on several places on our website. After payment, you will receive access to our trading community, educational resources, direct contact with the founder, and much more.",
    },
    {
      question: "What will I learn in this course?",
      answer:
        "You will learn proven trading strategies, risk management techniques, and trading psychology tips. From basic concepts to advanced setups, this course is designed to help you trade confidently and profitably.",
    },
    {
      question: "Is there a community I can join?",
      answer:
        "Yes! Our community includes over 3,000 traders. You’ll gain lifetime access to webinars, trade setups, personal coaching, and daily market updates, along with open discussions to clarify any questions or doubts.",
    },
    {
      question: "What makes this course different from others?",
      answer:
        "This course focuses only on what matters—proven strategies and techniques. With over 15 hours of content and 20 structured lessons, you’ll avoid unnecessary theory and learn actionable steps to become profitable. Plus, you’ll receive lifetime support and access to ongoing updates.",
    },
    {
      question: "How long does it take to complete the course?",
      answer:
        "The course spans 30 days with over 15 hours of content. You can learn at your own pace, with lifetime access to all materials.",
    },
    {
      question: "Will I get support after completing the course?",
      answer:
        "Absolutely! You’ll continue to be part of our community and gain access to live trading sessions, updates, and direct support whenever needed.",
    },
    {
      question: "Is this course suitable for day traders or swing traders?",
      answer:
        "Yes! The course covers timing strategies for both day trading and swing trading, helping you find the approach that suits your style and goals.",
    },
  ];

  return (
    <div className="space-y-4 py-12 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 max-w-screen-lg mx-auto">
      <h1 className="text-center text-4xl text-white font-semibold">Course Curriculum</h1>
      <p className="text-center text-4xl font-thin text-blue-500">
        Unlimited Discord Access and Live Trading
      </p>
      {accordionData.map((item, index) => (
        <div
          key={index}
          className="group border-s-4 rounded-md border-blue-700 bg-gray-50 p-6 dark:bg-gray-900"
        >
          <summary
            onClick={() => toggleAccordion(index)}
            className="flex cursor-pointer items-center justify-between gap-1.5"
          >
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">
              {item.question}
            </h2>
            <motion.span
              initial={{ rotate: 0 }}
              animate={{
                rotate: activeIndex === index ? -45 : 0,
              }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1], // Smooth ease-in-out curve
              }}
              className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3 dark:bg-gray-800 dark:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.span>
          </summary>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1], // Same ease curve for consistency
                }}
                className="mt-4 overflow-hidden leading-relaxed text-gray-700 dark:text-gray-200"
              >
                {item.answer}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
