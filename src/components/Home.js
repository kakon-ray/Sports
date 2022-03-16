import React, { useEffect, useState } from "react";

import CardContainer from "./Card/CardContainer";
import Loading from "./Loading/Loading";
import Nabar from "../components/Nav/Nabar";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchResult from "./SearchResult/SearchResult";

export default function Home({ searchValue }) {
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
      <div className="container ">
        <Nabar />
        <div className="row g-4 mt-4">
          {usersNum?.map((user) => (
            <React.Fragment key={user.idSport}>
              {console.log()}
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
        <div className="d-flex justify-content-center py-5">
          <Link to="/allsports">
            <Button variant="outline-success">See All Sports</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
