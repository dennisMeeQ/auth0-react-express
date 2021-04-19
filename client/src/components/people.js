/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useAuth0 } from '../auth/react-auth0-spa';

import './table.css';

const Menus = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [menus, setMenus] = useState();
  const { getTokenSilently } = useAuth0();

  const fetchData = async () => {
    const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:8080';

    const token = await getTokenSilently();

    const res = await fetch(`${baseUrl}/menu`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    res
      .json()
      .then((json) => {
        setMenus(json.menu);
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
          <h1>Diggys Pizza</h1>
          <p>Loading Menus...</p>
        </div>
      </>
    );
  }

  const renderRows = () => {
    return menus.map((person) => {
      const { name, price } = person;
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
            <div className="col col-2">price</div>
          </li>
          {renderRows()}
        </ul>
      </div>
    </>
  );
};

export default Menus;
