import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import router from './Router/router';
import { RouterProvider } from 'react-router-dom';
import { UserProvider } from './context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router}></RouterProvider>
    </UserProvider>
  </React.StrictMode>
);

