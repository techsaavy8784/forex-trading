import { SpotlightPreview } from "./pages/hero";
import { Navbar } from "./pages/navbar";
import { Features } from "./pages/features";
import TradingCoursePage from "./pages/coursepage";
import { InfiniteMovingCardsDemo } from "./pages/review";
import { BelowLamp } from "./pages/belowlamp";
import { Card } from "./pages/cards";
import { Accordion } from "./pages/accordin";
import { Footer } from "./pages/footer";
import { About } from "./pages/about";
import { Intro } from "./pages/intro";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-950 to-black">
      <Navbar />
      <SpotlightPreview />
      <Features />
      <TradingCoursePage />
      <BelowLamp />
      <Card />
      <About />
      <Intro />
      <Accordion />
      <InfiniteMovingCardsDemo />
      <Footer />
    </div>
  );
}
