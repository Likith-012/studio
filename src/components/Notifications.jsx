import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const socket = io(process.env.REACT_APP_API_URL, {
      auth: { token: localStorage.getItem('token') }
    });

    socket.on('notification', (message) => {
      setNotifications(prev => [...prev, message]);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div className="notification-panel">
      <h3>Notifications</h3>
      {notifications.map((msg, index) => (
        <div key={index} className="notification">
          <p>{msg.text}</p>
          <small>{new Date(msg.date).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
};