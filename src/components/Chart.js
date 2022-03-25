import React, { useEffect } from 'react';
import { getCoinChart } from '../helpers/getCoinChart';

const Chart = (props) => {
  
  const {chartCoin} = props

  useEffect(() => {
    if (chartCoin) {
      const fetchChart = async () => {
        await getCoinChart(chartCoin, 'usd', 1)
      }
      fetchChart()
    }
  })

  return (
    <div>
      Haha
    </div>
  );
}
 
export default Chart;