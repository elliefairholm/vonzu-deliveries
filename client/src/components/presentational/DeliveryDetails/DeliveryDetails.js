import React from 'react';
import './DeliveryDetails.css';

function DeliveryDetails ({ delivery }) {

  const schedule = delivery.schedules[0].join('-');

  let comments;

  if (delivery.comments) {
    comments = <div className="delivery-details-section"><p className="bold">Comments: </p><p>{delivery.comments}</p></div>
  } else {
    comments = null;
  }

  return (
    <div className="delivery-details-container">
      <div className="delivery-details-section">
        <p className="bold">Date:</p>
        <p>{delivery.date}</p>
      </div>
      <div className="delivery-details-section">
        <p className="bold">Schedule:</p>
        <p>{schedule}</p>
      </div>
      <div className="delivery-details-section">
        <p className="bold">Address:</p>
        <div className="delivery-address">
          <p>{delivery.address.street}</p>
          <p>{delivery.address.city}</p>
          <p>{delivery.address.postalCode}</p>
          <p>{delivery.address.country}</p>
        </div>
      </div>
      <div className="delivery-details-section">
        <p className="bold">Type:</p>
        <p>{delivery.type[0].toUpperCase() + delivery.type.slice(1)}</p>
      </div>
      <div className="delivery-details-section">
        <p className="bold">Weight:</p>
        <p>{delivery.weight}kg</p>
      </div>
      {comments}
    </div>
  );
}

export default DeliveryDetails;
