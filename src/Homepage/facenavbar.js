import React from 'react';

const Navbar = ({ setShowAboutModal, setShowContactModal }) => {
  return (
    <nav>
      <div className="logo">
        <img src="/images/logo.png" alt="Celestia Logo" />
      </div>
      <div className="threenav">
        <a className="navhome" href="home.html">Home</a>
        <button 
          className="btn transparent-btn" 
          onClick={() => setShowAboutModal(true)}
        >
          About Us
        </button>
        <button 
          className="btn transparent-btn" 
          onClick={() => setShowContactModal(true)}
        >
          Contact
        </button>
      </div>
      <div className="login-container">
        <button type="button" className="login">
          Log in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
