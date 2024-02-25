import React from 'react';

const ProfilePicture = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heroText}>Welcome to your profile page!</h2>
      <img
        src={require('../Assets/profile.png')} // Replace with your image path
        alt="Profile"
        style={styles.profilePicture}
      />
    </div>
  );
};

const styles = {
  heroText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    flexDirection: 'column',
    marginTop: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: 20,
  },
};

export default ProfilePicture;
