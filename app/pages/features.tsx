import { Video, Book, MessageSquare } from "lucide-react";

export const Features = () => {
  const features = [
    {
      title: "15+ Hours of Focused Content",
      description:
        "We prioritize what truly matters, so you don’t waste time. Learnefficiently and start trading with confidence.",
      icon: <Video size={40} className="text-indigo-500" />,
    },
    {
      title: "Proven Trading Strategies",
      description:
        "Our strategies, tested by professionals, have helped over 200traders achieve profitability within 4 months. These methods are effective in both forex and crypto markets.",
      icon: <Book size={40} className="text-indigo-500" />,
    },
    {
      title: "Thriving Community and Support",
      description:
        "Join a community of over 3,000 members. Gain access to webinars, personal coaching, trade breakdowns, and daily market updates to enhance your trading journey.",
      icon: <MessageSquare size={40} className="text-indigo-500" />,
    },
  ];

  return (
    <section className="text-white bg-gradient-to-br from-gray-900 to-black">
      <div className="container px-4 sm:px-6 py-12 sm:py-16 md:py-24 mx-auto">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <p className="text-2xl sm:text-3xl text-white md:text-4xl font-bold mb-4">
          Unlock Trading Opportunities.
          </p>
          <p className="text-lg sm:text-xl text-white md:text-2xl font-thin leading-relaxed">
          Learn a proven, simple trading
          strategy that actually works. No fluff, just straightforward facts.          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-center sm:items-start md:items-center p-6 rounded-xl bg-gray-800/20 hover:bg-gray-800/30 transition-colors duration-200"
            >
              {/* Icon */}
              <div className="flex-shrink-0 bg-gradient-to-br from-gray-900 to-black p-4 shadow-xl rounded-full mb-4 sm:mb-0 md:mb-4 lg:mb-0">
                {feature.icon}
              </div>

              {/* Content */}
              <div className="text-center sm:text-left md:text-center lg:text-left sm:ml-6 md:ml-0 lg:ml-6">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-indigo-200">
                  {feature.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-300 font-extralight leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};