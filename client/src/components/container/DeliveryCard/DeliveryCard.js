import React, { useState } from 'react';
import './DeliveryCard.css';
import DeliveryDetails from '../../presentational/DeliveryDetails';
import arrow from '../../../assets/down-arrow.png'

function DeliveryCard ({ delivery }) {

  const [showDetails, setShowDetails] = useState(false);

  let details;

  const displayDetails = () => {
    setShowDetails(!showDetails);
  }

  if (!showDetails) {
    details = null;
  } else {
    details = <DeliveryDetails delivery={delivery}></DeliveryDetails>
  }

  return (
    <div className="delivery-card">
      <div className="delivery-id-container" onClick={displayDetails} data-testid="delivery-id-container">
        <p className="bold">Expedition Id: </p>
        <p data-testid="delivery-id">{delivery.id}</p>
        <img className={!showDetails ? "arrow" : "up arrow"} alt="Arrow" src={arrow} data-testid="delivery-arrow"></img>
      </div>
      {details}
    </div >
  )
}

export default DeliveryCard;
