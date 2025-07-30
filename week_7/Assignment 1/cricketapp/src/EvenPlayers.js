// src/EvenPlayers.js
import React from 'react';

function EvenPlayers({ players }) {
  // Using destructuring to get even-indexed players (2nd, 4th, 6th)
  const [, second, , fourth, , sixth] = players;
  return (
    <div>
      <ul>
        <li>Second : {second}</li>
        <li>Fourth : {fourth}</li>
        <li>Sixth : {sixth}</li>
      </ul>
    </div>
  );
}
export default EvenPlayers;