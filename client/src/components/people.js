/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useAuth0 } from '../auth/react-auth0-spa';

import './table.css';

const People = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [people, setPeople] = useState();
  const { getTokenSilently } = useAuth0();

  const fetchData = async () => {
    const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:8080';

    const token = await getTokenSilently();

    const res = await fetch(`${baseUrl}/people`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    res
      .json()
      .then((json) => {
        setPeople(json.people);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(
    () => {
      fetchData();
    },
    // eslint-disable-next-line
    []
  );

  if (isLoading) {
    return (
      <>
        <div className="container">
          <h1>Star Wars Characters!</h1>
          <p>Loading People...</p>
        </div>
      </>
    );
  }

  const renderRows = () => {
    return people.map((person) => {
      const { name, height, birth_year, gender, species } = person;
      return (
        <li className="table-row" key={name}>
          <div className="col col-1">{name}</div>
          <div className="col col-2">{gender}</div>
          <div className="col col-3">{species}</div>
          <div className="col col-4">{birth_year}</div>
          <div className="col col-5">{height}</div>
        </li>
      );
    });
  };

  return (
    <>
      <div className="container">
        <h1>Star Wars Characters!</h1>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">Name</div>
            <div className="col col-2">Gender</div>
            <div className="col col-3">Species</div>
            <div className="col col-4">Birth Year</div>
            <div className="col col-5">Height</div>
          </li>
          {renderRows()}
        </ul>
      </div>
    </>
  );
};

export default People;
