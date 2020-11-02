import React from "react";
import Card from "react-bootstrap/Card";

export default function MyCard() {
  return (
    <Card className="text-center">
      <Card.Header>Card Header</Card.Header>
      <Card.Body>
        <Card.Text>Card's content.</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}
