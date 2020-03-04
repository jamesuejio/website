import React, { useState } from "react";
import RightBody from "./rightContainer/RightBody";
import LeftBody from "./leftContainer/LeftBody";
import CircleSlider from "./CircleSlider";
import "./App.css";

const App = () => {
  const [leftWidth, setLeftWidth] = useState(window.innerWidth / 2);
  const [rightWidth, setRightWidth] = useState(window.innerWidth / 2);

  return (
    <div>
      <div className="App">
        <CircleSlider moveLeft={setLeftWidth} moveRight={setRightWidth} />
        <div className="header-james" id="james">
          <div className="header-first-name">James&nbsp;</div>

          <div className="header-last-name">&nbsp;Uejio</div>
        </div>
        <div className="flexicution">
          <LeftBody width={leftWidth} />
          <RightBody width={rightWidth} />
        </div>
      </div>
    </div>
  );
};

export default App;
