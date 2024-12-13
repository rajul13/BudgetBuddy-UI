import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './pages/app-root-page';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router } from 'react-router-dom';  
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <MantineProvider>
      <Router>  
        <App />
      </Router>
    </MantineProvider>
  </React.StrictMode>
);
