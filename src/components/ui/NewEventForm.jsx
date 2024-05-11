import React from 'react';
import {
  Form, Container, Row, Col, Button,
} from 'react-bootstrap';
import axios from 'axios';

function EventForm({ setAllEvents, onNewEventAdded }) {
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!e.target.description.value || !e.target.img.files[0]) return;
    const formData = new FormData();
    formData.append('title', e.target.title.value);
    formData.append('description', e.target.description.value);
    formData.append('img', e.target.img.files[0]); // Use 'img' as the field name
    formData.set('sub', e.target.sub.checked);

    axios
      .post('/api/events', formData)
      .then((res) => {
        setAllEvents((prev) => [res.data, ...prev]);
        onNewEventAdded();
        e.target.reset();
      });
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" name="title" placeholder="Your event" style={{ borderColor: 'gray' }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Add info about event</Form.Label>
              <Form.Control as="textarea" name="description" style={{ borderColor: 'gray', resize: 'vertical' }} />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Add img</Form.Label>
              <Form.Control type="file" name="img" style={{ borderColor: 'gray' }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlCheckbox1">
              <Form.Check type="checkbox" name="sub" label="Subscribe" />
            </Form.Group>

            <Button type="submit">Save</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default EventForm;
