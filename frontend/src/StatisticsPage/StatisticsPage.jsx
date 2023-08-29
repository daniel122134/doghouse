import React, { useContext } from 'react';
import { IsLoadingContext } from '../Dashboard/Dashboard';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale,BarElement } from 'chart.js';
import './StatisticsPage.css';
ChartJS.register(ArcElement, Tooltip, Legend,CategoryScale, LinearScale, BarElement);

function StatisticsPage() {
  const [isLoading] = useContext(IsLoadingContext);

  // Replace with actual statistics data
  const statisticsData = {
    breedDistribution: {
      labels: ['Golden Retriever', 'Labrador', 'Poodle', 'Other'],
      datasets: [
        {
          label: 'Breed Distribution',
          data: [40, 20, 15, 25], // Example data, replace with real data
          backgroundColor: ['rgba(255, 99, 132, 0.6)'],
        },
      ], 
    },
    toyDistribution: {
      labels: ['Tennis Ball', 'Frisbee', 'Plush Toy', 'Other'],
      datasets: [
        {
          label: 'Favorite Toy Distribution',
          data: [35, 20, 30, 15], // Example data, replace with real data
          backgroundColor: ['rgba(54, 162, 235, 0.6)'],
        },
      ],
    },
    ageDistribution: {
      labels: ['0-2', '3-5', '6-8', '9-11', '12+', 'Unknown'],
      datasets: [
        {
          label: 'Age Distribution',
          data: [20, 30, 15, 10, 20, 5], // Example data, replace with real data
          backgroundColor: ['rgba(75, 192, 192, 0.6)'],
        },
      ],
    },
    locationDistribution: {
      labels: ['Dog Park City', 'Pawsville', 'Woofington', 'Other'],
      datasets: [
        {
          label: 'Location Distribution',
          data: [50, 25, 15, 10], // Example data, replace with real data
          backgroundColor: ['rgba(153, 102, 255, 0.6)'],
        },
      ],
    },
    // ... (other statistics data)
  };

  return (
    <div className="statistics-page">
      <h1>Statistics</h1>
      <div className="chart">
        <h2>Breed Distribution</h2>
        <Pie data={statisticsData.breedDistribution} />
      </div>
      <div className="chart">
        <h2>Favorite Toy Distribution</h2>
        <Bar data={statisticsData.toyDistribution} />
      </div>
      <div className="chart">
        <h2>Age Distribution</h2>
        <Bar data={statisticsData.ageDistribution} />
      </div>
      <div className="chart">
        <h2>Location Distribution</h2>
        <Pie data={statisticsData.locationDistribution} />
      </div>
       ... (other charts) 
    </div>
  );
}

export default StatisticsPage;
