import Navigation from "@/components/landing/Navigation1";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const chapters = [
  {
    title: "Basics of Budgeting",
    description: "Learn the fundamentals of maintaining a budget",
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
  },
  {
    title: "Debt Management",
    description: "Strategies for managing and reducing your debt effectively",
    path: "/budgeting/debt"
  },
  {
    title: "Emergency Fund",
    description: "Learn how to build and maintain your emergency savings",
    path: "/budgeting/emergency-fund"
  }
];
const customStyles = {
  container: "container-padding py-12 md:py-24",
  banner: "bg-primary/10 backdrop-blur-sm p-8 rounded-xl mb-16 shadow-lg mt-8",
  bannerHeader: "text-center mb-12",
  bannerTitle: "heading-xl mb-4 text-primary",
  bannerSubtitle: "text-xl text-neutral-600 max-w-2xl mx-auto",
  chaptersContainer: "max-w-3xl mx-auto",
  chaptersList: "relative",
  // Vertical line styles
  verticalLine: "absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20",
  // Chapter item styles
  chapterItem: "flex items-center gap-8 mb-8 group",
  chapterMarker: "relative z-10 w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center",
  chapterCross: "text-primary font-bold text-lg",
  chapterContent: "flex-1 bg-white/80 p-6 rounded-xl shadow-sm border border-neutral-200 hover:shadow-lg transition-all",
  chapterTitle: "text-xl font-semibold mb-2 text-primary",
  chapterDescription: "text-neutral-600"
};

const Budgeting = () => {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Navigation />
      <div className={customStyles.container}>
        <div className={customStyles.banner}>
          <div className={customStyles.bannerHeader}>
            <motion.h1 
              className={customStyles.bannerTitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Master Your Budget
            </motion.h1>
            <motion.p 
              className={customStyles.bannerSubtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Learn essential budgeting skills to take control of your finances
            </motion.p>
          </div>
        </div>

        <div className={customStyles.chaptersContainer}>
          <div className={customStyles.chaptersList}>
            <div className={customStyles.verticalLine} />
            {chapters.map((chapter, index) => (
              <motion.div
                key={chapter.title}
                className={customStyles.chapterItem}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className={customStyles.chapterMarker}>
                  <span className={customStyles.chapterCross}>×</span>
                </div>
                <Link to={chapter.path} className="flex-1">
                  <div className={customStyles.chapterContent}>
                    <h3 className={customStyles.chapterTitle}>{chapter.title}</h3>
                    <p className={customStyles.chapterDescription}>{chapter.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Budgeting;

