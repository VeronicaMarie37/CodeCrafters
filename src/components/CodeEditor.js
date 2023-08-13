import React, { useState } from 'react';

const CodeEditor = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');


  
  const executeCode = () => {
    try {
      const result = eval(code);
      setOutput(result.toString());
    } catch (error) {
      setOutput('Error: ' + error.message);
    }
  };

  return (
    <div>
      <textarea 
        className="form-control mb-3"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter your code here"
        rows={10}
      />
      <button className="btn btn-primary mb-3" onClick={executeCode}>Execute Code</button>
      <div>
        <h4>Output:</h4>
        <pre className="bg-white p-3 border">{output}</pre>
      </div>
    </div>
  );
};
export default CodeEditor;
