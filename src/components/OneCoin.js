import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { untrackCoinOnBackend } from '../helpers/backendMods/untrackCoinOnBackend';
import { untrackCoin } from '../redux/coins/coins';
import CoinModal from './CoinModal';
import TrackingButton from './TrackingButton';

const OneCoin = (props) => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const { token }  = useSelector(state => state.users.user)

  const { coinId, backendCoinId, coinWorth, totalWorth, quantity, coinImage } = props

  useEffect(() => {
    const percentWorth = Math.round((coinWorth/totalWorth) * 100)
    console.log(percentWorth)
  })

  const handleUntracking = async () => {
    const data = await untrackCoinOnBackend(token, backendCoinId)
    if (data.message) {
      dispatch(untrackCoin(coinId))
    }
  }

  return (
    <div className='flex border-2 border-slate-900'>
      <img src={coinImage} alt='coin-sticker' className='h-8' />
      <div>{quantity}</div>
      <div>{coinId}</div>
      <TrackingButton trackingFunc={handleUntracking} buttonText='Untrack this coin' />
      <div className='bottom-9'>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
      </div>
        <CoinModal open={isOpen} coinId={coinId} backendCoinId={backendCoinId} quantity={quantity} userToken={token} onClose={() => setIsOpen(false)} />
           
    </div>
  );
}
 
export default OneCoin;