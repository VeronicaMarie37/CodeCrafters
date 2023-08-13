
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './EditCourse.css';

const EditCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState({
    title: '',
    description: '',
    image: '',
    language: ''
  });

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/courses/${id}`);
        const data = await response.json();
        setCourse(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCourseDetails();
  }, [id]);

  const handleChange = ({ target: { name, value } }) => {
    setCourse(prevCourse => ({ ...prevCourse, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/api/courses/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(course)
      });

      if (response.ok) navigate('/');
      else console.error('Failed to update course');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='edit-course container mt-5'>
      <h2 className='mb-4 text-center'>Edit Course</h2>
      <form onSubmit={handleSubmit}>
        {['title', 'description', 'image', 'language'].map(field => (
          <div key={field} className='form-group'>
            <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input
              type={field === 'description' ? 'textarea' : 'text'}
              id={field}
              name={field}
              value={course[field]}
              onChange={handleChange}
              className='form-control'
              required
            />
          </div>
        ))}
        <div className='mt-4 d-flex justify-content-between'>
          <button type='submit' className='btn btn-success'>
            Save Changes
          </button>
          <Link to='/' className='btn btn-secondary ml-3'>
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditCourse;
