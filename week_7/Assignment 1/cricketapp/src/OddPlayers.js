// src/OddPlayers.js
import React from 'react';

function OddPlayers({ players }) {
  // Using destructuring to get odd-indexed players (1st, 3rd, 5th)
  const [first, , third, , fifth] = players;
  return (
    <div>
      <ul>
        <li>First : {first}</li>
        <li>Third : {third}</li>
        <li>Fifth : {fifth}</li>
      </ul>
    </div>
  );
}
export default OddPlayers;