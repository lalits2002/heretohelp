import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

const Handy = props => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={{ ...styles.card, ...props.style }}>{props.children}
    <Text style={styles.txt} >
      HandyWork
    </Text>
    <Image 
    source={require('../h2h/s7.png')}
    style={styles.image}
    /> 
    </TouchableOpacity >
    

  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 6,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 10,
  },
  image: {
    position:'absolute',
    left:'41%',
    width: '60%',
    height: '95%',
  },
  txt: {
    margin: '7%',
  }
});

export default Handy;
