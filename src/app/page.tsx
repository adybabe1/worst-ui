"use client";

import { useState, useEffect } from 'react';

// Hidden Navigation Menu
const HiddenNav: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button 
        onClick={() => setVisible(!visible)} 
        style={{ backgroundColor: 'hotpink', color: 'white', border: 'none', padding: '10px', cursor: 'pointer' }}
      >
        ☰
      </button>
      {visible && (
        <nav style={{ backgroundColor: 'pink', padding: '10px' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="#" style={{ color: 'fuchsia' }}>Home</a></li>
            <li><a href="#" style={{ color: 'deeppink' }}>About</a></li>
            <li><a href="#" style={{ color: 'purple' }}>Contact</a></li>
          </ul>
        </nav>
      )}
    </div>
  );
};

// Auto-Playing Music
const Audio: React.FC = () => (
  <audio autoPlay loop>
    <source src="/music.mp3" type="audio/mp3" />
  </audio>
);

// Full-Screen Modal
const FullScreenModal: React.FC = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    showModal && (
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255,182,193,0.8)', zIndex: 9999 }}>
        <div style={{ background: 'white', margin: '20% auto', padding: '30px', width: '300px', border: '2px solid hotpink' }}>
          <button 
            onClick={() => setShowModal(false)} 
            style={{ backgroundColor: 'hotpink', color: 'white', border: 'none', cursor: 'pointer', padding: '5px 10px' }}
          >
            X
          </button>
          <h1 style={{ color: 'deeppink', textAlign: 'center' }}>Welcome to Adaora's Fashion!</h1>
        </div>
      </div>
    )
  );
};

// Unclear Links
const UnclearLinks: React.FC = () => (
  <div style={{ padding: '20px', backgroundColor: 'pink' }}>
    <h1 style={{ color: 'hotpink' }}>Welcome to Adaora's Fashion Website</h1>
    <p><a href="#" style={{ color: 'white', backgroundColor: 'hotpink' }}>Click here for more information.</a></p>
    <p><a href="#" style={{ color: 'hotpink', textDecoration: 'underline' }}>Learn about us.</a></p>
  </div>
);

// Too Many Alerts and Pop-ups
const PopUpAlerts: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      alert('Welcome to Adaora’s Fashion!');
      setTimeout(() => alert('Check out our new styles!'), 2000);
      setTimeout(() => alert('Don’t forget to subscribe!'), 4000);
    }
  }, [isClient]);

  return <div style={{ color: 'purple' }}>Enjoy our site!</div>;
};

// Poor Color Contrast
const BadContrastText: React.FC = () => (
  <div style={{ backgroundColor: 'white', color: 'pink', padding: '20px' }}>
    <h1>Welcome to Adaora's Fashion!</h1>
    <p>Discover the latest in style and trends.</p>
  </div>
);

// Unresponsive Design
const UnresponsiveDesign: React.FC = () => (
  <div style={{ width: '2000px', height: '1000px', backgroundColor: 'hotpink' }}>
    <h1 style={{ color: 'white' }}>This layout is broken and unresponsive</h1>
  </div>
);

// Buttons that Do Nothing
const ButtonThatDoesNothing: React.FC = () => (
  <button 
    onClick={() => {}} 
    style={{ backgroundColor: 'pink', color: 'white', border: 'none', padding: '10px', cursor: 'pointer' }}
  >
    Click me!
  </button>
);

const HomePage: React.FC = () => (
  <div style={{ fontFamily: 'Comic Sans MS', backgroundColor: 'mistyrose' }}>
    <h1 style={{ color: 'deeppink', textAlign: 'center' }}>Welcome to Adaora's Fashion Website</h1>
    <FullScreenModal />
    <Audio />
    <HiddenNav />
    <UnclearLinks />
    <PopUpAlerts />
    <BadContrastText />
    <UnresponsiveDesign />
    <ButtonThatDoesNothing />
  </div>
);

export default HomePage;
