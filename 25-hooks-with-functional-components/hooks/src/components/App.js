import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
  const [resource, setResource] = useState('posts');

  return (
    <div className="ui container">
      <div>
        <div className="ui button primary" onClick={() => setResource('posts')}>
          Posts
        </div>
        <div className="ui button primary" onClick={() => setResource('todos')}>
          Todos
        </div>
        <div className="ui button primary" onClick={() => setResource('users')}>
          Users
        </div>
      </div>
      <ResourceList resource={resource} />
      <UserList resource={resource} />
    </div>
  );
};

export default App;
