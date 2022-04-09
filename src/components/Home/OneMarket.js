import React from 'react';

const OneMarket = (props) => {
  const {base, target} = props
  return (
    <div>
      {base} | {target}
    </div>
  );
}
 
export default OneMarket;