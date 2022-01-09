import React from 'react';

const OneCoin = (props) => {

  const { coinId } = props

  return (
    <div>
      <p>{coinId}</p>
    </div>
  );
}
 
export default OneCoin;