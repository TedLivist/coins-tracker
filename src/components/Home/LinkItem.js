import React from 'react';

const LinkItem = (props) => {

  const {title, link, mainLink} = props

  return (
    <div className='grid grid-cols-2'>
      <div>{title}</div>
      
      <div className='text-right'>
        <span className='hover:bg-slate-400 hover:rounded-lg hover:p-1 hover:cursor-pointer'>{link}</span>
      </div>
    </div>
  );
}
 
export default LinkItem;