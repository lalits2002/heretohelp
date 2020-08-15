import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Social from './Social';
import Pet from './Pet';
import Handy from './Handy';
import Transport from './Transport';
import Tabscreen from '../../TabScreen/TabScreen';



const Volunteer = props => {

  return (
    <View style={styles.screen}>{props.children}
      <View style={styles.container}>
        <View style={styles.head} >
          <Text style={styles.Heading}> What Help You Need With ? </Text>
        </View>
        <TouchableOpacity style={styles.social}>
          <Social  />
        </TouchableOpacity>

        <TouchableOpacity style={styles.social}>
          <Pet />
        </TouchableOpacity>

        <TouchableOpacity style={styles.social}>
          <Handy  />
        </TouchableOpacity>

        <TouchableOpacity style={styles.social}>
         <Transport />
        </TouchableOpacity>

      </View>
      <View style={styles.container2}>
        <Tabscreen />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex:1,
    flexDirection: 'column',
   
  },
  container: {
    flex: 10,
    justifyContent: 'center',
    flexDirection: 'column',
    // paddingTop: '8%',
    backgroundColor: '#E5E5E5',
    paddingBottom: '4%'
  },
  head: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '2%',
  },
  social:{
    marginHorizontal: '4%',
    marginVertical: '2.4%',
    height: '18.6%',
    
  },
  container2: {
    flex: 1,
    paddingTop: '7%',
    backgroundColor: 'white',
  },

  Heading: {
    fontSize: 22,
    fontWeight: '100',
    padding: '1%',
    
    },
});

export default Volunteer;

