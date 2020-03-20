import React, { useState } from 'react';
import './App.css';

import Header from './components/presentational/Header';
import DeliveryList from './components/container/DeliveryList';

import data from './data/data.json';

function App () {

  const deliveriesArray = Object.values(data);

  const [deliveries, setDeliveries] = useState(deliveriesArray)


  const sortDeliveries = () => {
    let newDeliveries = deliveries.slice()
    setDeliveries(newDeliveries.sort((a, b) => {
      if (a.date < b.date) {
        return -1;
      } else if (a.date > b.date) {
        return 1;
      } else if (a.schedules[0] < b.schedules[0]) {
        return -1;
      } else if (a.schedules[0] > b.schedules[0]) {
        return 1;
      }
      return 0;
    }));
  }

  return (
    <div className="App">
      <Header></Header>
      <DeliveryList deliveries={deliveries} sortDeliveries={sortDeliveries}></DeliveryList>
    </div>
  );
}

export default App;
