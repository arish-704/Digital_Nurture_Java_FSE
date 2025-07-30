// src/App.js
import React from 'react';
import ListofPlayers from './ListOfPlayers';
import Scorebelow70 from './Scorebelow70';
import OddPlayers from './OddPlayers';
import EvenPlayers from './EvenPlayers';
import ListofIndianPlayers from './ListofIndianPlayers';
import './App.css';

function App() {
  // --- Data Setup ---

  // Data for Flag = true
  const players = [
    { name: 'Root', score: 50 },
    { name: 'Strac', score: 7 },
    { name: 'Johnson', score: 4 },
    { name: 'Archer', score: 61 },
    { name: 'Rabada', score: 12 },
    { name: 'Sachin', score: 99 },
    { name: 'Dhoni', score: 100 },
    { name: 'Virat', score: 84 },
    { name: 'Jadeja', score: 64 },
    { name: 'Raina', score: 75 },
    { name: 'Rohit', score: 80 },
  ];

  // Data for Flag = false
  const IndianTeam = ['Sachin1', 'Dhoni2', 'Virat3', 'Rohit4', 'Yuvraj5', 'Raina6'];

  const T20Players = ['First Player', 'Second Player', 'Third Player'];
  const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
  // Merging two arrays using the spread operator
  const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];


  // --- Control Flag ---
  // Change this to false to see the other view
  var flag = false;

  if (flag === true) {
    return (
      <div>
        <h1>List of Players</h1>
        <ListofPlayers players={players} />
        <hr />
        <h1>List of Players having Scores Less than 70</h1>
        <Scorebelow70 players={players} />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Odd Players</h1>
        <OddPlayers players={IndianTeam} />
        <hr />
        <h1>Even Players</h1>
        <EvenPlayers players={IndianTeam} />
        <hr />
        <h1>List of Indian Players Merged:</h1>
        <ListofIndianPlayers players={IndianPlayers} />
      </div>
    );
  }
}

export default App;