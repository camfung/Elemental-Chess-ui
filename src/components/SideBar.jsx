import React from 'react';
import "./SideBar.css"
const Sidebar = () => {
  const handleButtonClick = (buttonName) => {
    console.log(`Button "${buttonName}" clicked`);
    // Add your custom logic here
  };

  return (
    <div class="sidebar">
      <button onClick={() => handleButtonClick('Button 1')}>Button 1</button>
      <button onClick={() => handleButtonClick('Button 2')}>Button 2</button>
      <button onClick={() => handleButtonClick('Button 3')}>Button 3</button>
    </div>
    
  );
};

export default Sidebar;
