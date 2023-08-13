// import React from 'react';
// import Header from './components/Header';
// import NavigationBar from './components/NavigationBar';
// import CourseList from './components/CourseList'; 
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <NavigationBar />
//       <CourseList /> 
//     </div>
//   );
// }

// export default App;



import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import CourseList from './components/CourseList';
import AddCourse from './components/AddCourse';
import EditCourse from './components/EditCourse';
import CourseDetails from './components/CourseDetails'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [courses, setCourses] = useState([]);
  console.log("Courses in App component:", courses);

  useEffect(() => {
    // Fetch the courses data from the backend API
    fetch('http://localhost:4000/api/courses')
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error('Error fetching courses:', error));
  }, []);

  return (
    <div className="App">
      <Header />
      <NavigationBar />

      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/courses/add" element={<AddCourse />} />
        <Route path="/courses/:id/edit" element={<EditCourse />} />
        <Route path="/courses/:id" element={<CourseDetails courses={courses} />} />
      </Routes>
    </div>
  );
}


export default App;

