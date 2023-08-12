import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = ({ courses }) => {
  const { courseId } = useParams();
  const course = courses.find((c) => c.id === parseInt(courseId));

  if (!course) {
    return <div>Course not found.</div>;
  }

  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
    
    </div>
  );
};

export default CourseDetails;
