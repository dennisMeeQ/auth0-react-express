import React, { useState, useEffect } from 'react';

import './table.css';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [species, setSpecies] = useState();

  async function fetchData() {
    const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:8080';
    const res = await fetch(`${baseUrl}/species`);
    res
      .json()
      .then((json) => {
        setSpecies(json.species);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }

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
          <h1>Diggys Pizza</h1>
          <p>Loading menu...</p>
        </div>
      </>
    );
  }

  const renderRows = () => {
    return species.map((specie) => {
      const { name, price } = specie;
      return (
        <li className="table-row" key={name}>
          <div className="col col-1">
            <input readOnly type="text" value={name} />
            {name}
          </div>
          <div className="col col-2">{price}</div>
        </li>
      );
    });
  };

  return (
    <>
      <div className="container">
        <h1>Diggys Pizza</h1>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">Name</div>
            <div className="col col-2">Price</div>
          </li>
          {renderRows()}
        </ul>
      </div>
    </>
  );
};

export default Home;
