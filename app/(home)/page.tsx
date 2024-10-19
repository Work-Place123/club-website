import { HeroScrollDemo } from "./components/HeroScrollDemo";
import { FloatingNavDemo } from "./components/FloatingNavDemo";
import { StickyScrollRevealDemo } from "./components/StickyScrollRevealDemo";
import { AppleCardsCarouselDemo } from "./components/AppleCardsCarouselDemo";
import { ExpandableCardDemo } from "./components/ExpandableCardDemo";
import { BackgroundGradientDemo } from "./components/BackgroundGradientDemo";
import { SignupFormDemo } from "./components/SignupFormDemo";
import { FlipWordsDemo } from "./components/FlipWordsDemo";


export default function Home() {
  return (
    <main >
      <div>
      
        
        <FloatingNavDemo/>
        <HeroScrollDemo />
        <StickyScrollRevealDemo />
        <AppleCardsCarouselDemo />
        <ExpandableCardDemo />
        <BackgroundGradientDemo />
        <SignupFormDemo/>
        <FlipWordsDemo/>
    </div>
    </main>
  );
}
