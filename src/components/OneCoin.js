import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { untrackCoinOnBackend } from '../helpers/backendMods/untrackCoinOnBackend';
import { capitalize } from '../helpers/blockchainExtract';
import { untrackCoin } from '../redux/coins/coins';
import CoinModal from './CoinModal';
import TrackingButton from './TrackingButton';

const OneCoin = (props) => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const { token }  = useSelector(state => state.users.user)

  const { coinId, backendCoinId, coinWorth, totalWorth, quantity, coinImage } = props

  let percentWorth = Math.round((coinWorth/totalWorth) * 100)

  const handleUntracking = async () => {
    const data = await untrackCoinOnBackend(token, backendCoinId)
    if (data.message) {
      dispatch(untrackCoin(coinId))
    }
  }

  return (
    <div className='flex border-2 border-slate-900 p-1 rounded-xl mt-3'>
      <div className='flex items-center'>
        <img src={coinImage} alt='coin-sticker' className='h-10' />
      </div>
      <div className='grid w-2/4 ml-2'>
        <div>{quantity}</div>
        <div>{capitalize(coinId)}</div>
        <div>{coinWorth}({percentWorth}%)</div>
      </div>
      <div>
        <TrackingButton trackingFunc={handleUntracking} buttonText='Untrack this coin' />
        <div className='bottom-9'>
          <button onClick={() => setIsOpen(true)}>Open Modal</button>
        </div>
      </div>
        <CoinModal open={isOpen} coinId={coinId} backendCoinId={backendCoinId} quantity={quantity} userToken={token} onClose={() => setIsOpen(false)} />
    </div>
  );
}
 
export default OneCoin;