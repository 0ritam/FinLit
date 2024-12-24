import { motion } from "framer-motion";
import dashboard from '../../pages/Dashboard'
import { useNavigate } from 'react-router-dom';

const Hero = () => {

  const navigate = useNavigate();

  const handleStarted = () => {
    navigate('dashboard');
  }

  return (
    <header className="container-padding py-12">
      {/* Hero content */}
      <div className="max-w-4xl mx-auto text-center relative z-10 pt-40 pb-32">
        <motion.h1 
          className="heading-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Learn with FINLIT
        </motion.h1>
        <motion.p 
          className="text-xl text-neutral-600 mb-8"
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
    </header>
  );
};

export default Hero;