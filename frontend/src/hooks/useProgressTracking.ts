import { useState, useEffect } from "react";

const STORAGE_KEY = "user_progress";

export function useProgressTracking() {
  const [progress, setProgress] = useState(() => {
    const savedProgress = localStorage.getItem(STORAGE_KEY);
    return savedProgress ? JSON.parse(savedProgress) : {};
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const updateProgress = (module: string, completed: number, total: number) => {
    setProgress((prev) => ({
      ...prev,
      [module]: Math.min(100, Math.round((completed / total) * 100)),
    }));
  };

  return { progress, updateProgress };
}
