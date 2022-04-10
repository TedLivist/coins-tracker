import React from 'react';

const OneMarket = (props) => {
  const {name, base, target, volume, price, trade_link} = props
  return (
    <>
      <th className='text-left'>{name}</th>
      <td>
        <a href={trade_link} target='_blank' className='hover:no-underline hover:text-red-600'>
          {base}/{target}
        </a>
      </td>
      <td>{price}</td>
      <td>{`$${volume}`}</td>
    </>
  );
}
 
export default OneMarket;