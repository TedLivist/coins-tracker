import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import RetrievedCoin from '../RetrievedCoin';
import CoinLogo from './CoinLogo';
import SearchCoin from '../SearchCoin';
import { getCoin } from '../../helpers/getCoin';

const Homepage = () => {
  const [searchCoin, setSearchedCoin] = useState('')
  const [coinProps, setCoinProps] = useState([])

  const coins = useSelector(state => state.coins)
  useEffect(async () => {
    if (searchCoin === '' && coins.length > 0) {
      setSearchedCoin(coins[0].id)
    } else {
      const coin = await getCoin('fear')
      setCoinProps(coin)
      console.log(coin)
      setSearchedCoin(coin.id)
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
      {/* <ChartDisplay chartCoin={searchCoin} /> */}
      {coinProps.length !== 0 &&
        <CoinLogo coinName={coinProps.name} coinLogo={coinProps.image.large} /> 
      }
    </div>
  );
}
 
export default Homepage;