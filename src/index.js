import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 

import './index.css';
import App from './App';
import {CurrentTasksContextProvider} from './store/current-tasks-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CurrentTasksContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CurrentTasksContextProvider>
  );