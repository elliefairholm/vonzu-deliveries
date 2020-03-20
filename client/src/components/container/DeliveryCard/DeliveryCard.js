import React from 'react';
import './DeliveryCard.css';
import DeliveryId from '../../presentational/DeliveryId';
import DeliveryDetails from '../../presentational/DeliveryDetails';

function DeliveryCard ({ delivery }) {

  const displayDetails = () => {
    console.log('dis playing details')
  }

  return (
    <div className="delivery-card">
      <DeliveryId id={delivery.id} displayDetails={displayDetails}></DeliveryId>
      <DeliveryDetails delivery={delivery}></DeliveryDetails>
    </div>
  )
}     

export default DeliveryCard;
