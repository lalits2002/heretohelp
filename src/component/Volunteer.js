import React from 'react';
import { StyleSheet, View } from 'react-native';

import Volunteer_Components from './home/volunteer-component';
import Tabscreen from './TabScreen/TabScreen';



const Volunteer = props => {

  return (
    <View style={{...styles.screen, ...props.style}}>{props.children}
    <View style={styles.container1} >
      <Volunteer_Components />
    </View>
      <View style={styles.container2}>
        <Tabscreen />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex:1,
    flexDirection: 'column',
   
  },
  container1: {
    flex: 10,
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#E5E5E5',
    paddingBottom: '4%'
  },
  container2: {
    flex: 1.5,
    flexDirection: 'column',
    justifyContent: 'center',
    // paddingTop: '7%'
    // backgroundColor: 'blue',
  },
});

export default Volunteer;

