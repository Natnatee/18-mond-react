import React from 'react';
import ReactDOM from 'react-dom/client';
import MainApp from './MainApp'; // Import the new MainApp component
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);