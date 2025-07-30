// src/ListofPlayers.js
import React from 'react';

function ListofPlayers({ players }) {
  return (
    <div>
      <ul>
        {players.map((player) => (
          <li key={player.name}>
            Mr. {player.name} {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;