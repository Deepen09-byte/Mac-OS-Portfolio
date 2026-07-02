import React from "react";
import './dock.scss'

const Dock = ({ windowState, setwindowState }) => {
  return (
    <footer className="dock">
      <div
      onClick={() => setwindowState(state => ({ ...state, github: true }))}
      className="icons github">
        <img src="/dock-icons/github.svg" alt="" />
      </div>
      <div
      onClick={() => setwindowState(state => ({ ...state, note: true }))}
      className="icons note">
        <img src="/dock-icons/note.svg" alt="" />
      </div>
      <div
      onClick={() => setwindowState(state => ({ ...state, resume: true }))}
      className="icons pdf">
        <img src="/dock-icons/pdf.svg" alt="" />
      </div>
      <div 
      onClick={() => window.open('https://calendar.google.com/calendar/r', '_blank')}
      className="icons calendar">
        <img src="/dock-icons/calendar.svg" alt="" />
      </div>
      <div 
      onClick={() => setwindowState(state => ({ ...state, spotify: true }))}
      className="icons spotify">
        <img src="/dock-icons/spotify.svg" alt="" />
      </div>
      <div 
        onClick={() => window.open('mailto:deepen2918@gmail.com', '_blank')}
      className="icons mail">
        <img src="/dock-icons/mail.svg" alt="" />
      </div>
      <div 
      onClick={()=>{window.open('https://www.linkedin.com/in/deepen-chaudhari-108259318', '_blank')}}className="icons link">
        <img src="/dock-icons/link.svg" alt="" />
      </div>
      <div 
      onClick={() => setwindowState(state => ({ ...state, cli: true }))}
      className="icons cli">
        <img src="/dock-icons/cli.svg" alt="" />
      </div>
    </footer>
  );
};

export default Dock;
