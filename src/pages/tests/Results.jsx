// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import './ResultsPage.css';

// const ResultsPage = () => {
//   const location = useLocation();
//   const { score, analysis } = location.state;

//   return (
//     <div className="results-container">
//       <h1>Your Test Results</h1>
//       <p className="result-score">
//         Your Score: <span className="score-value">{score}</span>
//       </p>
//       <p className="analysis-text">{analysis}</p>
//     </div>
//   );
// };

// export default ResultsPage;



//  -------- aboce is simply working great , cangeing bloew to show it on smae page, and cahanging tthe locaiton stuf

// import React from 'react';
// import './ResultsPage.css';

// const ResultsPage = ({ score, analysis, location }) => {
//   // Fallback to location.state if props aren't directly provided
//   const resultScore = score ?? location?.state?.score;
//   const resultAnalysis = analysis ?? location?.state?.analysis;

//   return (
//     <div className="results-container">
//       <h1>Your Test Results</h1>
//       <p className="result-score">
//         Your Score: <span className="score-value">{resultScore}</span>
//       </p>
//       <p className="analysis-text">{resultAnalysis}</p>
//     </div>
//   );
// };

// export default ResultsPage;



// ----------above is working , ---- belwo is test for showing more p9oint other the results 

import React from 'react';
import './ResultsPage.css';

const ResultsPage = ({ score, analysis, mentalStability, anxietyAttackRisk, recommendedActions, location }) => {
  // Fallback to location.state if props aren't directly provided
  const resultScore = score ?? location?.state?.score;
  const resultAnalysis = analysis ?? location?.state?.analysis;
  const resultMentalStability = mentalStability ?? location?.state?.mentalStability;
  const resultAnxietyAttackRisk = anxietyAttackRisk ?? location?.state?.anxietyAttackRisk;
  const resultRecommendedActions = recommendedActions ?? location?.state?.recommendedActions;

  return (
    <div className="results-container">
      <h1>Your Test Results</h1>
      
      <p className="result-score">
        Your Score: <span className="score-value">{resultScore}/30</span>
      </p>
      {/* <hr /> */}
      <p className="analysis-text">{resultAnalysis}</p>
      
      <hr />
      
      <h2>Mental Stability : {resultMentalStability}</h2>
      
      
      {/* <hr /> */}
      
      <h2>Chances of Anxiety Attack : {resultAnxietyAttackRisk}</h2>

      
      {/* <hr /> */}
      
      <h2>What Should You Follow : 

{recommendedActions.length > 0 ? (
        <ul className="recommended-actions-list">
          {recommendedActions.map((action, index) => (
            <li key={index}>{action}</li>
          ))}
        </ul>
      ) : (
        <p className="analysis-text">No recommended actions available.</p>
      )}

      </h2>
   </div>
  );
};

export default ResultsPage;
