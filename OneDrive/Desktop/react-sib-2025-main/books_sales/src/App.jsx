import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Book from './pages/Book';

const App = () => {
  return (
    <Router>
      <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/book">Book</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </Router>
  );
};

export default App;
