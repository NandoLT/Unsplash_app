import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import NotFound from './components/commons/NotFound';
import { Dashboard } from './components/dashboard/Dashboard';
import { UserArea } from './components/user_area/UserArea';

import './assets/css/App.css';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path='/' element={ <Dashboard /> } />

        <Route path='user-zone' element={ <UserArea /> } />

        <Route path='/404' element={ <NotFound /> } />
        
        <Route path='*' element={ <Navigate to='/404' /> } />

      </Routes>
    </div>
  );
}

export default App;
