import React, {useContext} from 'react';
import {IsLoadingContext} from '../Dashboard/Dashboard';
import {Bar, Pie} from 'react-chartjs-2';
import {ArcElement, BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Tooltip} from 'chart.js';
import './StatisticsPage.css';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

function StatisticsPage() {
  const [isLoading] = useContext(IsLoadingContext);

  // Replace with actual statistics data
  const statisticsData = {
    breedDistribution: {
      labels: ['Labrador', 'X-bred', 'GSD', 'Boxer', 'Golden Retriever', 'Pug', 'Other'],
      datasets: [
        {
          label: 'Breed Distribution',
          data: [27, 27, 9, 7, 5, 4, 21], // Example data, replace with real data
          backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)', 'rgba(54, 0, 0, 0.6)'],
        },
      ],
    },
    nameDistribution: {
      labels: ['SpiderMan', 'Thor', 'Sansa', 'Other'],
      datasets: [
        {
          label: 'Popular Dog Names in the US in 2019',
          data: [44, 12, 24, 20], // Example data, replace with real data
          backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(54, 162, 0, 0.6)', 'rgba(54, 0, 235, 0.6)', 'rgba(54, 0, 0, 0.6)'],
        },
      ],
    },
    AverageLifeSpan: {
      labels: ['Australian Shepherd', 'Beagle', 'Bulldog', 'Corgi', 'Duchshund', 'Freanch Bulldog'],
      datasets: [
        {
          label: 'Average Life Span',
          data: [12, 12, 6, 13, 13, 9], // Example data, replace with real data
          backgroundColor: ['rgba(75, 192, 192, 0.6)'],
        },
      ],
    },
    generationDistribution: {
      labels: ['All', 'Millenials', 'Gen-X', 'Boomers'],
      datasets: [
        {
          label: 'Dog Owner Among Generations in%',
          data: [48, 61, 52, 37], // Example data, replace with real data
          backgroundColor: ['rgba(153, 102, 255, 0.6)'],
        },
      ],
    },
  };

  return (
    <div>
      <h1>Statistics</h1>
      <div className="statistics-page">
        <div className="pie graph">
          <h2>Breed Distribution</h2>
          <Pie data={statisticsData.breedDistribution}/>
        </div>
        <div className="pie graph">
          <h2>Popular Dog Names in the US in 2019</h2>
          <Pie data={statisticsData.nameDistribution}/>
        </div>
        <div className="chart graph">
          <h2>Average Life Span Distribution</h2>
          <Bar data={statisticsData.AverageLifeSpan}/>
        </div>
        <div className="chart graph">
          <h2>Pet Owners by Generation</h2>
          <Bar data={statisticsData.generationDistribution}/>
        </div>
      </div>
      all statistics are from
      <a href="https://www.researchgate.net/figure/Distribution-of-dog-breeds-represented-in-the-study_fig4_294138981"> researchgate </a>
       and
      <a href="https://financesonline.com/number-of-dogs-in-the-us/"> financesonline</a>
    </div>
  );
}

export default StatisticsPage;
