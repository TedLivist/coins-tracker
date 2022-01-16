import React from 'react';

const RetrievedCoin = (props) => {
  const { retrievedCoin } = props

  const handleTracking = () => {
    console.log('ahaha')
  }

  return (
    <div>
      <strong>Retir</strong> {retrievedCoin}
      { retrievedCoin ? <button onClick={handleTracking}>Track this coin</button> : '' }
    </div>
  );
}
 
export default RetrievedCoin;