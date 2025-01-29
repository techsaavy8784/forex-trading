import Image from "next/image";
import darwin from "../../public/darwin.jpg";
import forex from "../../public/forex-factory.jpg";
import leaderb from "../../public/leaderboard.jpg";

export function Intro() {
  const courses = [
    {
      id: 1,
      title: "Mastering Darwin Trading Strategies",
      description:
        "Learn the innovative Darwin trading strategies that focus on dynamic market adaptability and risk management.",
      lastUpdated: "Last updated 10 mins ago",
      image: darwin,
    },
    {
      id: 2,
      title: "Forex Factory Secrets",
      description:
        "Explore the secrets of the Forex Factory and gain insights into analyzing market trends effectively.",
      lastUpdated: "Last updated 15 mins ago",
      image: forex,
    },
    {
      id: 3,
      title: "Trading Leaderboard Techniques",
      description:
        "Discover leaderboard trading techniques to refine your skills and rank higher in competitive markets.",
      lastUpdated: "Last updated 20 mins ago",
      image: leaderb,
    },
  ];

  return (
    <div className="p-6 bg-gray-50 dark:bg-neutral-900">
      {/* Page Title */}
      <h2 className="text-4xl font-bold text-gray-800 dark:text-white text-center mb-6">
        Welcome to Our Trading Courses
      </h2>
      <p className="text-center text-gray-600 dark:text-neutral-400 mb-10 max-w-2xl mx-auto">
        Explore our comprehensive trading courses designed to help you master
        the art of trading in various markets. Learn strategies, tools, and
        techniques to achieve success in your trading journey.
      </p>

      {/* Course Cards */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course.id}
            className="flex flex-col bg-white border border-gray-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300  rounded-lg dark:bg-neutral-800 dark:border-neutral-700"
          >
            <Image
              className="w-full h-40 rounded-t-lg object-cover"
              src={course.image}
              alt={course.title}
            />
            <div className="p-4">
              <h3 className="text-base font-semibold text-gray-800 dark:text-white">
                {course.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                {course.description}
              </p>
              <p className="mt-4 text-xs text-gray-500 dark:text-neutral-500">
                {course.lastUpdated}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
