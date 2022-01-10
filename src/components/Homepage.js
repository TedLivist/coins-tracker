import React from 'react';
import { useSelector } from 'react-redux';
import SearchCoin from './SearchCoin';

const Homepage = () => {

  const []

  const coins = useSelector(state => state.coins)

  return (
    <div>
      <SearchCoin trackedCoins={coins} />
    </div>
  );
}
 
export default Homepage;