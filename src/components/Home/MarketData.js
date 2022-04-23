import React from 'react';
import MarketDataItem from './MarketDataItem';

const MarketData = (props) => {

  const items = Object.keys(props).map((key) => ((key, props[key])))

  return (
    <div className="mt-4 rounded-2xl py-0 px-4 mb-4">
      {items.map((data) => (
        <div key={data.item}>  
          <MarketDataItem item={data.item} value={data.value} />
        </div>
      ))}
    </div>
  );
}

export default MarketData;