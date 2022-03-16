import React, { useEffect, useState } from "react";
import CardContainer from "../Card/CardContainer";
import Nabar from "../Nav/Nabar";

export default function SearchResult({ value }) {
  const [users, setUser] = useState([]);
  const [searchVlaue, setSearchvalue] = useState();
  useEffect(() => {
    fetch("https://www.thesportsdb.com/api/v1/json/2/all_sports.php")
      .then((respons) => respons.json())
      .then((data) => setUser(data.sports))

      .catch((error) => {
        console.log(error);
      });
  }, []);

  const pull_data = (data) => {
    setSearchvalue(data);
  };

  const usersNum = users?.slice(0, 25);
  const userResult = users.filter(
    (user) => user.strSport?.toLowerCase() === searchVlaue?.toLowerCase()
  );
  return (
    <div className="container text-center mx-auto my-4">
      <Nabar func={pull_data} />
      <div className="row mt-5">
        {userResult.map((user) => (
          <React.Fragment key={user.idSport}>
            <div className="col-md-4">
              <CardContainer
                img={user.strSportThumb}
                title={user.strSport}
                cardDes={user.strSportDescription
                  .split("")
                  .slice(1, 100)
                  .join("")}
              />
            </div>
          </React.Fragment>
        ))}
        {usersNum.map((user) => (
          <React.Fragment key={user.idSport}>
            <div className="col-md-4">
              <CardContainer
                img={user.strSportThumb}
                title={user.strSport}
                cardDes={user.strSportDescription
                  .split("")
                  .slice(1, 100)
                  .join("")}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
