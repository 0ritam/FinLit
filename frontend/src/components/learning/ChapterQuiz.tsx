import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useProgressTracking } from '@/hooks/useProgressTracking';
import { useNavigate } from 'react-router-dom';
import { AnimatedCircularProgressBar } from '@/components/magicui/AnimatedCircularProBar';
"use client";

interface Question {
  question: string;
  options: string[];
  correctAnswer?: number;
  explanation: string;
}

interface ChapterQuizProps {
  title: string;
  questions: Question[];
  isBasic?: boolean;
}

const ChapterQuiz = ({ title, questions, isBasic = true }: ChapterQuizProps) => {
  const { updateProgress, isModuleCompleted } = useProgressTracking();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (completed && isBasic) {
      navigate('/budgeting/basics/practice-quiz'); // Navigate to Practice Quiz
    }
  }, [completed, isBasic, navigate]);

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    const newCompleted = currentQuestion + 1;
    const totalQuestions = questions.length;

    if (newCompleted === totalQuestions) {
      updateProgress(title, isBasic ? 'basicQuiz' : 'practiceQuiz', true);
      setCompleted(true);
      if (!isBasic) {
        navigate('/budgeting'); // Navigate back to Budgeting Module Home Page
      }
    } else {
      setSelectedAnswer(null);
      setShowExplanation(false);
      setCurrentQuestion(newCompleted);
    }
  };

  if (!questions || questions.length === 0) {
    return <div>No questions available.</div>;
  }

  if (currentQuestion >= questions.length) {
    return <div>Invalid question index.</div>;
  }

  const progressValue = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="h4 text-n-1">{title}</h1>
        <div className="w-12 h-12">
          <AnimatedCircularProgressBar
            max={100}
            value={progressValue}
            min={0}
            gaugePrimaryColor="	#4f46e5"
            gaugeSecondaryColor="#d3d3d3"
          />
        </div>
      </div>
      <div className="bg-background rounded-xl p-6 mb-4">
        <h2 className="h5 text-n-1 mb-4">Question {currentQuestion + 1} of {questions.length}</h2>
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
                    ? 'bg-green-500 border-color-4'
                    : index === selectedAnswer
                    ? 'bg-red-600 border-color-3'
                    : 'bg-background border-n-2'
                  : 'bg-background border-n-2 hover:border-color-1'
              } border`}
            >
              {option}
            </button>
          ))}
        </div>
        {showExplanation && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 p-4 bg-color-1/10 rounded-lg">
            <p className="text-n-1">{questions[currentQuestion].explanation}</p>
            <button onClick={nextQuestion} className="mt-4 px-6 py-2 bg-color-1 text-n-1 rounded-lg hover:bg-color-1/90 transition-all">
              {currentQuestion + 1 === questions.length ? 'Finish Quiz' : 'Next Question'}
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ChapterQuiz;