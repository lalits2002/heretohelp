import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

import Social from './Social';
import Pet from './Pet';
import Handy from './Handy';
import Transport from './Transport';
import Tabscreen from '../TabScreen/TabScreen';



const Victim = props => {
  return (
    <View style={{...styles.screen, ...props.style}}>{props.children}
      <View style={styles.container}>
      <Text style={styles.Heading}> What Do You Need Help With ? </Text>
        <Social style={styles.social} />
        <Pet style={styles.social} />
        <Handy style={styles.social} />
        <Transport style={styles.social} />
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
  },
  Heading: {
  padding: '3.5%',
  
  fontSize: 20
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

