import React from 'react';
import { useDispatch } from 'react-redux';
import { untrackCoin } from '../redux/coins/coins';
import TrackingButton from './TrackingButton';

const OneCoin = (props) => {
  const dispatch = useDispatch()

  const { coinId, lastPrice, quantity } = props

  const handleUntracking = () => {
    dispatch(untrackCoin(coinId))
  }

  return (
    <div>
      <p>{coinId} | {lastPrice} | {quantity} <TrackingButton trackingFunc={handleUntracking} buttonText='Untrack this coin' /> </p>
    </div>
  );
}
 
export default OneCoin;