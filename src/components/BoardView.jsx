import React, { 
    useState, 
    useRef, 
    useEffect
 } from 'react';
import { Chessboard } from "react-chessboard";
import PlayRandomMoveEngine from './PlayRandomMoveEngine';
import Timer from "./Timer"
import "./BoardView.css"
import PlayerHeader from './PlayerHeader';
import {
    Avatar
} from "@mui/material"
import ChessboardWrapper from './ChessBoardWrapper';

const BoardView = () => {
  const [opponentName, setOpponentName] = useState('Opponent');
  const [playerName, setPlayerName] = useState('LostPariah');
  const [opponentTimer, setOpponentTimer] = useState(0);
  const [playerTimer, setPlayerTimer] = useState(0);
  const [addPlayerTime, setAddPlayerTime] = useState(false)
  const [addOpponentTime, setAddOpponentTime] = useState(false)

  const [isPlayerRunning, setIsPlayerRunning] = useState(true)
  const [isOpponentRunning, setIsOpponentRunning] = useState(false)

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const parentRef = useRef(null);
  const [childWidth, setChildWidth] = useState(0);


  const changeTurn = () => {
    isPlayerRunning ? setAddPlayerTime(!addPlayerTime) : setAddOpponentTime(!addOpponentTime);
    setIsOpponentRunning(!isOpponentRunning)
    setIsPlayerRunning(!isPlayerRunning)
  }



  useEffect(() => {
    const isMobileView = () => {
      return window.innerWidth <= 768; // Adjust the value as per your mobile view breakpoint
    };

    const handleResize = () => {
      if (parentRef.current) {
        setWindowHeight(window.innerHeight);
        let width = Math.floor(window.innerWidth);
        let height = Math.floor(window.innerHeight);
    
        if (!isMobileView()) {
          width = width > height ? height : width;
          width *= .8
        }    
        console.log(width);
        setChildWidth(width);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const test = () => {
    console.log(childWidth);
  }

  return (
    <div class="board-view-wrapper" ref={parentRef}>
      {/* <input type="color" name="" id="" /> */}
        <PlayerHeader
            name={opponentName}
            initialTime={10}
            addedTime={10}
            isRunning={isOpponentRunning}
            addTime={addOpponentTime}
            elo={1000}
            />

      {(childWidth && parentRef && <ChessboardWrapper
       className="ChessBoard" 
       id="BasicBoard" 
       boardWidth={childWidth}
      //  fen="r1bqkb1r/ppp1pppp/2n2n2/8/3P4/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 3 6"
       />)}

      <PlayerHeader
            name={playerName}
            initialTime={10}
            addedTime={10}
            isRunning={isOpponentRunning}
            addTime={addOpponentTime}
            elo={1000}
        />

    </div>
  );
};

export default BoardView;
