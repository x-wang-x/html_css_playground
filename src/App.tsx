import AceEditor from 'react-ace';
import { useState } from 'react';
import './App.css'
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/theme-chaos';
function App() {
    const [htmlCode, setHtmlCode] = useState('Hello<div>World</div>');
    const [cssCode, setCssCode] = useState('body { color: white; }\ndiv { color : red; }');
    return (
      <div className='playground'>
        <div className='html'>
          <h2>HTML</h2>
          <AceEditor
            mode=""
            theme='chaos'
            name="htmlbox"
            value={htmlCode}
            onChange={newValue => setHtmlCode(newValue)}
            editorProps={{ $blockScrolling: true }}
            setOptions={{ useWorker: false , showPrintMargin : false }}
            style={{ width: '100%'}}
          />
        </div>
        <div className='css'>
          <h2>CSS</h2>
          <AceEditor
            mode="css"
            theme='chaos'
            name='cssbox'
            value={cssCode}
            onChange={newValue => setCssCode(newValue)}
            editorProps={{ $blockScrolling: true }}
            setOptions={{ useWorker: false, showPrintMargin : false }}
            style={{ width: '100%'}}
          />
        </div>
        <div className='preview'>
          <h2>Preview</h2>
          <iframe
            title="Preview"
            style={{ width: '100%', height: '100%', border: 'none'}}
            srcDoc={`
              <html>
                <head>
                  <style>${cssCode}</style>
                </head>
                <body>${htmlCode}</body>
              </html>
            `}
          />
        </div>
      </div>
    );
}

export default App
