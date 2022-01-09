import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getCoin from '../helpers/getCoin';

const Coins = () => {
  
  const dispatch = useDispatch()
  const coin = 'ethereum'

  useEffect(() => {
    const getCoinData = async () => {
      const data = await getCoin(coin);
      await dispatch(trackCoin(data))
    }
    getCoinData();
  }, [dispatch])

  const coins = useSelector(state => state.coins)
  console.log(coins)
  
  return (
    <h1>
      {coins[0].id}
    </h1>
  );
}
 
export default Coins;