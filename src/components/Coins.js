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

    if (coins.length > 1) {
      worthOfCoins = filteredCoins.sort((a, b) => {
        return (b.market_data.current_price.usd * b.qty) - (a.market_data.current_price.usd * a.qty)
      })
    }

    setFIlteredCoins([...worthOfCoins])
  }

  const handlePriceChange = (e) => {
    e.preventDefault()
    let coinsPriceChange = []

    if (coins.length > 1) {
      coinsPriceChange = filteredCoins.sort((a, b) => (
        (b.market_data.price_change_24h) - (a.market_data.price_change_24h)
      ))
    }

    setFIlteredCoins([...coinsPriceChange])
  }

  const handleMarketCap = (e) => {
    e.preventDefault()

    coins
  }
  
  return (
    <div className='bg-red-400'>
      <div className='font-mono px-3 pt-5 pb-14 mb-3 bg-gradient-to-b from-blue-300 to-sky-200 rounded-b-3xl'>
        <span className='text-xl'>Porfolio</span>
        <div className='font-bold text-3xl'>${worth}</div>
        <div className='mt-4'>24 hrs</div>
        <div className='flex'>
          ${totalPriceChange}
          <div className='ml-1'>
            {totalPriceChange > 0 ? <box-icon size='1rem' color='green' name='chevrons-up' /> : <box-icon size='2rem' color='red' name='chevrons-down' />}
          </div>
        </div>
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

      <div className='bg-white h-20 border-t-2 border-solid fixed left-0 right-0 bottom-0'>
        
          <button className='btn btn-secondary' onClick={handleWorth}>Sort by worth</button>

          <button className='btn btn-primary' onClick={handlePriceChange}>Sort by price change</button>

          <button className='btn btn-warning'>Sort by MC</button>
        
      </div>
    </div>
  );
}
 
export default Coins;