import React from 'react';
import ProfilePicture from '../Components/ProfilePicture';
import RecordForm from '../Components/RecordForm';
import ToDoList from '../Components/ToDoList';

const ProfileScreen = () => {
    return (
        <div style={styles.container}>
            <ProfilePicture />
            <RecordForm />
            <ToDoList />
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column', // Set flex direction to column
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        marginTop: 20,
    },
};

export default ProfileScreen;
