import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Card = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}
    <Image 
    source={require('../h2h/Socializing.png')}
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
    padding: 20,
    borderRadius: 10,
    height: 150,
  },
  image: {
    marginLeft: 20,
    width: '20%',
    height: '15%'
  },
});

export default Card;
