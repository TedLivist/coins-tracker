import React, { useEffect, useState } from 'react';
import { getCoinChart } from '../helpers/getCoinChart';
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto'
Chart.register(CategoryScale)

const ChartDisplay = (props) => {
  
  const {chartCoin} = props
  const [chartData, setChartData] = useState([])

  const [chartLabels, setChartLabels] = useState([])

  useEffect(() => {
    if (chartCoin) {
      const fetchChart = async () => {
        const {timeStamps, prices} = await getCoinChart(chartCoin, 'usd', 1)
        setChartLabels(timeStamps)
        setChartData(prices)
      }
      fetchChart()
    }
  }, [chartCoin])

  const handleMonth = async (e) => {
    e.preventDefault()

    const {timeStamps, prices} = await getCoinChart(chartCoin, 'usd', 30)
    setChartLabels(timeStamps)
    setChartData(prices)
  }

  return (
    <>
      <button onClick={handleMonth}>Month</button>
      <div>
        <Line
          datasetIdKey='id'
          data={{
            labels: chartLabels,
            datasets: [
              {
                id: 1,
                label: 'Haha',
                data: chartData,
                fill: false,
                backgroundColor: [
                  'red',
                  'purple',
                ],
                height: 40,
                borderColor: 'yellow'
              }
            ]
          }}
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                labels: {
                  color: 'blue',
                  font: {
                    size: 14,
                  },
                },
              },
            },
            scales: {
              y: {
                ticks: {
                  color: 'blue',
                  font: {
                    size: 14,
                  },
                  stepSize: 5,
                  beginAtZero: true,
                },
              },
              x: {
                ticks: {
                  color: 'blue',
                  font: {
                    size: 14,
                  },
                  stepSize: 1,
                  beginAtZero: true,
                },
              },
            },
          }}
        />
      </div>
    </>
  );
}
 
export default ChartDisplay;