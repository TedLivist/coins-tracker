import React from 'react';

const OneMarket = (props) => {
  const {name, base, target, volume, price, trade_link} = props
  return (
    <>
      <th className='text-left'>{name}</th>
      <td>
        <a href={trade_link} target='_blank' rel="noreferrer" className='hover:no-underline hover:text-red-600'>
          {base}/{target}
        </a>
      </td>
      <td>{`$${Number(price).toLocaleString('en-US')}`}</td>
      <td>{`$${Number(volume).toLocaleString('en-US')}`}</td>
    </>
  );
}
 
export default OneMarket;