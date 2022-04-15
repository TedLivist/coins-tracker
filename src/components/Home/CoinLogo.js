import React from 'react';

const CoinLogo = (props) => {

  const {coinName, coinLogo} = props

  return (
    <div className='bg-red-600 p-4 rounded-2xl mb-4'>
      <img src={coinLogo} className='h-24 mx-auto rounded-full' />
      <h2 className='text-center'>{coinName}</h2>
    </div>
  );
}
 
export default CoinLogo;