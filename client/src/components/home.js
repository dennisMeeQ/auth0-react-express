import React, { useState, useEffect } from 'react';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [turtles, setTurtles] = useState();

  async function fetchData() {
    const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001';
    const res = await fetch(`${baseUrl}/species`);
    res
      .json()
      .then((json) => {
        setTurtles(json.species);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <>
        <h1>Star Wars Species!</h1>
        <div>Loading species...</div>
      </>
    );
  }

  const renderRows = () => {
    return turtles.map((turtle) => {
      const { name, classification, homeworld, language } = turtle;
      return (
        <tr key={name}>
          <td>{name}</td>
          <td>{classification}</td>
          <td>{homeworld}</td>
          <td>{language}</td>
        </tr>
      );
    });
  };

  return (
    <>
      <h1>Star Wars Species!</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Classification</th>
            <th>Homeworld</th>
            <th>Language</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </>
  );
};

export default Home;
