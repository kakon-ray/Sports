import React, { useEffect, useState } from "react";
import CardContainer from "../Card/CardContainer";

export default function SearchResult({ value }) {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("https://www.thesportsdb.com/api/v1/json/2/all_sports.php")
      .then((respons) => respons.json())
      .then((data) => setUser(data.sports))

      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container text-center mx-auto my-4">
      {users.map((user) =>
        user.strSport.toLowerCase() === value.toLowerCase() ? (
          <CardContainer
            img={user.strSportThumb}
            title={user.strSport}
            cardDes={user.strSportDescription.split("").slice(1, 100).join("")}
          />
        ) : null
      )}
    </div>
  );
}
