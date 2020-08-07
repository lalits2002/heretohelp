import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const Card = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}
    <Text style={styles.txt} >
      Socializing
    </Text>
    <Image 
    source={require('../h2h/s5.png')}
    style={styles.image}
    />
    </View>

  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 10,
    height: 150,
  },
  image: {
    position:'absolute',
    left:'50%',
    width: '48%',
    height: '100%',
  },
  txt: {
    margin: '7%',
  }
});

export default Card;
