import React from 'react';
import TrackingButton from './TrackingButton';

const OneCoin = (props) => {

  const { coinId } = props

  const handleUntracking = () => {
    console.log('Incoming untracking...')
  }

  return (
    <div>
      <p>{coinId} <TrackingButton trackingFunc={handleUntracking} buttonText='Untrack this coin' /> </p>
    </div>
  );
}
 
export default OneCoin;