import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../auth/react-auth0-spa';

import './navbar.css';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__group">
          <Link className="menu__link" to="/">
            Home
          </Link>
        </li>
        {isAuthenticated && (
          <li className="menu__group">
            <Link className="menu__link" to="/people">
              People
            </Link>
          </li>
        )}
        {isAuthenticated && (
          <li className="menu__group">
            <Link className="menu__link" to="/profile">
              Profile
            </Link>
          </li>
        )}
        {!isAuthenticated && (
          <li className="menu__group">
            <button
              className="menu__button"
              onClick={() => loginWithRedirect({})}
              type="button"
            >
              Log in
            </button>
          </li>
        )}
        {isAuthenticated && (
          <li className="menu__group">
            <button
              className="menu__button"
              onClick={() => logout()}
              type="button"
            >
              Log out
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
