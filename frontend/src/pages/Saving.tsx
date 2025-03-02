import ContentHeader from "@/components/landing/ContentHeader";
import NewFooter from "@/components/landing/NewFooter";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ChapterLayout from '@/components/learning/ChapterLayout';
import ChapterQuiz from '@/components/learning/ChapterQuiz';
import { savingBasicsContent, savingBasicsQuiz, savingPracticeQuiz } from "@/data/saving/basics";
import { Routes, Route } from "react-router-dom";
import {FinancialBentoGrid1 }from "@/components/learning/SavingContent/SavingBasic";
import {FinancialBentoGrid2} from "@/components/learning/SavingContent/HighSaves";
import { smartSavingBasicsContent, smartSavingStrategiesPracticeQuiz, smartSavingStrategiesQuiz } from "@/data/saving/savestrat";
import {FinancialBentoGrid3} from "@/components/learning/SavingContent/Emergency";
import { emergencyBasicsContent, emergencyFundPracticeQuiz, emergencyFundQuiz } from "@/data/saving/emergency";
import { highYieldContent, highYieldSavingsPracticeQuiz, highYieldSavingsQuiz } from "@/data/saving/highsaves";
import {FinancialBentoGrid4} from "@/components/learning/SavingContent/Strategy";

const chapters = [
  {
    title: "Saving Fundamentals",
    description: "Learn the basic principles of effective saving",
    path: "/saving/basics-save"
  },
  {
    title: "Smart Saving Strategies",
    description: "Discover proven techniques to maximize your savings",
    path: "/saving/strategies"
  },
  {
    title: "Emergency Fund",
    description: "Build and maintain your financial safety net",
    path: "/saving/emergency-fund"
  },
  {
    title: "High-Yield Savings",
    description: "Explore options to earn more from your savings",
    path: "/saving/high-yield"
  }
];

const customStyles = {
  container: "container mx-auto px-4 py-12 md:py-24 relative",
  banner: "bg-background backdrop-blur-sm p-8 rounded-xl mb-16 shadow-lg mt-8 mt-32",
  bannerHeader: "text-center mb-12",
  bannerTitle: "heading-xl mb-4 text-white",
  bannerSubtitle: "text-xl text-muted max-w-2xl mx-auto",
  chaptersContainer: "max-w-3xl mx-auto relative ",
  chaptersList: "relative",
  verticalLine: "absolute left-4 top-0 bottom-0 w-0.5 bg-popover-foreground",
  chapterItem: "flex items-center gap-8 mb-8 group",
  chapterMarker: "relative z-10 w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center",
  chapterCross: "text-muted-foreground font-bold text-lg",
  chapterContent: "flex-1 bg-card/80 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all relative z-10 hover:shadow-primary/30",
  chapterTitle: "text-xl font-semibold mb-2 text-white",
  chapterDescription: "text-muted-foreground",
};

const Saving = () => {
  return (
    <Routes>
      <Route index element={
        <div className="min-h-screen bg-background">
          <ContentHeader />
          <div className={customStyles.container}>
            {/* Add glow effects */}
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
            <div className={customStyles.banner}>
              <div className={customStyles.bannerHeader}>
                <motion.h1 
                  className={customStyles.bannerTitle}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Master Saving
                </motion.h1>
                <motion.p 
                  className={customStyles.bannerSubtitle}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Build a strong financial foundation through smart saving habits
                </motion.p>
                <motion.div
            className="absolute bg-primary4 inset-5 blur-[60px] -z-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: "backInOut" }}
          ></motion.div>
          <motion.div
            className="absolute inset-0 bg-primary4 blur-[80px] scale-y-75 scale-x-125 rounded-full -z-10"
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1.5, ease: "backOut" }}
          ></motion.div>
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
          <NewFooter />
        </div>
      } />
      <Route
        path="basics-save"
        element={<ChapterLayout chapterTitle="Basics of Savings" />}
      >
        <Route path="content" element={<FinancialBentoGrid1 title="Investment Basics" content={savingBasicsContent} />} />
        <Route
          path="basic-quiz"
          element={
            <ChapterQuiz
              title="Basic Concepts Quiz"
              questions={savingBasicsQuiz}
              isBasic={true}
            />
          }
        />
        <Route
          path="practice-quiz"
          element={
            <ChapterQuiz
              title="Practice Scenarios"
              questions={savingPracticeQuiz}
              isBasic={false}
            />
          }
        />
      </Route>

      <Route
        path="strategies"
        element={<ChapterLayout chapterTitle="Smart Saving Strategies" />}
      >
        <Route path="content" element={<FinancialBentoGrid4 title="Smart Saving Strategies" content={smartSavingBasicsContent} />} />
        <Route
          path="basic-quiz"
          element={
            <ChapterQuiz
              title="Basic Concepts Quiz"
              questions={smartSavingStrategiesQuiz}
              isBasic={true}
            />
          }
        />
        <Route
          path="practice-quiz"
          element={
            <ChapterQuiz
              title="Practice Scenarios"
              questions={smartSavingStrategiesPracticeQuiz}
              isBasic={false}
            />
          }
        />
      </Route>

      <Route
        path="emergency-fund"
        element={<ChapterLayout chapterTitle="Eemergency Fund" />}
      >
        <Route path="content" element={<FinancialBentoGrid3 title="Investment Basics" content={emergencyBasicsContent} />} />
        <Route
          path="basic-quiz"
          element={
            <ChapterQuiz
              title="Basic Concepts Quiz"
              questions={emergencyFundQuiz}
              isBasic={true}
            />
          }
        />
        <Route
          path="practice-quiz"
          element={
            <ChapterQuiz
              title="Practice Scenarios"
              questions={emergencyFundPracticeQuiz}
              isBasic={false}
            />
          }
        />
      </Route>

      <Route
        path="high-yield"
        element={<ChapterLayout chapterTitle="High-Yield Savings" />}
      >
        <Route path="content" element={<FinancialBentoGrid2 title="High-Yield Savings" content={highYieldContent} />} />
        <Route
          path="basic-quiz"
          element={
            <ChapterQuiz
              title="Basic Concepts Quiz"
              questions={highYieldSavingsQuiz}
              isBasic={true}
            />
          }
        />
        <Route
          path="practice-quiz"
          element={
            <ChapterQuiz
              title="Practice Scenarios"
              questions={highYieldSavingsPracticeQuiz}
              isBasic={false}
            />
          }
        />
      </Route>
    </Routes>
  );
};

export default Saving;