
import React from 'react';
import { Card, Button } from 'react-bootstrap';


const CourseCard = ({ course }) => {
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
