import React from 'react';

const MarketDataItem = (props) => {

  let {item, value} = props

  if (item === 'Market Cap' || item === 'Circulating Supply' || item === 'Volume') {
    value = value.toLocaleString('en-US')
  }

  let color = ''

  if (item === 'Price Change % (24h)' && value > 0) {
    color = 'green-font'
  } else if (item === 'Price Change % (24h)' && value < 0) {
    color = 'red-font'
  }

  return (
    <div className='market-item'>
      <div>{item}</div>
      <div className={color}>{value}</div>
    </div>
  );
}
 
export default MarketDataItem;