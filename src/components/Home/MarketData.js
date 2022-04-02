import React from 'react';
import MarketDataItem from './MarketDataItem';

const MarketData = (props) => {

  const items = Object.keys(props).map((key) => ((key, props[key])))

  return (
    <div className="market-data-collection">
      {items.map((data) => (
        <div key={data.item}>  
          <MarketDataItem item={data.item} value={data.value} />
        </div>
      ))}
    </div>
  );
}

export default MarketData;