import React from 'react';

const OneMarket = (props) => {
  const {name, base, target, volume, price, trade_link} = props
  return (
    <>
      <th className='text-left'>{name}</th>
      <td className='text-right'>{base}/{target}</td>
      <td className='text-right'>{price}</td>
      <td className='text-right'>{`$${volume}`}</td>
    </>
  );
}
 
export default OneMarket;