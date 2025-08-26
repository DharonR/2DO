import React, { useState } from 'react';
import axios from 'axios';

function Login({ onSuccess }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await axios.post('http://localhost:4000/login', { password }, { withCredentials: true });
      onSuccess();
    } catch {
      setError('Incorrect password');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 300, margin: '2em auto' }}>
      <h2>Login</h2>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: '100%', padding: '8px' }}
      />
      <button type="submit" style={{ marginTop: '1em', width: '100%' }}>Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default Login;
