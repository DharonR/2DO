import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [data, setData] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:4000/protected-data', { withCredentials: true })
      .then((res) => setData(res.data.data))
      .catch(() => setData('Failed to load'));
  }, []);

  return (
    <div style={{ padding: '2em' }}>
      <h1>Dashboard</h1>
      <p>{data}</p>
    </div>
  );
}

export default Dashboard;
