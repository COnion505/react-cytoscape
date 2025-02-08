import React from 'react';
import './Home.css';
import CyCompo from './Cytoscape';

function Home() {
  return (
    <div style={{ backgroundColor: 'lightgrey', height: '100vh', width: '100vw' }}>
      <p>Home.</p>
      <CyCompo />
    </div>
  );
}

export default Home;
