import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import coinDoesNotExist from '../helpers/coinCheck';
import { getCoin } from '../helpers/getCoin';
import { trackCoinOnBackend } from '../helpers/backendMods/trackCoinOnBackend';
import { trackCoin } from '../redux/coins/coins';
import TrackingButton from './TrackingButton';

const RetrievedCoin = (props) => {
  const dispatch = useDispatch()
  const { retrievedCoin } = props

  const trackedCoins = useSelector((state) => state.coins)
  const checkUser = useSelector(state => state.users)

  const handleTracking = async () => {
    const data = await getCoin(retrievedCoin)
    const {id} = data
    const qty = 0
    const {token} = checkUser.user
    const dataAndQty = {...data, qty};
    const coin = await trackCoinOnBackend(id, qty, token)
    
    if (coin.coin_id) {
      dispatch(trackCoin(dataAndQty))
    }
  }

  return (
    <div>
      <strong>Retir</strong> {retrievedCoin}
      { retrievedCoin &&
        (trackedCoins.length < 3) &&
        coinDoesNotExist(trackedCoins, retrievedCoin) &&
        checkUser.user ?
          <TrackingButton
            trackingFunc={handleTracking}
            buttonText='Track this coin'
          /> : ''
      }
    </div>
  );
}
 
export default RetrievedCoin;