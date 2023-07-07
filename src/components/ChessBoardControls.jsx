import React from 'react';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import SettingsIcon from '@mui/icons-material/Settings';
import Crop32Icon from '@mui/icons-material/Crop32';
import RepeatIcon from '@mui/icons-material/Repeat';
import "./ChessBoardControls.css"
import { Rotate90DegreesCcw } from '@mui/icons-material';
const ChessBoardControls = () => {
  return (
    <div id="board-layout-controls" className="board-layout-controls">
      <div id="board-controls" >
        <div className="board-controls">
          <a
            id="board-controls-settings"
            aria-label="Settings"
            type="button"
            className=" "
          ><SettingsIcon/></a>
          <a
            id="board-controls-focus"
            aria-label="Focus Mode"
            type="button"
            className=""
          ><ZoomOutMapIcon/></a>
          <a
            id="board-controls-theatre"
            aria-label="Theatre Mode"
            type="button"
            className=""
          ><Crop32Icon/></a>
          <a
            id="board-controls-flip"
            aria-label="Flip Board"
            type="button"
            
          ><RepeatIcon className="repeat-icon"/></a>
          {/* Any additional buttons can be added here */}
        </div>
      </div>
    </div>
  );
};

export default ChessBoardControls;
