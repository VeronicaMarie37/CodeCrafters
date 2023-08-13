import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './CourseDetails.css';


const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/api/courses/${id}`)
      .then(response => response.json())
      .then(data => setCourse(data))
      .catch(error => console.error('Error fetching course:', error));
  }, [id]);

  if (!course) {
    return <div className="text-center mt-5">Loading or course not found...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h2 className="mb-3">{course.title}</h2>
          <img src={course.image} alt={course.title} className="img-fluid mb-3 course-image" />
          <p>{course.description}</p>
          <p><strong>Language:</strong> {course.language}</p>
          
          <Link to="/" className="btn btn-sage mt-3">Return to Main Page</Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
