import React from 'react';

const OneMarket = (props) => {
  const {name, base, target, volume, price, trade_link} = props
  return (
    <>
      <th className='text-left'>{name}</th>
      <td>{base}/{target}</td>
      <td>{price}</td>
      <td>{`$${volume}`}</td>
    </>
  );
}
 
export default OneMarket;