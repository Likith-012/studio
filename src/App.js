import React, { useState, useEffect } from 'react';

function App() {
  const [healthStatus, setHealthStatus] = useState('');
  const [studios, setStudios] = useState([]);
  const [error, setError] = useState('');

  // Example: Fetch backend health status
  const checkBackendHealth = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/healthcheck');
      if (!response.ok) throw new Error('Backend not responding');
      const data = await response.text();
      setHealthStatus(data);
      setError('');
    } catch (err) {
      setError('Failed to connect to backend');
      console.error(err);
    }
  };

  // Example: Fetch studio data
  const fetchStudios = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/studios');
      if (!response.ok) throw new Error('Failed to fetch studios');
      const data = await response.json();
      setStudios(data);
    } catch (err) {
      console.error(err);
    }
  };

  // Load data on component mount
  useEffect(() => {
    checkBackendHealth();
    fetchStudios();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Studio Management System</h1>
      
      {/* Backend Health Status */}
      <div className="mb-6">
        <button
          onClick={checkBackendHealth}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Check Backend Health
        </button>
        <p className="mt-2">
          Status: {healthStatus || 'Not checked'}
          {error && <span className="text-red-500 ml-4">{error}</span>}
        </p>
      </div>

      {/* Studio List */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Studios</h2>
        <ul className="space-y-2">
          {studios.map((studio) => (
            <li
              key={studio.id}
              className="bg-white p-4 rounded shadow"
            >
              {studio.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;