import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserProvider } from './context/UserData';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Notifications position="top-right" zIndex={2077} />
      <UserProvider>
        <App />
      </UserProvider>
    </MantineProvider>
  </React.StrictMode>
);
