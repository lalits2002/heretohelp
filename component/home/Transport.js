import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

const Transport = props => {
  return (
    <TouchableOpacity style={{ ...styles.card, ...props.style }}>{props.children}
    <Text style={styles.txt} >
       Transport
    </Text>
    <Image 
    source={require('../h2h/s8.png')}
    style={styles.image}
    />
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 2,
    backgroundColor: 'white',
    padding: 0,
    borderRadius: 10,
  },
  image: {
    position:'absolute',
    top:'3%',
    left:'45%',
    width: '50%',
    height: '92%',
  },
  txt: {
    margin: '7%',
  }
});

export default Transport;
