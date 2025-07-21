import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

const AppRouter: React.FC = () => (
  <BrowserRouter>
    <nav style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
      <Link to="/">Главная</Link>
      <Link to="/about">О проекте</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
