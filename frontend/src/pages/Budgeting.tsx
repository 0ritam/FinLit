import Navigation from "@/components/landing/Navigation1";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { Link, Routes, Route } from "react-router-dom";
import ChapterLayout from '@/components/learning/ChapterLayout';
import ChapterContent from '@/components/learning/ChapterContent';
import ChapterQuiz from '@/components/learning/ChapterQuiz';
import { budgetingBasicsContent, budgetingBasicsQuiz, budgetingPracticeQuiz } from "@/data/budgeting/basics";
import { expenseTrackingContent, expenseTrackingQuiz, expenseTrackingPracticeQuiz } from "@/data/budgeting/expense";
import { savingGoalsContent, savingGoalsQuiz, savingGoalsPracticeQuiz } from "@/data/budgeting/savingGoals";
import { debtManagementContent, debtManagementQuiz, debtManagementPracticeQuiz } from "@/data/budgeting/debtManag";
import { emergencyFundsContent, emergencyFundsQuiz, emergencyFundsPracticeQuiz } from "@/data/budgeting/emergency";

const chapters = [
  {
    title: "Basics of Budgeting",
    description: "Learn the fundamentals of maintaining a budget",
    path: "/budgeting/basics",
  },
  {
    title: "Expense Tracking",
    description: "Master the art of tracking your expenses effectively",
    path: "/budgeting/tracking",
  },
  {
    title: "Savings Goals",
    description: "Set and achieve your financial savings goals",
    path: "/budgeting/goals",
  },
  {
    title: "Debt Management",
    description: "Strategies for managing and reducing your debt effectively",
    path: "/budgeting/debt",
  },
  {
    title: "Emergency Fund",
    description: "Learn how to build and maintain your emergency savings",
    path: "/budgeting/emergency-fund",
  },
];

const customStyles = {
  container: "container mx-auto px-4 py-12 md:py-24 realtive",
  banner: "bg-color-4 backdrop-blur-sm p-8 rounded-xl mb-16 shadow-lg mt-8",
  bannerHeader: "text-center mb-12",
  bannerTitle: "heading-xl mb-4 text-white",
  bannerSubtitle: "text-xl text-neutral-600 max-w-2xl mx-auto",
  chaptersContainer: "max-w-3xl mx-auto relative",
  chaptersList: "relative",
  verticalLine: "absolute left-4 top-0 bottom-0 w-0.5 bg-black",
  chapterItem: "flex items-center gap-8 mb-8 group",
  chapterMarker: "relative z-10 w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center",
  chapterCross: "text-black font-bold text-lg",
  chapterContent: "flex-1 bg-color-4 p-6 rounded-xl shadow-sm border border-neutral-200 hover:shadow-lg transition-all relative z-10 hover:shadow-primary/30",
  chapterTitle: "text-xl font-semibold mb-2 text-white",
  chapterDescription: "text-neutral-600",
};

const Budgeting = () => {
  return (
    <>
      <Routes>
        <Route
          index
          element={
            <div className="min-h-screen bg-neutral-100">
              <Navigation />
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

                {/* Existing content */}
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
          }
        />

        {/* Modules */}
        <Route path="basics" element={<ChapterLayout chapterTitle="Basics of Budgeting" />}>
          <Route path="content" element={<ChapterContent title="Basics of Budgeting" content={budgetingBasicsContent} />} />
          <Route path="basic-quiz" element={<ChapterQuiz title="Basic Concepts Quiz" questions={budgetingBasicsQuiz} isBasic={true} />} />
          <Route path="practice-quiz" element={<ChapterQuiz title="Practice Scenarios" questions={budgetingPracticeQuiz} isBasic={false} />} />
        </Route>

        <Route path="tracking" element={<ChapterLayout chapterTitle="Expense Tracking" />}>
          <Route path="content" element={<ChapterContent title="Expense Tracking" content={expenseTrackingContent} />} />
          <Route path="basic-quiz" element={<ChapterQuiz title="Basic Concepts Quiz" questions={expenseTrackingQuiz} isBasic={true} />} />
          <Route path="practice-quiz" element={<ChapterQuiz title="Practice Scenarios" questions={expenseTrackingPracticeQuiz} isBasic={false} />} />
        </Route>

        <Route path="goals" element={<ChapterLayout chapterTitle="Savings Goals" />}>
          <Route path="content" element={<ChapterContent title="Savings Goals" content={savingGoalsContent} />} />
          <Route path="basic-quiz" element={<ChapterQuiz title="Basic Concepts Quiz" questions={savingGoalsQuiz} isBasic={true} />} />
          <Route path="practice-quiz" element={<ChapterQuiz title="Practice Scenarios" questions={savingGoalsPracticeQuiz} isBasic={false} />} />
        </Route>

        <Route path="debt" element={<ChapterLayout chapterTitle="Debt Management" />}>
          <Route path="content" element={<ChapterContent title="Debt Management" content={debtManagementContent} />} />
          <Route path="basic-quiz" element={<ChapterQuiz title="Basic Concepts Quiz" questions={debtManagementQuiz} isBasic={true} />} />
          <Route path="practice-quiz" element={<ChapterQuiz title="Practice Scenarios" questions={debtManagementPracticeQuiz} isBasic={false} />} />
        </Route>

        <Route path="emergency-fund" element={<ChapterLayout chapterTitle="Emergency Funds" />}>
          <Route path="content" element={<ChapterContent title="Emergency Funds" content={emergencyFundsContent} />} />
          <Route path="basic-quiz" element={<ChapterQuiz title="Basic Concepts Quiz" questions={emergencyFundsQuiz} isBasic={true} />} />
          <Route path="practice-quiz" element={<ChapterQuiz title="Practice Scenarios" questions={emergencyFundsPracticeQuiz} isBasic={false} />} />
        </Route>
      </Routes>
    </>
  );
};

export default Budgeting;
