import React, { useEffect } from 'react';
import getCoin from '../helpers/getCoin';
import { useDispatch, useSelector } from 'react-redux';
import { trackCoin } from '../redux/coins/coins';

const OneCoin = () => {

  return (
    <h2>I am the Coin page</h2>
  );
}
 
export default OneCoin;