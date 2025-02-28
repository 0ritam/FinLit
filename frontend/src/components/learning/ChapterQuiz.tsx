import { useState } from 'react';
import { motion } from 'framer-motion';
import { useProgressTracking } from '@/hooks/useProgressTracking';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface ChapterQuizProps {
  title: string;
  questions: Question[];
  isBasic?: boolean;
}

const ChapterQuiz = ({ title, questions, isBasic = true }: ChapterQuizProps) => {
  const { updateProgress, progress } = useProgressTracking();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 === questions.length) {
      updateProgress(title, 4, 4); // Mark quiz as completed
      setCompleted(true);
    } else {
      setSelectedAnswer(null);
      setShowExplanation(false);
      setCurrentQuestion((prev) => Math.min(prev + 1, questions.length - 1));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <h1 className="h2 text-n-1 mb-6">{title}</h1>
      
      <div className="bg-n-7 rounded-xl p-6 mb-4">
        <h2 className="h3 text-n-1 mb-4">Question {currentQuestion + 1} of {questions.length}</h2>
        <p className="body-1 text-n-1 mb-6">{questions[currentQuestion].question}</p>
        
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={showExplanation}
              className={`w-full text-left p-4 rounded-lg transition-all ${
                showExplanation
                  ? index === questions[currentQuestion].correctAnswer
                    ? 'bg-color-4/10 border-color-4'
                    : index === selectedAnswer
                    ? 'bg-color-3/10 border-color-3'
                    : 'bg-background border-n-2'
                  : 'bg-background border-n-2 hover:border-color-1'
              } border`}
            >
              {option}
            </button>
          ))}
        </div>

        {showExplanation && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 bg-color-1/10 rounded-lg"
          >
            <p className="text-n-1">{questions[currentQuestion].explanation}</p>
            <button
              onClick={nextQuestion}
              className="mt-4 px-6 py-2 bg-color-1 text-n-1 rounded-lg hover:bg-color-1/90 transition-all"
            >
              {currentQuestion + 1 === questions.length ? 'Finish Quiz' : 'Next Question'}
            </button>
          </motion.div>
        )}
      </div>

      {/* Progress Bar at Bottom */}
      <div className="fixed bottom-0 left-0 w-full bg-gray-200 h-4">
        <div className="bg-teal-500 h-4" style={{ width: `${completed ? 100 : progress[title] || 0}%` }}></div>
      </div>
    </motion.div>
  );
};

export default ChapterQuiz;
