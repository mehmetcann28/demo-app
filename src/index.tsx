import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import UserListComponent from './pages/UserListComponent';
import UserPage from './pages/UserPage';
import Scoreboard from './pages/ScoreBoard';
import Oyun from './pages/Oyun';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Oyun />
);