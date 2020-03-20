import React from 'react';
import './DeliveryId.css';
import arrow from '../../../assets/down-arrow.png'

function DeliveryId ({ id, displayDetails }) {
  return (
    <div className="delivery-id-container" onClick={displayDetails}>
      <p className="bold">Expedition Id: </p>
      <p>{id}</p>
      <img className="arrow" src={arrow} alt="Down Arrow"></img>
    </div>
  );
}

export default DeliveryId;
