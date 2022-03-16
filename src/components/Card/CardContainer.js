import React from "react";
import { Card, Button } from "react-bootstrap";

export default function CardContainer({ img, title, cardDes }) {
  return (
    <>
      <Card style={{ width: "22rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{cardDes}</Card.Text>
          <Button variant="outline-success">Details Sports</Button>
        </Card.Body>
      </Card>
    </>
  );
}
