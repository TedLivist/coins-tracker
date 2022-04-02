import React from 'react';

const MarketData = (props) => {

  const items = Object.keys(props).map((key) => (key, props[key]))

  console.log(items)

  
  return (
    <div>
      {/* {items && items.map((data) => {
        {console.log(data.item)}
      })} */}
    </div>
  );
}
 
export default MarketData;