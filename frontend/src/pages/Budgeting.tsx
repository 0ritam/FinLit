import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const chapters = [
  {
    title: "Basics of Budgeting",
    description: "Learn the fundamental principles of creating and maintaining a budget",
    path: "/budgeting/basics"
  },
  {
    title: "Expense Tracking",
    description: "Master the art of tracking your expenses effectively",
    path: "/budgeting/tracking"
  },
  {
    title: "Savings Goals",
    description: "Set and achieve your financial savings goals",
    path: "/budgeting/goals"
  }
];

const Budgeting = () => {
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
            Master Your Budget
          </motion.h1>
          <motion.p 
            className="text-xl text-neutral-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Learn essential budgeting skills to take control of your finances
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

export default Budgeting;