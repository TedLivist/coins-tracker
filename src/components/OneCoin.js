import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotate, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { untrackCoinOnBackend } from '../helpers/backendMods/untrackCoinOnBackend';
import { capitalize } from '../helpers/blockchainExtract';
import { untrackCoin } from '../redux/coins/coins';
import CoinModal from './CoinModal';
import TrackingButton from './TrackingButton';

const OneCoin = (props) => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const [buttonVisibility, setButtonsVisibility] = useState(false)
  const { token }  = useSelector(state => state.users.user)

  const { coinId, backendCoinId, coinWorth, totalWorth, quantity, coinImage } = props

  let percentWorth = Math.round((coinWorth/totalWorth) * 100)

  const handleUntracking = async () => {
    const data = await untrackCoinOnBackend(token, backendCoinId)
    if (data.message) {
      dispatch(untrackCoin(coinId))
    }
  }

  const toggleVisibility = () => {
    setButtonsVisibility(!buttonVisibility)
  }

  return (
    <div className='flex font-mono p-1 rounded-2xl shadow-md mt-3 py-3 px-2 bg-blue-50' onClick={toggleVisibility}>
      <div className='flex items-center'>
        <img src={coinImage} alt='coin-sticker' className='h-10' />
      </div>
      <div className='grid w-2/4 ml-2'>
        <div>{quantity}</div>
        <div>{capitalize(coinId)}</div>
        <div>{Math.round(coinWorth)}({percentWorth}%)</div>
      </div>
      {buttonVisibility && (
        <div className='grid items-center ml-auto'>
          <TrackingButton trackingFunc={handleUntracking} buttonText={<FontAwesomeIcon icon={faTrash} className="text-2xl" />} />
          <div className='bottom-9'>
            <button onClick={() => setIsOpen(true)}>
              <FontAwesomeIcon icon={faRotate} className='text-2xl' />
            </button>
          </div>
        </div>
      )}
      <CoinModal open={isOpen} coinId={coinId} backendCoinId={backendCoinId} quantity={quantity} userToken={token} onClose={() => setIsOpen(false)} />
    </div>
  );
}
 
export default OneCoin;