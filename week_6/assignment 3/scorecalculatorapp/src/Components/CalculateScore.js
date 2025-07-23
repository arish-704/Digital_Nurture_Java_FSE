import React from 'react';

const CalculateScore = (props) => {
  const percent = (props.total / props.goal) * 100;

  return (
    <div className='student-card'>
      <div className='student-info'>
        <h2>{props.name}</h2>
        <p>School: {props.school}</p>
      </div>
      <div className='score-info'>
        <p>Total Marks: {props.total}</p>
        <p>Goal: {props.goal}</p>
        <h3>Score: {percent.toFixed(2)}%</h3>
      </div>
    </div>
  );
};

export default CalculateScore;