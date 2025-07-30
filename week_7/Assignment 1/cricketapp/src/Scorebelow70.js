// src/Scorebelow70.js
import React from 'react';

function Scorebelow70({ players }) {
  // Filter players with scores less than 70 using an arrow function
  const playersBelow70 = players.filter(player => player.score < 70);

  return (
    <div>
      <ul>
        {playersBelow70.map((player) => (
          <li key={player.name}>
            Mr. {player.name} {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Scorebelow70;