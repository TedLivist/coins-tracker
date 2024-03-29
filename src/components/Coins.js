import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import OneCoin from './OneCoin';
import 'boxicons';

const Coins = () => {
  const coins = useSelector(state => state.coins)
  const [filteredCoins, setFIlteredCoins] = useState([])
  
  const worth = coins.filter(coin => coin.qty > 0)
    .map((coin) => ( coin.qty * coin.market_data.current_price.usd ))
    .reduce((a, b) => ( a + b ), 0)
    .toFixed(3)

  const totalPriceChange = Number(coins.map((coin) => coin.market_data.price_change_24h)
    .reduce((a, b) => (a + b), 0)
    .toFixed(3))
  console.log(totalPriceChange)

  useEffect(() => {
      setFIlteredCoins(coins)
  }, [coins])

  const handleWorth = (e) => {
    e.preventDefault()
    let worthOfCoins = []

    if (coins.length > 0) {
      worthOfCoins = filteredCoins.sort((a, b) => {
        return (b.market_data.current_price.usd * b.qty) - (a.market_data.current_price.usd * a.qty)
      })
    }

    setFIlteredCoins([...worthOfCoins])
  }

  const handlePriceChange = (e) => {
    e.preventDefault()
    let coinsPriceChange = []

    if (coins.length > 0) {
      coinsPriceChange = filteredCoins.sort((a, b) => (
        (b.market_data.price_change_24h * b.qty) - (a.market_data.price_change_24h * a.qty)
      ))
    }

    setFIlteredCoins([...coinsPriceChange])
  }

  const handleMarketCap = (e) => {
    e.preventDefault()

    let coinsMarketCap = []
    if (coins.length > 0) {
      coinsMarketCap = filteredCoins.sort((a, b) => (
        (b.market_data.market_cap.usd) - (a.market_data.market_cap.usd)
      ))
    }

    setFIlteredCoins([...coinsMarketCap])
  }
  
  return (
    <div>
      <div className='font-mono px-3 pt-5 pb-14 mb-3 bg-gradient-to-b from-blue-300 to-sky-200 shadow-md rounded-b-3xl'>
        <span className='text-xl'>Porfolio</span>
        <div className='font-bold text-3xl'>${worth }</div>
        <div className='mt-4'>24 hrs</div>
        <div className='flex'>
          ${totalPriceChange}
          <div className='ml-1'>
            {totalPriceChange > 0 ? <box-icon size='1rem' color='green' name='chevrons-up' /> : <box-icon size='2rem' color='red' name='chevrons-down' />}
          </div>
        </div>
      </div>

      <div className='bg-white text-center pb-3'>
        <div><strong>SORT BY</strong></div>
        <button className='btn bg-blue-400 text-white mt-3' onClick={handleWorth}>Worth</button>
        <button className='btn bg-blue-400 text-white mt-3' onClick={handlePriceChange}>Price change</button>
        <button className='btn bg-blue-400 text-white mt-3' onClick={handleMarketCap}>Market Cap</button>
      </div>

      <div className='px-3'>
        {coins.length === 0 && (
          <h2>No coins yet...</h2>
        )}
          {filteredCoins.map((coin) => (
            <OneCoin
              key={coin.id}
              coinId={coin.id}
              backendCoinId={coin.backendId}
              coinWorth={coin.market_data.current_price.usd * coin.qty}
              totalWorth={worth}
              quantity={coin.qty}
              coinImage={coin.image.thumb}
            />
          ))}
      </div>

    </div>
  );
}
 
export default Coins;