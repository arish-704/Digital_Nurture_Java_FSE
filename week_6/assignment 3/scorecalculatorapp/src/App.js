import React from 'react';
import CalculateScore from './Components/CalculateScore';
import './Stylesheets/mystyle.css';

function App() {
  return (
    <div>
      <h1 className="main-title">Student Details:</h1>
      <CalculateScore name="Arish" school="Uem" total={284} goal={300} />
    </div>
  );
}

export default App;