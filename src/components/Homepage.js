import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import RetrievedCoin from './RetrievedCoin';
import SearchCoin from './SearchCoin';

const Homepage = () => {
  const [searchCoin, setSearchedCoin] = useState('')

  const coins = useSelector(state => state.coins)
  useEffect(() => {
    if (searchCoin === '' && coins.length > 0) {
      setSearchedCoin(coins[0].id)
    }
  }, [coins, searchCoin])

  const callback = useCallback((coin) => {
    setSearchedCoin(coin)
  }, [setSearchedCoin])

  return (
    <div>
      <SearchCoin trackedCoins={coins} parentCallback={callback} />
      <h3>{searchCoin}</h3>
      <RetrievedCoin retrievedCoin={searchCoin} />
    </div>
  );
}
 
export default Homepage;