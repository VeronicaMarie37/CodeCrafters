import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
    return <div>Loading or course not found...</div>;
  }

  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <img src={course.image} alt={course.title} style={{ maxWidth: '100%', height: 'auto' }} />
      <p><strong>Language:</strong> {course.language}</p>
    </div>
  );
};

export default CourseDetails;







// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const CourseDetails = () => {
//   const { id } = useParams();
//   const [course, setCourse] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:4000/api/courses/${id}`)
//       .then(response => response.json())
//       .then(data => setCourse(data))
//       .catch(error => console.error('Error fetching course:', error));
//   }, [id]);

//   if (!course) {
//     return <div>Loading or course not found...</div>;
//   }

//   return (
//     <div>
//       <h2>{course.title}</h2>
//       <p>{course.description}</p>
//     </div>
//   );
// };

// export default CourseDetails;

