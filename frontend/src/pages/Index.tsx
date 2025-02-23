import { ReactLenis, useLenis } from 'lenis/react'
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import NewHero from "@/components/landing/NewHero";
import Brand from '@/components/landing/Brand';
import NewFeatures from '@/components/landing/NewFeatures';

const Index = () => {
  return (
    <ReactLenis root>
      <div className="relative isolate overflow-hidden">
      <Header/>
      <NewHero/>
      <Brand/>
      <NewFeatures/>
      <Footer />
    </div>
    </ReactLenis>
    
  );
};

export default Index;