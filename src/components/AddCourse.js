import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './AddCourse.css';

const AddCourse = ({ onAddCourse }) => {
  const [showModal, setShowModal] = useState(false);
  const [newCourse, setNewCourse] = useState({
    title: '',
    description: '',
    image: '',
    language: '',
  });

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCourse((prevCourse) => ({
      ...prevCourse,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCourse(newCourse);
    setNewCourse({
        title: '',
        description: '',
        image: '',
        language: '',
    });
    handleCloseModal();
};


  return (
    <>
      <Button className="add-course-button" variant="primary" onClick={handleShowModal}>
        Add Course
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="add-course-form" onSubmit={handleSubmit}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={newCourse.title}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={newCourse.description}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="image">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                name="image"
                value={newCourse.image}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="language">
              <Form.Label>Language</Form.Label>
              <Form.Control
                type="text"
                name="language"
                value={newCourse.language}
                onChange={handleChange}
              />
            </Form.Group>
            <button 
              type="submit" 
              className="btn"
              style={{ backgroundColor: '#A8D5BA', borderColor: '#A8D5BA' }}>  {/* Soft sage green */}
              Add Course
            </button>

          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddCourse;


