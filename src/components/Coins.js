import React from 'react';
import { useSelector } from 'react-redux';
import OneCoin from './OneCoin';

const Coins = () => {
  const coins = useSelector(state => state.coins)

  const worth = coins.filter(coin => coin.qty > 0)
    .map((coin) => ( coin.qty * coin.market_data.current_price.usd ))
    .reduce((a, b) => ( a + b ), 0)
    .toFixed(3)
  
  return (
    <div>
      <h2>The Coins page</h2>
      <h4>Portfolio worth: ${worth}</h4>
      {coins.length == 0 && (
        <h2>No coins yet...</h2>
      )}
        {coins.map((coin) => (
          <OneCoin
            key={coin.id}
            coinId={coin.id}
            lastPrice={coin.market_data.current_price.usd}
            quantity={coin.qty}
          />
        ))}
    </div>
  );
}
 
export default Coins;