import React from 'react';
import Welcome from '../Components/Welcome';
import HeroComponent from '../Components/HeroComponent';
import GamblingFactsComponent from '../Components/GamblingFactsComponent';
import OvercomeAddictionComponent from '../Components/OvercomeAddictionComponent';
import GamblingGraph from '../Components/GraphComponent';
import Video from '../Components/Video';

const HomeScreen = () => {

  // Replace 'Articles' with the actual screen name for your articles component
  const handleLearnMore = () => {
    // Your navigation logic here

  };

  return (
    <div style={styles.container}>
      <Welcome />
      {/* <Carousel /> */}
      <div style={styles.componentContainer} >
        <HeroComponent onPress={handleLearnMore} style={styles.component}/>
        <GamblingGraph />
        <GamblingFactsComponent 
        // style={styles.component}
        />
        <Video videoId="ABj7peI_R2M"/>
        
        <OvercomeAddictionComponent style={styles.component}/>
      </div>
    </div>
  );
};

const styles={
  container:{
    width:'100%',
    padding:'20px',
    boxSizing:'border-box',

  },
  componentContainer:{
    display:'flex',
    flexDirection:'column',
    alignItems: 'center'

  },
  component:{
    // width: '100%',
    // marginBottom:'10px',
  }
}
    

export default HomeScreen;
