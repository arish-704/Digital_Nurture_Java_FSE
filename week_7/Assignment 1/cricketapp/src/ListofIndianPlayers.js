// src/ListofIndianPlayers.js
import React from 'react';

function ListofIndianPlayers({ players }) {
  return (
    <div>
      <ul>
        {players.map((player) => (
          <li key={player}>Mr. {player}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListofIndianPlayers;