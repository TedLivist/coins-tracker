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

  const coinDoesNotExist = (coins, coin) => {
    for (let i = 0; i < coins.length; i++) {
      if (coins[i].id == coin) {
        return false
      }
    }
    return true
  }

  const arr = [{id: 'bitcoin', sym: 'btc'}, {id: 'fear', sym: 'fear'}]

  console.log(coinDoesNotExist(arr, 'ethereum'))

  return (
    <div>
      <strong>Retir</strong> {retrievedCoin}
      { retrievedCoin && (trackedCoins.length < 3) && coinDoesNotExist(trackedCoins, retrievedCoin) ? <TrackingButton trackingFunc={handleTracking} buttonText='Track this coin' /> : '' }
    </div>
  );
}
 
export default RetrievedCoin;