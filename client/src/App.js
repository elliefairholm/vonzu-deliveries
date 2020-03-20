import React from 'react';
import './App.css';

import Header from './components/presentational/Header';
import DeliveryList from './components/container/DeliveryList';

import deliveries from './data/data.json';

function App () {

  return (
    <div className="App">
      <Header></Header>
      <DeliveryList deliveries={deliveries}></DeliveryList>
    </div>
  );
}

export default App;
