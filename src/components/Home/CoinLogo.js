import React from 'react';

const CoinLogo = (props) => {

  const {coinName, coinLogo} = props

  return (
    <div className='coin-logo'>
      <img src={coinLogo} />
      <h2>{coinName}</h2>
    </div>
  );
}
 
export default CoinLogo;