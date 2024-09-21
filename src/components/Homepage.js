import React from 'react';
import './Homepage.css';
import img from './assets/img.png';
const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-left">
        <h1>Create and sell custom products</h1>
        <ul>
          <li style={{marginLeft:'0px'}} >100% Free to use</li>
          <li>900+ High-Quality Products</li>
          <li>Largest global print network</li>
        </ul>
        <div className="homepage-buttons">
          <button className="btn-start">Start for free</button>
          <button className="btn-how">How it works?</button>
        </div>
        <p className="trusted-text">Trusted by over 8M sellers around the world</p>
      </div>
      <div className="homepage-right">
        <img src={img} alt="Custom Products" className="homepage-image" />
      </div>
    </div>
  );
};

export default Homepage;
