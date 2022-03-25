import React, { useEffect, useState } from 'react';
import { getCoinChart } from '../helpers/getCoinChart';
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto'
Chart.register(CategoryScale)

const ChartDisplay = (props) => {
  
  const {chartCoin} = props
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    if (chartCoin) {
      const fetchChart = async () => {
        const data = await getCoinChart(chartCoin, 'usd', 1)
        setChartData(data)
      }
      fetchChart()
    }
  })

  return (
    <div>
      <Line
        datasetIdKey='id'
        data={{
          labels: ['Jun', 'Jul', 'Aug'],
          datasets: [
            {
              id: 1,
              label: 'Haha',
              data: [5, 6.3, 7],
              fill: false,
              backgroundColor: [
                'red',
                'purple',
                'violet',
              ],
              borderColor: 'yellow'
            }
          ]
        }}
        height={400}
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
                stepSize: 1,
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
  );
}
 
export default ChartDisplay;