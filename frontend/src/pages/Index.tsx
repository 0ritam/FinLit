import { ReactLenis, useLenis } from 'lenis/react'
import Navigation from "@/components/landing/Navigation";
import Hero from "@/components/landing/Hero";
import TrustedBy from "@/components/landing/TrustedBy";
import Features from "@/components/landing/Features";
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
      {/* <Navigation /> */}
      {/* <Hero /> */}
      {/* <TrustedBy /> */}
      
      <Brand/>
      <NewFeatures/>
      
      
      <Footer />
    </div>
    </ReactLenis>
    
  );
};

export default Index;