import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getCoin from '../helpers/getCoin';
import { trackCoin } from '../redux/coins/coins';
import TrackingButton from './TrackingButton';

const RetrievedCoin = (props) => {
  const dispatch = useDispatch()
  const { retrievedCoin } = props

  const trackedCoins = useSelector((state) => state.coins)
  console.log('Tracked Coins', trackedCoins)

  const handleTracking = async () => {
    const data = await getCoin(retrievedCoin)
    console.log(data)
    dispatch(trackCoin(data))
  }

  return (
    <div>
      <strong>Retir</strong> {retrievedCoin}
      { retrievedCoin && (trackedCoins.length < 3) ? <TrackingButton trackingFunc={handleTracking} buttonText='Track this coin' /> : '' }
    </div>
  );
}
 
export default RetrievedCoin;