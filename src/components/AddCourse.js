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
            <Button className="submit-button" variant="primary" type="submit">
              Add
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddCourse;




// import React, { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';

// const AddCourse = () => {
//   const [newCourse, setNewCourse] = useState({
//     title: '',
//     description: '',
//     image: '',
//     language: '',
//     duration: '',
//   });

//   const history = useHistory();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewCourse((prevCourse) => ({
//       ...prevCourse,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:4000/api/courses', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newCourse),
//       });

//       if (response.ok) {
//         // Redirect back to the course list after adding
//         history.push('/');
//       } else {
//         console.error('Failed to add course');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="add-course">
//       <h2>Add New Course</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="title">Title</label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             value={newCourse.title}
//             onChange={handleChange}
//             className="form-control"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="description">Description</label>
//           <textarea
//             id="description"
//             name="description"
//             value={newCourse.description}
//             onChange={handleChange}
//             className="form-control"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="image">Image URL</label>
//           <input
//             type="url"
//             id="image"
//             name="image"
//             value={newCourse.image}
//             onChange={handleChange}
//             className="form-control"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="language">Language</label>
//           <input
//             type="text"
//             id="language"
//             name="language"
//             value={newCourse.language}
//             onChange={handleChange}
//             className="form-control"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="duration">Duration</label>
//           <input
//             type="text"
//             id="duration"
//             name="duration"
//             value={newCourse.duration}
//             onChange={handleChange}
//             className="form-control"
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-success">
//           Add Course
//         </button>
//         <Link to="/" className="btn btn-secondary ml-2">
//           Cancel
//         </Link>
//       </form>
//     </div>
//   );
// };

// export default AddCourse;
