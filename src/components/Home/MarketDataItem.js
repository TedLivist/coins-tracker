import React from 'react';

const MarketDataItem = (props) => {

  let {item, value} = props

  if (item === 'Market Cap' || item === 'Circulating Supply' || item === 'Volume') {
    value = value.toLocaleString('en-US')
  }

  let color = ''

  if (item === 'Price Change % (24h)' && value > 0) {
    color = 'text-green-700'
  } else if (item === 'Price Change % (24h)' && value < 0) {
    color = 'text-red-500'
  }

  return (
    <div className='grid grid-cols-2 py-4 text-xl px-0 font-bold'>
      <div>{item}</div>
      <div className={`${color} text-right`}>{value}</div>
    </div>
  );
}
 
export default MarketDataItem;