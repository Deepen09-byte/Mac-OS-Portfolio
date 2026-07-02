import React,{ useEffect , useState} from 'react'
import Markdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import MacWindow from './MacWindow'
import "./note.scss"

const Note = ({ windowName, windowState, setwindowState }) => {

    const [markdown, setMarkdown] = useState(null);

    useEffect(() => {
        fetch("/note.txt")
            .then(res => res.text())
            .then(text => setMarkdown(text))
    },[])
  return (
<MacWindow windowName={windowName} windowState={windowState} setwindowState={setwindowState}>
   <div className="note-window">
     {markdown ? <SyntaxHighlighter language="typescript" style={a11yDark}>
       {markdown}
     </SyntaxHighlighter> : <p>Loading...</p>}
   </div>
</MacWindow>
  )
}

export default Note
  