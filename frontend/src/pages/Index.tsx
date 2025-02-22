import Navigation from "@/components/landing/Navigation";
import Hero from "@/components/landing/Hero";
import TrustedBy from "@/components/landing/TrustedBy";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-n-8">
      <Header/>
      {/* <Navigation /> */}
      <Hero />
      <TrustedBy />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;