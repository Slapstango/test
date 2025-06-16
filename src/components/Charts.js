import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend);

function Charts({ data }) {
  if (!data.length) return <p>No data loaded.</p>;

  const dates = data.map(d => d.date || 'Unknown');
  const weather = data.map(d => d.weather || 'Unknown');

  const countBy = (arr) =>
    arr.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});

  const dateCounts = countBy(dates);
  const weatherCounts = countBy(weather);

  return (
    <div style={{ maxWidth: '800px' }}>
      <h4>Crashes by Date</h4>
      <Bar data={{
        labels: Object.keys(dateCounts),
        datasets: [{ label: 'Crashes', data: Object.values(dateCounts), backgroundColor: 'steelblue' }]
      }} />

      <h4 style={{ marginTop: '2rem' }}>Crashes by Weather</h4>
      <Pie data={{
        labels: Object.keys(weatherCounts),
        datasets: [{ data: Object.values(weatherCounts), backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'] }]
      }} />
    </div>
  );
}

export default Charts;