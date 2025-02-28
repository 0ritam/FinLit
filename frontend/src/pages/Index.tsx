import { ReactLenis, useLenis } from 'lenis/react'
import Header from "@/components/landing/Header";
import NewHero from "@/components/landing/NewHero";
import Brand from '@/components/landing/Brand';
import NewFeatures from '@/components/landing/NewFeatures';
import Review from '@/components/landing/Review';
import Cta from '@/components/landing/Cta';
import NewFooter from '@/components/landing/NewFooter';

const Index = () => {
  return (
    <ReactLenis root>
      <div className="relative isolate overflow-hidden">
      <Header/>
      <NewHero/>
      <Brand/>
      <NewFeatures/>
      <Review/>
      <Cta/>
      <NewFooter/>
    </div>
    </ReactLenis>
    
  );
};

export default Index;