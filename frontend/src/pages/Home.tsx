import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import ContentHeader from "@/components/landing/ContentHeader";
import NewFooter from "@/components/landing/NewFooter";

const modules = [
  { name: "Budgeting", path: "/budgeting", description: "Master the art of budgeting and financial planning." },
  { name: "Investing", path: "/investing", description: "Learn how to invest wisely for long-term gains." },
  { name: "Saving", path: "/saving", description: "Discover strategies to save and manage money efficiently." },
  { name: "Fraud Prevention", path: "/fraud-prevention", description: "Protect yourself from financial fraud and scams." },
];

const customStyles = {
  container: "container mx-auto px-4 py-12 md:py-24 relative",
  banner: "bg-background backdrop-blur-sm p-8 rounded-xl mb-16 shadow-lg mt-8",
  bannerHeader: "text-center mb-12",
  bannerTitle: "text-4xl font-bold text-white",
  bannerSubtitle: "text-lg text-gray-300 max-w-2xl mx-auto",
  gridContainer: "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto",
  card: "p-6 bg-card rounded-xl shadow-md hover:shadow-lg transition-all duration-300 relative z-10",
  cardTitle: "text-xl font-semibold mb-2 text-white",
  cardDescription: "text-gray-400",
};

const ModuleSelection = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <ContentHeader /> */}
      <div className={customStyles.container}>
        {/* Background Glow Effects */}
        <motion.div
          className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] -z-10"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.div
          className="fixed bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-[100px] -z-10"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* Banner */}
        <div className={customStyles.banner}>
          <div className={customStyles.bannerHeader}>
            <motion.h1
              className={customStyles.bannerTitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Choose Your Learning Module
            </motion.h1>
            <motion.p
              className={customStyles.bannerSubtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Navigate through different financial topics and gain expertise.
            </motion.p>
            <motion.div
                      className="absolute bg-primary inset-5 blur-[40px] -z-10"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        duration: 2,
                        delay: 0.5,
                        ease: "backInOut",
                      }}
                    ></motion.div>
                    <motion.div
                      className="absolute inset-0 bg-primary blur-[60px] scale-y-75 scale-x-125 rounded-full -z-10"
                      initial={{ scale: 0.4, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 2, delay: 1.5, ease: "backOut" }}
                    ></motion.div>
          </div>
        </div>

        {/* Module Grid */}
        <div className={customStyles.gridContainer}>
          {modules.map((module, index) => (
            <motion.div
              key={module.name}
              className={customStyles.card}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Link to={module.path} className="block">
                <h2 className={customStyles.cardTitle}>{module.name}</h2>
                <p className={customStyles.cardDescription}>{module.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <NewFooter />
    </div>
  );
};

export default ModuleSelection;
