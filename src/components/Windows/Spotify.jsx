import React from 'react'
import MacWindow from './MacWindow'
import "./spotify.scss"
const Spotify = ({ windowName, windowState, setwindowState }) => {
  return (
    <MacWindow windowName={windowName} windowState={windowState} setwindowState={setwindowState} width="20vw" height="60vh">
      <div className="spotify-window">
        <iframe data-testid="embed-iframe" style={{"border-radius": "12px"}} src="https://open.spotify.com/embed/playlist/4OSRoGtklUUFBhwbK0TaUf?utm_source=generator&theme=0" width="100%" height="352px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </MacWindow>
  )
}

export default Spotify
