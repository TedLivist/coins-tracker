import React, { useEffect } from 'react';
import getCoin from '../helpers/getCoin';

const Coin = () => {

  const coin = 'bitcoin'

  useEffect(() => {
    getCoin(coin);
  }, [])

  return (
    <h2>I am the Coin page</h2>
  );
}
 
export default Coin;