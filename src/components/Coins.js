import React from 'react';
import { useSelector } from 'react-redux';
import OneCoin from './OneCoin';

const Coins = () => {
  const coins = useSelector(state => state.coins)

  return (
    <div>
      <h2>The Coins page</h2>
        {coins.map((coin) => (
          <OneCoin key={coin.id} coinId={coin.id} />
        ))}
    </div>
  );
}
 
export default Coins;