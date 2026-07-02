import React from 'react'
import MacWindow from './MacWindow'
import './Resume.scss'

const Resume = ({ windowName, windowState, setwindowState }) => {
  return (
    <MacWindow windowName={windowName} windowState={windowState} setwindowState={setwindowState}>
    <div className='resume-window'>
      <embed src="/resume.pdf" frameBorder="0"></embed>
    </div>
    </MacWindow>
  )
}

export default Resume
