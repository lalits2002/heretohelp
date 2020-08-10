import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';


const Loadscreen = props => {

  

  return (
    <View style={{ ...styles.load, ...props.style }}>{props.children}
        <Image 
          source = {require('../h2h/load1.png')}
          style={styles.image}
        />
        <Text style={styles.intro}>
         Here 2 Help connects volunteers with people who need help completing different tasks.
        </Text>
        <View style={styles.button}>
          <Button title=" I'm Here to Volunteer "  onPress={() => props.navigation.navigate('Details')} />
          <Button title=" I need Help " onPress={() => props.navigation.navigate('Victim')} />
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
    bottom: '15%'
  },
  intro: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    padding: '6%'
  },
  button:{
    width: '70%',
  }
  
});

export default Loadscreen;