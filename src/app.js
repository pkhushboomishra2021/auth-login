import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Welcome from './components/Welcome';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/' element={<Login />} /> {/* Redirect root to login */}
      </Routes>
    </Router>
  );
};

export default App;
