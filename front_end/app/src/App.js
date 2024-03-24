import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ListeAnnonces from './components/ListeAnnonces';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Leboncoin</h1>
        <ListeAnnonces />
      </div>
    </div>
  );
}

export default App;