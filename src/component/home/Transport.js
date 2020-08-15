import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Transport = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => {navigation.navigate('transport_screen')}} activeOpacity={0.8} style={{ ...styles.card, ...props.style }}>{props.children}
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
    elevation: 4,
    backgroundColor: 'white',
    borderRadius: 10,
    height: '100%',
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
