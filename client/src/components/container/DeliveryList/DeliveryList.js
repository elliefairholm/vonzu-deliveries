import React from 'react';
import './DeliveryList.css';
import DeliveryCard from '../DeliveryCard';

function DeliveryList ({ deliveries, sortDeliveries }) {

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
        {deliveries.map((delivery, index) => {
          return <DeliveryCard delivery={delivery} key={index}></DeliveryCard>
        })}
      </div>
    </div>
  );
}

export default DeliveryList;
