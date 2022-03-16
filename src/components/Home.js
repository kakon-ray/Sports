import React, { useEffect, useState } from "react";

import CardContainer from "./Card/CardContainer";
import Loading from "./Loading/Loading";
import Nabar from "../components/Nav/Nabar";

export default function Home() {
  let [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://www.thesportsdb.com/api/v1/json/2/all_sports.php"
      );
      setLoading(false);
      setUsers(await response.json());
    } catch (error) {
      setLoading(false);
      console.log("my error is " + error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <Loading />;
  }

  users = users.sports;
  const usersNum = users?.slice(0, 10);

  return (
    <>
      <Nabar />
      <div className="container my-5">
        <div className="row g-4">
          {usersNum?.map((user) => (
            <React.Fragment key={user.idSport}>
              {console.log()}
              <div className="col-md-4">
                <CardContainer
                  img={user.strSportThumb}
                  title={user.strSpor}
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
    </>
  );
}
