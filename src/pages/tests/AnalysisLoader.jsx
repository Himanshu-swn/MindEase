import React, { useState, useEffect } from 'react';
import brain_pic from "../../assets/images/brain_pic_2.png";
import './AnalysisLoader.css';

const AnalysisLoader = ({ duration = 1000, onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = duration / 100;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(timer);
          onComplete();
          return 100;
        }
      });
    }, interval);

    return () => clearInterval(timer);
  }, [duration, onComplete]);

  return (
    <div className="analysis-loader">
      <div className="brain-container">
        <img
          src={brain_pic}
          alt="Brain Analyzing"
          className="brain-image"
        />
        <div className="analysis-progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <p className="progress-text">Analyzing... {progress}%</p>
    </div>
  );
};

export default AnalysisLoader;
