import React from "react";
import { Rnd } from "react-rnd";
import "./windows.scss";

const MacWindow = ({ children,width="35vw",height="50vh", windowName, windowState, setwindowState }) => {
  return (
    <Rnd
      default={{
        width:width,
        height:height,
        x:200,
        y:100,
      }}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div
            onClick={() => setwindowState(state => ({ ...state, [windowName]: false }))}
             className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="title">
            <p>deepen chaudhari - zsh</p>
          </div>
        </div>
        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
