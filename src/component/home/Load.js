import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import Active_Button from '../../Items/Buttons/H2Hbuttons';
import Button2 from '../../Items/Buttons/button2';


const Loadscreen = props => {

  

  return (
    <View style={styles.load}>
        <Image 
          source = {require('../h2h/load1.png')}
          style={styles.image}
        />
        <Text style={styles.intro}>
         Here 2 Help connects volunteers with people who need help completing different tasks.
        </Text>
        <View style={styles.Button}>
          <Active_Button onPress={() => props.navigation.navigate('volunteer')} >
            I'm Here to Volunteer 
          </Active_Button>
        <View style={styles.space} />
          <Button2 onPress={() => props.navigation.navigate('Victim')} >
            I need Help 
          </Button2>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  load: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  image:{
    bottom: '13%'
  },
  intro: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    padding: '6%',
  },
  Button:{
    top: '15%',
  },
  space:{
    padding: 5
  }
  
});

export default Loadscreen;