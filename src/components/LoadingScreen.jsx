import { useState, useEffect } from "react";
import { Progress, Text } from "@mantine/core";
import "./LoadingScreen.css";

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = Math.min(oldProgress + 1, 100);
        if (newProgress === 100) {
          clearInterval(timer);
          setIsComplete(true);
          setTimeout(() => onLoadingComplete(), 1000);
        }
        return newProgress;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`loading-screen ${isComplete ? "slide-down" : ""}`}>
      <Progress
        value={progress}
        size="xs"
        color="white"
        className="loading-bar"
      />
      <Text className="loading-text" size="6rem" weight={700}>
        Sanjay Nagarimadugu
      </Text>
    </div>
  );
};

export default LoadingScreen;
