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
      <div className="delivery-id-container" onClick={displayDetails}>
        <p className="bold">Expedition Id: </p>
        <p>{delivery.id}</p>
        <img className={!showDetails ? "arrow" : "up arrow"} alt="Arrow" src={arrow}></img>
      </div>
      {details}
    </div >
  )
}

export default DeliveryCard;
