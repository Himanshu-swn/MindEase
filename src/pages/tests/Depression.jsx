import React, { useState } from 'react';
import './DepressionTest.css';
import Modal from './Modal';
import ResultsPage from './Results';
import AnalysisLoader from './AnalysisLoader.jsx';

const DepressionTest = () => {
  const questions = [
    "Little interest or pleasure in doing things",
    "Feeling down, depressed, or hopeless",
    "Trouble falling or staying asleep, or sleeping too much",
    "Feeling tired or having little energy",
    "Poor appetite or overeating",
    "Feeling bad about yourself - or that you are a failure or have let yourself or your family down",
    "Trouble concentrating on things, such as reading the newspaper or watching television",
    "Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual",
    "Thoughts that you would be better off dead, or of hurting yourself",
    "If you checked off any problems, how difficult have these problems made it for you at work, home, or with other people?"
  ];

  const optionsList = [
    { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [0, 1, 2, 3] },
    { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [0, 1, 2, 3] },
    { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [0, 1, 2, 3] },
    { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [0, 1, 2, 3] },
    { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [0, 1, 2, 3] },
    { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [0, 1, 2, 3] },
    { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [0, 1, 2, 3] },
    { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [0, 1, 2, 3] },
    { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [0, 1, 2, 3] },
    { options: ["Not difficult at all", "Somewhat difficult", "Very difficult", "Extremely difficult"], scores: [0, 1, 2, 3] }
  ];

  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showModal, setShowModal] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [analysis, setAnalysis] = useState('');

  const [mentalStability, setMentalStability] = useState('');
  const [anxietyAttackRisk, setAnxietyAttackRisk] = useState('');
  const [recommendedActions, setRecommendedActions] = useState([]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAnalysisComplete = () => {
    setShowLoader(false);
    setShowResult(true);
  };

  const handleOptionClick = (questionIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (answers.includes(null)) {
      setShowModal(true);
      return;
    }

    let calculatedScore = 0;
    let stabilityScore = 0;
    let anxietyRiskScore = 0;

    answers.forEach((answerIndex, questionIndex) => {
      const score = optionsList[questionIndex].scores[answerIndex];
      calculatedScore += score;

      if (questionIndex <= 4) {
        stabilityScore += score;
      }

      if (questionIndex >= 5 && questionIndex <= 8) {
        anxietyRiskScore += score;
      }
    });

    let calculatedAnalysis = "";
    if (calculatedScore <= 4) {
      calculatedAnalysis = "You seem to be experiencing minimal or no depression.";
    } else if (calculatedScore <= 9) {
      calculatedAnalysis = "You may be experiencing mild depression.";
    } else if (calculatedScore <= 14) {
      calculatedAnalysis = "You may be experiencing moderate depression.";
    } else {
      calculatedAnalysis = "You may be experiencing severe depression. Consider reaching out to a healthcare provider.";
    }

    let stabilityAnalysis = "";
    if (stabilityScore <= 4) {
      stabilityAnalysis = "Stable";
    } else if (stabilityScore <= 9) {
      stabilityAnalysis = "Unstable";
    } else {
      stabilityAnalysis = "Highly Unstable";
    }

    let anxietyRiskAnalysis = "";
    if (anxietyRiskScore <= 4) {
      anxietyRiskAnalysis = "Low";
    } else if (anxietyRiskScore <= 9) {
      anxietyRiskAnalysis = "Moderate";
    } else {
      anxietyRiskAnalysis = "High";
    }

    let recommendedActionsAnalysis = [];
    if (calculatedScore <= 4) {
      recommendedActionsAnalysis = ["Maintain your routine", "Keep a positive attitude", "Stay physically active"];
    } else if (calculatedScore <= 9) {
      recommendedActionsAnalysis = ["Relax and take breaks", "Practice mindfulness", "Engage in light activities"];
    } else {
      recommendedActionsAnalysis = ["Seek help from a professional", "Talk to someone you trust", "Consider therapy"];
    }

    setTotalScore(calculatedScore);
    setAnalysis(calculatedAnalysis);
    setMentalStability(stabilityAnalysis);
    setAnxietyAttackRisk(anxietyRiskAnalysis);
    setRecommendedActions(recommendedActionsAnalysis);
    setShowLoader(true);
  };

  return (
    <div className="form-container p-8 max-w-4xl mx-auto bg-white shadow-md rounded-xl">
      <h1 className="form-title text-3xl font-bold text-center text-gray-800 mb-6">Depression Test</h1>
      <div className="progress-bar">
        <div className={`step ${showResult ? '' : 'active'}`}>
          <div className="circle"></div>
          <p>Test Questions</p>
        </div>
        <div className={` step ${showResult ? 'active' : ''}`}>
          <div className="circle"></div>
          <p>Your Results</p>
        </div>
      </div>

      {showLoader ? (
        <AnalysisLoader duration={5000} onComplete={handleAnalysisComplete} />
      ) : showResult ? (
        <ResultsPage
          score={totalScore}
          analysis={analysis}
          mentalStability={mentalStability}
          anxietyAttackRisk={anxietyAttackRisk}
          recommendedActions={recommendedActions}
        />
      ) : (
        <>
          <p className="form-instructions text-lg text-gray-600 text-center my-6">
            Over the last 2 weeks, how often have you been bothered by any of the following problems?
            <br />Please note, all fields are required.
          </p>
          <form className="depression-form space-y-8" onSubmit={handleSubmit}>
            {questions.map((question, questionIndex) => (
              <div key={questionIndex} className="question-block">
                <p className="question-text text-lg font-medium text-gray-700 mb-4">{questionIndex + 1}. {question}</p>
                <div className="options flex flex-wrap gap-4">
                  {optionsList[questionIndex].options.map((option, optionIndex) => (
                    <button
                      type="button"
                      key={optionIndex}
                      className={`option-button px-5 py-3 rounded-lg border text-gray-700 transition duration-300 text-lg 
                        ${answers[questionIndex] === optionIndex
                          ? 'bg-orange-500 text-white border-orange-600'
                          : 'bg-gray-100 hover:bg-orange-100 border-gray-300'}`}
                      onClick={() => handleOptionClick(questionIndex, optionIndex)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <button type="submit" className="next-button w-full bg-orange-600 text-white py-3 rounded-lg mt-8 text-lg hover:bg-orange-700">Next</button>
          </form>
        </>
      )}

      <Modal show={showModal} handleClose={handleCloseModal}>
        <h2>Incomplete Test</h2>
        <p>Please answer all the questions before proceeding.</p>
        <button onClick={handleCloseModal}>Close</button>
      </Modal>
    </div>
  );
};

export default DepressionTest;