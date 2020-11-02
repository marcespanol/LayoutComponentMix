import React from "react";
import Form from "react-bootstrap/Form";

export default function MyCheckbox() {
  return (
    <Form>
      <Form.Check
        type="checkbox"
        className="mb-2 mr-sm-2"
        id="inlineFormCheck"
        label="Checkbox 1"
      />
      <Form.Check
        type="checkbox"
        className="mb-2 mr-sm-2"
        id="inlineFormCheck"
        label="Checkbox 2"
      />
      <Form.Check
        type="checkbox"
        className="mb-2 mr-sm-2"
        id="inlineFormCheck"
        label="Checkbox 3"
      />
    </Form>
  );
}
