import React, { useEffect, useState } from 'react';
import { getCoinChart } from '../helpers/getCoinChart';
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto'
Chart.register(CategoryScale)

const ChartDisplay = (props) => {
  
  const {chartCoin} = props
  const [chartData, setChartData] = useState([])

  const [chartLabels, setChartLabels] = useState(['75min', '70min', '65min', '60min', '55min', '50min', '45min', '40min', '35min', '30min', '25min', '20min', '15min', '10min', '5min'])

  useEffect(() => {
    if (chartCoin) {
      const fetchChart = async () => {
        const data = await getCoinChart(chartCoin, 'usd', 1)
        setChartData(data)
      }
      fetchChart()
    }
  }, [chartCoin])

  const handleMonth = async (e) => {
    e.preventDefault()

    const days = await getCoinChart(chartCoin, 'usd', 30)
    const thirtyDayLabels = ['15hr', '14hr', '13hr', '12hr', '11hr', '10hr', '9hr', '8hr', '7hr', '6hr', '5hr', '4hr', '3hr', '2hr', '1hr']
    setChartLabels(thirtyDayLabels)
    setChartData(days)
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
                  'violet',
                ],
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
    </>
  );
}
 
export default ChartDisplay;