/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useAuth0 } from '../auth/react-auth0-spa';

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h3>User name: {user.name}</h3>
      <p>Email: {user.email}</p>
      <p>ID token content:</p>
      <pre>
        <code>{JSON.stringify(user, null, 2)}</code>
      </pre>
    </>
  );
};

export default Profile;
