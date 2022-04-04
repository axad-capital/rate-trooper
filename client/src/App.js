import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavComp from './components/NavComp/NavComp';

function App() {
  return (
    <div className="App">
      <Router>
        <NavComp />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
