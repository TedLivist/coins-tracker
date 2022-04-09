import React from 'react';
import OneMarket from './OneMarket';

const Markets = (props) => {

  const {markets} = props

  console.log(markets)

  return (
    <div>
      {markets.map((market) => {
        let base = ''
        let target = ''
        if (market.base !== market.coin_id.toUpperCase()) {
          base = market.coin_id.toUpperCase()
        } else {
          base = market.base
        }

        if (market.target.length > 7) {
          target = market.target_coin_id.toUpperCase()
        } else {
          target = market.target
        }

        return <OneMarket key={market.market.name} base={base} target={target} />
      })}
    </div>
  );
}
 
export default Markets;