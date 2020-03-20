import React from 'react';
import './DeliveryList.css';
import DeliveryCard from '../../presentational/DeliveryCard';

function DeliveryList ({ deliveries }) {

  console.log(deliveries)

  const sortDeliveries = () => {
    console.log('i\'m sorting')
  }

  const deliveriesArray = Object.values(deliveries);

  return (
    <div>
      <div className="title-bar">
        <p className="title">
          Upcoming Deliveries...
        </p>
        <p className="title" onClick={sortDeliveries}>
          Sort
        </p>

      </div>
      {deliveriesArray.map((delivery, index) => {
        return <DeliveryCard delivery={delivery} key={index}></DeliveryCard>
      })}
    </div>
  );
}

export default DeliveryList;
