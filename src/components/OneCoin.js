import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { untrackCoin } from '../redux/coins/coins';
import CoinModal from './CoinModal';
import TrackingButton from './TrackingButton';

const OneCoin = (props) => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)

  const { coinId, lastPrice, quantity } = props

  const handleUntracking = () => {
    dispatch(untrackCoin(coinId))
  }

  return (
    <div>
      <p>{coinId} | {lastPrice} | {quantity} <TrackingButton trackingFunc={handleUntracking} buttonText='Untrack this coin' /> </p>
      <div>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>

        <CoinModal open={isOpen} onClose={() => setIsOpen(false)} />
      </div>      
    </div>
  );
}
 
export default OneCoin;