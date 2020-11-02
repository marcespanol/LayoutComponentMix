import React from "react";
import Form from "react-bootstrap/Form";

export default function MyRange() {
  return (
    <Form>
      <Form.Group controlId="formBasicRange">
        <Form.Label>Slider</Form.Label>
        <Form.Control type="range" />
      </Form.Group>
      <Form.Group controlId="formBasicRange">
        <Form.Control type="range" />
      </Form.Group>
    </Form>
  );
}
