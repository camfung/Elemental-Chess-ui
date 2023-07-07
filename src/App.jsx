import theme from './theme';
import "./theme.css"
import "./App.css"
import {
  React, 
  useState
} 
from 'react';
import './App.css';
import SideBar from './components/SideBar';
import ChessBoardControls from './components/ChessBoardControls';
import TabPanel from "./components/TabPanel"
import BoardView from "./components/BoardView";
export default function App() {
  return (
    <div class="App-wrapper">
      <SideBar/>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <BoardView />
        <ChessBoardControls ClassName="board-controls"/>
      </div>
      <TabPanel/>

    </div>
  );
} 