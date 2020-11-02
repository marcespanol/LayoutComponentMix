import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Form from "react-bootstrap/Form";

export default function MyBreadcrumb() {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="">First</Breadcrumb.Item>
        <Breadcrumb.Item href="">Second</Breadcrumb.Item>
        <Breadcrumb.Item active>Third</Breadcrumb.Item>
      </Breadcrumb>
      <Form.Group>
        <Form.Control type="text" placeholder="Search" />
      </Form.Group>
    </>
  );
}
