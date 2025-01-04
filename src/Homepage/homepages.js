import React, { useState} from 'react';
import Navbar from './facenavbar';
import Hero from './facehero';
import Modal from './facemodal';
import './face.css';

const Homepages = () => {
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div>
      <Navbar 
        setShowAboutModal={setShowAboutModal} 
        setShowContactModal={setShowContactModal} 
      />
      <Hero />
      <Modal 
        show={showAboutModal} 
        onClose={() => setShowAboutModal(false)} 
        title="About Us" 
        content="Celestia is your one-stop destination for all the glamour and gossip you need." 
      />
      <Modal 
        show={showContactModal} 
        onClose={() => setShowContactModal(false)} 
        title="Contact Us" 
        content="Reach out to us at contact@celestia.com." 
      />
       
    </div>
    
  );
  
};




export default Homepages;
