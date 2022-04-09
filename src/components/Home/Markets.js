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

        return (
          <OneMarket
            key={market.bid_ask_spread_percentage}
            base={base}
            target={target}
            name={market.market.name}
            price={market.converted_last.usd.toFixed(3)}
            volume={market.converted_volume.usd.toFixed(2)}
            trade_link = {market.trade_url}
          />
        )
      })}
    </div>
  );
}
 
export default Markets;