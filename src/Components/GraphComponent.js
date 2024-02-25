import React from 'react';
import { Line } from 'react-chartjs-2';
import "chart.js/auto";

const GamblingGraph = () => {
  const dummyData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Amount Won',
        data: [100, 150, 200, 250, 200, 300, 400, 350, 300, 200, 250, 300], // Example amounts won for each month
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        xAxisID: 'xAxis', // Specify x-axis scale ID for this dataset
      },
      {
        label: 'Amount Staked',
        data: [150, 200, 250, 300, 200, 250, 350, 300, 200, 150, 200, 250], // Example amounts staked for each month
        borderColor: 'rgba(192,75,192,1)',
        backgroundColor: 'rgba(192,75,192,0.2)',
        xAxisID: 'xAxis', // Specify x-axis scale ID for this dataset
      }
    ]
  };

  const options = {
    scales: {
      xAxis: {
        type: 'category', // Specify x-axis as category scale
      }
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Gambling Habits Over Time</h2>
      <div style={styles.graphContainer}>
        <Line data={dummyData} options={options} />
      </div>
    </div>
  );
};
const styles = {
  container: {
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
  },
  graphContainer: {
    width: '100%',
    maxWidth: '600px',
    height: '300px', // Adjust height as needed for mobile devices
    margin: '0 auto',
  },
};
export default GamblingGraph;
