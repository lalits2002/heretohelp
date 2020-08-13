import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Social from './Social';
import Pet from './Pet';
import Handy from './Handy';
import Transport from './Transport';



const Volunteer = props => {
  return (
    <View style={styles.screen}>{props.children}
      <View style={styles.container}>
      <Text style={styles.Heading}> What Can You Help With ? </Text>
        <Social style={styles.social}  />
        <Pet style={styles.social} />
        <Handy style={styles.social} />
        <Transport style={styles.social} />
      </View>
      <View style={styles.container2}>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex:1,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  Heading: {
  padding: '3.5%',
  marginVertical: '6%',
  fontSize: 29,
  fontWeight: '100',
  fontFamily: 'open-sans-bold',
  },
  container: {
    flex: 7,
    justifyContent: 'flex-end',
    paddingTop: '8%',
    backgroundColor: '#E5E5E5',
    paddingBottom: '4%'
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  social:{
    marginHorizontal: '3%',
    marginVertical:'2.5%',
    height: '18.6%',
  },
 
});

export default Volunteer;

