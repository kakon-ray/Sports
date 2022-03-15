import React, { useEffect, useState } from "react";

import { Container, Card, Button, Col, Row } from "react-bootstrap";

import img from "../assets/messi.jpg";

export default function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = () => {
      fetch(
        "https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League"
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setData(res);
        });
    };
    getData();
  }, []);
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col className="col-md-4">
          <Card>
            <Card.Img
              variant="top"
              src={img}
              className="img-fluid"
              width="300px"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-md-4">
          <Card>
            <Card.Img
              variant="top"
              src={img}
              className="img-fluid"
              width="300px"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-md-4">
          <Card>
            <Card.Img
              variant="top"
              src={img}
              className="img-fluid"
              width="300px"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
