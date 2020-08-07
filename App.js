import React from 'react';
import { StyleSheet, View, } from 'react-native';

import { Ionicons, FontAwesome5 } from '@expo/vector-icons';


import Card from './home/Social';
import Pet from './home/Pet';
import Handy from './home/Handy';
import Transport from './home/Transport';


export default function App() {
  return (
    <View style={styles.container}>
      <Card style={styles.social} />
      <Pet style={styles.social} />
      <Handy style={styles.social} />
      <Transport style={styles.social} />

      <View style={styles.bottom}>
        <View>
          <Ionicons name="ios-home" size={60} color="black" 
          style={styles.home}
          />
        </View>
        {/* <View>
        <FontAwesome5 name="map-marked-alt" size={24} color="black" 
        style={styles.home} />
        </View> */}
        
       </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: '12%',
    backgroundColor: '#E5E5E5',
  },
  social:{
    marginHorizontal: '3%',
    marginVertical:'2.5%',
  },
  bottom: {
    flex:1,
    backgroundColor: '#EDEDED',
    top:'1.4%',
  },
});
