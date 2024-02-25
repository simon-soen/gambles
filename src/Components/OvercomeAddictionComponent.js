import React from 'react';

const OvercomeAddictionComponent = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Overcoming Gambling Addiction</h2>
      <div style={styles.stepContainer}>
        <h3 style={styles.stepTitle}>1. Acknowledge the Problem:</h3>
        <p style={styles.stepText}>Admit that gambling has become a problem and that you need help.</p>
      </div>
      <div style={styles.stepContainer}>
        <h3 style={styles.stepTitle}>2. Seek Support:</h3>
        <p style={styles.stepText}>Reach out to friends, family, or a support group for guidance and encouragement.</p>
      </div>
      <div style={styles.stepContainer}>
        <h3 style={styles.stepTitle}>3. Limit Access:</h3>
        <p style={styles.stepText}>Restrict access to gambling venues, websites, or apps to prevent relapse.</p>
      </div>
      <div style={styles.stepContainer}>
        <h3 style={styles.stepTitle}>4. Develop Coping Strategies:</h3>
        <p style={styles.stepText}>Find healthy alternatives to gambling such as exercise, hobbies, or therapy.</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    borderRadius: 10,
    marginTop: 20,
    padding: '50px',
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  stepContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 5,
    marginBottom: 20,
    maxWidth: 500,
    
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFD700',
    marginBottom: 5,
  },
  stepText: {
    fontSize: 16,
    color: '#fff',
  },
};

export default OvercomeAddictionComponent;
