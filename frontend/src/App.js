import React, { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {loggedIn ? (
        <Dashboard />
      ) : (
        <Login onSuccess={() => setLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
