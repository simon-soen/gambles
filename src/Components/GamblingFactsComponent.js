import React from 'react';

const GamblingFactsComponent = () => {
  return (
   <div style={styles.container}>
    <h2 style={styles.title}>Gambling Facts</h2>
    <div style={styles.factContainer}>
      <div style={styles.fact}>
        <h3 style={styles.factTitle}>Fact 1:</h3>
        <p style={styles.factText}>Gambling can become addictive and lead to financial problems.</p>
      </div>
      <div style={styles.fact}>
        <h3 style={styles.factTitle}>Fact 2:</h3>
        <p style={styles.factText}>The odds are always in favor of the house, making it difficult to win in the long run.</p>
      </div>
      <div style={styles.fact}>
        <h3 style={styles.factTitle}>Fact 3:</h3>
        <p style={styles.factText}>Problem gambling can negatively impact relationships, work, and mental health.</p>
      </div>
    </div>
  </div>
  );
};

const styles = {
  container: {
    marginBottom: '10px',
  },
  title: {
    fontSize: '24px',
  },
  factContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  fact: {
    marginBottom: '15px',
    textAlign: 'center',
  },
  factTitle: {
    fontSize: '18px',
    marginBottom: '5px',
  },
  factText: {
    fontSize: '14px',
  },
};
export default GamblingFactsComponent;
