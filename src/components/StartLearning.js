import React from 'react';
import CodeEditor from './CodeEditor';

import './StartLearning.css';

function StartLearning() {
  return (
    <div className="learning-container">
      <div className="instructions-scroll-container">
        <h2>Step-by-Step Instructions</h2>

        {/* Step 1 */}
        <div className="instruction-step">
          <h3>Step 1: Define the DOCTYPE</h3>
          <p>Start your HTML document with the {"<!DOCTYPE>"} declaration which defines the version of HTML.</p>
        </div>

        {/* Step 2 */}
        <div className="instruction-step">
          <h3>Step 2: Add an HTML tag</h3>
          <p>Begin and end your document with the <code>&lt;html&gt;</code> tag.</p>
        </div>

        {/* Step 3 */}
        <div className="instruction-step">
          <h3>Step 3: Add a HEAD section</h3>
          <p>The <code>&lt;head&gt;</code> section contains meta information about the document.</p>
        </div>

        {/* Step 4 */}
        <div className="instruction-step">
          <h3>Step 4: Add a BODY section</h3>
          <p>The <code>&lt;body&gt;</code> section contains the contents of the document.</p>
        </div>

        {/* Step 5 */}
        <div className="instruction-step">
          <h3>Step 5: Include headers</h3>
          <p>Use <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> tags to add headers to your content.</p>
        </div>

        {/* Step 6 */}
        <div className="instruction-step">
          <h3>Step 6: Add paragraphs</h3>
          <p>Use the <code>&lt;p&gt;</code> tag to include paragraphs in your content.</p>
        </div>

        {/* Step 7 */}
        <div className="instruction-step">
          <h3>Step 7: Embed images</h3>
          <p>Use the <code>&lt;img&gt;</code> tag to add images to your page.</p>
        </div>

        {/* Step 8 */}
        <div className="instruction-step">
          <h3>Step 8: Create links</h3>
          <p>Use the <code>&lt;a&gt;</code> tag to link to other pages or websites.</p>
        </div>

        {/* Step 9 */}
        <div className="instruction-step">
          <h3>Step 9: Use lists</h3>
          <p>Create ordered or unordered lists using <code>&lt;ol&gt;</code> and <code>&lt;ul&gt;</code> tags respectively.</p>
        </div>

        {/* Step 10 */}
        <div className="instruction-step">
          <h3>Step 10: Add forms</h3>
          <p>Use the <code>&lt;form&gt;</code> tag to gather input from users.</p>
        </div>

        {/* Step 11 */}
        <div className="instruction-step">
          <h3>Step 11: Include audio and video</h3>
          <p>Embed multimedia content using the <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> tags.</p>
        </div>

        {/* Step 12 */}
        <div className="instruction-step">
          <h3>Step 12: Use tables</h3>
          <p>Structure data using <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, and <code>&lt;td&gt;</code> tags.</p>
        </div>

        

      </div>
      <CodeEditor />
    </div>
  );
}

export default StartLearning;


// import React from 'react';
// import CodeEditor from './CodeEditor';

// import './StartLearning.css';

// function StartLearning() {
//   return (
//     <div className="learning-container">
//       <div className="instructions-container">
//         <h2>Step-by-Step Instructions</h2>

//         {/* Step 1 */}
//         <div className="instruction-step">
//           <h3>Step 1: Define the DOCTYPE</h3>
//           <p>Start your HTML document with the {"<!DOCTYPE>"} declaration which defines the version of HTML.</p>
//         </div>

//         {/* Step 2 */}
//         <div className="instruction-step">
//           <h3>Step 2: Add an HTML tag</h3>
//           <p>...</p>
//         </div>
//         {/* ... Add more steps as necessary */}
//       </div>
//       <CodeEditor />
//     </div>
//   );
// }

// export default StartLearning;
