import React, { useState } from 'react';

const BoardView = () => {
  const [opponentName, setOpponentName] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [opponentTimer, setOpponentTimer] = useState(0);
  const [playerTimer, setPlayerTimer] = useState(0);

  return (
    <div>
      <div>
        <h2>Opponent: {opponentName}</h2>
        <p>Timer: {opponentTimer}</p>
      </div>

      {/* Render the board component here */}

      <div>
        <h2>Player: {playerName}</h2>
        <p>Timer: {playerTimer}</p>
      </div>
    </div>
  );
};

export default BoardView;
