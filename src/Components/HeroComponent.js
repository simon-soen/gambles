import React from 'react'; // Import useHistory from react-router-dom
const HeroComponent = () => { // Get the history object from react-router-dom

  const onPress = () => {
  };

  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <h1 style={styles.title}>Gambling Awareness</h1>
        <p style={styles.subtitle}>Learn about responsible gambling and its impacts</p>
        <button style={styles.button} onClick={onPress}>
          <span style={styles.buttonText}>Learn More</span>
        </button>
      </div>
    </div>
  );
};


const styles = {
  background: {
    width: '100%',
    height: 200,
    backgroundColor: '#000',
    backgroundImage: `url(${require('../Assets/abc1.jpg')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginBottom: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    // textAlign: 'center',
    borderRadius: 5,
    // maxWidth: 500,
        display: 'flex',
        flexDirection: 'column',
        
      
  },
  title: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 10,
    fontFamily: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
    fontFamily: 'semibold',
  },
  button: {
    backgroundColor: '#FF4500',
    padding: '10px 20px',
    borderRadius: 25,
    border: 'none',
    cursor: 'pointer',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'bold',
  },
};

export default HeroComponent;
