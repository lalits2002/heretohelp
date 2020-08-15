import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

const Pet = props => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={{ ...styles.card, ...props.style }}>{props.children}
    <Text style={styles.txt} >
      pet
    </Text>
    <Image 
    source={require('../h2h/s6.png')}
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
    elevation: 6,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 10,
    height: '100%',
  },
  image: {
    position:'absolute',
    top:'5%',
    left:'44%',
    width: '65%',
    height: '100%',
  },
  txt: {
    margin: '7%',
  }
});

export default Pet;
