import React, { useEffect } from 'react';
import getCoin from '../helpers/getCoin';
import { useDispatch, useSelector } from 'react-redux';
import { trackCoin } from '../redux/coins/coins';
import SearchCoin from './SearchCoin';

const Coins = () => {

  const dispatch = useDispatch()
  const coin = 'bitcoin'

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
    <div>
      <h2>The Coins page</h2>
      <SearchCoin />
        {coins.map((coin) => {
          console.log(coin.id)
        })}
    </div>
  );
}
 
export default Coins;