import { motion } from "framer-motion";
import { Link, Routes, Route } from "react-router-dom";
import ChapterLayout from "@/components/learning/ChapterLayout";
import { FinancialBentoGrid } from "@/components/learning/BudgetContent/BasicCont";
import { FinancialBentoGridD } from "@/components/learning/BudgetContent/DebtCont";
import { FinancialBentoGridE } from "@/components/learning/BudgetContent/ExpenseCont";
import { FinancialBentoGridS } from "@/components/learning/BudgetContent/SavingGoal";
import ChapterQuiz from "@/components/learning/ChapterQuiz";
import {
  budgetingBasicsContent,
  budgetingBasicsQuiz,
  budgetingPracticeQuiz,
} from "@/data/budgeting/basics";
import {
  expenseTrackingContent,
  expenseTrackingQuiz,
  expenseTrackingPracticeQuiz,
} from "@/data/budgeting/expense";
import {
  savingGoalsContent,
  savingGoalsQuiz,
  savingGoalsPracticeQuiz,
} from "@/data/budgeting/savingGoals";
import {
  debtManagementContent,
  debtManagementQuiz,
  debtManagementPracticeQuiz,
} from "@/data/budgeting/debtManag";
import ContentHeader from "@/components/landing/ContentHeader";
import NewFooter from "@/components/landing/NewFooter";
import { useProgressTracking } from "@/hooks/useProgressTracking";

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
];

const customStyles = {
  container: "container mx-auto px-4 py-12 md:py-24 realtive",
  banner:
    "bg-background backdrop-blur-sm p-8 rounded-xl mb-16 shadow-lg mt-8 mt-32",
  bannerHeader: "text-center mb-12",
  bannerTitle: "heading-xl mb-4 text-white",
  bannerSubtitle: "text-xl text-muted max-w-2xl mx-auto",
  chaptersContainer: "max-w-3xl mx-auto relative ",
  chaptersList: "relative",
  verticalLine: "absolute left-4 top-0 bottom-0 w-0.5 bg-popover-foreground",
  chapterItem: "flex items-center gap-8 mb-8 group",
  chapterMarker:
    "relative z-10 w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center",
  chapterCross: "text-muted-foreground font-bold text-lg",
  chapterContent:
    "flex-1 bg-card/80 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all relative z-10 hover:shadow-primary/30",
  chapterTitle: "text-xl font-semibold mb-2 text-white",
  chapterDescription: "text-muted-foreground",
};

const Budgeting = () => {
  const { progress } = useProgressTracking();

  return (
    <>
      <Routes>
        <Route
          index
          element={
            <div className="min-h-screen bg-background">
              {/* <Navigation /> */}
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
                      Learn essential budgeting skills to take control of your
                      finances
                    </motion.p>

                    <motion.div
                      className="absolute bg-primary2 inset-5 blur-[60px] -z-10"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        duration: 2,
                        delay: 0.5,
                        ease: "backInOut",
                      }}
                    ></motion.div>
                    <motion.div
                      className="absolute inset-0 bg-primary2 blur-[80px] scale-y-75 scale-x-125 rounded-full -z-10"
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
                          <span className={customStyles.chapterCross}>
                            {progress[chapter.title]?.basicQuiz && progress[chapter.title]?.practiceQuiz ? '✔' : '×'}
                          </span>
                        </div>
                        <Link to={chapter.path} className="flex-1">
                          <div className={customStyles.chapterContent}>
                            <h3 className={customStyles.chapterTitle}>
                              {chapter.title}
                            </h3>
                            <p className={customStyles.chapterDescription}>
                              {chapter.description}
                            </p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              <NewFooter />
            </div>
          }
        />

        {/* Modules */}
        <Route
          path="basics"
          element={<ChapterLayout chapterTitle="Basics of Budgeting" />}
        >
          <Route
            path="content"
            element={
              <FinancialBentoGrid
                title="Basics of Budgeting"
                content={budgetingBasicsContent}
              />
            }
          />
          <Route
            path="basic-quiz"
            element={
              <ChapterQuiz
                title="Basic Concepts Quiz"
                questions={budgetingBasicsQuiz}
                isBasic={true}
              />
            }
          />
          <Route
            path="practice-quiz"
            element={
              <ChapterQuiz
                title="Practice Scenarios"
                questions={budgetingPracticeQuiz}
                isBasic={false}
                
              />
            }
          />
        </Route>

        <Route
          path="tracking"
          element={<ChapterLayout chapterTitle="Expense Tracking" />}
        >
          <Route path="content" element={<FinancialBentoGridE title="Expense Tracking" content={expenseTrackingContent} />} />
          <Route
            path="basic-quiz"
            element={
              <ChapterQuiz
                title="Basic Concepts Quiz"
                questions={expenseTrackingQuiz}
                isBasic={true}
              />
            }
          />
          <Route
            path="practice-quiz"
            element={
              <ChapterQuiz
                title="Practice Scenarios"
                questions={expenseTrackingPracticeQuiz}
                isBasic={false}
              />
            }
          />
        </Route>

        <Route
          path="goals"
          element={<ChapterLayout chapterTitle="Savings Goals" />}
        >
          <Route path="content" element={<FinancialBentoGridS title="Savings Goals" content={savingGoalsContent} />} />
          <Route
            path="basic-quiz"
            element={
              <ChapterQuiz
                title="Basic Concepts Quiz"
                questions={savingGoalsQuiz}
                isBasic={true}
              />
            }
          />
          <Route
            path="practice-quiz"
            element={
              <ChapterQuiz
                title="Practice Scenarios"
                questions={savingGoalsPracticeQuiz}
                isBasic={false}
              />
            }
          />
        </Route>

        <Route
          path="debt"
          element={<ChapterLayout chapterTitle="Debt Management" />}
        >
          <Route path="content" element={<FinancialBentoGridD title="Debt Management" content={debtManagementContent} />} />
          <Route
            path="basic-quiz"
            element={
              <ChapterQuiz
                title="Basic Concepts Quiz"
                questions={debtManagementQuiz}
                isBasic={true}
              />
            }
          />
          <Route
            path="practice-quiz"
            element={
              <ChapterQuiz
                title="Practice Scenarios"
                questions={debtManagementPracticeQuiz}
                isBasic={false}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default Budgeting;
