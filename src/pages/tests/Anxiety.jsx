import React, { useState } from 'react';
import './DepressionTest.css'; // Assuming you have a corresponding CSS file
import Modal from './Modal';
import ResultsPage from './Results';
import AnalysisLoader from './AnalysisLoader.jsx';

const AnxietyTest = () => {
  const questions = [
    "Feeling nervous, anxious, or on edge",
    "Not being able to stop or control worrying",
    "Worrying too much about different things",
    "Trouble relaxing",
    "Being so restless that it's hard to sit still",
    "Becoming easily annoyed or irritable",
    "Feeling afraid as if something awful might happen",
    "Experiencing physical symptoms like a rapid heartbeat, sweating, or trembling",
    "Avoiding situations due to fear of anxiety or panic",
    "If you checked off any problems, how difficult have these problems made it for you at work, home, or with other people?"
  ];

  const optionsList = [
    { options: ["Not at all", "A little bit", "Moderately", "Extremely"], scores: [0, 1, 2, 3] },
    { options: ["Not at all", "Sometimes", "Often", "Always"], scores: [0, 1, 2, 3] },
    { options: ["Rarely", "Occasionally", "Frequently", "Constantly"], scores: [0, 1, 2, 3] },
    { options: ["Very easy", "Somewhat easy", "Somewhat difficult", "Very difficult"], scores: [0, 1, 2, 3] },
    { options: ["Never", "Occasionally", "Frequently", "Always"], scores: [0, 1, 2, 3] },
    { options: ["Not at all", "Slightly", "Moderately", "Severely"], scores: [0, 1, 2, 3] },
    { options: ["No fear", "A little fear", "Moderate fear", "Intense fear"], scores: [0, 1, 2, 3] },
    { options: ["Never", "Sometimes", "Often", "Always"], scores: [0, 1, 2, 3] },
    { options: ["Never avoid", "Sometimes avoid", "Often avoid", "Always avoid"], scores: [0, 1, 2, 3] },
    { options: ["Not difficult at all", "Somewhat difficult", "Very difficult", "Extremely difficult"], scores: [0, 1, 2, 3] }
  ];

  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showModal, setShowModal] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [analysis, setAnalysis] = useState('');
  const [anxietySeverity, setAnxietySeverity] = useState('');
  const [anxietyRiskAnalysis, setAnxietyRiskAnalysis] = useState('');
  const [recommendedActions, setRecommendedActions] = useState([]);

  const handleCloseModal = () => setShowModal(false);
  const handleAnalysisComplete = () => {
    setShowLoader(false);
    setShowResult(true);
  };

  const handleOptionClick = (qIdx, oIdx) => {
    const newAns = [...answers];
    newAns[qIdx] = oIdx;
    setAnswers(newAns);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (answers.includes(null)) {
      return setShowModal(true);
    }

    let calcScore = 0;
    let severityScore = 0;
    let riskScore = 0;

    answers.forEach((ans, idx) => {
      const sc = optionsList[idx].scores[ans] || 0;
      calcScore += sc;
      if (idx < 5) severityScore += sc;
      if (idx >= 5 && idx < 9) riskScore += sc;
    });

    // Positive framing for analysis
    let overallMessage = '';
    if (calcScore >= 15) {
      overallMessage = 'It’s understandable to feel high levels of anxiety. You’re not alone, and support is available.';
    } else if (calcScore >= 10) {
      overallMessage = 'Your anxiety is noticeable but manageable. Small changes can make a big difference.';
    } else if (calcScore >= 5) {
      overallMessage = 'You’re experiencing mild anxiety, and your awareness is the first step toward balance.';
    } else {
      overallMessage = 'You’re doing well! It seems anxiety is not a significant concern right now.';
    }

    let severityMsg = '';
    if (severityScore >= 12) severityMsg = 'Higher intensity feelings—your courage is in recognizing them.';
    else if (severityScore >= 6) severityMsg = 'Moderate intensity—small self-care acts can uplift your day.';
    else severityMsg = 'Lower intensity—keep building on positive coping strategies.';

    let riskMsg = '';
    if (riskScore >= 12) riskMsg = 'You may benefit from reaching out for extra support—helping hands are nearby.';
    else if (riskScore >= 6) riskMsg = 'Some risk signs—continuing positive habits will strengthen resilience.';
    else riskMsg = 'Low risk—maintaining healthy routines will keep you balanced.';

    // Positive recommended actions
    let actions = [];
    if (calcScore >= 15) {
      actions = [
        'Connect with a trusted healthcare professional for guidance',
        'Incorporate gentle mindfulness or breathing exercises daily',
        'Engage in supportive social interactions or peer groups'
      ];
    } else if (calcScore >= 10) {
      actions = [
        'Try short, enjoyable physical activities like walking or stretching',
        'Practice brief mindfulness or grounding techniques',
        'Keep a journal to celebrate small wins each day'
      ];
    } else if (calcScore >= 5) {
      actions = [
        'Maintain a balanced routine with regular rest and activity',
        'Engage in hobbies or creative outlets you enjoy',
        'Stay connected with friends or loved ones for encouragement'
      ];
    } else {
      actions = [
        'Continue your current self-care habits',
        'Celebrate your emotional well-being',
        'Consider sharing tips with others to spread positivity'
      ];
    }

    setTotalScore(calcScore);
    setAnalysis(overallMessage);
    setAnxietySeverity(severityMsg);
    setAnxietyRiskAnalysis(riskMsg);
    setRecommendedActions(actions);
    setShowLoader(true);
  };

  return (
    <div className="form-container p-8 max-w-4xl mx-auto bg-white shadow-md rounded-xl">
      <h1 className="form-title text-3xl font-bold text-center text-gray-800 mb-6">Anxiety Test</h1>
      <div className="progress-bar">
      <div className={`step ${showResult ? '' : 'active'}`}>
          <div className="circle"></div>
          <p>Test Questions</p>
        </div>
        <div className={`step ${showResult ? 'active' : ''}`}>
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
          mentalStability={anxietyRiskAnalysis}
          anxietyAttackRisk={anxietySeverity}
          recommendedActions={recommendedActions}
        />
      ) : (
        <>
          <p className="form-instructions text-lg text-gray-600 text-center my-6">
            Over the last 2 weeks, how often have you been bothered by any of the following problems?
            <br />Please note, all fields are required.
          </p>
          <form className="depression-form space-y-8" onSubmit={handleSubmit}>
            {questions.map((q, i) => (
              <div key={i} className="question-block">
                <p className="question-text text-lg font-medium text-gray-700 mb-4">
                  {i + 1}. {q}
                </p>
                <div className="options flex flex-wrap gap-4">
                  {optionsList[i].options.map((opt, oi) => (
                    <button
                      type="button"
                      key={oi}
                      className={`option-button px-3 py-3 rounded-lg border text-gray-700 transition duration-300 text-lg 
                        ${answers[i] === oi ? 'bg-orange-500 text-white border-orange-600' : 'bg-gray-100 hover:bg-orange-100 border-gray-300'}`}
                      onClick={() => handleOptionClick(i, oi)}
                    >{opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <button type="submit" className="next-button w-full bg-orange-600 text-white py-3 rounded-lg mt-8 text-lg hover:bg-orange-700">
              Next
            </button>
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

export default AnxietyTest;
