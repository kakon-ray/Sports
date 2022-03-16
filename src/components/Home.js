import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

export default function Home() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("https://www.thesportsdb.com/api/v1/json/2/all_sports.php")
      .then((respons) => respons.json())
      .then((data) => setUser(data.sports))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const usersNum = users.slice(0, 25);

  return (
    <div className="container">
      <div className="row g-3">
        {users.map((user) => (
          <React.Fragment key={user.idSport}>
            {console.log()}
            <div className="col-md-4">
              <Card style={{ width: "22rem" }}>
                <Card.Img variant="top" src={user.strSportThumb} />
                <Card.Body>
                  <Card.Title>{user.strSpor}</Card.Title>
                  <Card.Text>
                    {user.strSportDescription.split("").slice(1, 100).join("")}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
