import React, { useState } from "react";
import RightBody from "./rightContainer/RightBody";
import LeftBody from "./leftContainer/LeftBody";
import CircleSlider from "./CircleSlider";
import "./App.css";

const App = () => {
  const [leftWidth, setLeftWidth] = useState("50%");
  const [rightWidth, setRightWidth] = useState("50%");

  return (
    <div>
      <div className="App">
        <CircleSlider moveLeft={setLeftWidth} moveRight={setRightWidth} />
        <div className="flexicution">
          <div className="header-james">
            <div>{"Hi! I'm James Uejio"}</div>
          </div>
          <LeftBody width={leftWidth} />
          <RightBody width={rightWidth} />
        </div>
      </div>
    </div>
  );
};

export default App;
