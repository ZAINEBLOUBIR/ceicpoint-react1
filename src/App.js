import logo from './logo.svg';
import './App.css';
// src/App.js

import React from 'react';
import './App.css';
import { Card, Button } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

const App = () => {
  // Variable pour le prénom
  const firstName = "Mark"; // Vous pouvez remplacer "John" par votre prénom ou laisser vide

  return (
    <div className="App">
      <Card style={{ width: '18rem' }}>
        <Image />
        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Text>
            <Price />
            <Description />
          </Card.Text>
          <Button variant="primary">Acheter maintenant</Button>
        </Card.Body>
      </Card>

      <div style={{ marginTop: '20px' }}>
        {firstName ? <h3>Bonjour, {firstName}!</h3> : <h3>Bonjour !</h3>}
        {firstName && <img src="mark.webp" alt="Profile" style={{ width: '100px', borderRadius: '50%' }} />}
      </div>
    </div>
  );
};

export default App;
