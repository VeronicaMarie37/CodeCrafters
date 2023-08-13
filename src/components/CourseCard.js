import React from 'react';
import { Card, Button } from 'react-bootstrap';

/**
 * Represents a single course card in the UI.
 * @param {Object} props - Component props.
 * @param {Object} props.course - The course data.
 */
const CourseCard = ({ course }) => {
  // Check if course object exists to avoid potential errors
  if (!course) return null;

  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={course.image} alt={course.title} />
      <Card.Body>
        <Card.Title>{course.title}</Card.Title>
        <Card.Text>{course.description}</Card.Text>
        <Button variant="primary">Start Learning</Button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{course.language}</small>
      </Card.Footer>
    </Card>
  );
};

export default CourseCard;

