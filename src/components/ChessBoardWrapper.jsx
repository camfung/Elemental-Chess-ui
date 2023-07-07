import React, { useEffect, useRef } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';

const ChessboardWrapper = (props) => {
  const {
    fen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
    onMove,
    boardWidth
  } = props;
  const chess = useRef(new Chess());

  useEffect(() => {
    // Update the chess.js instance when the fen prop changes
    chess.current.load(fen);
  }, [fen]);

  const handleMove = ({ sourceSquare, targetSquare }) => {
    const move = chess.current.move({
      from: sourceSquare,
      to: targetSquare,
    });

    if (move !== null) {
      // Call the onMove prop with the move object
      onMove(move);
    } else {
      // Handle invalid move
    }
  };
  const test = () => {
    console.log(chess.current.moves())
  }

  return (
    <>
      <button onClick={test}>test</button>
      <Chessboard
        position={fen}
        onMovePiece={handleMove}
        boardWidth={boardWidth}
      />
    </>
  );
};

export default ChessboardWrapper;
