import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";

const Hero = () => {
  const navigate = useNavigate();

  const handleStarted = () => {
    navigate('dashboard');
  };

  return (
    <header className="container-padding py-12 mt-20">
      {/* Hero content with DotPattern background */}
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background ">
        <DotPattern
          className={cn(
            "absolute inset-0 [mask-image:radial-gradient(350px_circle_at_center,white,transparent)]"
          )}
        />
        <div className="relative z-10 text-center">
          
          <motion.h1 
            className="heading-xl mb-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Learn with FINLIT
          </motion.h1>
          <motion.p 
            className="text-xl text-n-1 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A powerful and flexible platform designed for Financial knowledge and Habits.
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button className="button-primary flex items-center gap-2" onClick={handleStarted}>
              Get Started Now
            </button>
            <button className="px-6 py-3 border border-n-3 rounded-lg bg-color-4 hover:bg-color-3 transition-colors">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Hero;