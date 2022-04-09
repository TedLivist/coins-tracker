import React from 'react';

const OneMarket = (props) => {
  const {name, base, target, volume, price, trade_link} = props
  return (
    <div>
      {name} | {base} | {target} | {price} | {`$${volume}`}
    </div>
  );
}
 
export default OneMarket;