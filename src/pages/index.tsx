import { About } from "../sections/home/about";
import { Accordion } from "../sections/home/accordin";
import { BelowLamp } from "../sections/home/belowlamp";
import { Card } from "../sections/home/cards";
import TradingCoursePage from "../sections/home/coursepage";
import { Features } from "../sections/home/features";
import { SpotlightPreview } from "../sections/home/hero";
import { Intro } from "../sections/home/intro";
import { InfiniteMovingCardsDemo } from "../sections/home/review";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-950 to-black">
      <SpotlightPreview />
      <Features />
      <TradingCoursePage />
      <BelowLamp />
      <Card />
      <About />
      <Intro />
      <Accordion />
      <InfiniteMovingCardsDemo />
    </div>
  );
}
