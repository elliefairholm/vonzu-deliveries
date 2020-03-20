import React from 'react';
import './DeliveryList.css';
import DeliveryCard from '../DeliveryCard';

function DeliveryList ({ deliveries }) {

  const sortDeliveries = () => {
    console.log('i\'m sorting')
  }

  const deliveriesArray = Object.values(deliveries);

  return (
    <div className="delivery-list-container">
      <div className="title-bar">
        <p className="title yellow">
          Upcoming Deliveries...
        </p>
        <p className="title sort" onClick={sortDeliveries}>
          Sort
        </p>

      </div>
      <div className="delivery-list">
        {deliveriesArray.map((delivery, index) => {
          return <DeliveryCard delivery={delivery} key={index}></DeliveryCard>
        })}
      </div>
    </div>
  );
}

export default DeliveryList;
