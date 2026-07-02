import React from 'react'
import './nav.scss'
import DateTime from './DateTime'
const Nav = () => {
  return (
    <nav>
      <div className="nav-left">
        <div className="apple-icon">
            <img src="/navbar-icons/apple.svg" alt="" />
        </div>
        <div className="nav-items">
            <p>Deepen Chaudhari</p>
        </div>
        <div className="nav-items">
            <p>File</p>
        </div>
        <div className="nav-items">
            <p>Window</p>
        </div>
        <div className="nav-items">
            <p>Terminal</p>
        </div>

      </div>
      <div className="nav-right">
        <div className="nav-icons">
          <img src="/navbar-icons/wifi.svg" alt="" />
        </div>
        < DateTime />
      </div>
    </nav>
  )
}

export default Nav
