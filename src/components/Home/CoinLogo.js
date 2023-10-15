import React from 'react';

const CoinLogo = (props) => {

  const {coinName, coinLogo, coinPrice} = props

  return (
    <div className='py-10 bg-white px-4 rounded-2xl mb-4 font-mono bg-gradient-to-r from-gray-800 to-zinc-500 text-white'>
      <div className='flex items-center'>
        <img src={coinLogo} className='xs:h-12 sm:h-14 rounded-full' alt='coin-sticker' />
        <span className='text-3xl font-bold ml-3'>{coinName}</span>
      </div>
      <div className='text-5xl mb-4 font-bold mt-6 overflow-y-hidden'>${coinPrice}</div>
    </div>
  );
}
 
export default CoinLogo;