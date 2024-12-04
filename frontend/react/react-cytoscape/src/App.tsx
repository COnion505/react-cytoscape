import React from 'react';
import './App.css';
import Home from './Home';
import Sample from './Sample';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sample" element={<Sample />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
