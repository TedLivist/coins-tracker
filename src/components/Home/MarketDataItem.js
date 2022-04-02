import React from 'react';

const MarketDataItem = (props) => {

  let {item, value} = props

  if (item === 'Market Cap' || item === 'Circulating Supply' || item === 'Volume') {
    value = value.toLocaleString('en-US')
  }

  return (
    <div className='market-item'>
      <div>{item}</div>
      <div>{value}</div>
    </div>
  );
}
 
export default MarketDataItem;