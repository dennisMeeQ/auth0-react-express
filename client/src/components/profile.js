/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useAuth0 } from '../auth/react-auth0-spa';

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container profile">
      <div className="col col-1">
        <img src={user.picture} alt={user.name} />
        <h3>User name: {user.name}</h3>
      </div>
      <div className="col col-2">
        <p>Email: {user.email}</p>
        <p>Email Verified: {JSON.stringify(user.email_verified, 2)}</p>
        <p>Last ordered: {user["https://diggyspizza.com/last_order"]}</p>
        <p>ID token content:</p>
        <pre>
          <code>{JSON.stringify(user, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
};

export default Profile;
