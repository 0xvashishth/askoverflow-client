import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
// import SyntaxHighlighter from 'react-syntax-highlighter'
// import VisibilityIcon from '@material-ui/icons/Visibility'
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
export default function LiveMarkdown() {
  const [markdownInput, setMarkdownInput] = useState()
  return (
    <div className="App">
      <div className="wrapper">
        <div className="head">
          {/*<VisibilityIcon />*/}
          MARKDOWN
        </div>
        <textarea
          autoFocus
          className="textarea"
          value={markdownInput}
          onChange={(e) => setMarkdownInput(e.target.value)}
        ></textarea>
      </div>
      <div className="wrapper">
        <div className="head">
          {/*<VisibilityIcon />*/}
          PREIVEW
        </div>
        <ReactMarkdown
          children={markdownInput}
          components={{
            code: MarkComponent,
          }}
        />
      </div>
    </div>
  )
}
const MarkComponent = ({ value, language }) => {
  return (
    <h1>h</h1>
  )
}