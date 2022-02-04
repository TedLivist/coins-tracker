import React from 'react';

const TrackingButton = (props) => {

  const { trackingFunc, buttonText } = props

  return (
    <button onClick={trackingFunc}>{buttonText}</button>
  );
}
 
export default TrackingButton;