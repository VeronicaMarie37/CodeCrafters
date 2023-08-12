import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CourseList.css';
import AddCourse from './AddCourse';
import 'bootstrap/dist/css/bootstrap.min.css';



const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch the courses data from the backend API
    fetch('http://localhost:4000/api/courses')
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error('Error fetching courses:', error));
  }, []);

  const handleAddCourse = (newCourse) => {
    fetch('http://localhost:4000/api/courses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCourse),
    })
      .then((response) => response.json())
      .then((data) => {
        setCourses([...courses, data]); // Update the courses state with the new course
      })
      .catch((error) => {
        console.error('Error adding course:', error);
      });
  };

  const handleDeleteCourse = (id) => {
    fetch(`http://localhost:4000/api/courses/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        // Remove the deleted course from the courses state
        setCourses(courses.filter((course) => course.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting course:', error);
      });
  };

  return (
    <div className="course-list">
      <h2 className="mb-4">Course List</h2>
      <AddCourse onAddCourse={handleAddCourse} />

      {courses.map((course) => (
        <div key={course.id} className="course-card">
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <img src={course.image} alt={course.title} />
          <p>Language: {course.language}</p>
          <Link to={`/courses/${course.id}`} className="btn btn-primary">
            View Details
          </Link>
          <button
            onClick={() => handleDeleteCourse(course.id)}
            className="btn btn-danger mx-2"
          >
            Delete
          </button>
          <Link to={`/courses/${course.id}/edit`} className="btn btn-warning">
            Edit
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CourseList;


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './CourseList.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const CourseList = () => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     // Fetch the courses data from the backend API
//     fetch('http://localhost:4000/api/courses')
//       .then((response) => response.json())
//       .then((data) => setCourses(data))
//       .catch((error) => console.error('Error fetching courses:', error));
//   }, []);

//   const handleDeleteCourse = (id) => {
//     fetch(`http://localhost:4000/api/courses/${id}`, {
//       method: 'DELETE',
//     })
//       .then(() => {
//         setCourses(courses.filter((course) => course.id !== id));
//       })
//       .catch((error) => {
//         console.error('Error deleting course:', error);
//       });
//   };

//   return (
//     <div className="course-list">
//       <h2 className="mb-4">Course List</h2>
//       <Link to="/courses/add" className="btn btn-success mb-3">
//         Add Course
//       </Link>

//       {courses.map((course) => (
//         <div key={course.id} className="course-card">
//           <h3>{course.title}</h3>
//           <p>{course.description}</p>
//           <img src={course.image} alt={course.title} />
//           <p>Language: {course.language}</p>
//           <Link to={`/courses/${course.id}`} className="btn btn-primary">
//             View Details
//           </Link>
//           <Link to={`/courses/${course.id}/edit`} className="btn btn-warning mx-2">
//             Edit
//           </Link>
//           <button
//             onClick={() => handleDeleteCourse(course.id)}
//             className="btn btn-danger"
//           >
//             Delete
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CourseList;


