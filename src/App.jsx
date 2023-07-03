import { Chessboard } from "react-chessboard";
import theme from './theme';
import "./theme.css"
import "./App.css"
import { Grid } from "@mui/material"
import {
  React, 
  useState
} 
from 'react';
import './App.css';
import BoardView from "./components/BoardView";
export default function App() {
  const [width, setWidth] = useState("900");
  return (
    <div class="App">
      <BoardView/>
    </div>
  );
} 