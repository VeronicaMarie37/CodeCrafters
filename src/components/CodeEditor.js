import React, { useState } from 'react';

const CodeEditor = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const executeCode = () => {
    try {
      // Using eval for demonstration purposes only (NOT recommended for production).
      const result = eval(code);
      setOutput(result.toString());
    } catch (error) {
      setOutput('Error: ' + error.message);
    }
  };

  return (
    <div>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter your code here"
        rows={10}
        cols={50}
      />
      <button onClick={executeCode}>Execute Code</button>
      <div>
        <h4>Output:</h4>
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default CodeEditor;
