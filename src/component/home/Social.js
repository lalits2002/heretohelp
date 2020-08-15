import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

const Social = props => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={{ ...styles.Social, ...props.style }}>{props.children}
    <Text style={styles.txt} >
      Socializing
    </Text>
    <Image 
    source={require('../h2h/s5.png')}
    style={styles.image}
    />
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  Social: {
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
    alignSelf: 'flex-end',
    width:'50%',
    height: '100%',
  },
  txt: {
    margin: '7%',
  }
});

export default Social;
