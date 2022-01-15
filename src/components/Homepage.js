import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import SearchCoin from './SearchCoin';

const Homepage = () => {
  const [searchCoin, setSearchedCoin] = useState('')

  const callback = useCallback((coin) => {
    setSearchedCoin(coin)
  }, [setSearchedCoin])

  console.log('Searched coin', searchCoin)

  const coins = useSelector(state => state.coins)

  return (
    <div>
      <SearchCoin trackedCoins={coins} parentCallback={callback} />
      <h3>{searchCoin}</h3>
    </div>
  );
}
 
export default Homepage;