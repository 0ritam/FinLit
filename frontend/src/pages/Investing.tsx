import Navigation from "@/components/landing/Navigation1";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const chapters = [
  {
    title: "Investment Basics",
    description: "Understanding the fundamentals of investing and markets",
    path: "/investing/basics"
  },
  {
    title: "Portfolio Management",
    description: "Learn how to build and manage your investment portfolio",
    path: "/investing/portfolio"
  },
  {
    title: "Risk Management",
    description: "Master the strategies for managing investment risks",
    path: "/investing/risk"
  }
];

const Investing = () => {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Navigation />
      <div className="container-padding py-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h1 
            className="heading-xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Smart Investing
          </motion.h1>
          <motion.p 
            className="text-xl text-neutral-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Build wealth through strategic investment knowledge
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chapters.map((chapter, index) => (
            <motion.div
              key={chapter.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Link to={chapter.path} className="block">
                <div className="glass-panel p-6 rounded-xl hover:shadow-lg transition-all">
                  <h3 className="text-xl font-semibold mb-2">{chapter.title}</h3>
                  <p className="text-neutral-600">{chapter.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Investing;