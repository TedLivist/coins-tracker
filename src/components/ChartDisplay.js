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
  const [subject, setSubject] = useState('24 hrs')

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
    setSubject('Last Month')
  }

  const handleDaily = async (e) => {
    e.preventDefault()

    const {timeStamps, prices} = await getCoinChart(chartCoin, 'usd', 1)
    setChartLabels(timeStamps)
    setChartData(prices)
    setSubject('24 hrs')
  }

  return (
    <div className='mt-5'>
      <div className='text-center'>
        <div className={subject !== '24 hrs' ? 'hidden' : ''}>
          <button className='btn btn-primary' onClick={handleMonth}>Last Month</button>
        </div>
        <div className={subject !== 'Last Month' ? 'hidden' : ''}>
          <button className='hidden btn btn-primary' onClick={handleDaily}>24 hrs</button>
        </div>
      </div>
      <div className='overflow-auto'>
        <Line
          datasetIdKey='id'
          data={{
            labels: chartLabels,
            datasets: [
              {
                id: 1,
                label: subject,
                data: chartData,
                fill: true,
                height: 100,
                borderColor: 'yellow',
                borderWidth: '1',
                backgroundColor: [
                  'blue',
                  'teal'
                ],
                hoverBackgroundColor: 'red'
              }
            ]
          }}
          height='250'
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
                grid: {
                  display: false
                },
                ticks: {
                  color: 'blue',
                  font: {
                    size: 10,
                  },
                  stepSize: 8,
                  beginAtZero: true,
                },
              },
              x: {
                grid: {
                  display: false
                },
                ticks: {
                  color: 'blue',
                  font: {
                    size: 10,
                  },
                  stepSize: 1,
                  beginAtZero: true,
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}
 
export default ChartDisplay;