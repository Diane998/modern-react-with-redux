import React from 'react';
import userResources from './useResoucers';

const UserList = ({ resource }) => {
  const users = userResources(resource);

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
