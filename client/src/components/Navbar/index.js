import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useAuth0 } from "../../auth/react-auth0-spa";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    //   <Navbar bg="light" expand="lg">

    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="mr-auto">
    //         <NavElement to="/" text="Home" />
    //         {isAuthenticated && <NavElement to="/spotz" text="Spotzes" />}
    //       </Nav>
    //       <LoginLogoutButton
    //         isAuthenticated={isAuthenticated}
    //         login={login}
    //         logout={logout}
    //       />
    //     </Navbar.Collapse>
    // </Navbar>
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}

      {isAuthenticated && (
        <span>
          <Link to="/">Home</Link>&nbsp;
          <Link to="/profile">Profile</Link>
        </span>
      )}
    </div>
  );
};

export default NavBar;
