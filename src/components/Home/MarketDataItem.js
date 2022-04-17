import React from 'react';

const MarketDataItem = (props) => {

  let {item, value} = props

  if (item !== 'Price Change % (24h)') {
    value = `$${value.toLocaleString('en-US')}`
  }

  let color = ''

  if (item === 'Price Change % (24h)') {
    value = value.toFixed(3)
  }

  if (item === 'Price Change % (24h)' && value > 0) {
    color = 'text-green-700'
  } else if (item === 'Price Change % (24h)' && value < 0) {
    color = 'text-red-500'
  }

  return (
    <div className={`${item === 'All-Time Low' ? '' : 'border-b-2 border-solid border-gray-700'} grid grid-cols-2 py-4 text-2xl px-0 font-semibold`}>
      <div>{item}</div>
      <div className={`${color} text-right`}>{value}</div>
    </div>
  );
}
 
export default MarketDataItem;