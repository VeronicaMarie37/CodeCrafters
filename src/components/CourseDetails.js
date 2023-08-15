
import React from 'react';
import { Link } from 'react-router-dom';
import './CourseDetails.css';

const CourseDetails = () => {

  return (
    <div className="container mt-5">
      <h2 className="mb-3">Introduction to HTML: Building Web Pages from Scratch</h2>

      <div className="row justify-content-center">
        <div className="col-lg-10">

          {/* Course Metadata */}
          <p><strong>Duration:</strong> 4 weeks</p>
          <p><strong>Level:</strong> Beginner</p>
          <p><strong>Prerequisites:</strong> None</p>
          <p className="course-description">Dive into the world of web development by understanding the building blocks of all websites: HTML. This course introduces you to the basics of HTML, teaching you how to craft content for the web. From simple paragraphs to complex tables and forms, you'll finish with a solid foundational knowledge.</p>

          {/* Syllabus Content */}
          <h4 className="mt-4">Syllabus:</h4>

          {/* Week 1 */}
          <h5>Week 1 - Introduction to HTML and Web Development</h5>
          <ul>
            <li>Introduction to web development and browsers</li>
            <li>What is HTML?</li>
            <li>The structure of an HTML document</li>
            <li>HTML tags, elements, and attributes</li>
            <li>Creating your first web page</li>
            <li>Using heading and paragraph elements</li>
          </ul>

          {/* Week 2 */}
          <h5>Week 2 - Structuring Web Content</h5>
          <ul>
            <li>Lists: ordered, unordered, and description lists</li>
            <li>Anchor tags and creating links</li>
            <li>Inserting images and understanding paths</li>
            <li>Block vs. Inline elements</li>
            <li>Working with div and span elements</li>
          </ul>

          {/* Week 3 */}
          <h5>Week 3 - Organizing Content with Semantic Elements</h5>
          <ul>
            <li>Introduction to HTML5 semantic elements</li>
            <li>Structuring content using header, nav, main, article, section, aside, and footer</li>
            <li>Using figure and figcaption for images and captions</li>
            <li>Understanding the importance of accessibility</li>
            <li>Forms: input types, labels, buttons, and form attributes</li>
          </ul>

          {/* Week 4 */}
          <h5>Week 4 - Tables, Media, and Final Project</h5>
          <ul>
            <li>Creating tables: rows, columns, headers, and captions</li>
            <li>Embedding media: audio and video elements</li>
            <li>The iframe element: embedding maps, videos, etc.</li>
            <li>Building a complete web page: Final Project</li>
            <li>Next steps and introduction to CSS</li>
          </ul>

          {/* Course Learning Outcomes */}
          <h5 className="mt-4">Learning Outcomes:</h5>
          <ul>
            <li>Understand the foundational concepts behind web pages and HTML.</li>
            <li>Structure and create a basic web page using HTML.</li>
            <li>Use a range of HTML elements to craft rich content.</li>
            <li>Understand the importance of semantic elements and web accessibility.</li>
            <li>Move forward to study CSS, the language used to style web content.</li>
          </ul>

          <Link to="/tutorials" className="btn btn-primary mt-3">Start Learning</Link>
          <Link to="/" className="btn btn-sage mt-3 ml-2">Return to Main Page</Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;

