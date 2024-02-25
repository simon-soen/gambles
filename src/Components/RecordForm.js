import React, { useState } from 'react';

const RecordForm = () => {
  const [amountStake, setAmountStake] = useState(0);
  const [amountWon, setAmountWon] = useState(0);

  const handleSubmit = () => {
    // Store gambling habit data (e.g., using local storage or sending to server)
    // Update graph data or perform any necessary actions
    alert('Data Saved: Your gambling data has been saved successfully.');
    setAmountStake(0);
    setAmountWon(0);
  };

  return (
    <div style={styles.recordFormContainer}>
      <h2 style={styles.title}>Enter your gambling habits below:</h2>
      <div style={styles.formContainer}>
        <div style={styles.formItem}>
        <div style={styles.labelColumn}>
            <label htmlFor="amountStake" style={styles.label}>Amount spent today:</label>
        </div>
        <div style={styles.inputColumn}>
        <input
          type="number"
          id="amountStake"
          value={amountStake}
          onChange={(e) => setAmountStake(e.target.value)}
          placeholder="Amount spent today"
          style={styles.textInput}
        />
        </div>
        </div>
        <div style={styles.formItem}>
        <div style={styles.labelColumn}>
            <label htmlFor="amountWon" style={styles.label}>Amount Won today:</label>
          </div>
          <div style={styles.inputColumn}>
        <input
          type="number"
          id="amountWon"
          value={amountWon}
          onChange={(e) => setAmountWon(e.target.value)}
          placeholder="Amount Won today"
          style={styles.textInput}
        />
        </div>
        </div>
      </div>
      <button onClick={handleSubmit} style={styles.addButton}>
        Add
      </button>
    </div>
  );
};

const styles = {
    recordFormContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
      },
      addButton: {
        width: '60%',
        margin: '0 auto',
        display: 'block',
        backgroundColor: 'blue',
        color: '#fff',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        cursor: 'pointer',
      },
      textInput: {
        width: '100%',
        height: 40,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
      },
      label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      formContainer: {
        marginTop: 20,
        alignItems: 'center',
        flexDirection: 'column',
      },
      formItem: {
        marginBottom: 20,
        display: 'flex',
        alignItems: 'center',
      },
      labelColumn: {
        marginRight: 10,
      },
      inputColumn: {
        flex: 1,
      },
};

export default RecordForm;
