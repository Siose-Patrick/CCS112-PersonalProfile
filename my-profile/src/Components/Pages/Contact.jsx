import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submittedName, setSubmittedName] = useState(''); // New state to hold the submitted name

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the name before resetting the form
    setSubmittedName(formData.name);
    // Show modal
    setShowModal(true);
  };

  const handleModalClose = () => {
    // Close the modal and clear the form fields after the modal is closed
    setShowModal(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <div>
        <Card className='d-flex justify-content-center align-items-center' style={{ padding: "50px", minWidth: "300px", margin: "300px", marginTop: "50px" }}>
          <Card.Header>
            <h3>Contact Me</h3>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col>
                <Card.Title>What do you think about me?</Card.Title>
              </Col>
            </Row>

            <Form onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Message Sent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {`Thank you, ${submittedName}! Your message has been sent to the owner! :D`}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Contact;