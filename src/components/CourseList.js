import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AddCourse from './AddCourse';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CourseList.css'; 



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
        setCourses(courses.filter((course) => course._id !== id));
      })
      .catch((error) => {
        console.error('Error deleting course:', error);
      });
  };
  return (
    <div className="course-list">
      <h2 className="mb-4 mt-5 text-center">Course List</h2>

      <div className="row">
        {courses.map((course) => (
          <div key={course._id} className="col-md-6 mb-4">
            <div className="course-card p-3" style={{ backgroundColor: '#EDE3E9', color: '#3B2C35' }}> {/* Soft lavender background with dark text */}
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <img src={course.image} alt={course.title} className="img-fluid"/>
              <p>Language: {course.language}</p>
              <Link to={`/courses/${course._id}`} className="btn btn-light mr-2">
                View Details
              </Link>
              <button
                onClick={() => handleDeleteCourse(course._id)}
                className="btn"
                style={{ backgroundColor: '#D5A9B4', borderColor: '#D5A9B4' }} // Muted rose
              >
                Delete
              </button>
              <Link to={`/courses/${course._id}/edit`} className="btn ml-2" style={{ backgroundColor: '#A8D5BA', borderColor: '#A8D5BA' }}>  {/* Soft sage green */}
                Edit
              </Link>
            </div>
          </div>
          
        ))}
      </div>
      <div className="add-course-container">
           <AddCourse onAddCourse={handleAddCourse} />
      </div>


    </div>
  );
};

export default CourseList;
