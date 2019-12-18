/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useAuth0 } from '../auth/react-auth0-spa';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [people, setPeople] = useState();
  const { getTokenSilently } = useAuth0();

  const fetchData = async () => {
    const baseUrl = process.env.API_URL || 'http://localhost:3001';

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
        <h1>Star Wars Characters!</h1>
        <div>Loading People...</div>
      </>
    );
  }

  const renderRows = () => {
    return people.map((person) => {
      const { name, height, birth_year, gender, species } = person;
      return (
        <tr key={name}>
          <td>{name}</td>
          <td>{gender}</td>
          <td>{species}</td>
          <td>{birth_year}</td>
          <td>{height}</td>
        </tr>
      );
    });
  };

  return (
    <>
      <h1>Star Wars Characters!</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Species</th>
            <th>Birth Year</th>
            <th>Height</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </>
  );
};

export default Home;
