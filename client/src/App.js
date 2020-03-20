import React from 'react';
import './App.css';

import Header from './components/presentational/Header';
import DeliveryList from './components/container/DeliveryList';

function App () {
  return (
    <div className="App">
      <Header></Header>
      <DeliveryList></DeliveryList>
    </div>
  );
}

export default App;
