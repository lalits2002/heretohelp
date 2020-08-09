import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Card from './Social';
import Pet from './Pet';
import Handy from './Handy';
import Transport from './Transport';



const Victim = props => {
  return (
    <View style={{...styles.screen, ...props.style}}>{props.children}
      <View style={styles.container}>
      <Text style={styles.Heading}> What Do You Need Help With ? </Text>
        <Card style={styles.social} />
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
  },
  Heading: {
  padding: '3.5%',
  marginVertical: '6%',
  fontSize: 29,
  fontWeight: '100'
  },
  container: {
    flex: 6,
    justifyContent: 'flex-end',
    height: '85%',
    paddingTop: '8%',
    backgroundColor: '#E5E5E5',
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  social:{
    marginHorizontal: '3%',
    marginVertical:'2.5%',
    height: '18%',
  },
 
});

export default Victim;

