import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

export default function MyDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle>Custom toggle</Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="1">Red</Dropdown.Item>
        <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>
          Orange
        </Dropdown.Item>
        <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
