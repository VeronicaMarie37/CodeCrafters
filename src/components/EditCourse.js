// EditCourse.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const EditCourse = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({
    title: '',
    description: '',
    image: '',
    language: '',
    duration: '',
  });

  const history = useNavigate();

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:4000/api/courses/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(course),
      });

      if (response.ok) {
        // Redirect back to the course details after editing
        history.push(`/courses/${id}`);
      } else {
        console.error('Failed to update course');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="edit-course">
      <h2>Edit Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={course.title}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={course.description}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="url"
            id="image"
            name="image"
            value={course.image}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="language">Language</label>
          <input
            type="text"
            id="language"
            name="language"
            value={course.language}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration</label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={course.duration}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          Save Changes
        </button>
        <Link to={`/courses/${id}`} className="btn btn-secondary ml-2">
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default EditCourse;
