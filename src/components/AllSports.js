import React, { useEffect, useState } from "react";

import CardContainer from "./Card/CardContainer";
import Nabar from "../components/Nav/Nabar";

export default function AllSports() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch("https://www.thesportsdb.com/api/v1/json/2/all_sports.php")
      .then((respons) => respons.json())
      .then((data) => setUser(data.sports))

      .catch((error) => {
        console.log(error);
      });
  }, []);

  const usersNum = users.slice(0, 25);

  return (
    <>
      <Nabar />
      <div className="container my-5">
        <div className="row g-4">
          {usersNum.map((user) => (
            <React.Fragment key={user.idSport}>
              {console.log(user)}
              <div className="col-md-4">
                <CardContainer
                  img={user.strSportThumb}
                  title={user.strSport}
                  cardDes={user.strSportDescription
                    .split("")
                    .slice(0, 100)
                    .join("")}
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
