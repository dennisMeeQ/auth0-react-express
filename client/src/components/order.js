/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '../auth/react-auth0-spa';

import './table.css';

const Order = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [menu, setMenu] = useState();
  const { getTokenSilently, user } = useAuth0();
  const apiBase = 'https://dignified.eu.auth0.com';

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
        setMenu(json.menu);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };
    
  const verifiedStatus = `${user.email_verified}`;

  const rejectOrder = () => {
      alert("Please verify your email before placing an order");
  };
 
  const placeOrder = () => {
      const getUserApiPath = () => `${apiBase}/api/v2/users/${user.sub}`;

      const updateUserProfile = (userProfile) => {
          return getTokenSilently({
              audience: `${apiBase}/api/v2/`,
              scope: "update:users update:current_user_metadata"
          }).then(accessToken => {
              return axios.patch(getUserApiPath(), {
                  ...userProfile
              }, {
                  headers: {
                      Authorization: `Bearer ${accessToken}`,
                      'Content-Type': 'application/json',
                      'Accept': 'application/json'
                  }
              })
          }).then(
              success => {
                  alert("Your order has been successfully placed!");
                  console.log('Order placed', success);
              },
              fail => {
                  console.log('failed', fail);
              });
      }

      updateUserProfile({
          user_metadata: {
              'orders': {
                  'last_order': 'Veggie Pizza'
              }
          },
      });
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
          <p>Loading menu...</p>
        </div>
      </>
    );
  }
    
  const verifiedWarning = () => {
      const GuestGreeting = () => {
          return (
            <p className="verifiedMessage">Please verify your email before placing an order.</p>
          );
      }

      const UserGreeting = () => {
          return (
            <p className="verifiedMessage">Welcome back, you can now place your order.</p>
          );
      }
      
      if (verifiedStatus === "false") {
          return  <GuestGreeting /> ;
      } return  <UserGreeting /> ;
  };
    
  const verifiedOrder = () => {
      const GuestOrder = () => {
          return (
            <button className="orderbutton" type="button" onClick={rejectOrder}>Order</button>
          );
      }

      const UserOrder = () => {
          return (
            <button className="orderbutton" type="button" onClick={placeOrder}>Order</button>
          );
      }
      
      if (verifiedStatus === "false") {
          return  <GuestOrder /> ;
      } return  <UserOrder /> ;
  };

  const renderRows = () => {
    return menu.map((person) => {
      const { name, price } = person;
      return (
        <li className="table-row" key={name}>
          <div className="col col-1">
            <input type="text" value={name} key={name} readOnly />
            {name}
          </div>
          <div className="col col-2">{price}</div>
          <div className="col col-3">
            {verifiedOrder()}
          </div>
        </li>
      );
    });
  };

  return (
    <>
      <div className="container">
        <h1>Diggys Pizza</h1>
        {verifiedWarning()}
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">Pizza</div>
            <div className="col col-2">Price</div>
            <div className="col col-3">Order</div>
          </li>
          {renderRows()}
        </ul>
      </div>
    </>
  );
};

export default Order;
