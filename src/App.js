// src/App.js
import React from 'react';
import CustomNavbar from './components/Navbar';
import Header from './components/Homepage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
