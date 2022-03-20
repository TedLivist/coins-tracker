import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { untrackCoinOnBackend } from '../helpers/backendMods/untrackCoinOnBackend';
import { untrackCoin } from '../redux/coins/coins';
import CoinModal from './CoinModal';
import TrackingButton from './TrackingButton';

const OneCoin = (props) => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const { token }  = useSelector(state => state.users.user)

  const { coinId, backendCoinId, lastPrice, quantity } = props

  const handleUntracking = async () => {
    const data = await untrackCoinOnBackend(token, backendCoinId)
    if (data.message) {
      dispatch(untrackCoin(coinId))
    }
  }

  return (
    <div>
      <p>{coinId} | {lastPrice} | {quantity} <TrackingButton trackingFunc={handleUntracking} buttonText='Untrack this coin' /> </p>
      <div>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>

        <CoinModal open={isOpen} coinId={coinId} backendCoinId={backendCoinId} quantity={quantity} userToken={token} onClose={() => setIsOpen(false)} />
      </div>      
    </div>
  );
}
 
export default OneCoin;