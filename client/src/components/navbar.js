import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../auth/react-auth0-spa';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      <span>
        <Link to="/">Home</Link>
        &nbsp;
        {isAuthenticated && <Link to="/people">People</Link>}
        &nbsp;
        {isAuthenticated && <Link to="/profile">Profile</Link>}
      </span>

      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})} type="button">
          Log in
        </button>
      )}

      {isAuthenticated && (
        <button onClick={() => logout()} type="button">
          Log out
        </button>
      )}
    </div>
  );
};

export default NavBar;
