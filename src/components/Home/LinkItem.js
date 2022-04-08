import React from 'react';

const LinkItem = (props) => {

  const {title, link} = props

  return (
    <div className='grid grid-cols-2'>
      <div>{title}</div>
      
      <div className='text-right'>{link}</div>
    </div>
  );
}
 
export default LinkItem;