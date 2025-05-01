import { useEffect } from 'react';

function App() {
  const checkHealth = () => {
    fetch('/api/healthcheck') // Use proxy to avoid CORS
      .then(response => response.text())
      .then(data => alert(data))
      .catch(error => alert('API Error'));
  };

  return (
    <div>
      <h1>Studio Management System</h1>
      <button onClick={checkHealth}>Check API Health</button>
    </div>
  );
}

export default App;