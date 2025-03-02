import { useState, useEffect } from "react";

const STORAGE_KEY = "user_progress";

export function useProgressTracking() {
  const [progress, setProgress] = useState<{ [key: string]: { basicQuiz: boolean; practiceQuiz: boolean } }>(() => {
    try {
      const savedProgress = localStorage.getItem(STORAGE_KEY);
      return savedProgress ? JSON.parse(savedProgress) : {};
    } catch (error) {
      console.error("Error reading progress from localStorage:", error);
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    console.log("Progress saved to localStorage:", progress);
  }, [progress]);

  const updateProgress = (module: string, quizType: 'basicQuiz' | 'practiceQuiz', completed: boolean) => {
    setProgress((prev) => ({
      ...prev,
      [module]: {
        ...prev[module],
        [quizType]: completed
      }
    }));
  };

  const isModuleCompleted = (module: string) => {
    const moduleProgress = progress[module];
    return moduleProgress?.basicQuiz && moduleProgress?.practiceQuiz;
  };

  return { progress, updateProgress, isModuleCompleted };
}